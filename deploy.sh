#!/bin/bash

# Team Leave Tracker - GitHub Pages Deployment Script
# Run this script to deploy to GitHub Pages in one command

set -e  # Exit on error

echo "🚀 Team Leave Tracker - GitHub Pages Deployment"
echo "================================================"
echo ""

# Check if gh is authenticated
if ! gh auth status &>/dev/null; then
    echo "❌ Not logged into GitHub CLI"
    echo "Please run: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI authenticated"
echo ""

# Get current GitHub username
GITHUB_USER=$(gh api user -q .login)
echo "📝 GitHub username: $GITHUB_USER"
echo ""

# Check if repo already exists
REPO_NAME="team-leave-tracker"
if gh repo view "$GITHUB_USER/$REPO_NAME" &>/dev/null; then
    echo "⚠️  Repository already exists at: https://github.com/$GITHUB_USER/$REPO_NAME"
    read -p "Do you want to push to existing repo? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deployment cancelled"
        exit 1
    fi

    # Add remote if not exists
    if ! git remote get-url origin &>/dev/null; then
        git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"
    fi

    echo "📤 Pushing to existing repository..."
    git push -u origin main

else
    echo "📦 Creating new GitHub repository..."
    gh repo create $REPO_NAME \
        --public \
        --source=. \
        --description="Team leave management tracker with coverage validation" \
        --push
fi

echo ""
echo "🌐 Enabling GitHub Pages..."
gh repo edit --enable-pages --pages-branch main --pages-path /

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🎉 Your leave tracker will be available at:"
echo "   https://$GITHUB_USER.github.io/$REPO_NAME/"
echo ""
echo "⏱️  Note: It may take 1-2 minutes for the site to become live."
echo ""
echo "📋 Next steps:"
echo "1. Wait 1-2 minutes for GitHub Pages to deploy"
echo "2. Visit the URL above"
echo "3. Bookmark it"
echo "4. Share with your team: Chetan, Subham, and Afnaan"
echo ""
echo "📝 To share with team, send them this URL:"
echo "   https://$GITHUB_USER.github.io/$REPO_NAME/"
echo ""
