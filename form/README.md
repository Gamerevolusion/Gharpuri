# Gharapuri CEP Survey Responses & Google Forms Automation

This directory contains the response data for the **Semester 5 Community Engagement Project (CEP)** student survey on Elephanta Caves digital preservation, along with scripts to automate submitting these responses directly into Google Forms.

---

## 📁 Files in this Directory

| File | Description |
| :--- | :--- |
| `gharapuri_google_forms_responses.csv` | **127 student responses** containing timestamps, student IDs, full names, Likert ratings, preferred digital methods, preservation challenges, and qualitative feedback. |
| `google_apps_script.js` | **Google Apps Script** to natively import all CSV rows into your Google Form so they populate the native Google Forms "Responses" tab and automatic summary charts. |
| `submit_to_google_forms.py` | **Python HTTP submitter** that posts each row directly to your Google Form's public submission endpoint (`/formResponse`). |

---

## 🤖 How to Automate These Responses to Show Up in Google Forms

Google Forms does not have a simple "upload CSV" button by default. However, there are **two easy, automated methods** to make all 127 responses appear natively in your Google Form:

### Method 1: Google Apps Script (Recommended — Fastest & 100% Native)

This method uses Google's built-in Apps Script engine directly inside your form.

1. **Open your Google Form** in Google Chrome or your browser.
2. Click the **three dots menu (⋮)** in the top-right corner next to the "Send" button.
3. Select **`<> Script editor`** (Extensions → Apps Script).
4. Delete any sample code in the code editor, and copy-paste the code from [`google_apps_script.js`](./google_apps_script.js).
5. Upload `gharapuri_google_forms_responses.csv` to your Google Drive.
6. Right-click the uploaded CSV in Google Drive → Get link / Copy ID (the string of letters/numbers in the URL between `/d/` and `/view`).
7. Paste this file ID into `var fileId = "..."` in the script.
8. Click the **Run** button at the top (select `submitBulkResponsesToForm`).
9. Grant Google permissions when prompted.
10. **Done!** Open your Google Form and check the **Responses** tab — you will see all 127 responses with Google's native pie charts and summary analytics!

---

### Method 2: Python HTTP POST Automation (No Google Drive Upload Needed)

This method simulates real form submissions over HTTP directly from your terminal.

1. **Get your Form's Field Entry IDs**:
   - In Google Forms, click the **three dots (⋮)** → **"Get pre-filled link"**.
   - Type simple dummy words in each field (e.g. `TEST_ID`, `TEST_NAME`, `TEST_ANSWER`).
   - Click **"Get link"** at the bottom and copy the link.
   - The link will look like:
     ```
     https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?entry.18472910=TEST_ID&entry.9281726=TEST_NAME...
     ```
   - Each `entry.XXXXXXX` corresponds to one question in your form.

2. **Configure the script**:
   - Open [`submit_to_google_forms.py`](./submit_to_google_forms.py).
   - Change `FORM_URL` to your form link, replacing `/viewform` with `/formResponse`.
   - Update `ENTRY_MAPPING` with your `entry.XXXXXXX` numbers.

3. **Run the script**:
   ```bash
   pip install requests
   python submit_to_google_forms.py
   ```
   The script will post each response with a 0.5s delay and log progress. All responses will show up live in your Google Form.

---

### Method 3: Linked Google Sheet (For Spreadsheet Analysis)

If you only need the responses in the spreadsheet attached to the Form:
1. In Google Forms, go to the **Responses** tab.
2. Click **"Link to Sheets"** (the green Google Sheets icon).
3. Open the linked Google Sheet.
4. Click **File → Import → Upload** → select `gharapuri_google_forms_responses.csv`.
5. Choose **"Append to current sheet"**.
