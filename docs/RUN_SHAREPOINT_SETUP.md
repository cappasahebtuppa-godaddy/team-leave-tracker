# 🚀 Quick SharePoint Setup - Run This Script

## Step 1: Get Your SharePoint Site URL

You need your SharePoint site URL. Examples:
- `https://godaddy.sharepoint.com/sites/TeamTools`
- `https://godaddy.sharepoint.com/sites/Engineering`
- `https://yourcompany.sharepoint.com/sites/YourTeam`

**To find it:**
1. Go to https://www.office.com
2. Click SharePoint icon
3. Open your team site
4. Copy the URL from browser address bar

## Step 2: Run the PowerShell Script

### On Windows:

1. **Open PowerShell as Administrator**
   - Press Windows Key
   - Type "PowerShell"
   - Right-click "Windows PowerShell"
   - Select "Run as Administrator"

2. **Navigate to the script directory**
   ```powershell
   cd C:\path\to\team-leave-tracker
   ```

3. **Run the script** (replace with your SharePoint URL)
   ```powershell
   .\setup-sharepoint-lists.ps1 -SiteUrl "https://godaddy.sharepoint.com/sites/YourSite"
   ```

4. **To also pre-populate 2026 holidays:**
   ```powershell
   .\setup-sharepoint-lists.ps1 -SiteUrl "https://godaddy.sharepoint.com/sites/YourSite" -PrePopulateHolidays
   ```

### On Mac (if you have PowerShell Core installed):

1. **Install PowerShell Core** (if not installed)
   ```bash
   brew install --cask powershell
   ```

2. **Open PowerShell**
   ```bash
   pwsh
   ```

3. **Navigate to directory**
   ```powershell
   cd ~/team-leave-tracker
   ```

4. **Run the script**
   ```powershell
   ./setup-sharepoint-lists.ps1 -SiteUrl "https://godaddy.sharepoint.com/sites/YourSite" -PrePopulateHolidays
   ```

## What the Script Does

✅ Checks if PnP PowerShell module is installed (installs if needed)
✅ Connects to your SharePoint site (you'll sign in with Microsoft account)
✅ Creates **TeamLeaves** list with columns:
   - Person (text)
   - StartDate (date)
   - EndDate (date)
✅ Creates **PublicHolidays** list with columns:
   - HolidayName (text)
   - HolidayDate (date)
✅ Optionally pre-populates all 2026 holidays

## Expected Output

```
========================================
Team Leave Tracker - SharePoint Setup
========================================

Checking for PnP.PowerShell module...
✓ Module found

Connecting to SharePoint site: https://...
You will be prompted to sign in...

✓ Connected successfully

Creating 'TeamLeaves' list...
✓ List created
✓ Added 'Person' column
✓ Added 'StartDate' column
✓ Added 'EndDate' column
✓ TeamLeaves list setup complete!

Creating 'PublicHolidays' list...
✓ List created
✓ Added 'HolidayName' column
✓ Added 'HolidayDate' column
✓ PublicHolidays list setup complete!

Pre-populating 2026 public holidays...
  ✓ Added: New Year's Day
  ✓ Added: Republic Day
  ... (14 holidays total)
✓ All 2026 holidays added!

========================================
Setup Complete!
========================================
```

## Troubleshooting

### "Execution policy" error on Windows
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### "Cannot connect to SharePoint"
- Make sure you have permissions to create lists on the site
- Verify the site URL is correct
- Check you're signed in with the right Microsoft account

### "List already exists"
- Script will skip and report that lists already exist
- This is safe - it won't overwrite existing data

### "Module installation failed"
- Run PowerShell as Administrator
- Or install manually:
  ```powershell
  Install-Module -Name PnP.PowerShell -Scope CurrentUser -Force
  ```

## After Script Completes

1. **Verify in SharePoint:**
   - Go to your SharePoint site
   - Check that TeamLeaves and PublicHolidays lists appear in left navigation

2. **Note your Site URL** - you'll need it for the next step

3. **Continue to Azure AD App Registration:**
   - See SHAREPOINT_SETUP_GUIDE.md - Step 2

## Don't Have PowerShell Access?

Use the **Manual Method** in SHAREPOINT_SETUP_GUIDE.md:
- Step-by-step web UI instructions
- No scripts needed
- Takes about 10 minutes

---

**Ready?** Copy your SharePoint site URL and run the script!

Example:
```powershell
.\setup-sharepoint-lists.ps1 -SiteUrl "https://godaddy.sharepoint.com/sites/TeamTools" -PrePopulateHolidays
```
