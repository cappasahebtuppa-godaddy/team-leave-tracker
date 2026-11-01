const fs = require('fs');
const https = require('https');
const { URL } = require('url');

// Read data.json
const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

// Get current week's date range (Monday to Sunday)
function getWeekRange() {
    const now = new Date();

    // Get Monday of current week
    const monday = new Date(now);
    const dayOfWeek = now.getDay();
    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    monday.setDate(now.getDate() + daysToMonday);
    monday.setHours(0, 0, 0, 0);

    // Get Sunday of current week
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23, 59, 59, 999);

    return { monday, sunday };
}

// Format date to DD/MM/YYYY
function formatDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}

// Get date string in YYYY-MM-DD format
function toDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Check if a date is in range
function isDateInRange(dateStr, start, end) {
    const date = new Date(dateStr);
    return date >= start && date <= end;
}

// Get dates in leave range
function getDatesInRange(start, end) {
    const dates = [];
    const [startYear, startMonth, startDay] = start.split('-').map(Number);
    const [endYear, endMonth, endDay] = end.split('-').map(Number);

    const current = new Date(startYear, startMonth - 1, startDay);
    const endDate = new Date(endYear, endMonth - 1, endDay);

    while (current <= endDate) {
        const year = current.getFullYear();
        const month = String(current.getMonth() + 1).padStart(2, '0');
        const day = String(current.getDate()).padStart(2, '0');
        dates.push(`${year}-${month}-${day}`);
        current.setDate(current.getDate() + 1);
    }
    return dates;
}

// Main logic
const { monday, sunday } = getWeekRange();
const mondayStr = toDateString(monday);
const sundayStr = toDateString(sunday);

console.log(`Checking leaves for week: ${formatDate(mondayStr)} to ${formatDate(sundayStr)}`);

// Find leaves that overlap with current week
const leavesThisWeek = data.leaves.filter(leave => {
    const leaveDates = getDatesInRange(leave.startDate, leave.endDate);
    return leaveDates.some(date => isDateInRange(date, monday, sunday));
});

// Find holidays this week
const holidaysThisWeek = data.holidays.filter(holiday =>
    isDateInRange(holiday.date, monday, sunday)
);

// Build Slack message
let slackMessage = {
    text: `📅 *Perimeter Protection Team - Week of ${formatDate(mondayStr)}*`,
    blocks: [
        {
            type: "header",
            text: {
                type: "plain_text",
                text: "🏖️ Weekly Leave Report - Perimeter Protection",
                emoji: true
            }
        },
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: `*Week:* ${formatDate(mondayStr)} - ${formatDate(sundayStr)}`
            }
        },
        {
            type: "divider"
        }
    ]
};

// Add leaves section
if (leavesThisWeek.length > 0) {
    let leavesText = "*🌴 Planned Leaves:*\n\n";

    leavesThisWeek.forEach(leave => {
        const startFormatted = formatDate(leave.startDate);
        const endFormatted = formatDate(leave.endDate);
        const dateRange = leave.startDate === leave.endDate
            ? startFormatted
            : `${startFormatted} - ${endFormatted}`;

        leavesText += `• *${leave.person}* — ${dateRange}\n`;
    });

    slackMessage.blocks.push({
        type: "section",
        text: {
            type: "mrkdwn",
            text: leavesText
        }
    });
} else {
    slackMessage.blocks.push({
        type: "section",
        text: {
            type: "mrkdwn",
            text: "*🌴 Planned Leaves:*\n\n✅ No planned leaves this week — full team coverage!"
        }
    });
}

// Add holidays section
if (holidaysThisWeek.length > 0) {
    slackMessage.blocks.push({
        type: "divider"
    });

    let holidaysText = "*🎉 Public Holidays:*\n\n";

    holidaysThisWeek.forEach(holiday => {
        const dateFormatted = formatDate(holiday.date);
        holidaysText += `• *${holiday.name}* — ${dateFormatted}\n`;
    });

    slackMessage.blocks.push({
        type: "section",
        text: {
            type: "mrkdwn",
            text: holidaysText
        }
    });
}

// Add coverage summary
slackMessage.blocks.push({
    type: "divider"
});

const daysWithLeaves = {};
leavesThisWeek.forEach(leave => {
    const leaveDates = getDatesInRange(leave.startDate, leave.endDate);
    leaveDates.forEach(date => {
        if (isDateInRange(date, monday, sunday)) {
            if (!daysWithLeaves[date]) {
                daysWithLeaves[date] = [];
            }
            daysWithLeaves[date].push(leave.person.split(' ')[0]);
        }
    });
});

let coverageWarning = "";
let criticalDays = [];

for (const [date, people] of Object.entries(daysWithLeaves)) {
    if (people.length >= 2) {
        criticalDays.push(`${formatDate(date)} (${people.join(', ')})`);
    }
}

if (criticalDays.length > 0) {
    coverageWarning = `⚠️ *Coverage Alert:* 2 people away on:\n${criticalDays.map(d => `   • ${d}`).join('\n')}`;
} else if (leavesThisWeek.length > 0) {
    coverageWarning = "✅ *Coverage:* At least 2 team members available all week";
} else {
    coverageWarning = "✅ *Coverage:* Full team available";
}

slackMessage.blocks.push({
    type: "section",
    text: {
        type: "mrkdwn",
        text: coverageWarning
    }
});

// Add link to tracker
slackMessage.blocks.push({
    type: "divider"
});

slackMessage.blocks.push({
    type: "section",
    text: {
        type: "mrkdwn",
        text: "📊 <https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/|View Leave Tracker>"
    }
});

// Send to Slack
const webhookUrl = process.env.SLACK_WEBHOOK_URL;

if (!webhookUrl) {
    console.error('ERROR: SLACK_WEBHOOK_URL environment variable not set');
    process.exit(1);
}

const url = new URL(webhookUrl);
const payload = JSON.stringify(slackMessage);

const options = {
    hostname: url.hostname,
    port: url.port || 443,
    path: url.pathname + url.search,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
    }
};

console.log('Sending message to Slack...');

const req = https.request(options, (res) => {
    let responseBody = '';

    res.on('data', (chunk) => {
        responseBody += chunk;
    });

    res.on('end', () => {
        if (res.statusCode === 200) {
            console.log('✓ Slack notification sent successfully!');
            console.log(`Response: ${responseBody}`);
        } else {
            console.error(`✗ Slack API returned status ${res.statusCode}`);
            console.error(`Response: ${responseBody}`);
            process.exit(1);
        }
    });
});

req.on('error', (error) => {
    console.error('✗ Error sending to Slack:', error);
    process.exit(1);
});

req.write(payload);
req.end();
