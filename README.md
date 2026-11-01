# 🏖️ Perimeter Protection Leave Tracker

> A collaborative leave management system for the Perimeter Protection team with GitHub-based data storage, comp-off tracking, and automated Slack notifications.

**🌐 Live App:** [https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/](https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/)

**👥 Team:** Chetan Tuppad • Subham Srivastava • Afnaan Ladji

---

## 🎯 Overview

A lightweight, secure leave tracker that uses GitHub as a database. Team members can view and add leaves, manage comp-offs, and track public holidays—all synchronized through a GitHub repository with personal access token authentication.

### Why GitHub as a Database?

- ✅ **No Server Required** - Fully static site hosted on GitHub Pages
- ✅ **Git Audit Trail** - Every change is tracked with who/when/what
- ✅ **Simple Authentication** - Uses GitHub Personal Access Tokens
- ✅ **Free & Reliable** - GitHub's infrastructure, zero cost
- ✅ **Real-time Sync** - Auto-refresh every 30 seconds
- ✅ **Version Control** - Full history of all changes

---

## ✨ Features

### 📋 Leave Management
- ✅ **Visual Calendar** - Month-by-month view with color-coded team member leaves
- ✅ **Add/Delete Leaves** - Simple forms for leave management
- ✅ **Coverage Protection** - Ensures at least 1 team member is always available
- ✅ **Color Coding** - Each team member has their own color (Blue/Green/Pink)
- ✅ **Date Range Support** - Single day or multi-day leave ranges
- ✅ **IST Timezone** - All dates in Indian Standard Time

### 💼 Comp-Off Management
- ✅ **Track Comp-Offs** - Earned, used, and balance for each team member
- ✅ **Add Earned Comp-Offs** - Record comp-offs with reason (e.g., weekend work)
- ✅ **Use Comp-Offs** - Mark leaves as comp-off to auto-deduct from balance
- ✅ **Visual Indicators** - Purple badges on comp-off leaves (💼 icon)
- ✅ **History Tracking** - Full audit trail of earned/used/refunded comp-offs
- ✅ **Balance Validation** - Prevents using more comp-offs than available
- ✅ **Auto-Refund** - Deleting a comp-off leave restores the balance

### 🎉 Holiday Management
- ✅ **Pre-loaded 2026 Holidays** - All 14 Indian holidays included
- ✅ **Add Custom Holidays** - Team-specific holidays
- ✅ **Holiday Calendar View** - Yellow highlighting on calendar

### 📊 Dashboard & Stats
- ✅ **Real-time Statistics** - Total leaves, holidays, coverage rate
- ✅ **Comp-Off Balance Cards** - At-a-glance view of each member's balance
- ✅ **Auto-sync Status** - Visual indicator (🟢 synced / 🟡 syncing / 🔴 error)

### 🔔 Automated Slack Alerts
- ✅ **Weekly Leave Summary** - Every Monday at 9 AM IST
- ✅ **Coverage Warnings** - Alerts when multiple people are on leave
- ✅ **Formatted Messages** - Clean, readable Slack notifications

### 🔒 Security
- ✅ **XSS Protection** - Input sanitization to prevent script injection
- ✅ **Token-Based Auth** - GitHub PAT tokens (never shared)
- ✅ **HTTPS Only** - Secure communication with GitHub API
- ✅ **No Third-Party Servers** - Data only in GitHub, tokens only in browser

### 📱 User Experience
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **One-Time Setup** - Configure token once, use forever
- ✅ **Auto-Refresh** - Data updates every 30 seconds
- ✅ **Manual Refresh** - Click 🔄 to update immediately
- ✅ **Easy Token Setup** - Pre-filled GitHub link for token creation

---

## 🚀 Quick Start

### For Team Members (Using the App)

1. **Open the app:** [https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/](https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/)

2. **Create GitHub Token** (one-time, 5 minutes):
   - Click the pre-filled link in the setup modal
   - Or go to: https://github.com/settings/tokens/new?description=Leave%20Tracker&scopes=repo
   - Select **"No expiration"** ⚠️
   - Click **"Generate token"**
   - Copy the token (starts with `ghp_`)

3. **Configure the App**:
   - Paste your token in the Settings modal
   - Click **"Save Token"**
   - Done! 🎉

4. **Start Using**:
   - Add leaves with the "Add Planned Leave" form
   - Manage comp-offs with the "Add Comp-Off" form
   - View calendar for team availability

📖 **Full Guide:** [TEAM_SETUP_GUIDE.md](TEAM_SETUP_GUIDE.md)

---

## 📋 How It Works

### Architecture

```
┌─────────────────┐
│  GitHub Pages   │ ← Static website hosting
│   (Frontend)    │
└────────┬────────┘
         │
         ↓ HTTPS (with PAT token)
┌─────────────────┐
│   GitHub API    │ ← Authentication & data access
└────────┬────────┘
         │
         ↓ Read/Write
┌─────────────────┐
│   data.json     │ ← Database (in this repo)
│  (main branch)  │
└─────────────────┘
```

### Data Storage

All leave data is stored in [`data.json`](data.json):

```json
{
  "leaves": [
    {
      "person": "Chetan Tuppad",
      "startDate": "2026-11-15",
      "endDate": "2026-11-16",
      "isCompOff": false
    }
  ],
  "compOffs": {
    "Chetan Tuppad": {
      "earned": 2.0,
      "used": 0.0,
      "balance": 2.0,
      "history": [...]
    }
  },
  "holidays": [...]
}
```

### Sync Mechanism

1. **Auto-refresh** - Every 30 seconds, fetches latest data from GitHub
2. **On Save** - Pushes changes to GitHub via API
3. **Conflict Resolution** - Uses GitHub's SHA-based versioning
4. **Real-time Updates** - Everyone sees changes within 30 seconds

---

## 🎨 Visual Guide

### Calendar Color Coding
- 🔵 **Blue** - Chetan Tuppad on leave
- 🟢 **Green** - Subham Srivastava on leave
- 🩷 **Pink** - Afnaan Ladji on leave
- 🟡 **Yellow** - Public Holiday
- 🔴 **Red Stripes** - Two people on leave (critical coverage)
- 💼 **Briefcase Icon** - Comp-off leave

### Comp-Off Badges
- **Purple "COMP-OFF" badge** on leave list entries
- **💼 icon** next to names in calendar view
- **Balance cards** showing earned/used/balance for each member

---

## 🛠️ Technology Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Pure HTML/CSS/JavaScript (no frameworks) |
| **Database** | GitHub (data.json file) |
| **API** | GitHub REST API v3 |
| **Authentication** | GitHub Personal Access Tokens |
| **Hosting** | GitHub Pages (free static hosting) |
| **Automation** | GitHub Actions (Slack bot) |
| **Notifications** | Slack Incoming Webhooks |

**Why No Framework?**
- ⚡ Fast loading (no build step)
- 🎯 Simple to understand and modify
- 📦 No dependencies or npm modules
- 🔧 Easy to maintain

---

## 📅 Pre-loaded 2026 Holidays

| Date | Holiday | Type |
|------|---------|------|
| Jan 1 | New Year's Day | National |
| Jan 26 | Republic Day | National |
| Mar 13 | Wellness Day | Wellness |
| Apr 3 | Good Friday | National |
| May 1 | May Day | National |
| May 15 | Wellness Day | Wellness |
| May 27 | Bakrid / Eid al-Adha | Festival |
| Aug 14 | Wellness Day | Wellness |
| Aug 15 | Independence Day | National |
| Oct 2 | Mahatma Gandhi Jayanti | National |
| Oct 9 | Wellness Day | Wellness |
| Nov 8 | Diwali | Festival |
| Nov 9 | Diwali Break | Company |
| Dec 25 | Christmas Day | National |

---

## 🔒 Security

### Implemented Security Measures
- ✅ **XSS Protection** - All user input is HTML-escaped
- ✅ **Token Security** - Tokens stored in browser localStorage only
- ✅ **HTTPS Only** - All API calls over secure connection
- ✅ **Input Validation** - Dropdowns and date pickers prevent invalid data
- ✅ **No Server-Side Storage** - Tokens never sent to third parties

### Best Practices
- 🔐 Each team member uses their own unique PAT token
- 🔐 Never share tokens via Slack/email/screenshots
- 🔐 Use "No expiration" only on trusted work devices
- 🔐 Revoke tokens immediately if compromised
- 🔐 Enable 2FA on GitHub accounts

📖 **Full Security Guide:** [SECURITY.md](SECURITY.md)

---

## 🤖 Slack Bot Setup

The repo includes a GitHub Actions workflow for weekly leave alerts.

### Prerequisites
1. Slack Incoming Webhook URL
2. Repository secret: `SLACK_WEBHOOK_URL`

### Configuration
- **Schedule:** Every Monday at 9:00 AM IST
- **Message:** Lists upcoming leaves, holidays, and coverage warnings
- **File:** `.github/workflows/weekly-leave-alert.yml`

📖 **Setup Guide:** [SLACK_BOT_SETUP.md](SLACK_BOT_SETUP.md)

---

## 📁 Repository Structure

```
team-leave-tracker/
├── index.html                      # Main application (single-page app)
├── data.json                       # Database file (leave data)
├── README.md                       # This file
├── SECURITY.md                     # Security documentation
├── TEAM_SETUP_GUIDE.md            # Quick start for team members
├── SETUP_INSTRUCTIONS.md          # Detailed setup guide
├── SLACK_BOT_SETUP.md             # Slack integration guide
├── .github/
│   ├── workflows/
│   │   └── weekly-leave-alert.yml # Slack notification workflow
│   └── scripts/
│       └── send-leave-alert.js    # Slack message formatter
└── archive/
    ├── index-excel.html           # SharePoint/Excel version (deprecated)
    ├── create-excel-template.py   # Excel template generator
    └── EXCEL_SETUP.md             # Excel integration docs
```

---

## 🔧 For Developers

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/cappasahebtuppa-godaddy/team-leave-tracker.git
   cd team-leave-tracker
   ```

2. **Open in browser**
   ```bash
   open index.html
   # or
   python -m http.server 8000
   ```

3. **Configure GitHub token**
   - Create a PAT with `repo` scope
   - Add to Settings in the app

### Adding Features

The entire app is in a single `index.html` file with three sections:
1. **HTML** - Structure and forms
2. **CSS** (in `<style>`) - Styling and layout
3. **JavaScript** (in `<script>`) - Logic and GitHub API calls

Key functions:
- `fetchFromGitHub()` - Load data from GitHub
- `saveToGitHub()` - Save data to GitHub
- `renderCalendar()` - Draw the calendar view
- `updateCompOffDisplay()` - Update comp-off balance cards

### Making Changes

```bash
# 1. Edit index.html
code index.html

# 2. Test locally
open index.html

# 3. Commit & push
git add index.html
git commit -m "Your change description"
git push origin main

# 4. GitHub Pages auto-deploys (2-3 minutes)
```

---

## 🐛 Troubleshooting

### "Sync error" message
- ✅ Check if token is correct (Settings → re-enter token)
- ✅ Verify token has `repo` scope
- ✅ Token might be expired (create new one)

### Changes not appearing
- ✅ Wait 30 seconds for auto-refresh
- ✅ Click 🔄 Refresh button manually
- ✅ Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### "403 Forbidden" error
- ✅ Token doesn't have `repo` permission
- ✅ You're not added as repository collaborator
- ✅ Create new token with correct scope

### Comp-off not deducting
- ✅ Check if "Use Comp-Off" checkbox was checked
- ✅ Verify balance was sufficient at time of leave creation
- ✅ Refresh page and check updated balance

### Token expired or lost
1. Go to https://github.com/settings/tokens
2. Delete old token
3. Create new token with `repo` scope
4. Update token in app Settings

---

## 📞 Support

### Documentation
- **[Team Setup Guide](TEAM_SETUP_GUIDE.md)** - Quick start for users
- **[Setup Instructions](SETUP_INSTRUCTIONS.md)** - Detailed configuration
- **[Security Guide](SECURITY.md)** - Security best practices
- **[Slack Bot Setup](SLACK_BOT_SETUP.md)** - Notification configuration

### Team Contacts
- **Chetan Tuppad** - Repository owner
- **Subham Srivastava** - Team member
- **Afnaan Ladji** - Team member

### Reporting Issues
1. Create an issue in this repository
2. Include: what happened, expected behavior, screenshots
3. For security issues, contact repository owner directly

---

## 🎯 Roadmap

### ✅ Completed
- [x] Basic leave tracking
- [x] GitHub-based data storage
- [x] Color-coded calendar
- [x] Comp-off management system
- [x] XSS security protection
- [x] Slack weekly notifications
- [x] Mobile responsive design
- [x] IST timezone support

### 🚧 Potential Future Enhancements
- [ ] Leave approval workflow
- [ ] Export to Excel/CSV
- [ ] Email notifications
- [ ] Multi-team support
- [ ] Leave balance tracking
- [ ] Dark mode theme
- [ ] Calendar export (iCal)

---

## 📄 License

Internal use only - GoDaddy Perimeter Protection Team

---

## 🎉 Quick Links

- 🌐 **[View Live App →](https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/)**
- 📖 **[Team Setup Guide →](TEAM_SETUP_GUIDE.md)**
- 🔒 **[Security Documentation →](SECURITY.md)**
- 💬 **[Slack Bot Setup →](SLACK_BOT_SETUP.md)**
- 🐛 **[Report an Issue →](https://github.com/cappasahebtuppa-godaddy/team-leave-tracker/issues)**

---

**Made with ❤️ by the Perimeter Protection Team for better team collaboration**

*Last Updated: November 2, 2026*
