/* eslint-disable */
/**
 * ==============================================================================
 * GOOGLE APPS SCRIPT: Bulk Import Responses into Google Forms (Resilient Version)
 * ==============================================================================
 *
 * This version uses SMART MATCHING:
 * 1. Automatically strips brackets like "[1–5]" that Google Forms adds to CSV headers.
 * 2. Matches choices case-insensitively with actual Google Form choices.
 * 3. Falls back to sequential question order so NO question is ever skipped.
 * 4. Logs detailed progress in the Execution Log.
 *
 * HOW TO USE:
 * -----------
 * 1. Open your Google Form in Google Chrome.
 * 2. Click the three dots (⋮) top-right -> "< > Script editor".
 * 3. Replace all code with this script.
 * 4. Ensure fileId = "1gdyxSX1fvgrB_-JI1LlMtEb7YNqVT2z6" (already set below).
 * 5. In the toolbar dropdown, select "submitBulkResponsesToForm" and click "Run".
 * 6. Authorize permissions when prompted by Google.
 * 7. Watch the Execution Log — all 127 responses will be submitted!
 */

var FILE_ID = "1gdyxSX1fvgrB_-JI1LlMtEb7YNqVT2z6"; // Google Drive CSV File ID

function cleanString(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace(/\[.*?\]/g, "") // remove [1–5] or [1-5]
    .replace(/[–—]/g, "-") // normalize dashes
    .replace(/['"“”‘’]/g, "") // remove quotes/apostrophes
    .replace(/[^a-z0-9]/g, "") // remove spaces and punctuation
    .trim();
}

/**
 * Run this function first to see how your Form questions match the CSV columns!
 */
function testFormConnection() {
  var form = FormApp.getActiveForm();
  var items = form.getItems();
  Logger.log("=== GOOGLE FORM QUESTIONS DETECTED: " + items.length + " ===");

  for (var i = 0; i < items.length; i++) {
    Logger.log(
      "[" + (i + 1) + "] Title: \"" + items[i].getTitle() + "\" | Type: " + items[i].getType()
    );
  }
}

function submitBulkResponsesToForm() {
  var form = FormApp.getActiveForm();
  var formItems = form.getItems();

  Logger.log("Found " + formItems.length + " questions in Google Form.");

  var file = DriveApp.getFileById(FILE_ID);
  var csvContent = file.getBlob().getDataAsString();
  var data = Utilities.parseCsv(csvContent);
  var header = data[0];

  Logger.log("Found " + (data.length - 1) + " responses in CSV.");
  Logger.log("Mapping columns to form questions...");

  // Build a smart mapping between CSV Column Index -> Form Item
  var colToItemMap = {};

  for (var c = 1; c < header.length; c++) {
    var rawHeader = header[c].trim();
    var cleanedHeader = cleanString(rawHeader);
    var matchedItem = null;

    // 1. Try exact cleaned title match
    for (var i = 0; i < formItems.length; i++) {
      var cleanedFormTitle = cleanString(formItems[i].getTitle());
      if (cleanedFormTitle === cleanedHeader) {
        matchedItem = formItems[i];
        break;
      }
    }

    // 2. Try substring match if not matched
    if (!matchedItem) {
      for (var i = 0; i < formItems.length; i++) {
        var cleanedFormTitle = cleanString(formItems[i].getTitle());
        if (
          cleanedFormTitle.indexOf(cleanedHeader) !== -1 ||
          cleanedHeader.indexOf(cleanedFormTitle) !== -1
        ) {
          matchedItem = formItems[i];
          break;
        }
      }
    }

    // 3. Fallback: Sequential order match (c - 1)
    if (!matchedItem && c - 1 < formItems.length) {
      matchedItem = formItems[c - 1];
    }

    if (matchedItem) {
      colToItemMap[c] = matchedItem;
      Logger.log(
        "✓ Mapped CSV Col " + c + " (\"" + rawHeader.substring(0, 30) + "...\") -> Form Question: \"" + matchedItem.getTitle() + "\" (" + matchedItem.getType() + ")"
      );
    } else {
      Logger.log("⚠ Could not map CSV Col " + c + ": \"" + rawHeader + "\"");
    }
  }

  // Submit each response
  var successCount = 0;

  for (var r = 1; r < data.length; r++) {
    var row = data[r];
    var studentName = row[2] ? row[2].trim() : "Row " + r;
    var formResponse = form.createResponse();

    for (var c = 1; c < header.length; c++) {
      var item = colToItemMap[c];
      var cellVal = row[c] ? row[c].trim() : "";

      if (!item || !cellVal) continue;

      try {
        var itemType = item.getType();

        if (itemType === FormApp.ItemType.TEXT) {
          formResponse.withItemResponse(item.asTextItem().createResponse(cellVal));
        } else if (itemType === FormApp.ItemType.PARAGRAPH_TEXT) {
          formResponse.withItemResponse(item.asParagraphTextItem().createResponse(cellVal));
        } else if (itemType === FormApp.ItemType.MULTIPLE_CHOICE) {
          var mcItem = item.asMultipleChoiceItem();
          var actualChoices = mcItem.getChoices();
          var matchedChoice = null;
          var cleanVal = cleanString(cellVal);

          // Find exact or case-insensitive choice
          for (var k = 0; k < actualChoices.length; k++) {
            if (cleanString(actualChoices[k].getValue()) === cleanVal) {
              matchedChoice = actualChoices[k].getValue();
              break;
            }
          }

          // If no direct choice match, use raw value or first choice
          if (!matchedChoice && actualChoices.length > 0) {
            for (var k = 0; k < actualChoices.length; k++) {
              if (cleanString(actualChoices[k].getValue()).indexOf(cleanVal) !== -1 || cleanVal.indexOf(cleanString(actualChoices[k].getValue())) !== -1) {
                matchedChoice = actualChoices[k].getValue();
                break;
              }
            }
          }

          formResponse.withItemResponse(mcItem.createResponse(matchedChoice || cellVal));
        } else if (itemType === FormApp.ItemType.CHECKBOX) {
          var cbItem = item.asCheckboxItem();
          var actualChoices = cbItem.getChoices().map(function (c) {
            return c.getValue();
          });
          var selected = [];

          for (var k = 0; k < actualChoices.length; k++) {
            var choiceClean = cleanString(actualChoices[k]);
            if (cleanString(cellVal).indexOf(choiceClean) !== -1) {
              selected.push(actualChoices[k]);
            }
          }

          // If delimiter matching didn't catch, try splitting by comma
          if (selected.length === 0) {
            var rawParts = cellVal.split(",");
            for (var p = 0; p < rawParts.length; p++) {
              var partClean = cleanString(rawParts[p]);
              for (var k = 0; k < actualChoices.length; k++) {
                if (cleanString(actualChoices[k]) === partClean) {
                  selected.push(actualChoices[k]);
                  break;
                }
              }
            }
          }

          if (selected.length > 0) {
            formResponse.withItemResponse(cbItem.createResponse(selected));
          }
        } else if (itemType === FormApp.ItemType.SCALE) {
          var scaleItem = item.asScaleItem();
          var num = parseInt(cellVal.replace(/[^0-9]/g, ""), 10);
          if (!isNaN(num)) {
            formResponse.withItemResponse(scaleItem.createResponse(num));
          }
        } else if (itemType === FormApp.ItemType.LIST) {
          var listItem = item.asListItem();
          formResponse.withItemResponse(listItem.createResponse(cellVal));
        }
      } catch (err) {
        Logger.log("Warning on row " + r + ", col " + c + " (" + item.getTitle() + "): " + err.toString());
      }
    }

    try {
      formResponse.submit();
      successCount++;
      if (r % 10 === 0 || r === data.length - 1) {
        Logger.log("[" + r + "/" + (data.length - 1) + "] Submitted for: " + studentName);
      }
      Utilities.sleep(250); // 250ms pause to ensure smooth submission
    } catch (submitErr) {
      Logger.log("Failed to submit row " + r + ": " + submitErr.toString());
    }
  }

  Logger.log("\n==========================================");
  Logger.log("🎉 SUCCESS! Submitted " + successCount + " of " + (data.length - 1) + " responses!");
  Logger.log("Check the 'Responses' tab in your Google Form.");
  Logger.log("==========================================");
}
