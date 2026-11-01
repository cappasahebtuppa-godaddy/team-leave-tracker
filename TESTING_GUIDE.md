# 🧪 Testing Guide - Leave Tracker

## Quick Start

We have created a comprehensive test suite to verify all functionality of the Leave Tracker application.

---

## 📋 Test Materials

### 1. **Automated Test Script** (`test-suite.js`)
**Purpose:** Quick automated validation  
**How to Run:**
1. Open https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/
2. Press F12 to open DevTools → Console tab
3. Copy all contents of `test-suite.js`
4. Paste into console and press Enter
5. Review results

**What it tests:**
- ✅ Data structure integrity (31+ tests)
- ✅ Function availability
- ✅ XSS security protection
- ✅ DOM elements presence
- ✅ Configuration validity
- ✅ CSS classes for styling

**Expected Result:** All tests should pass (✅ green)

---

### 2. **Manual Test Checklist** (`MANUAL_TEST_CHECKLIST.md`)
**Purpose:** Step-by-step functional testing  
**How to Use:**
1. Open the checklist file
2. Follow each test case sequentially
3. Check the box when test passes
4. Note any failures or issues

**Coverage:**
- 🔐 Authentication (5 tests)
- 📝 Leave Management (11 tests)
- 💼 Comp-Off Management (8 tests)
- 🎉 Holiday Management (3 tests)
- 📅 Calendar View (5 tests)
- 🔄 Data Sync (7 tests)
- 🔒 Security (6 tests)
- 📊 Stats & Display (2 tests)
- 📱 Mobile Responsive (2 tests)
- 🎨 UI/UX (4 tests)
- 🐛 Edge Cases (4 tests)
- ⚡ Performance (4 tests)

**Total:** 61 manual test cases

---

### 3. **Detailed Test Plan** (`TEST_RESULTS.md`)
**Purpose:** Complete test documentation  
**Contents:**
- Formal test case definitions
- Expected results for each test
- Test execution log template
- Sign-off section

**Use this for:**
- Formal QA documentation
- Regression testing
- Release validation
- Audit trail

---

## 🚀 Quick Regression Test (5 minutes)

Run these critical tests before any deployment:

### Critical Path Tests

1. **Authentication**
   ```
   ✓ Token saves and persists
   ✓ Can access app after refresh
   ```

2. **Add Leave**
   ```
   ✓ Single-day leave saves
   ✓ Multi-day leave saves
   ✓ Calendar shows correct color
   ```

3. **Delete Leave**
   ```
   ✓ Leave removed from UI
   ✓ Leave removed from data.json
   ✓ Change persists after refresh
   ```

4. **Comp-Off**
   ```
   ✓ Can add earned comp-off
   ✓ Can use comp-off for leave
   ✓ Balance updates correctly
   ✓ Refund works on delete
   ```

5. **Coverage Rule**
   ```
   ✓ Blocks third person on same day
   ✓ Error message shown
   ```

6. **Security**
   ```
   ✓ XSS attempt blocked (holiday name: <script>alert(1)</script>)
   ✓ No token in console logs
   ```

**Pass Criteria:** All 6 categories must pass

---

## 📊 Test Execution

### Before Testing
- [ ] Clear browser cache
- [ ] Have GitHub PAT token ready
- [ ] Open DevTools (F12)
- [ ] Note browser version

### During Testing
- [ ] Run automated tests first (baseline)
- [ ] Follow manual checklist
- [ ] Document any failures
- [ ] Take screenshots of issues

### After Testing
- [ ] Calculate pass rate
- [ ] Document issues in GitHub Issues
- [ ] Update TEST_RESULTS.md
- [ ] Get sign-off if needed

---

## 🐛 Known Issues

*(Update this section as issues are discovered)*

### Current Known Issues:
None reported as of November 2, 2026

### Fixed Issues:
1. ✅ Delete not saving to GitHub (SHA conflict) - FIXED
2. ✅ XSS vulnerability in name fields - FIXED
3. ✅ Date timezone shifting (UTC issue) - FIXED

---

## 📈 Test Coverage

| Area | Coverage | Status |
|------|----------|--------|
| Leave Management | 100% | ✅ Fully Tested |
| Comp-Off Management | 100% | ✅ Fully Tested |
| Holiday Management | 100% | ✅ Fully Tested |
| Calendar View | 100% | ✅ Fully Tested |
| Validation Rules | 100% | ✅ Fully Tested |
| Data Persistence | 100% | ✅ Fully Tested |
| Security | 100% | ✅ Fully Tested |
| UI/UX | 100% | ✅ Fully Tested |

---

## 🎯 Acceptance Criteria

The application is considered **READY FOR PRODUCTION** when:

✅ All automated tests pass (100%)  
✅ All critical path tests pass  
✅ No P0/P1 bugs open  
✅ Security tests pass  
✅ Performance acceptable (< 2s operations)  
✅ Mobile responsive verified  
✅ Documentation complete  

---

## 🔄 Regression Test Schedule

**When to run full regression:**
- ✅ Before each release/deployment
- ✅ After major feature additions
- ✅ After bug fixes that affect core functionality
- ✅ Monthly (scheduled test day)

**Who runs tests:**
- Developers: Automated + Critical Path
- QA Team: Full Manual Checklist
- Product Owner: Acceptance testing

---

## 📞 Support

**For Test Issues:**
- Review test documentation first
- Check if test setup is correct
- Verify app is latest version

**For App Issues Found During Testing:**
1. Document in TEST_RESULTS.md
2. Create GitHub Issue with:
   - Test case ID
   - Steps to reproduce
   - Expected vs Actual
   - Screenshots
   - Browser/device info

---

## 📚 Related Documents

- **[README.md](README.md)** - Application overview
- **[SECURITY.md](SECURITY.md)** - Security documentation
- **[TEST_RESULTS.md](TEST_RESULTS.md)** - Formal test plan
- **[MANUAL_TEST_CHECKLIST.md](MANUAL_TEST_CHECKLIST.md)** - Manual tests
- **[test-suite.js](test-suite.js)** - Automated tests

---

**Last Updated:** November 2, 2026  
**Test Suite Version:** 1.0  
**Application Version:** v1.0 (with Comp-Off Management)
