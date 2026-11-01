# 🚀 GitHub Pages Deployment Guide

## 📦 Repository is Ready!

Your leave tracker is now set up as a Git repository at:
```
~/team-leave-tracker/
```

## 🔑 Step 1: Create GitHub Repository

### Option A: Using GitHub CLI (Easiest)

```bash
# Install GitHub CLI if you don't have it
brew install gh

# Login to GitHub
gh auth login

# Create the repository and push
cd ~/team-leave-tracker
gh repo create team-leave-tracker --public --source=. --push

# Enable GitHub Pages
gh repo edit --enable-pages --pages-branch main
```

### Option B: Using GitHub Web Interface

1. **Go to GitHub**: https://github.com/new
2. **Create new repository:**
   - Repository name: `team-leave-tracker`
   - Description: "Team leave management tracker"
   - Visibility: **Public** (or Private if you have GitHub Pro)
   - ❌ Do NOT initialize with README (we already have one)
3. **Click "Create repository"**

## 🔗 Step 2: Push to GitHub

After creating the repo on GitHub, run these commands:

```bash
cd ~/team-leave-tracker

# Add your GitHub repo as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/team-leave-tracker.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

Example:
```bash
git remote add origin https://github.com/chetantuppad/team-leave-tracker.git
```

## 🌐 Step 3: Enable GitHub Pages

### Method 1: Using Web Interface

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**:
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Method 2: Using GitHub CLI

```bash
gh repo edit --enable-pages --pages-branch main
```

## ✅ Step 4: Access Your Live Tracker

Your tracker will be available at:
```
https://YOUR_USERNAME.github.io/team-leave-tracker/
```

Example: `https://chetantuppad.github.io/team-leave-tracker/`

**Note:** It may take 1-2 minutes for the site to become available after enabling Pages.

## 📢 Step 5: Share with Your Team

Send this message to Chetan, Subham, and Afnaan:

```
🏖️ Team Leave Tracker is now live!

Access it here: https://YOUR_USERNAME.github.io/team-leave-tracker/

How to use:
1. Open the link in your browser
2. Bookmark it for easy access
3. Add your planned leaves (system ensures 1 person is always available)
4. Export data when you update it
5. Share the JSON file with the team via Teams/Email
6. Others import the file to sync

All 2026 public holidays are pre-loaded!

Questions? Check the GitHub repo: https://github.com/YOUR_USERNAME/team-leave-tracker
```

## 🔄 Making Updates

### To update the tracker in the future:

```bash
cd ~/team-leave-tracker

# Make your changes to index.html
# Then commit and push:

git add .
git commit -m "Description of changes"
git push

# GitHub Pages auto-deploys within 1-2 minutes
```

## 💾 Optional: Track Team Leave Data in Git

You can optionally commit the exported JSON files to the repo:

```bash
# After exporting data from the tracker:
cd ~/team-leave-tracker
git add team-leave-data.json
git commit -m "Updated team leaves - Nov 2026"
git push
```

Team members can then:
1. Visit: `https://github.com/YOUR_USERNAME/team-leave-tracker/blob/main/team-leave-data.json`
2. Click "Raw" button
3. Save the file
4. Import into their tracker

## 🔒 Security Note

- **Public repo**: Anyone can view the tracker and code
- **Private repo**: Only invited collaborators can access (requires GitHub Pro/Team)
- **Data**: Stored in each user's browser (localStorage) - not on GitHub unless you commit JSON files
- **Sensitive info**: Don't include personal/sensitive data in commit messages

## 🛠️ Troubleshooting

### "Permission denied" when pushing
```bash
# Use personal access token or SSH key
# Generate token: https://github.com/settings/tokens
```

### "GitHub Pages not deploying"
- Wait 2-3 minutes
- Check Settings → Pages for error messages
- Ensure `main` branch is selected
- Check Actions tab for build status

### "404 error on the live site"
- Verify the file is named `index.html` (not `leave-tracker.html`)
- Check capitalization in URL
- Clear browser cache

## 📊 Repository Structure

```
team-leave-tracker/
├── index.html           # The leave tracker app
├── README.md           # Documentation
├── DEPLOYMENT.md       # This file
├── .gitignore         # Git ignore rules
└── team-leave-data.json  # (Optional) Shared leave data
```

## 🎉 Next Steps

1. ✅ Create GitHub repository
2. ✅ Push code
3. ✅ Enable GitHub Pages
4. ✅ Share URL with team
5. 📱 Bookmark the live URL
6. 🎊 Start planning leaves!

---

Need help? Contact the team or check GitHub's documentation:
https://docs.github.com/en/pages
