/* eslint-disable */
/**
 * ==============================================================================
 * GOOGLE APPS SCRIPT: Bulk Import Responses into Google Forms
 * ==============================================================================
 * 
 * HOW TO USE THIS SCRIPT:
 * -----------------------
 * 1. Open your Google Form in your browser.
 * 2. In the top right corner, click the three dots (⋮) and select "Script editor".
 * 3. Delete any code in the editor, and paste this entire script.
 * 4. Update the `csvUrl` or paste the CSV data into the `csvData` variable below.
 *    (Alternatively, link your Form to a Google Sheet, and use SheetApp to read the rows!)
 * 5. Click "Run" -> Select `submitBulkResponsesToForm`.
 * 6. Authorize the script when prompted by Google.
 * 7. Check your Google Form "Responses" tab — all responses will now be recorded natively!
 */

function submitBulkResponsesToForm() {
  var form = FormApp.getActiveForm();
  var items = form.getItems();
  
  Logger.log("Found " + items.length + " questions in the form.");
  
  // Mapping question titles to their Form item objects
  var itemMap = {};
  for (var i = 0; i < items.length; i++) {
    itemMap[items[i].getTitle().trim()] = items[i];
  }

  // Example CSV rows (or fetch via UrlFetchApp / Google Drive file)
  // Each array matches the headers:
  // [Timestamp, Student ID, Name, HeardOf, Visited, Familiarity, Interests, Doc, Methods, UseWebsite, 3DUsefulness, Content, Challenge, Contribute, Suggestions]
  
  var fileId = "PASTE_YOUR_GOOGLE_DRIVE_CSV_FILE_ID_HERE"; // If uploaded to Google Drive
  
  try {
    var file = DriveApp.getFileById(fileId);
    var csvContent = file.getBlob().getDataAsString();
    var data = Utilities.parseCsv(csvContent);
    var header = data[0];
    
    Logger.log("Submitting " + (data.length - 1) + " responses...");
    
    for (var r = 1; r < data.length; r++) {
      var row = data[r];
      var response = form.createResponse();
      
      for (var c = 1; c < header.length; c++) {
        var colTitle = header[c].trim();
        var cellValue = row[c] ? row[c].trim() : "";
        
        // Find matching item in form
        var formItem = itemMap[colTitle];
        if (!formItem || !cellValue) continue;
        
        var itemType = formItem.getType();
        
        if (itemType === FormApp.ItemType.TEXT) {
          response.withItemResponse(formItem.asTextItem().createResponse(cellValue));
        } else if (itemType === FormApp.ItemType.PARAGRAPH_TEXT) {
          response.withItemResponse(formItem.asParagraphTextItem().createResponse(cellValue));
        } else if (itemType === FormApp.ItemType.MULTIPLE_CHOICE) {
          response.withItemResponse(formItem.asMultipleChoiceItem().createResponse(cellValue));
        } else if (itemType === FormApp.ItemType.CHECKBOX) {
          var choices = cellValue.split(",").map(function(s) { return s.trim(); });
          response.withItemResponse(formItem.asCheckboxItem().createResponse(choices));
        } else if (itemType === FormApp.ItemType.SCALE) {
          var score = parseInt(cellValue, 10);
          if (!isNaN(score)) {
            response.withItemResponse(formItem.asScaleItem().createResponse(score));
          }
        } else if (itemType === FormApp.ItemType.LIST) {
          response.withItemResponse(formItem.asListItem().createResponse(cellValue));
        }
      }
      
      response.submit();
      Utilities.sleep(300); // 300ms pause between submissions to prevent throttling
    }
    
    Logger.log("Finished! Check the Responses tab in Google Forms.");
  } catch (e) {
    Logger.log("Error: " + e.toString());
  }
}
