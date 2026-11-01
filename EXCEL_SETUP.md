# SharePoint Excel Database Setup

This guide shows how to use your SharePoint Excel file as the database - **NO GitHub tokens needed!**

## ✅ Benefits

- **No GitHub tokens** - Team members just sign in with Microsoft
- **Familiar interface** - Can also edit directly in Excel
- **Already at GoDaddy** - Uses your existing SharePoint/OneDrive
- **Real-time sync** - Auto-refreshes every 30 seconds

## 📋 Prerequisites

- Your Excel file: `Perimeter Protection Leave Tracker.xlsx`
- Azure AD admin access (or ask IT to register the app)
- Microsoft 365 account

## 🚀 Setup Steps

### Step 1: Prepare Your Excel File

1. **Open your Excel file** at:
   https://secureservernet-my.sharepoint.com/:x:/r/personal/cappasahebtuppa_godaddy_com/Documents/Perimeter%20Protection%20Leave%20Tracker.xlsx

2. **Create two worksheets** (sheets) if they don't exist:
   - Sheet name: `Leaves`
   - Sheet name: `Holidays`

3. **In the "Leaves" sheet, add headers in Row 1:**
   | A | B | C |
   |---|---|---|
   | Person | StartDate | EndDate |

4. **In the "Holidays" sheet, add headers in Row 1:**
   | A | B |
   |---|---|
   | Name | Date |

5. **Save the file**

### Step 2: Register Azure AD Application

1. **Go to Azure Portal:**
   - Navigate to: https://portal.azure.com
   - Sign in with admin account

2. **Register new application:**
   - Go to **Azure Active Directory** → **App registrations**
   - Click **+ New registration**

3. **Configure registration:**
   - **Name**: `Leave Tracker Excel`
   - **Supported account types**: `Accounts in this organizational directory only (GoDaddy only)`
   - **Redirect URI**:
     - Platform: `Single-page application (SPA)`
     - URI: `https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/`
   - Click **Register**

4. **Copy these values** (you'll need them):
   - **Application (client) ID** (from Overview page)
   - Example: `12345678-1234-1234-1234-123456789012`

### Step 3: Configure API Permissions

1. **In your app registration, go to "API permissions"**

2. **Click "+ Add a permission"**

3. **Add Microsoft Graph permissions:**
   - Click **Microsoft Graph** → **Delegated permissions**
   - Select:
     - `User.Read`
     - `Files.ReadWrite`
   - Click **Add permissions**

4. **Grant admin consent:**
   - Click **"Grant admin consent for [Your Organization]"**
   - Click **Yes**
   - All permissions should show green checkmarks

### Step 4: Update the HTML File

1. **Open `index-excel.html` in a text editor**

2. **Find the CONFIG section** (around line 547):

```javascript
const CONFIG = {
    clientId: 'YOUR_CLIENT_ID', // Paste your Application (client) ID here
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: window.location.origin + window.location.pathname,
    
    userEmail: 'cappasahebtuppa@godaddy.com', // Your email (already correct)
    filePath: '/Perimeter Protection Leave Tracker.xlsx', // File path (already correct)
    
    worksheets: {
        leaves: 'Leaves',
        holidays: 'Holidays'
    }
};
```

3. **Update only the `clientId`** with your Application ID from Step 2.4

4. **Save the file**

### Step 5: Deploy to GitHub Pages

1. **Replace the current index.html:**
   ```bash
   cd ~/team-leave-tracker
   cp index-excel.html index.html
   ```

2. **Commit and push:**
   ```bash
   git add index.html
   git commit -m "Switch to Excel-based database

   - Use SharePoint Excel file as database
   - Microsoft 365 authentication
   - No GitHub tokens needed
   - Direct read/write to Excel via Microsoft Graph API
   
   Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
   
   git push
   ```

3. **Wait 1-2 minutes** for GitHub Pages to deploy

### Step 6: Test It!

1. **Open the app:**
   https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/

2. **Click "Sign in with Microsoft"**

3. **Sign in with your GoDaddy Microsoft account**

4. **Test adding a leave** - it should appear in your Excel file!

5. **Open the Excel file** and verify the data is there

## 👥 How Team Members Use It

1. **Share this link with your team:**
   ```
   https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/
   ```

2. **They click "Sign in with Microsoft"**

3. **Sign in with GoDaddy Microsoft account**

4. **Done!** No tokens, no setup, just sign in and use

## 🔄 How It Works

- **Sign In** → Uses Microsoft 365 credentials
- **Load Data** → Reads from Excel sheets via Microsoft Graph API
- **Add Leave** → Writes to Excel "Leaves" sheet
- **Auto-Sync** → Refreshes every 30 seconds
- **Direct Excel Access** → Team can also edit the Excel file directly

## 🎯 Excel File Structure

Your Excel file will look like this:

**Leaves Sheet:**
| Person | StartDate | EndDate |
|--------|-----------|---------|
| Chetan Tuppad | 2026-11-05 | 2026-11-06 |
| Afnaan Ladji | 2026-11-07 | 2026-11-07 |

**Holidays Sheet:**
| Name | Date |
|------|------|
| Diwali | 2026-11-08 |
| Christmas | 2026-12-25 |

## 🔧 Troubleshooting

### "Configuration values not set" error
- **Fix**: Update the `clientId` in `index-excel.html`

### "Login failed" error
- **Fix**: Check Azure AD app registration, ensure redirect URI is correct

### "File not found" error
- **Fix**: Make sure the Excel file exists at exactly this path:
  `/Perimeter Protection Leave Tracker.xlsx`
  (in your OneDrive Documents folder)

### "Failed to read sheet" error
- **Fix**: Make sure sheets are named exactly `Leaves` and `Holidays`
- Add the headers in Row 1 as shown above

### "403 Forbidden" error
- **Fix**: User doesn't have permission to the Excel file
- Share the Excel file with them

### Data not appearing
- **Fix**: Make sure sheets have the correct headers
- Click "Refresh" button
- Check browser console for errors

## 🔐 Security

- ✅ **Authentication**: Microsoft 365 credentials
- ✅ **Authorization**: Excel file permissions
- ✅ **Data**: Stored in your SharePoint/OneDrive
- ✅ **No secrets**: All auth handled by Azure AD
- ✅ **Secure**: HTTPS only

## 📊 Bonus: Edit Excel Directly

Team members can also:
1. Open the Excel file directly
2. Edit leaves/holidays
3. Save
4. Changes appear in the web app after auto-refresh!

## 🆘 Need Help?

**If you don't have Azure AD admin access:**
- Ask your IT team to register the app for you
- Give them this guide
- They only need to complete Steps 2 and 3

**Common Issues:**
- Make sure the Excel file name and path are exactly correct
- Sheet names must be exactly `Leaves` and `Holidays` (case-sensitive)
- Headers must be in Row 1

---

**That's it!** No more GitHub tokens - just Microsoft login and Excel! 🎉
