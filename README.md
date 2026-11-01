# 🏖️ Team Leave Tracker

> A leave management system for teams with centralized SharePoint integration

**Live App:** [https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/](https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/)

**Team:** Chetan Tuppad • Subham Srivastava • Afnaan Ladji

---

## 🎯 Quick Start

### Current Version (Browser Storage)
- ✅ Already live at the URL above
- ✅ Works immediately, no setup
- ⚠️ Requires manual export/import to sync between users

### Upgrade to SharePoint (Recommended)
- ✅ Centralized data storage
- ✅ Automatic sync for all team members
- ✅ Microsoft 365 authentication
- ⏱️ 30-60 minutes setup time

**[📚 Setup SharePoint Version →](docs/SHAREPOINT_SETUP_GUIDE.md)**

---

## 📖 Documentation

### Setup Guides
- **[SharePoint Setup Guide](docs/SHAREPOINT_SETUP_GUIDE.md)** - Complete setup instructions
- **[Manual SharePoint Setup](docs/MANUAL_SHAREPOINT_SETUP.md)** - Quick 5-minute manual method
- **[Quick Start Guide](docs/NEXT_STEPS.md)** - TL;DR version with checklist

### Reference
- **[Browser vs SharePoint Comparison](docs/COMPARISON.md)** - Feature comparison
- **[Deployment Guide (Browser Version)](docs/DEPLOYMENT.md)** - Original deployment

### Scripts
- `setup-sharepoint-lists.ps1` - Automated SharePoint list creation
- `deploy-sharepoint.sh` - Deploy SharePoint version to GitHub Pages
- `deploy.sh` - Deploy browser storage version

---

## ✨ Features

### Core Features
- ✅ **Coverage Protection** - Ensures at least 1 team member is always available
- ✅ **Visual Calendar** - Month-by-month view with color coding
- ✅ **Pre-loaded 2026 Holidays** - All 14 Indian holidays included
- ✅ **Statistics Dashboard** - Track total leaves and coverage rate
- ✅ **Mobile Responsive** - Works on all devices

### SharePoint Version Adds
- ✅ **Centralized Data** - All data in SharePoint Lists
- ✅ **Automatic Sync** - No export/import needed
- ✅ **Microsoft 365 Auth** - Secure authentication
- ✅ **Real-time Updates** - Everyone sees the same data
- ✅ **Audit Trail** - SharePoint versioning built-in

---

## 🚀 Deployment Status

| Version | Status | URL |
|---------|--------|-----|
| Browser Storage | ✅ Live | [View App](https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/) |
| SharePoint | ⏳ Setup Required | [Setup Guide](docs/SHAREPOINT_SETUP_GUIDE.md) |

---

## 📋 SharePoint Setup Checklist

Follow these steps to enable SharePoint integration:

- [ ] **Step 1:** [Create SharePoint Lists](docs/MANUAL_SHAREPOINT_SETUP.md) (5 min)
  - [ ] TeamLeaves list with Person, StartDate, EndDate columns
  - [ ] PublicHolidays list with HolidayName, HolidayDate columns

- [ ] **Step 2:** [Register Azure AD App](docs/SHAREPOINT_SETUP_GUIDE.md#step-2-register-azure-ad-application) (15 min)
  - [ ] Get client ID and tenant ID
  - [ ] Configure redirect URIs

- [ ] **Step 3:** [Configure API Permissions](docs/SHAREPOINT_SETUP_GUIDE.md#step-3-configure-api-permissions) (10 min)
  - [ ] Add Microsoft Graph permissions
  - [ ] Add SharePoint permissions
  - [ ] Grant admin consent

- [ ] **Step 4:** [Update Configuration](docs/SHAREPOINT_SETUP_GUIDE.md#step-4-configure-the-application) (5 min)
  - [ ] Edit `index-sharepoint.html`
  - [ ] Update CONFIG section

- [ ] **Step 5:** [Deploy](docs/NEXT_STEPS.md) (2 min)
  - [ ] Run `./deploy-sharepoint.sh`

**Total Time:** 30-60 minutes

---

## 🎨 Calendar Color Coding

- 🟡 **Yellow** - Public Holiday
- 🔵 **Blue** - Someone on leave (1 person)
- 🔴 **Red** - Two people away (critical coverage)

---

## 📅 Pre-loaded 2026 Holidays

| Date | Holiday |
|------|---------|
| Jan 1 | New Year's Day |
| Jan 26 | Republic Day |
| Mar 13 | Wellness Day |
| Apr 3 | Good Friday |
| May 1 | May Day |
| May 15 | Wellness Day |
| May 27 | Bakrid / Eid al-Adha |
| Aug 14 | Wellness Day |
| Aug 15 | Independence Day |
| Oct 2 | Mahatma Gandhi Jayanti |
| Oct 9 | Wellness Day |
| Nov 8 | Diwali |
| Nov 9 | Diwali Break |
| Dec 25 | Christmas Day |

---

## 🔧 Technology Stack

- **Frontend:** Pure HTML/CSS/JavaScript (no framework)
- **Authentication:** MSAL.js (Microsoft Authentication Library)
- **Backend:** SharePoint REST API
- **Hosting:** GitHub Pages (static site)
- **Storage:** 
  - Browser version: localStorage
  - SharePoint version: SharePoint Lists

---

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

---

## 🤝 Contributing

This is a private team tracker. For issues or enhancements:
1. Create an issue in this repository
2. Contact team members directly

---

## 📞 Support

### For Setup Help
- See [SHAREPOINT_SETUP_GUIDE.md](docs/SHAREPOINT_SETUP_GUIDE.md) troubleshooting section
- Check [NEXT_STEPS.md](docs/NEXT_STEPS.md) for quick reference

### For Issues
- Browser console errors
- SharePoint connection issues
- Authentication problems

### Team Contacts
- Chetan Tuppad
- Subham Srivastava
- Afnaan Ladji

---

## 📄 License

Internal use only - GoDaddy team project

---

## 🎉 Quick Links

- **[View Live App →](https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/)**
- **[Setup SharePoint →](docs/SHAREPOINT_SETUP_GUIDE.md)**
- **[Compare Versions →](docs/COMPARISON.md)**
- **[Manual Setup (5 min) →](docs/MANUAL_SHAREPOINT_SETUP.md)**

---

Made with ❤️ for better team collaboration
