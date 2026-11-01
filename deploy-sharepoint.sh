#!/bin/bash

# Team Leave Tracker - SharePoint Version Deployment Script

set -e

echo "🚀 Team Leave Tracker - SharePoint Version Deployment"
echo "====================================================="
echo ""

# Check if configuration is updated
echo "⚠️  Before deploying, ensure you've updated the CONFIG section in index-sharepoint.html"
echo ""
echo "Required values:"
echo "  - clientId: Your Azure AD app client ID"
echo "  - tenantId: Your tenant ID"
echo "  - sharePointSiteUrl: Your SharePoint site URL"
echo ""
read -p "Have you updated the CONFIG section? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Please update the CONFIG section in index-sharepoint.html first"
    echo "   See SHAREPOINT_SETUP_GUIDE.md for instructions"
    exit 1
fi

echo ""
echo "📋 Checklist - Have you completed these steps?"
echo "  1. Created TeamLeaves list in SharePoint"
echo "  2. Created PublicHolidays list in SharePoint"
echo "  3. Registered Azure AD application"
echo "  4. Configured API permissions"
echo ""
read -p "All setup steps completed? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Please complete the setup steps in SHAREPOINT_SETUP_GUIDE.md first"
    exit 1
fi

echo ""
echo "📦 Replacing index.html with SharePoint version..."
cp index-sharepoint.html index.html

echo "✅ File replaced"
echo ""
echo "📝 Committing changes..."
git add index.html index-sharepoint.html SHAREPOINT_SETUP_GUIDE.md
git commit -m "Upgrade to SharePoint-backed version

- Add Microsoft authentication (MSAL.js)
- Replace localStorage with SharePoint REST API
- Real-time data sync across all users
- Centralized data storage in SharePoint Lists

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

echo ""
echo "📤 Pushing to GitHub..."
git push

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your SharePoint-enabled tracker will be available at:"
GITHUB_USER=$(gh api user -q .login 2>/dev/null || echo "YOUR_USERNAME")
echo "   https://$GITHUB_USER.github.io/team-leave-tracker/"
echo ""
echo "⏱️  Note: It may take 1-2 minutes for GitHub Pages to deploy the update."
echo ""
echo "🎯 Next Steps:"
echo "1. Wait 1-2 minutes for deployment"
echo "2. Visit the URL above"
echo "3. Sign in with your Microsoft account"
echo "4. Test adding a leave (it should save to SharePoint)"
echo "5. Check SharePoint TeamLeaves list to verify data was saved"
echo "6. Share the URL with your team!"
echo ""
echo "📚 For troubleshooting, see SHAREPOINT_SETUP_GUIDE.md"
echo ""
