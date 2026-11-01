# SharePoint Lists Setup Script for Team Leave Tracker
# This script creates the TeamLeaves and PublicHolidays lists with all required columns

param(
    [Parameter(Mandatory=$true)]
    [string]$SiteUrl,

    [Parameter(Mandatory=$false)]
    [switch]$PrePopulateHolidays
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Team Leave Tracker - SharePoint Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if PnP PowerShell module is installed
Write-Host "Checking for PnP.PowerShell module..." -ForegroundColor Yellow
if (-not (Get-Module -ListAvailable -Name PnP.PowerShell)) {
    Write-Host "PnP.PowerShell module not found. Installing..." -ForegroundColor Yellow
    Install-Module -Name PnP.PowerShell -Scope CurrentUser -Force -AllowClobber
    Write-Host "✓ Module installed successfully" -ForegroundColor Green
} else {
    Write-Host "✓ Module found" -ForegroundColor Green
}

Write-Host ""
Write-Host "Connecting to SharePoint site: $SiteUrl" -ForegroundColor Yellow
Write-Host "You will be prompted to sign in with your Microsoft 365 account..." -ForegroundColor Yellow
Write-Host ""

try {
    # Connect to SharePoint Online (Interactive authentication)
    Connect-PnPOnline -Url $SiteUrl -Interactive
    Write-Host "✓ Connected successfully" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "✗ Failed to connect to SharePoint" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

# ============================================
# Create TeamLeaves List
# ============================================
Write-Host "Creating 'TeamLeaves' list..." -ForegroundColor Yellow

try {
    # Check if list already exists
    $existingList = Get-PnPList -Identity "TeamLeaves" -ErrorAction SilentlyContinue

    if ($existingList) {
        Write-Host "⚠ List 'TeamLeaves' already exists. Skipping creation." -ForegroundColor Yellow
    } else {
        # Create the list
        $teamLeavesList = New-PnPList -Title "TeamLeaves" -Template GenericList -OnQuickLaunch
        Write-Host "✓ List created" -ForegroundColor Green

        # Add Person column (Single line of text)
        Add-PnPField -List "TeamLeaves" -DisplayName "Person" -InternalName "Person" -Type Text -AddToDefaultView
        Write-Host "✓ Added 'Person' column" -ForegroundColor Green

        # Add StartDate column (DateTime)
        Add-PnPField -List "TeamLeaves" -DisplayName "StartDate" -InternalName "StartDate" -Type DateTime -AddToDefaultView
        Write-Host "✓ Added 'StartDate' column" -ForegroundColor Green

        # Add EndDate column (DateTime)
        Add-PnPField -List "TeamLeaves" -DisplayName "EndDate" -InternalName "EndDate" -Type DateTime -AddToDefaultView
        Write-Host "✓ Added 'EndDate' column" -ForegroundColor Green

        Write-Host "✓ TeamLeaves list setup complete!" -ForegroundColor Green
    }
} catch {
    Write-Host "✗ Error creating TeamLeaves list" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

Write-Host ""

# ============================================
# Create PublicHolidays List
# ============================================
Write-Host "Creating 'PublicHolidays' list..." -ForegroundColor Yellow

try {
    # Check if list already exists
    $existingList = Get-PnPList -Identity "PublicHolidays" -ErrorAction SilentlyContinue

    if ($existingList) {
        Write-Host "⚠ List 'PublicHolidays' already exists. Skipping creation." -ForegroundColor Yellow
    } else {
        # Create the list
        $holidaysList = New-PnPList -Title "PublicHolidays" -Template GenericList -OnQuickLaunch
        Write-Host "✓ List created" -ForegroundColor Green

        # Add HolidayName column (Single line of text)
        Add-PnPField -List "PublicHolidays" -DisplayName "HolidayName" -InternalName "HolidayName" -Type Text -AddToDefaultView
        Write-Host "✓ Added 'HolidayName' column" -ForegroundColor Green

        # Add HolidayDate column (DateTime)
        Add-PnPField -List "PublicHolidays" -DisplayName "HolidayDate" -InternalName "HolidayDate" -Type DateTime -AddToDefaultView
        Write-Host "✓ Added 'HolidayDate' column" -ForegroundColor Green

        Write-Host "✓ PublicHolidays list setup complete!" -ForegroundColor Green
    }
} catch {
    Write-Host "✗ Error creating PublicHolidays list" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

Write-Host ""

# ============================================
# Pre-populate 2026 Holidays (Optional)
# ============================================
if ($PrePopulateHolidays) {
    Write-Host "Pre-populating 2026 public holidays..." -ForegroundColor Yellow

    $holidays = @(
        @{Name="New Year's Day"; Date="2026-01-01"},
        @{Name="Republic Day"; Date="2026-01-26"},
        @{Name="Wellness Day"; Date="2026-03-13"},
        @{Name="Good Friday"; Date="2026-04-03"},
        @{Name="May Day"; Date="2026-05-01"},
        @{Name="Wellness Day"; Date="2026-05-15"},
        @{Name="Bakrid / Eid al-Adha"; Date="2026-05-27"},
        @{Name="Wellness Day"; Date="2026-08-14"},
        @{Name="Independence Day"; Date="2026-08-15"},
        @{Name="Mahatma Gandhi Jayanti"; Date="2026-10-02"},
        @{Name="Wellness Day"; Date="2026-10-09"},
        @{Name="Diwali"; Date="2026-11-08"},
        @{Name="Diwali Break"; Date="2026-11-09"},
        @{Name="Christmas Day"; Date="2026-12-25"}
    )

    try {
        foreach ($holiday in $holidays) {
            Add-PnPListItem -List "PublicHolidays" -Values @{
                "Title" = $holiday.Name
                "HolidayName" = $holiday.Name
                "HolidayDate" = $holiday.Date
            } | Out-Null
            Write-Host "  ✓ Added: $($holiday.Name)" -ForegroundColor Gray
        }
        Write-Host "✓ All 2026 holidays added!" -ForegroundColor Green
    } catch {
        Write-Host "⚠ Some holidays may not have been added" -ForegroundColor Yellow
        Write-Host $_.Exception.Message -ForegroundColor Red
    }
    Write-Host ""
}

# ============================================
# Summary
# ============================================
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "SharePoint Lists Created:" -ForegroundColor White
Write-Host "  ✓ TeamLeaves (Person, StartDate, EndDate)" -ForegroundColor Green
Write-Host "  ✓ PublicHolidays (HolidayName, HolidayDate)" -ForegroundColor Green
if ($PrePopulateHolidays) {
    Write-Host "  ✓ 2026 Holidays pre-populated" -ForegroundColor Green
}
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "  1. Verify lists in SharePoint: $SiteUrl" -ForegroundColor White
Write-Host "  2. Register Azure AD application (see setup guide)" -ForegroundColor White
Write-Host "  3. Configure API permissions" -ForegroundColor White
Write-Host "  4. Update CONFIG in index-sharepoint.html" -ForegroundColor White
Write-Host "  5. Deploy to GitHub Pages" -ForegroundColor White
Write-Host ""
Write-Host "SharePoint Site URL: $SiteUrl" -ForegroundColor Cyan
Write-Host ""

# Disconnect
Disconnect-PnPOnline
