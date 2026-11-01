# GitHub-Based Leave Tracker Setup

## 🎉 Your leave tracker now uses GitHub as a database!

All team members will see the same data in real-time (refreshes every 30 seconds).

## Setup Instructions (For Each Team Member)

### Step 1: Create a GitHub Personal Access Token

Each person needs to create their own token (one-time setup):

1. Go to: https://github.com/settings/tokens/new
2. Click **"Generate new token (classic)"**
3. Give it a name: `Leave Tracker`
4. Set expiration: Choose **"No expiration"** or **"90 days"** (you'll need to renew it)
5. Select scopes: Check the **`repo`** checkbox (this gives full control of private repositories)
6. Scroll down and click **"Generate token"**
7. **IMPORTANT**: Copy the token immediately (it starts with `ghp_`)
   - You won't be able to see it again!
   - Save it somewhere safe

### Step 2: Configure the App

1. Open the leave tracker: https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/
2. Click the **⚙️ Settings** button in the top right
3. Paste your GitHub token
4. Click **"Save Token"**
5. The app will sync with GitHub automatically

## How It Works

### Adding Leaves/Holidays
- When anyone adds or deletes a leave/holiday, it saves to GitHub
- Everyone's browser will refresh the data every 30 seconds
- You can also click the **🔄 Refresh** button to update immediately

### Sync Status
- 🟢 Green dot: Synced successfully
- 🟡 Yellow dot: Currently syncing
- 🔴 Red dot: Error (check your token)

### Data Location
All data is stored in the file:
https://github.com/cappasahebtuppa-godaddy/team-leave-tracker/blob/main/data.json

## Troubleshooting

### "Sync error" message
- Check if your token is correct
- Make sure your token has `repo` scope
- Token might be expired - create a new one

### Changes not appearing
- Wait 30 seconds for auto-refresh
- Click the 🔄 Refresh button
- Check if you have the correct token

### "403 Forbidden" error
- Your token doesn't have the right permissions
- Go back to Step 1 and create a new token with `repo` scope

## Security Notes

⚠️ **Important:**
- Keep your token private - don't share it
- Tokens are stored only in your browser (not on any server)
- If you suspect your token is compromised, delete it from https://github.com/settings/tokens and create a new one

## Team Members
- Chetan Tuppad
- Subham Srivastava
- Afnaan Ladji
