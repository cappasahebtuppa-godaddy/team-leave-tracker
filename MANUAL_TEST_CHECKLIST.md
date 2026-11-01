# ✅ Manual Test Checklist - Leave Tracker

**Instructions:** Open the app and follow each test. Check the box when completed.

**App URL:** https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/

---

## Pre-Test Setup

- [ ] Browser: Chrome/Safari/Firefox (latest version)
- [ ] Clear browser cache and cookies
- [ ] Have GitHub token ready (with repo scope)
- [ ] Open browser DevTools (F12) - Console tab
- [ ] Paste and run `test-suite.js` (see below)

---

## Quick Automated Test

1. [ ] Open browser console (F12 → Console tab)
2. [ ] Copy contents of `test-suite.js`
3. [ ] Paste into console and press Enter
4. [ ] Verify: All tests should pass (✅)
5. [ ] Screenshot the results

**Expected:** ~31+ tests should pass, 0 failures

---

## Manual Functional Tests

### 🔐 Authentication & Setup

- [ ] **TC-001:** Token Modal appears on first visit
- [ ] **TC-002:** Click pre-filled GitHub token link works
- [ ] **TC-003:** Enter valid token → Save → Modal closes
- [ ] **TC-004:** Refresh page → Token persists (no re-login)
- [ ] **TC-005:** Settings button (⚙️) opens token modal again

---

### 📝 Leave Management

#### Add Leave Tests

- [ ] **TC-006:** Add single-day leave for Chetan (today)
  - Result: Blue color on calendar, leave in list

- [ ] **TC-007:** Add multi-day leave for Subham (3 days)
  - Result: Green color on all 3 days, shows "3 days" duration

- [ ] **TC-008:** Add leave for Afnaan (1 day)
  - Result: Pink color, shows in list

- [ ] **TC-009:** Try to add leave with empty person
  - Result: HTML validation error "Please select an item"

- [ ] **TC-010:** Try to add leave with end < start
  - Result: Error "End date must be after start date"

#### Coverage Rule Tests

- [ ] **TC-011:** Add Chetan leave on Nov 10
- [ ] **TC-012:** Add Subham leave on Nov 10
- [ ] **TC-013:** Try to add Afnaan leave on Nov 10
  - Result: BLOCKED - "Two team members already on leave"

#### Delete Tests

- [ ] **TC-014:** Delete a leave from the list
  - Result: Removed from UI, calendar updated, success alert

- [ ] **TC-015:** Wait 5 seconds, check data.json on GitHub
  - Result: Leave is actually deleted from JSON file

- [ ] **TC-016:** Refresh page
  - Result: Deleted leave doesn't reappear

---

### 💼 Comp-Off Management

#### Add Comp-Off Tests

- [ ] **TC-017:** Add 2 comp-off days for Chetan
  - Reason: "Worked on Saturday"
  - Result: Balance card shows Earned=2, Balance=2

- [ ] **TC-018:** Add 0.5 comp-off days for Subham
  - Result: Shows "0.5" correctly (not "0")

- [ ] **TC-019:** Try to add 0 days
  - Result: Min validation prevents (min=0.5)

- [ ] **TC-020:** Try to add negative days
  - Result: HTML5 validation prevents

#### Use Comp-Off Tests

- [ ] **TC-021:** Add leave for Chetan (1 day), check "Use Comp-Off"
  - Result: Purple "COMP-OFF" badge shown
  - Result: Balance decreased to 1, Used increased to 1

- [ ] **TC-022:** Calendar shows 💼 icon next to "Chetan"
  - Result: Briefcase emoji visible

- [ ] **TC-023:** Try to use 3 days comp-off with only 1 balance
  - Result: Error "Insufficient comp-off balance"

#### Delete Comp-Off Leave

- [ ] **TC-024:** Delete the comp-off leave created above
  - Result: Balance restored (back to 2)
  - Result: Used decreased (back to 0)
  - Result: Success alert shown

---

### 🎉 Holiday Management

- [ ] **TC-025:** View pre-loaded holidays (should see 14)
  - Verify Diwali (Nov 8), Christmas (Dec 25)

- [ ] **TC-026:** Add custom holiday "Team Day" on Dec 31
  - Result: Appears in list, calendar shows yellow

- [ ] **TC-027:** Delete a holiday
  - Result: Removed from list and calendar

---

### 📅 Calendar Tests

#### Navigation

- [ ] **TC-028:** Click "Next Month" button
  - Result: Month changes, grid updates

- [ ] **TC-029:** Click "Previous Month" button
  - Result: Month changes back

#### Display Tests

- [ ] **TC-030:** Verify color coding:
  - Blue = Chetan
  - Green = Subham
  - Pink = Afnaan
  - Yellow = Holiday

- [ ] **TC-031:** Create scenario: 2 people on same day
  - Result: Shows "Person1 + Person2" with striped background

- [ ] **TC-032:** Holiday on same day as leave
  - Result: Holiday (yellow) takes priority

---

### 🔄 Data Sync Tests

#### Auto-Refresh

- [ ] **TC-033:** Open app in 2 browser tabs
- [ ] **TC-034:** Add leave in Tab 1
- [ ] **TC-035:** Wait 30 seconds
- [ ] **TC-036:** Check Tab 2 - leave should appear
  - Result: Auto-refresh works

#### Manual Refresh

- [ ] **TC-037:** Make change in one tab
- [ ] **TC-038:** Click 🔄 button in other tab
  - Result: Immediate sync, no page reload

#### Sync Status

- [ ] **TC-039:** Watch sync indicator during operations:
  - 🟢 Green = Synced
  - 🟡 Yellow = Syncing
  - 🔴 Red = Error (if occurs)

---

### 🔒 Security Tests

#### XSS Protection

- [ ] **TC-040:** Try to add holiday with name:
  ```
  <script>alert('XSS')</script>
  ```
  - Result: No alert popup, name shown as escaped text

- [ ] **TC-041:** Check browser console for token
  - Result: Token should NOT be visible in console logs

#### Token Security

- [ ] **TC-042:** Open DevTools → Application → Local Storage
- [ ] **TC-043:** Verify token is stored as 'githubToken'
- [ ] **TC-044:** Open Network tab, make a change
- [ ] **TC-045:** Verify all API calls use HTTPS (not HTTP)

---

### 📊 Stats & Display

- [ ] **TC-046:** Verify stats update after each operation:
  - Total Leaves count
  - Public Holidays count
  - Comp-off balances

- [ ] **TC-047:** Comp-off balance cards show:
  - Earned (total ever earned)
  - Used (total ever used)
  - Balance (earned - used)

---

### 📱 Mobile Responsive

- [ ] **TC-048:** Resize browser to 375px width (iPhone size)
- [ ] **TC-049:** Verify:
  - Layout adjusts properly
  - All buttons clickable
  - Forms usable
  - Calendar scrolls horizontally if needed

---

### 🎨 UI/UX Tests

#### Alerts

- [ ] **TC-050:** Success alert (green) after add leave
  - Auto-dismisses after 5 seconds

- [ ] **TC-051:** Error alert (red) on validation failure
  - Auto-dismisses after 5 seconds

#### Forms

- [ ] **TC-052:** After submitting a form, fields are cleared
  - Ready for next entry

- [ ] **TC-053:** Cancel button or ESC key closes modals

---

### 🐛 Edge Cases

- [ ] **TC-054:** Add leave spanning month boundary
  - Example: Nov 30 to Dec 2
  - Result: Shows correctly across both months

- [ ] **TC-055:** Navigate to far future month (Jan 2027)
  - Result: Calendar works, no errors

- [ ] **TC-056:** Add 10+ leaves
  - Result: All display correctly, scrollable if needed

- [ ] **TC-057:** Use special characters in holiday name
  - Example: "Día de los Muertos"
  - Result: Displays correctly with accents

---

### ⚡ Performance

- [ ] **TC-058:** Add operation completes within 2 seconds
- [ ] **TC-059:** Delete operation completes within 2 seconds
- [ ] **TC-060:** Page loads within 3 seconds
- [ ] **TC-061:** Calendar navigation is instant (< 100ms)

---

## Test Completion Summary

**Date Tested:** _______________  
**Browser:** _______________  
**Tester:** _______________

**Results:**
- Total Tests: 61
- Passed: _____
- Failed: _____
- Blocked: _____

**Pass Rate:** _____%

**Critical Issues Found:**

1. 
2. 
3. 

**Minor Issues Found:**

1. 
2. 
3. 

**Recommendations:**

1. 
2. 
3. 

---

## Sign-Off

**Tested By:** ________________  
**Date:** ________________  
**Status:** ☐ PASS  ☐ FAIL  ☐ PASS WITH ISSUES

---

## Notes

(Add any additional observations or feedback here)
