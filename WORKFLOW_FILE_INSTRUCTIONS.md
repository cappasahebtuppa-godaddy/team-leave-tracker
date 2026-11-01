# Manual Workflow File Creation

Due to GitHub permissions, the workflow file needs to be created directly on GitHub.

## Quick Setup (2 minutes)

1. Go to: https://github.com/cappasahebtuppa-godaddy/team-leave-tracker/new/main?filename=.github/workflows/weekly-leave-alert.yml

2. Paste this content:

```yaml
name: Weekly Leave Alert

on:
  schedule:
    # Runs every Monday at 9:00 AM IST (3:30 AM UTC)
    - cron: '30 3 * * 1'
  workflow_dispatch: # Allows manual trigger for testing

jobs:
  send-leave-alert:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Send Slack notification
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
        run: node .github/scripts/send-leave-alert.js
```

3. Click **"Commit new file"** button at the bottom

## Done!

Now follow the instructions in `SLACK_BOT_SETUP.md` to:
1. Create a Slack webhook
2. Add it to GitHub Secrets
3. Test the bot

The bot will run every Monday at 9 AM IST automatically!
