"""
==============================================================================
PYTHON SCRIPT: Automated HTTP POST Submission to Google Forms
==============================================================================

HOW THIS WORKS:
1. Every public Google Form has an endpoint:
   https://docs.google.com/forms/d/e/<YOUR_FORM_ID>/formResponse
2. To find your question Entry IDs:
   - Open your Google Form in Google Drive.
   - Click the 3 dots (⋮) in the top-right -> select "Get pre-filled link".
   - Fill in simple test answers in each field (e.g., "ID", "Name", etc.).
   - Click "Get link" and copy the link.
   - The link will look like:
     https://docs.google.com/forms/d/e/.../viewform?entry.123456=ID&entry.789012=Name
   - The numbers after `entry.` are your entry IDs!
3. Paste your FORM_URL and map your ENTRY_IDS in the dictionary below.
4. Run `python submit_to_google_forms.py`.
   Each student row from gharapuri_google_forms_responses.csv will be POSTed
   directly to Google Forms and show up in the live Google Forms dashboard!
"""

import csv
import time
import requests

# 1. Replace with your Google Form URL ending in /formResponse
FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/formResponse"

# 2. Map CSV column headers to the entry IDs from your pre-filled link
ENTRY_MAPPING = {
    "Student ID": "entry.111111111",
    "Name": "entry.222222222",
    "Have you heard of the Elephanta Caves before?": "entry.333333333",
    "Have you ever visited the Elephanta Caves?": "entry.444444444",
    "How familiar are you with the history and cultural significance of Elephanta Caves? [1–5]": "entry.555555555",
    "Which aspects of Elephanta interest you the most?": "entry.666666666",
    "Do you think important information about local heritage should be digitally documented?": "entry.777777777",
    "Which digital methods could help preserve heritage?": "entry.888888888",
    "Would you use a website that allowed you to explore Elephanta's history, photographs, stories and 3D documentation in one place?": "entry.999999999",
    "How useful would a 3D virtual exploration of the caves be to you? [1–5]": "entry.101010101",
    "What type of heritage information would you most like to find on such a website?": "entry.121212121",
    "In your opinion, what is the biggest challenge in preserving heritage sites?": "entry.131313131",
    "Would you contribute photographs, memories or stories about a heritage site to a digital archive?": "entry.141414141",
    "Any suggestions for making digital heritage more interesting or accessible?": "entry.151515151",
}

CSV_FILE = "gharapuri_google_forms_responses.csv"


def submit_responses():
    if "YOUR_FORM_ID_HERE" in FORM_URL:
        print("[!] Please configure your FORM_URL and ENTRY_MAPPING in the script first.")
        print("[!] See instructions at the top of the file on getting pre-filled entry IDs.")
        return

    with open(CSV_FILE, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    print(f"[*] Found {len(rows)} responses in {CSV_FILE}.")
    success_count = 0

    for idx, row in enumerate(rows, 1):
        payload = {}
        for col_name, entry_id in ENTRY_MAPPING.items():
            val = row.get(col_name, "").strip()
            if val:
                # If question is checkbox/multi-select, Google Forms accepts multiple values with same key
                if "," in val and col_name in [
                    "Which aspects of Elephanta interest you the most?",
                    "Which digital methods could help preserve heritage?",
                    "What type of heritage information would you most like to find on such a website?",
                ]:
                    payload[entry_id] = [x.strip() for x in val.split(",") if x.strip()]
                else:
                    payload[entry_id] = val

        try:
            res = requests.post(FORM_URL, data=payload, timeout=10)
            if res.status_code == 200:
                print(f"[{idx}/{len(rows)}] Successfully submitted: {row.get('Name')} ({row.get('Student ID')})")
                success_count += 1
            else:
                print(f"[{idx}/{len(rows)}] Status {res.status_code} for {row.get('Name')}")
        except Exception as e:
            print(f"[!] Error on row {idx}: {e}")

        # Sleep 500ms to avoid Google rate-limiting
        time.sleep(0.5)

    print(f"\n[✓] Completed: {success_count}/{len(rows)} responses successfully posted to Google Forms!")


if __name__ == "__main__":
    submit_responses()
