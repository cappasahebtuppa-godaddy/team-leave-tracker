# 🏖️ Team Leave Tracker

A leave management tool for our team (Chetan Tuppad, Subham Srivastava, Afnaan Ladji) with **two versions available**.

## 🌐 Live Application

**Access the tracker here:** `https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/`

## 📦 Two Versions Available

### 1️⃣ Browser Storage Version (Current - Simple)
- Data stored in browser localStorage
- Manual export/import for team sync
- No authentication required
- **Perfect for**: Quick setup, small teams

### 2️⃣ SharePoint Version (Recommended - Enterprise)
- ✅ Centralized data in SharePoint Lists
- ✅ Automatic sync across all users
- ✅ Microsoft 365 authentication
- ✅ Enterprise-ready security
- **Perfect for**: Teams using Microsoft 365

📊 **See [COMPARISON.md](COMPARISON.md) for detailed comparison**

## ✨ Features

- ✅ **Coverage Protection** - Ensures at least 1 team member is always available
- ✅ **Pre-loaded 2026 Public Holidays** - All 14 holidays including Wellness Days, Diwali, Christmas
- ✅ **Visual Calendar** - Month-by-month view with color-coded leaves and holidays
- ✅ **Export/Import Data** - Share leave data with team members via JSON files
- ✅ **Statistics Dashboard** - Track total leaves, holidays, and coverage rate
- ✅ **Mobile-Responsive** - Works on desktop and mobile devices

## 🎯 How to Use

### Adding Your Leave

1. Open the tracker in your browser
2. Select your name from the "Team Member" dropdown
3. Choose start and end dates
4. Click "Add Leave"
   - System automatically validates that at least 1 person remains available
   - If validation fails, adjust your dates

### Sharing Updates with Team

1. After adding your leave, click **"💾 Export Data"**
2. Save the JSON file
3. Share it via:
   - Upload to SharePoint/Teams
   - Email to team members
   - Commit to this repo (recommended)

### Importing Team Updates

1. Download the latest JSON file (from repo, SharePoint, or email)
2. Click **"📥 Import Data"** in the tracker
3. Select the JSON file
4. Confirm import

## 📅 Pre-loaded 2026 Public Holidays

| Date | Holiday |
|------|---------|
| Jan 1, 2026 | New Year's Day |
| Jan 26, 2026 | Republic Day |
| Mar 13, 2026 | Wellness Day |
| Apr 3, 2026 | Good Friday |
| May 1, 2026 | May Day |
| May 15, 2026 | Wellness Day |
| May 27, 2026 | Bakrid / Eid al-Adha |
| Aug 14, 2026 | Wellness Day |
| Aug 15, 2026 | Independence Day |
| Oct 2, 2026 | Mahatma Gandhi Jayanti |
| Oct 9, 2026 | Wellness Day |
| Nov 8, 2026 | Diwali |
| Nov 9, 2026 | Diwali Break |
| Dec 25, 2026 | Christmas Day |

## 🚀 Quick Start

### Using Current Version (Browser Storage)

1. Open: `https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/`
2. Add your leaves
3. Export data and share with team
4. Others import to sync

### Upgrading to SharePoint Version

1. Follow [SHAREPOINT_SETUP_GUIDE.md](SHAREPOINT_SETUP_GUIDE.md)
2. Run `./deploy-sharepoint.sh`
3. Done! Automatic sync enabled

## 🔄 Data Synchronization

### Browser Storage Version
- Manual export/import JSON files
- Share via email/Teams/SharePoint
- See [DEPLOYMENT.md](DEPLOYMENT.md)

### SharePoint Version
- ✅ Automatic sync (no export/import)
- ✅ Real-time updates
- See [SHAREPOINT_SETUP_GUIDE.md](SHAREPOINT_SETUP_GUIDE.md)

## 🎨 Calendar Color Coding

- 🟡 **Yellow** - Public Holiday
- 🔵 **Blue** - Someone on leave (1 person)
- 🔴 **Red** - Two people away (critical coverage)

## 🛠️ Technical Details

- **Technology**: Pure HTML/CSS/JavaScript (no dependencies)
- **Storage**: Browser localStorage (client-side)
- **Data Format**: JSON for export/import
- **Hosting**: GitHub Pages (static site)

## 👥 Team Members

- Chetan Tuppad
- Subham Srivastava
- Afnaan Ladji

## 📝 Version History

- **v1.0** (Nov 2026) - Initial release with 2026 holidays and export/import functionality

---

Made with ❤️ for team collaboration
