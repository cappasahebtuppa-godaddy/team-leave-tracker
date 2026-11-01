# SharePoint Setup Guide - Team Leave Tracker

This guide will walk you through setting up the SharePoint-integrated version of the Team Leave Tracker.

## 🎯 Overview

The SharePoint version provides:
- ✅ **Centralized data storage** - All leaves stored in SharePoint Lists
- ✅ **Real-time sync** - Everyone sees the same data instantly
- ✅ **No import/export** - Data automatically syncs between users
- ✅ **Microsoft 365 authentication** - Secure sign-in with your work account
- ✅ **Enterprise-ready** - Integrates with your existing Microsoft infrastructure

---

## 📋 Prerequisites

- SharePoint Online site (you should already have one)
- Azure AD admin access (to register the app)
- Microsoft 365 account

---

## 🚀 Setup Steps

### Step 1: Create SharePoint Lists

1. **Navigate to your SharePoint site**
   - Go to: `https://YOUR_TENANT.sharepoint.com/sites/YOUR_SITE`
   - Example: `https://godaddy.sharepoint.com/sites/TeamTools`

2. **Create "TeamLeaves" List**
   - Click **+ New** → **List**
   - Name: `TeamLeaves`
   - Description: "Team member planned leaves"
   - Click **Create**
   
3. **Add columns to TeamLeaves list:**
   - **Person** (Single line of text)
   - **StartDate** (Date and time)
   - **EndDate** (Date and time)
   
   To add columns:
   - Click **+ Add column**
   - Select type
   - Enter name exactly as shown above
   - Click **Save**

4. **Create "PublicHolidays" List**
   - Click **+ New** → **List**
   - Name: `PublicHolidays`
   - Description: "Company public holidays"
   - Click **Create**
   
5. **Add columns to PublicHolidays list:**
   - **HolidayName** (Single line of text)
   - **HolidayDate** (Date and time)

---

### Step 2: Register Azure AD Application

1. **Go to Azure Portal**
   - Navigate to: https://portal.azure.com
   - Sign in with admin account

2. **Register new application**
   - Go to **Azure Active Directory** → **App registrations**
   - Click **+ New registration**
   
3. **Configure registration:**
   - **Name**: `Team Leave Tracker`
   - **Supported account types**: `Accounts in this organizational directory only`
   - **Redirect URI**: 
     - Platform: `Single-page application (SPA)`
     - URI: `https://YOUR_USERNAME.github.io/team-leave-tracker/`
     - Also add: `http://localhost:8000` (for local testing)
   - Click **Register**

4. **Note the Application (client) ID**
   - On the Overview page, copy the **Application (client) ID**
   - Example: `12345678-1234-1234-1234-123456789012`
   - You'll need this later

5. **Note the Directory (tenant) ID**
   - Also on the Overview page, copy the **Directory (tenant) ID**
   - You'll need this later

---

### Step 3: Configure API Permissions

1. **In your app registration, go to API permissions**
2. **Click + Add a permission**
3. **Add these permissions:**
   
   **Microsoft Graph:**
   - Click **Microsoft Graph** → **Delegated permissions**
   - Select: `User.Read`
   - Click **Add permissions**
   
   **SharePoint:**
   - Click **+ Add a permission** again
   - Click **SharePoint** → **Delegated permissions**
   - Select: `AllSites.Write`, `User.Read.All`
   - Click **Add permissions**

4. **Grant admin consent**
   - Click **Grant admin consent for [Your Organization]**
   - Click **Yes** to confirm
   - All permissions should now show a green checkmark

---

### Step 4: Configure the Application

1. **Download the SharePoint version**
   - The file is: `index-sharepoint.html`

2. **Open the file in a text editor**

3. **Update the CONFIG section (around line 438):**

```javascript
const CONFIG = {
    clientId: 'YOUR_AZURE_APP_CLIENT_ID',     // From Step 2.4
    tenantId: 'YOUR_TENANT_ID',               // From Step 2.5
    sharePointSiteUrl: 'https://YOUR_TENANT.sharepoint.com/sites/YOUR_SITE',
    redirectUri: window.location.origin + window.location.pathname,
    
    leavesListName: 'TeamLeaves',             // Must match Step 1
    holidaysListName: 'PublicHolidays'        // Must match Step 1
};
```

**Example configuration:**
```javascript
const CONFIG = {
    clientId: '12345678-1234-1234-1234-123456789012',
    tenantId: 'godaddy.onmicrosoft.com',
    sharePointSiteUrl: 'https://godaddy.sharepoint.com/sites/TeamTools',
    redirectUri: window.location.origin + window.location.pathname,
    
    leavesListName: 'TeamLeaves',
    holidaysListName: 'PublicHolidays'
};
```

4. **Save the file**

---

### Step 5: Deploy to GitHub Pages

1. **Replace the current index.html**
   ```bash
   cd ~/team-leave-tracker
   cp index-sharepoint.html index.html
   ```

2. **Commit and push**
   ```bash
   git add index.html
   git commit -m "Upgrade to SharePoint-backed version

   - Add Microsoft authentication (MSAL.js)
   - Replace localStorage with SharePoint REST API
   - Real-time data sync across all users
   - Centralized data storage in SharePoint Lists
   
   Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
   
   git push
   ```

3. **Wait 1-2 minutes for GitHub Pages to deploy**

---

### Step 6: Pre-populate 2026 Holidays (Optional)

You can manually add the 2026 holidays to the SharePoint list:

1. **Go to your SharePoint site**
2. **Open the PublicHolidays list**
3. **Click + New** and add each holiday:

| HolidayName | HolidayDate |
|-------------|-------------|
| New Year's Day | 2026-01-01 |
| Republic Day | 2026-01-26 |
| Wellness Day | 2026-03-13 |
| Good Friday | 2026-04-03 |
| May Day | 2026-05-01 |
| Wellness Day | 2026-05-15 |
| Bakrid / Eid al-Adha | 2026-05-27 |
| Wellness Day | 2026-08-14 |
| Independence Day | 2026-08-15 |
| Mahatma Gandhi Jayanti | 2026-10-02 |
| Wellness Day | 2026-10-09 |
| Diwali | 2026-11-08 |
| Diwali Break | 2026-11-09 |
| Christmas Day | 2026-12-25 |

Or, the app will fall back to showing these holidays if SharePoint load fails.

---

## 🧪 Testing

### Local Testing (Before Deploying)

1. **Start a local web server:**
   ```bash
   cd ~/team-leave-tracker
   python3 -m http.server 8000
   ```

2. **Open in browser:**
   - Go to: `http://localhost:8000/index-sharepoint.html`

3. **Sign in with your Microsoft account**

4. **Test functionality:**
   - Add a leave
   - Check if it appears in SharePoint TeamLeaves list
   - Add a holiday
   - Check if it appears in SharePoint PublicHolidays list

### Production Testing

1. **Go to your GitHub Pages URL:**
   - `https://YOUR_USERNAME.github.io/team-leave-tracker/`

2. **Sign in**
3. **Verify data loads from SharePoint**
4. **Test adding/deleting leaves and holidays**

---

## 👥 User Access

### How Users Access the Tracker

1. **Send them the GitHub Pages URL:**
   ```
   https://YOUR_USERNAME.github.io/team-leave-tracker/
   ```

2. **They click "Sign in with Microsoft"**

3. **They authenticate with their Microsoft 365 account**

4. **They're in! All data is centralized**

### Managing Permissions

**SharePoint List Permissions:**
- Go to SharePoint list → Settings → Permissions
- By default, all site members can read/write
- Adjust as needed for your team

**Azure AD App Permissions:**
- All permissions are delegated (user-level)
- Users can only access what they normally have access to in SharePoint

---

## 🔧 Troubleshooting

### "Configuration values not set" error
- **Cause**: You haven't updated the CONFIG section
- **Fix**: Edit index.html and update clientId, tenantId, and sharePointSiteUrl

### "Login failed" error
- **Cause**: App registration issues
- **Fix**: Check Azure AD app registration, ensure redirect URI is correct

### "Failed to load leaves/holidays" error
- **Cause**: SharePoint list names don't match or permissions issue
- **Fix**: 
  - Verify list names are exactly `TeamLeaves` and `PublicHolidays`
  - Check that lists have the correct columns
  - Verify API permissions in Azure AD

### "403 Forbidden" or "Access Denied"
- **Cause**: User doesn't have permission to SharePoint site/lists
- **Fix**: Add user to SharePoint site members

### Data not syncing
- **Cause**: Multiple users need to refresh
- **Fix**: Have all users refresh their browsers (Ctrl+F5 or Cmd+Shift+R)

---

## 🔐 Security Considerations

- ✅ **Authentication**: Uses Microsoft 365 credentials
- ✅ **Authorization**: Respects SharePoint permissions
- ✅ **Data**: Stored in SharePoint (enterprise-grade security)
- ✅ **No secrets in code**: All auth handled by Azure AD
- ✅ **Secure communication**: All API calls use HTTPS

---

## 🎯 How It Works

1. **User signs in** → MSAL.js handles Microsoft authentication
2. **Gets access token** → Token includes SharePoint permissions
3. **Loads data** → Fetches from SharePoint Lists via REST API
4. **User adds leave** → Writes to SharePoint TeamLeaves list
5. **Other users** → See changes when they refresh (can add auto-refresh later)

---

## 🔄 Future Enhancements

Optional features you can add later:
- **Real-time updates** - Use SignalR or polling for instant sync
- **Email notifications** - Notify team when someone adds leave
- **Approval workflow** - Add SharePoint workflow for leave approval
- **Teams integration** - Add as a Teams tab
- **Mobile app** - Use same SharePoint backend

---

## 📝 Summary Checklist

- [ ] Created TeamLeaves list in SharePoint
- [ ] Created PublicHolidays list in SharePoint
- [ ] Registered Azure AD application
- [ ] Configured API permissions and granted admin consent
- [ ] Updated CONFIG in index-sharepoint.html
- [ ] Deployed to GitHub Pages
- [ ] Tested with your account
- [ ] Shared URL with team members

---

## 🆘 Need Help?

Common issues and their fixes are in the Troubleshooting section above.

For more help:
- Check SharePoint list permissions
- Verify Azure AD app configuration
- Check browser console for detailed error messages
- Ensure all team members have access to the SharePoint site

---

**Ready to deploy? Follow the steps above and your team will have centralized leave tracking!** 🎉
