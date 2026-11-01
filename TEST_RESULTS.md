# 🧪 Regression Test Results - Leave Tracker
**Date:** November 2, 2026  
**Version:** v1.0 with Comp-Off Management  
**Tester:** Automated + Manual Verification

---

## Test Environment
- **Browser:** Chrome/Safari/Firefox (latest)
- **Device:** Desktop + Mobile
- **Data Source:** GitHub (data.json)
- **Test User:** cappasahebtuppa-godaddy

---

## Test Execution Summary

| Category | Total Tests | Passed | Failed | Blocked |
|----------|-------------|--------|--------|---------|
| **Leave Management** | 10 | - | - | - |
| **Comp-Off Management** | 8 | - | - | - |
| **Holiday Management** | 4 | - | - | - |
| **Calendar View** | 6 | - | - | - |
| **Validation Rules** | 8 | - | - | - |
| **Data Persistence** | 5 | - | - | - |
| **Security** | 4 | - | - | - |
| **UI/UX** | 5 | - | - | - |
| **TOTAL** | **50** | **TBD** | **TBD** | **TBD** |

---

## 1. Leave Management Tests

### TC-001: Add Single Day Leave
**Steps:**
1. Select team member: "Chetan Tuppad"
2. Select start date: Today
3. Select end date: Same as start date
4. Click "Add Leave"

**Expected Result:**
- Leave appears in leave list
- Calendar shows blue color on date
- Stats updated (total leaves +1)
- Success alert shown
- data.json updated

**Status:** ⏳ PENDING

---

### TC-002: Add Multi-Day Leave
**Steps:**
1. Select "Subham Srivastava"
2. Select start: Today
3. Select end: Today + 2 days
4. Click "Add Leave"

**Expected Result:**
- Leave shows date range
- Calendar shows green on all 3 days
- Leave count = 3 days displayed

**Status:** ⏳ PENDING

---

### TC-003: Delete Leave
**Steps:**
1. Add a leave
2. Click "Delete" button
3. Confirm deletion

**Expected Result:**
- Leave removed from list
- Calendar updated
- Stats decreased
- data.json updated
- Success alert shown

**Status:** ⏳ PENDING

---

### TC-004: Add Leave with Invalid Date Range
**Steps:**
1. Select start date: Tomorrow
2. Select end date: Today
3. Click "Add Leave"

**Expected Result:**
- Error: "End date must be after start date"
- Leave not added

**Status:** ⏳ PENDING

---

### TC-005: Coverage Rule - Maximum 2 People Away
**Steps:**
1. Add leave for Chetan (Nov 10)
2. Add leave for Subham (Nov 10)
3. Try to add leave for Afnaan (Nov 10)

**Expected Result:**
- Error: "Two team members are already on leave"
- Third leave blocked

**Status:** ⏳ PENDING

---

### TC-006: Add Leave for All Team Members (Different Dates)
**Steps:**
1. Add leave for Chetan (Nov 5)
2. Add leave for Subham (Nov 6)
3. Add leave for Afnaan (Nov 7)

**Expected Result:**
- All leaves added successfully
- Each date shows correct color
- No coverage conflict

**Status:** ⏳ PENDING

---

### TC-007: View Leave List
**Steps:**
1. Add multiple leaves
2. Scroll through leave list

**Expected Result:**
- All leaves displayed
- Sorted correctly
- Person name, dates, duration shown
- Delete button available

**Status:** ⏳ PENDING

---

### TC-008: Add Leave - No Person Selected
**Steps:**
1. Leave person dropdown empty
2. Select dates
3. Click "Add Leave"

**Expected Result:**
- HTML5 validation prevents submit
- "Please select an item" message

**Status:** ⏳ PENDING

---

### TC-009: Add Leave - No Dates Selected
**Steps:**
1. Select person
2. Leave dates empty
3. Click "Add Leave"

**Expected Result:**
- HTML5 validation prevents submit
- "Please fill out this field"

**Status:** ⏳ PENDING

---

### TC-010: Color Coding Verification
**Steps:**
1. Add leave for Chetan
2. Add leave for Subham
3. Add leave for Afnaan

**Expected Result:**
- Chetan: Blue background
- Subham: Green background
- Afnaan: Pink background

**Status:** ⏳ PENDING

---

## 2. Comp-Off Management Tests

### TC-011: Add Earned Comp-Off
**Steps:**
1. Select "Chetan Tuppad"
2. Enter days: 1
3. Enter reason: "Worked on Saturday"
4. Click "Add Comp-Off"

**Expected Result:**
- Balance card shows: Earned +1, Balance +1
- Success alert shown
- data.json updated with comp-off

**Status:** ⏳ PENDING

---

### TC-012: Use Comp-Off for Leave
**Steps:**
1. Add 2 comp-off days for Chetan
2. Add leave for Chetan (1 day)
3. Check "Use Comp-Off" checkbox
4. Submit

**Expected Result:**
- Leave added with purple "COMP-OFF" badge
- Balance decreased by 1
- Used increased by 1
- Calendar shows 💼 icon

**Status:** ⏳ PENDING

---

### TC-013: Use Comp-Off Without Sufficient Balance
**Steps:**
1. Ensure Chetan has 0.5 comp-off balance
2. Try to add 2-day leave with comp-off

**Expected Result:**
- Error: "Insufficient comp-off balance. Available: 0.5 days, Required: 2 days"
- Leave not added

**Status:** ⏳ PENDING

---

### TC-014: Delete Comp-Off Leave (Refund)
**Steps:**
1. Add 2 comp-off days for Subham
2. Use 1 day for leave with comp-off
3. Verify balance = 1
4. Delete the comp-off leave

**Expected Result:**
- Leave deleted
- Balance restored to 2
- Used decreased to 0
- History shows "refunded" entry

**Status:** ⏳ PENDING

---

### TC-015: Add Comp-Off with Decimal (0.5 days)
**Steps:**
1. Select Afnaan
2. Enter: 0.5 days
3. Reason: "Half day weekend work"
4. Submit

**Expected Result:**
- Balance shows 0.5
- Displayed as "0.5" not "0"

**Status:** ⏳ PENDING

---

### TC-016: Add Comp-Off - Negative Days
**Steps:**
1. Enter days: -1
2. Try to submit

**Expected Result:**
- HTML5 validation prevents negative
- Min value enforced

**Status:** ⏳ PENDING

---

### TC-017: Add Comp-Off - Zero Days
**Steps:**
1. Enter days: 0
2. Try to submit

**Expected Result:**
- Error or validation: min=0.5
- Not allowed

**Status:** ⏳ PENDING

---

### TC-018: Comp-Off History Tracking
**Steps:**
1. Add 2 comp-offs
2. Use 1 for leave
3. Delete the leave
4. Check data.json history array

**Expected Result:**
- History contains: earned (x2), used (x1), refunded (x1)
- Each with timestamp and reason

**Status:** ⏳ PENDING

---

## 3. Holiday Management Tests

### TC-019: Add Public Holiday
**Steps:**
1. Enter name: "Test Holiday"
2. Select date: Dec 31, 2026
3. Click "Add Holiday"

**Expected Result:**
- Holiday appears in holiday list
- Calendar shows yellow on Dec 31
- Stats shows +1 holiday

**Status:** ⏳ PENDING

---

### TC-020: Delete Holiday
**Steps:**
1. Find holiday in list
2. Click "Delete"
3. Confirm

**Expected Result:**
- Holiday removed
- Calendar updated
- Stats decreased

**Status:** ⏳ PENDING

---

### TC-021: View Pre-loaded 2026 Holidays
**Steps:**
1. Open app
2. Check holiday list

**Expected Result:**
- 14 holidays visible
- Diwali on Nov 8
- Christmas on Dec 25
- All dates correct

**Status:** ⏳ PENDING

---

### TC-022: Add Holiday with XSS Attempt
**Steps:**
1. Enter name: `<script>alert('XSS')</script>`
2. Select date
3. Submit

**Expected Result:**
- Holiday added but script not executed
- Name displayed as escaped text: `&lt;script&gt;...`
- No alert popup

**Status:** ⏳ PENDING

---

## 4. Calendar View Tests

### TC-023: Navigate to Next Month
**Steps:**
1. Click "Next Month" button
2. Verify month changes

**Expected Result:**
- Month name updates
- Calendar grid updates
- Previous leaves still visible if in range

**Status:** ⏳ PENDING

---

### TC-024: Navigate to Previous Month
**Steps:**
1. Click "Previous Month" button
2. Verify month changes

**Expected Result:**
- Month changes to previous
- Grid updates correctly

**Status:** ⏳ PENDING

---

### TC-025: Calendar Shows Multiple People Same Day
**Steps:**
1. Add Chetan leave on Nov 15
2. Add Subham leave on Nov 15

**Expected Result:**
- Date shows striped background
- Text: "Chetan + Subham"
- Class includes both names

**Status:** ⏳ PENDING

---

### TC-026: Calendar Shows Comp-Off Icon
**Steps:**
1. Add comp-off for Chetan
2. Use it for leave on Nov 20
3. View calendar

**Expected Result:**
- Nov 20 shows "Chetan 💼"
- Briefcase icon visible

**Status:** ⏳ PENDING

---

### TC-027: Holiday Overlaps with Leave
**Steps:**
1. Add holiday on Nov 8 (Diwali)
2. Try to view calendar

**Expected Result:**
- Holiday takes priority (yellow)
- Leave not shown on same date (or shown differently)

**Status:** ⏳ PENDING

---

### TC-028: Empty Calendar Month
**Steps:**
1. Navigate to a month with no leaves
2. View calendar

**Expected Result:**
- Calendar shows empty dates
- No errors
- Navigation works

**Status:** ⏳ PENDING

---

## 5. Validation Rules Tests

### TC-029: Minimum 1 Person Available - Block
**Steps:**
1. Add Chetan leave (Nov 25)
2. Add Subham leave (Nov 25)
3. Try Afnaan leave (Nov 25)

**Expected Result:**
- Blocked with error message
- "At least one person must be available"

**Status:** ⏳ PENDING

---

### TC-030: Date Range Validation
**Steps:**
1. Enter end date before start date
2. Submit

**Expected Result:**
- Error: "End date must be after start date"
- Not saved

**Status:** ⏳ PENDING

---

### TC-031: Past Date Handling
**Steps:**
1. Check if past dates can be selected
2. Min date should be today

**Expected Result:**
- HTML5 date picker prevents past dates
- min="today" enforced

**Status:** ⏳ PENDING

---

### TC-032: Comp-Off Balance Check
**Steps:**
1. Chetan has 0 comp-off
2. Try to use comp-off for 1 day leave

**Expected Result:**
- Error: "Insufficient comp-off balance"
- Leave not added

**Status:** ⏳ PENDING

---

### TC-033: XSS Protection - Person Name
**Steps:**
1. Manually edit data.json to add:
   `{"person": "<img src=x onerror=alert(1)>", ...}`
2. Reload page

**Expected Result:**
- Name displayed as text, not HTML
- No script execution
- Escaped properly

**Status:** ⏳ PENDING

---

### TC-034: Person Dropdown Limited Values
**Steps:**
1. Check person dropdown options

**Expected Result:**
- Only 3 options: Chetan, Subham, Afnaan
- No free text input
- Prevents invalid names

**Status:** ⏳ PENDING

---

### TC-035: Required Field Validation
**Steps:**
1. Try to submit forms with empty fields

**Expected Result:**
- HTML5 "required" prevents submission
- Appropriate error messages

**Status:** ⏳ PENDING

---

### TC-036: Form Reset After Submit
**Steps:**
1. Fill and submit leave form
2. Check form state

**Expected Result:**
- All fields cleared
- Ready for next entry
- No stale data

**Status:** ⏳ PENDING

---

## 6. Data Persistence Tests

### TC-037: Save to GitHub After Add
**Steps:**
1. Add a leave
2. Check data.json in GitHub repo

**Expected Result:**
- Leave appears in data.json
- Commit created
- Timestamp updated

**Status:** ⏳ PENDING

---

### TC-038: Save to GitHub After Delete
**Steps:**
1. Delete a leave
2. Check data.json

**Expected Result:**
- Leave removed from data.json
- Commit created
- File updated

**Status:** ⏳ PENDING

---

### TC-039: Auto-Refresh (30 seconds)
**Steps:**
1. Add leave in one browser tab
2. Wait 30 seconds in another tab
3. Check if data synced

**Expected Result:**
- Second tab shows new leave
- Auto-refresh indicator shows "Syncing..."
- Data consistent

**Status:** ⏳ PENDING

---

### TC-040: Manual Refresh Button
**Steps:**
1. Make change in another tab
2. Click 🔄 Refresh button

**Expected Result:**
- Data immediately updated
- Sync status shows success
- No page reload

**Status:** ⏳ PENDING

---

### TC-041: SHA Conflict Resolution
**Steps:**
1. Simulate concurrent edit (outdated SHA)
2. Try to save

**Expected Result:**
- System fetches new SHA
- Retries save
- Success or conflict message

**Status:** ⏳ PENDING

---

## 7. Security Tests

### TC-042: Token Storage
**Steps:**
1. Enter GitHub token
2. Check browser localStorage
3. Refresh page

**Expected Result:**
- Token stored in localStorage
- Token persists after refresh
- Only visible in browser, not in HTML

**Status:** ⏳ PENDING

---

### TC-043: Token Required for Operations
**Steps:**
1. Clear localStorage
2. Try to add leave

**Expected Result:**
- Token modal appears
- Operation blocked until token entered
- "Please configure token" message

**Status:** ⏳ PENDING

---

### TC-044: HTTPS API Calls
**Steps:**
1. Open DevTools Network tab
2. Perform any save operation
3. Check request URL

**Expected Result:**
- All API calls use HTTPS
- No insecure HTTP requests

**Status:** ⏳ PENDING

---

### TC-045: No Token in Console/Logs
**Steps:**
1. Open browser console
2. Perform operations
3. Check console output

**Expected Result:**
- No token printed in console
- Error messages don't expose token
- Only error types logged

**Status:** ⏳ PENDING

---

## 8. UI/UX Tests

### TC-046: Mobile Responsive
**Steps:**
1. Open on mobile device (or resize browser to 375px)
2. Test all functions

**Expected Result:**
- Layout adapts to small screen
- All buttons accessible
- Forms usable
- Calendar scrollable

**Status:** ⏳ PENDING

---

### TC-047: Settings Modal
**Steps:**
1. Click ⚙️ Settings button
2. Enter token
3. Save and close

**Expected Result:**
- Modal opens smoothly
- Token saved
- Modal closes
- No page reload

**Status:** ⏳ PENDING

---

### TC-048: Alert Messages
**Steps:**
1. Trigger various alerts (success, error)
2. Observe behavior

**Expected Result:**
- Alerts appear at top
- Auto-dismiss after 5 seconds
- Clear, readable messages
- Correct colors (green=success, red=error)

**Status:** ⏳ PENDING

---

### TC-049: Sync Status Indicator
**Steps:**
1. Watch sync indicator during operations

**Expected Result:**
- 🟢 Green = Synced
- 🟡 Yellow = Syncing
- 🔴 Red = Error
- Text updates accordingly

**Status:** ⏳ PENDING

---

### TC-050: Loading States
**Steps:**
1. Observe UI during GitHub API calls

**Expected Result:**
- Status indicator shows activity
- No frozen UI
- Appropriate feedback

**Status:** ⏳ PENDING

---

## Test Execution Log

### Test Run #1 - [Date/Time]
**Tester:** 
**Environment:** 
**Results:** 

---

## Known Issues

(To be filled after test execution)

---

## Recommendations

(To be filled after test execution)

---

## Sign-off

**Tested By:** ________________  
**Date:** ________________  
**Approved By:** ________________  
**Date:** ________________
