# 🏖️ Team Leave Tracker

A simple, client-side leave management tool for our team (Chetan Tuppad, Subham Srivastava, Afnaan Ladji).

## 🌐 Live Application

**Access the tracker here:** `https://YOUR_USERNAME.github.io/team-leave-tracker/`

*(Update this URL after deploying to GitHub Pages)*

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

## 🔄 Data Synchronization

### Recommended Workflow

1. **Add your leave** in the tracker
2. **Export the data** as JSON
3. **Commit the JSON file** to this repo:
   ```bash
   git add team-leave-data.json
   git commit -m "Updated leaves"
   git push
   ```
4. **Team members pull** the latest data:
   - Download `team-leave-data.json` from the repo
   - Import into their tracker

### Alternative: SharePoint

- Upload exported JSON files to SharePoint
- Team downloads and imports from there

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
