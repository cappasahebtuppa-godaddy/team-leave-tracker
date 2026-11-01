# Security Documentation

## Security Measures Implemented

### 1. XSS Protection ✅
- All user input (person names, holiday names) is HTML-escaped before rendering
- Prevents injection of malicious scripts through form inputs
- `escapeHtml()` function sanitizes: `< > & " '` characters

### 2. Token Security
- GitHub PAT tokens stored in browser localStorage (client-side only)
- Tokens never sent to any third-party servers
- Tokens only sent to official GitHub API over HTTPS

### 3. Data Validation
- Person selection uses dropdown (limited to valid team members)
- Date inputs use HTML5 date picker (prevents invalid dates)
- Comp-off days limited to numeric input with min/max constraints

### 4. HTTPS Only
- GitHub Pages enforces HTTPS by default
- All API calls to GitHub use HTTPS

## Known Limitations

### 1. Client-Side Token Storage
**Risk:** Tokens in localStorage can be accessed by:
- Malicious browser extensions
- XSS attacks (mitigated by our escaping)
- Physical access to unlocked computer

**Mitigation:**
- Use "No expiration" tokens only on trusted devices
- Revoke tokens if device is compromised
- GitHub allows easy token revocation at https://github.com/settings/tokens

### 2. No Server-Side Validation
**Risk:** All validation happens in the browser
- Malicious users with repo access could modify data.json directly

**Mitigation:**
- Only add trusted team members as collaborators
- Review GitHub commit history regularly
- Enable branch protection rules (requires paid GitHub plan)

### 3. Public Repository Code
**Risk:** Anyone can see the application source code

**Why This Is Okay:**
- The code itself doesn't contain secrets
- Security through obscurity is not real security
- Actual leave data requires valid PAT token to access

## Best Practices for Team Members

### ✅ DO:
- Generate your own unique PAT token
- Keep your token private (never share it)
- Use "No expiration" only on trusted work devices
- Log out of public/shared computers
- Revoke tokens immediately if compromised
- Use strong password on your GitHub account
- Enable 2FA on your GitHub account

### ❌ DON'T:
- Share your PAT token with anyone
- Paste your token in Slack/email/documents
- Use the same token on personal and work devices
- Leave your computer unlocked and unattended
- Take screenshots that include your token
- Commit tokens to git repositories

## Reporting Security Issues

If you discover a security vulnerability:
1. **Do NOT** open a public GitHub issue
2. Contact the repository owner directly
3. Provide details: what, where, how to reproduce
4. Wait for a fix before disclosing publicly

## Token Revocation

If a token is compromised or suspicious activity detected:

1. Go to: https://github.com/settings/tokens
2. Find the "Leave Tracker" token
3. Click "Delete"
4. Generate a new token immediately
5. Update the app with the new token

## Audit Trail

All changes to leave data are tracked via:
- Git commit history: https://github.com/cappasahebtuppa-godaddy/team-leave-tracker/commits/main
- Each commit shows: who, when, what changed
- Commits are signed with the user's GitHub identity

## Questions?

Contact Chetan Tuppad for security concerns or questions.

---

**Last Updated:** 2026-11-02
**Security Review:** v1.0 - XSS protection implemented
