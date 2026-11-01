# Slack Bot Setup for Weekly Leave Alerts

This bot sends a summary of planned leaves every **Monday at 9:00 AM IST** to your Slack channel.

## 📋 What the Bot Does

Every Monday morning, the bot will post a message with:
- ✅ All planned leaves for the current week
- 🎉 Public holidays this week
- ⚠️ Coverage alerts if 2+ people are away on the same day
- 📊 Link to the full leave tracker

## 🔧 Setup Instructions

### Step 1: Create a Slack Incoming Webhook

1. Go to your Slack workspace
2. Visit: https://api.slack.com/messaging/webhooks
3. Click **"Create your Slack app"**
4. Choose **"From scratch"**
5. Give it a name: `Leave Tracker Bot`
6. Select your workspace
7. Click **"Create App"**

### Step 2: Enable Incoming Webhooks

1. In your app settings, click **"Incoming Webhooks"** (left sidebar)
2. Toggle **"Activate Incoming Webhooks"** to ON
3. Click **"Add New Webhook to Workspace"**
4. Select the channel where you want alerts (e.g., `#perimeter-protection` or `#team-leaves`)
5. Click **"Allow"**
6. **Copy the Webhook URL** (looks like: `https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX`)

### Step 3: Add Webhook to GitHub Secrets

1. Go to your GitHub repository: https://github.com/cappasahebtuppa-godaddy/team-leave-tracker
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Name: `SLACK_WEBHOOK_URL`
5. Value: Paste the Webhook URL from Step 2
6. Click **"Add secret"**

### Step 4: Test the Bot

You can test the bot manually without waiting for Monday:

1. Go to: https://github.com/cappasahebtuppa-godaddy/team-leave-tracker/actions/workflows/weekly-leave-alert.yml
2. Click **"Run workflow"** → **"Run workflow"**
3. Check your Slack channel in a few seconds!

## ⏰ Schedule

The bot runs every **Monday at 9:00 AM IST** (3:30 AM UTC).

To change the time, edit `.github/workflows/weekly-leave-alert.yml`:

```yaml
schedule:
  # Current: Monday 9:00 AM IST
  - cron: '30 3 * * 1'
  
  # Examples:
  # Monday 8:00 AM IST: - cron: '30 2 * * 1'
  # Monday 10:00 AM IST: - cron: '30 4 * * 1'
  # Daily 9:00 AM IST: - cron: '30 3 * * *'
```

**Cron format:** `minute hour day month day-of-week`
- Day of week: 0 = Sunday, 1 = Monday, ... 6 = Saturday

## 📊 Example Slack Message

```
🏖️ Weekly Leave Report - Perimeter Protection
Week: 01/11/2026 - 07/11/2026

─────────────────────────────

🌴 Planned Leaves:

• Chetan Tuppad — 05/11/2026 - 06/11/2026
• Afnaan Ladji — 07/11/2026

─────────────────────────────

🎉 Public Holidays:

• Diwali — 08/11/2026

─────────────────────────────

✅ Coverage: At least 2 team members available all week

─────────────────────────────

📊 View Leave Tracker
```

## 🔍 Troubleshooting

### Bot not running
- Check that the GitHub Action is enabled
- Verify the cron schedule is correct
- Check Actions tab for errors

### No message in Slack
- Verify the Webhook URL is correct in GitHub Secrets
- Check the Slack channel matches where you installed the webhook
- Look at the GitHub Actions logs for errors

### Wrong timezone
- The schedule uses UTC time
- IST = UTC + 5:30
- Adjust the cron schedule accordingly

## 🎨 Customization

To customize the message format, edit `.github/scripts/send-leave-alert.js`:
- Change the emoji or text
- Add more details
- Modify the coverage logic
- Add @mentions for people on leave

## 🚀 Done!

Your Slack bot is now ready. It will automatically send leave summaries every Monday morning! 🎉
