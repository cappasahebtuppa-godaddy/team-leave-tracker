# 📝 Manual SharePoint Lists Setup (5 minutes)

Quick manual method to create SharePoint lists through the web interface.

## Step 1: Navigate to SharePoint

1. Open browser: **https://secureservernet.sharepoint.com**
2. Sign in with your Microsoft 365 account

## Step 2: Create TeamLeaves List

1. **Click "+ New"** → **List**
2. **Choose "Blank list"**
3. Name: `TeamLeaves` → Click **Create**
4. **Add columns** (click "+ Add column"):
   - **Person** → Single line of text
   - **StartDate** → Date and time (date only, no time)
   - **EndDate** → Date and time (date only, no time)

## Step 3: Create PublicHolidays List

1. **Click "+ New"** → **List**
2. **Choose "Blank list"**
3. Name: `PublicHolidays` → Click **Create**
4. **Add columns**:
   - **HolidayName** → Single line of text
   - **HolidayDate** → Date and time (date only, no time)

## Step 4: Add 2026 Holidays (Optional)

Click **+ New** in PublicHolidays list for each:

| Title | HolidayDate |
|-------|-------------|
| New Year's Day | 1/1/2026 |
| Republic Day | 1/26/2026 |
| Wellness Day | 3/13/2026 |
| Good Friday | 4/3/2026 |
| May Day | 5/1/2026 |
| Wellness Day | 5/15/2026 |
| Bakrid / Eid al-Adha | 5/27/2026 |
| Wellness Day | 8/14/2026 |
| Independence Day | 8/15/2026 |
| Mahatma Gandhi Jayanti | 10/2/2026 |
| Wellness Day | 10/9/2026 |
| Diwali | 11/8/2026 |
| Diwali Break | 11/9/2026 |
| Christmas Day | 12/25/2026 |

## ✅ Done!

**Next:** [Register Azure AD App](SHAREPOINT_SETUP_GUIDE.md#step-2-register-azure-ad-application)
