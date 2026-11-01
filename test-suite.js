/**
 * Automated Test Suite for Leave Tracker
 * Run this in the browser console on the live app
 */

(async function runTests() {
    console.log('🧪 Starting Leave Tracker Test Suite...\n');

    let passedTests = 0;
    let failedTests = 0;
    const results = [];

    function assert(condition, testName, expected, actual) {
        if (condition) {
            passedTests++;
            console.log(`✅ PASS: ${testName}`);
            results.push({ test: testName, status: 'PASS' });
            return true;
        } else {
            failedTests++;
            console.log(`❌ FAIL: ${testName}`);
            console.log(`   Expected: ${expected}`);
            console.log(`   Actual: ${actual}`);
            results.push({ test: testName, status: 'FAIL', expected, actual });
            return false;
        }
    }

    console.log('\n📋 Test Category: Data Structure Validation\n');

    // Test 1: Check global variables exist
    assert(
        typeof leaves !== 'undefined',
        'TC-001: Global leaves array exists',
        'defined',
        typeof leaves
    );

    assert(
        typeof holidays !== 'undefined',
        'TC-002: Global holidays array exists',
        'defined',
        typeof holidays
    );

    assert(
        typeof compOffs !== 'undefined',
        'TC-003: Global compOffs object exists',
        'defined',
        typeof compOffs
    );

    // Test 2: Check compOffs structure
    const expectedPeople = ['Chetan Tuppad', 'Subham Srivastava', 'Afnaan Ladji'];
    const compOffKeys = Object.keys(compOffs);
    assert(
        JSON.stringify(compOffKeys.sort()) === JSON.stringify(expectedPeople.sort()),
        'TC-004: CompOffs has all team members',
        expectedPeople.join(', '),
        compOffKeys.join(', ')
    );

    // Test 3: Check compOff structure for each person
    let compOffStructureValid = true;
    for (const person of expectedPeople) {
        if (!compOffs[person] ||
            typeof compOffs[person].earned !== 'number' ||
            typeof compOffs[person].used !== 'number' ||
            typeof compOffs[person].balance !== 'number' ||
            !Array.isArray(compOffs[person].history)) {
            compOffStructureValid = false;
        }
    }
    assert(
        compOffStructureValid,
        'TC-005: CompOff structure valid (earned, used, balance, history)',
        'All properties present',
        compOffStructureValid ? 'Valid' : 'Invalid'
    );

    console.log('\n📋 Test Category: Function Availability\n');

    // Test 4: Check critical functions exist
    assert(
        typeof fetchFromGitHub === 'function',
        'TC-006: fetchFromGitHub function exists',
        'function',
        typeof fetchFromGitHub
    );

    assert(
        typeof saveToGitHub === 'function',
        'TC-007: saveToGitHub function exists',
        'function',
        typeof saveToGitHub
    );

    assert(
        typeof escapeHtml === 'function',
        'TC-008: escapeHtml security function exists',
        'function',
        typeof escapeHtml
    );

    assert(
        typeof updateCompOffDisplay === 'function',
        'TC-009: updateCompOffDisplay function exists',
        'function',
        typeof updateCompOffDisplay
    );

    assert(
        typeof renderCalendar === 'function',
        'TC-010: renderCalendar function exists',
        'function',
        typeof renderCalendar
    );

    assert(
        typeof isAvailabilityMaintained === 'function',
        'TC-011: isAvailabilityMaintained validation exists',
        'function',
        typeof isAvailabilityMaintained
    );

    console.log('\n📋 Test Category: Security Functions\n');

    // Test 5: XSS Protection
    const xssTests = [
        { input: '<script>alert(1)</script>', name: 'script tag' },
        { input: '<img src=x onerror=alert(1)>', name: 'img onerror' },
        { input: 'javascript:alert(1)', name: 'javascript protocol' },
        { input: '<a href="javascript:alert(1)">click</a>', name: 'link with javascript' },
        { input: '"><script>alert(1)</script>', name: 'quote escape attempt' }
    ];

    for (const test of xssTests) {
        const escaped = escapeHtml(test.input);
        const safe = !escaped.includes('<') && !escaped.includes('>') && !escaped.includes('javascript:');
        assert(
            safe,
            `TC-012: XSS protection for ${test.name}`,
            'No dangerous characters',
            safe ? 'Escaped' : 'VULNERABLE'
        );
    }

    console.log('\n📋 Test Category: Date Handling\n');

    // Test 6: Date formatting
    assert(
        typeof formatDateString === 'function',
        'TC-013: formatDateString function exists',
        'function',
        typeof formatDateString
    );

    // Test date formatting doesn't shift dates
    const testDate = '2026-11-09';
    const formatted = formatDateString(testDate);
    const includes9 = formatted.includes('9') || formatted.includes('09');
    assert(
        includes9,
        'TC-014: Date formatting preserves day (no timezone shift)',
        'Contains "9"',
        formatted
    );

    console.log('\n📋 Test Category: DOM Elements\n');

    // Test 7: Required DOM elements exist
    const requiredElements = [
        'leaveForm',
        'holidayForm',
        'compOffForm',
        'personSelect',
        'startDate',
        'endDate',
        'useCompOff',
        'compOffPerson',
        'compOffDays',
        'compOffReason',
        'calendarGrid',
        'leavesList',
        'holidaysList',
        'compoff-chetan',
        'compoff-subham',
        'compoff-afnaan',
        'syncIndicator',
        'syncStatus'
    ];

    for (const id of requiredElements) {
        const element = document.getElementById(id);
        assert(
            element !== null,
            `TC-015: Element #${id} exists`,
            'Element found',
            element ? 'Found' : 'Missing'
        );
    }

    console.log('\n📋 Test Category: Form Validation\n');

    // Test 8: Form elements have required attributes
    const personSelect = document.getElementById('personSelect');
    assert(
        personSelect && personSelect.hasAttribute('required'),
        'TC-016: Person select has required attribute',
        'required=true',
        personSelect ? personSelect.required : 'element not found'
    );

    const startDate = document.getElementById('startDate');
    assert(
        startDate && startDate.hasAttribute('required'),
        'TC-017: Start date has required attribute',
        'required=true',
        startDate ? startDate.required : 'element not found'
    );

    const compOffDays = document.getElementById('compOffDays');
    const minValue = compOffDays ? compOffDays.min : null;
    assert(
        minValue === '0.5',
        'TC-018: Comp-off days has min=0.5',
        '0.5',
        minValue
    );

    console.log('\n📋 Test Category: Calendar Color Classes\n');

    // Test 9: Check CSS classes exist for team members
    const styles = Array.from(document.styleSheets)
        .flatMap(sheet => {
            try {
                return Array.from(sheet.cssRules || []);
            } catch {
                return [];
            }
        })
        .map(rule => rule.selectorText)
        .filter(Boolean);

    const hasChetan = styles.some(s => s.includes('.chetan'));
    const hasSubham = styles.some(s => s.includes('.subham'));
    const hasAfnaan = styles.some(s => s.includes('.afnaan'));

    assert(hasChetan, 'TC-019: Chetan color class exists', 'true', hasChetan);
    assert(hasSubham, 'TC-020: Subham color class exists', 'true', hasSubham);
    assert(hasAfnaan, 'TC-021: Afnaan color class exists', 'true', hasAfnaan);

    console.log('\n📋 Test Category: Configuration\n');

    // Test 10: GitHub configuration
    assert(
        typeof GITHUB_REPO !== 'undefined',
        'TC-022: GITHUB_REPO configured',
        'defined',
        typeof GITHUB_REPO
    );

    assert(
        typeof GITHUB_FILE_PATH !== 'undefined',
        'TC-023: GITHUB_FILE_PATH configured',
        'defined',
        typeof GITHUB_FILE_PATH
    );

    const expectedRepo = 'cappasahebtuppa-godaddy/team-leave-tracker';
    assert(
        GITHUB_REPO === expectedRepo,
        'TC-024: GitHub repo correct',
        expectedRepo,
        GITHUB_REPO
    );

    assert(
        GITHUB_FILE_PATH === 'data.json',
        'TC-025: File path correct',
        'data.json',
        GITHUB_FILE_PATH
    );

    console.log('\n📋 Test Category: Holiday Data\n');

    // Test 11: Pre-loaded holidays
    const expectedHolidayCount = 14;
    assert(
        holidays.length >= expectedHolidayCount,
        'TC-026: Pre-loaded 2026 holidays present',
        `>=${expectedHolidayCount}`,
        holidays.length
    );

    // Check key holidays
    const diwali = holidays.find(h => h.name === 'Diwali');
    assert(
        diwali && diwali.date === '2026-11-08',
        'TC-027: Diwali on correct date',
        '2026-11-08',
        diwali ? diwali.date : 'not found'
    );

    const christmas = holidays.find(h => h.name === 'Christmas Day');
    assert(
        christmas && christmas.date === '2026-12-25',
        'TC-028: Christmas on correct date',
        '2026-12-25',
        christmas ? christmas.date : 'not found'
    );

    console.log('\n📋 Test Category: Comp-Off Display\n');

    // Test 12: Comp-off cards visible
    const chetanCard = document.getElementById('compoff-chetan');
    const subhamCard = document.getElementById('compoff-subham');
    const afnaanCard = document.getElementById('compoff-afnaan');

    assert(
        chetanCard && chetanCard.textContent !== '',
        'TC-029: Chetan comp-off balance displayed',
        'has content',
        chetanCard ? 'visible' : 'missing'
    );

    assert(
        subhamCard && subhamCard.textContent !== '',
        'TC-030: Subham comp-off balance displayed',
        'has content',
        subhamCard ? 'visible' : 'missing'
    );

    assert(
        afnaanCard && afnaanCard.textContent !== '',
        'TC-031: Afnaan comp-off balance displayed',
        'has content',
        afnaanCard ? 'visible' : 'missing'
    );

    console.log('\n' + '='.repeat(60));
    console.log('📊 TEST SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Passed: ${passedTests}`);
    console.log(`❌ Failed: ${failedTests}`);
    console.log(`📊 Total:  ${passedTests + failedTests}`);
    console.log(`📈 Pass Rate: ${((passedTests / (passedTests + failedTests)) * 100).toFixed(1)}%`);
    console.log('='.repeat(60));

    if (failedTests === 0) {
        console.log('🎉 ALL TESTS PASSED!');
    } else {
        console.log('⚠️  SOME TESTS FAILED - Review results above');
    }

    console.log('\n📝 Detailed Results:');
    console.table(results);

    return {
        passed: passedTests,
        failed: failedTests,
        total: passedTests + failedTests,
        passRate: ((passedTests / (passedTests + failedTests)) * 100).toFixed(1),
        results
    };
})();
