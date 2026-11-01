#!/usr/bin/env python3
"""
Creates a properly formatted Excel template for the Leave Tracker
"""

from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.worksheet.datavalidation import DataValidation
from datetime import datetime, timedelta

# Create workbook
wb = Workbook()
wb.remove(wb.active)  # Remove default sheet

# ===== LEAVES SHEET =====
leaves_sheet = wb.create_sheet("Leaves", 0)

# Headers
leaves_headers = ["Person", "StartDate", "EndDate", "Duration (Days)", "Notes"]
leaves_sheet.append(leaves_headers)

# Format headers
header_fill = PatternFill(start_color="4472C4", end_color="4472C4", fill_type="solid")
header_font = Font(bold=True, color="FFFFFF", size=12)
header_alignment = Alignment(horizontal="center", vertical="center")

for cell in leaves_sheet[1]:
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = header_alignment

# Set column widths
leaves_sheet.column_dimensions['A'].width = 20  # Person
leaves_sheet.column_dimensions['B'].width = 15  # StartDate
leaves_sheet.column_dimensions['C'].width = 15  # EndDate
leaves_sheet.column_dimensions['D'].width = 18  # Duration
leaves_sheet.column_dimensions['E'].width = 30  # Notes

# Add data validation for Person column (dropdown)
team_members = '"Chetan Tuppad,Subham Srivastava,Afnaan Ladji"'
person_validation = DataValidation(type="list", formula1=team_members, allow_blank=False)
person_validation.error = 'Please select a team member from the list'
person_validation.errorTitle = 'Invalid Entry'
leaves_sheet.add_data_validation(person_validation)
person_validation.add(f'A2:A1000')  # Apply to all rows

# Add sample data
sample_leaves = [
    ["Afnaan Ladji", "2026-11-06", "2026-11-06", "1", "Personal day"],
    ["Chetan Tuppad", "2026-11-15", "2026-11-16", "2", "Vacation"],
]

for row_data in sample_leaves:
    leaves_sheet.append(row_data)

# Add formula for Duration column (auto-calculate)
for row in range(2, leaves_sheet.max_row + 1):
    leaves_sheet[f'D{row}'] = f'=IF(AND(B{row}<>"",C{row}<>""),C{row}-B{row}+1,"")'

# Format date columns
for row in range(2, 100):  # Format first 100 rows
    for col in ['B', 'C']:
        cell = leaves_sheet[f'{col}{row}']
        cell.number_format = 'YYYY-MM-DD'
        cell.alignment = Alignment(horizontal="center")

# Format Duration column
for row in range(2, 100):
    cell = leaves_sheet[f'D{row}']
    cell.alignment = Alignment(horizontal="center")

# Add borders to all cells
thin_border = Border(
    left=Side(style='thin'),
    right=Side(style='thin'),
    top=Side(style='thin'),
    bottom=Side(style='thin')
)

for row in leaves_sheet.iter_rows(min_row=1, max_row=100, min_col=1, max_col=5):
    for cell in row:
        cell.border = thin_border

# Freeze header row
leaves_sheet.freeze_panes = 'A2'

# ===== HOLIDAYS SHEET =====
holidays_sheet = wb.create_sheet("Holidays", 1)

# Headers
holidays_headers = ["Name", "Date", "Day of Week", "Type"]
holidays_sheet.append(holidays_headers)

# Format headers
for cell in holidays_sheet[1]:
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = header_alignment

# Set column widths
holidays_sheet.column_dimensions['A'].width = 30  # Name
holidays_sheet.column_dimensions['B'].width = 15  # Date
holidays_sheet.column_dimensions['C'].width = 15  # Day of Week
holidays_sheet.column_dimensions['D'].width = 20  # Type

# Add data validation for Type column
holiday_types = '"National Holiday,Wellness Day,Festival,Company Holiday"'
type_validation = DataValidation(type="list", formula1=holiday_types, allow_blank=True)
holidays_sheet.add_data_validation(type_validation)
type_validation.add('D2:D1000')

# Add 2026 holidays
holidays_data = [
    ["New Year's Day", "2026-01-01", "", "National Holiday"],
    ["Republic Day", "2026-01-26", "", "National Holiday"],
    ["Wellness Day", "2026-03-13", "", "Wellness Day"],
    ["Good Friday", "2026-04-03", "", "National Holiday"],
    ["May Day", "2026-05-01", "", "National Holiday"],
    ["Wellness Day", "2026-05-15", "", "Wellness Day"],
    ["Bakrid / Eid al-Adha", "2026-05-27", "", "Festival"],
    ["Wellness Day", "2026-08-14", "", "Wellness Day"],
    ["Independence Day", "2026-08-15", "", "National Holiday"],
    ["Mahatma Gandhi Jayanti", "2026-10-02", "", "National Holiday"],
    ["Wellness Day", "2026-10-09", "", "Wellness Day"],
    ["Diwali", "2026-11-08", "", "Festival"],
    ["Diwali Break", "2026-11-09", "", "Company Holiday"],
    ["Christmas Day", "2026-12-25", "", "National Holiday"],
]

for row_data in holidays_data:
    holidays_sheet.append(row_data)

# Add formula for Day of Week (auto-calculate)
for row in range(2, holidays_sheet.max_row + 1):
    holidays_sheet[f'C{row}'] = f'=IF(B{row}<>"",TEXT(B{row},"DDD"),"")'

# Format date column
for row in range(2, 100):
    cell = holidays_sheet[f'B{row}']
    cell.number_format = 'YYYY-MM-DD'
    cell.alignment = Alignment(horizontal="center")

# Format Day of Week column
for row in range(2, 100):
    cell = holidays_sheet[f'C{row}']
    cell.alignment = Alignment(horizontal="center")

# Add borders
for row in holidays_sheet.iter_rows(min_row=1, max_row=100, min_col=1, max_col=4):
    for cell in row:
        cell.border = thin_border

# Freeze header row
holidays_sheet.freeze_panes = 'A2'

# ===== INSTRUCTIONS SHEET =====
instructions_sheet = wb.create_sheet("📖 Instructions", 2)

instructions = [
    ["Perimeter Protection Leave Tracker - Instructions"],
    [""],
    ["🏖️ HOW TO USE THIS FILE"],
    [""],
    ["Option 1: Edit Directly in Excel"],
    ["• Open this file in Excel or Excel Online"],
    ["• Go to 'Leaves' or 'Holidays' sheet"],
    ["• Add/edit/delete rows as needed"],
    ["• Changes will sync to the web app automatically (refresh after 30 seconds)"],
    [""],
    ["Option 2: Use the Web App"],
    ["• Visit: https://cappasahebtuppa-godaddy.github.io/team-leave-tracker/"],
    ["• Sign in with your Microsoft account"],
    ["• Add leaves and holidays through the web interface"],
    ["• Changes appear in this Excel file automatically"],
    [""],
    ["📅 LEAVES SHEET"],
    ["• Person: Select from dropdown (Chetan, Subham, or Afnaan)"],
    ["• StartDate: Enter as YYYY-MM-DD (e.g., 2026-11-15)"],
    ["• EndDate: Enter as YYYY-MM-DD (e.g., 2026-11-16)"],
    ["• Duration: Auto-calculated (no need to enter)"],
    ["• Notes: Optional notes about the leave"],
    [""],
    ["🎉 HOLIDAYS SHEET"],
    ["• Name: Holiday name (e.g., Christmas)"],
    ["• Date: Enter as YYYY-MM-DD (e.g., 2026-12-25)"],
    ["• Day of Week: Auto-calculated (no need to enter)"],
    ["• Type: Select from dropdown (National Holiday, Wellness Day, etc.)"],
    [""],
    ["⚠️ IMPORTANT RULES"],
    ["• Always keep the header row (Row 1) intact"],
    ["• Use date format: YYYY-MM-DD (e.g., 2026-11-15)"],
    ["• Don't delete the Leaves or Holidays sheets"],
    ["• Maximum 2 people can be on leave on the same day"],
    [""],
    ["🔄 SYNC"],
    ["• Excel → Web App: Changes appear after refresh (30 seconds)"],
    ["• Web App → Excel: Changes appear immediately in Excel"],
    ["• Both can be used simultaneously"],
    [""],
    ["📧 TEAM MEMBERS"],
    ["• Chetan Tuppad"],
    ["• Subham Srivastava"],
    ["• Afnaan Ladji"],
    [""],
    ["🆘 TROUBLESHOOTING"],
    ["• If web app doesn't load: Make sure sheets are named exactly 'Leaves' and 'Holidays'"],
    ["• If dates look wrong: Use YYYY-MM-DD format"],
    ["• If dropdown doesn't work: Enable macros/data validation in Excel"],
]

# Add instructions
for row in instructions:
    instructions_sheet.append(row)

# Format instructions
title_font = Font(bold=True, size=16, color="1F4E78")
heading_font = Font(bold=True, size=12, color="2E75B5")
instructions_sheet['A1'].font = title_font

for row in [3, 16, 23, 30, 35, 40, 44]:
    instructions_sheet[f'A{row}'].font = heading_font

# Set column width
instructions_sheet.column_dimensions['A'].width = 80

# Wrap text
for row in instructions_sheet.iter_rows():
    for cell in row:
        cell.alignment = Alignment(wrap_text=True, vertical='top')

# ===== SAVE FILE =====
output_file = "Perimeter Protection Leave Tracker - Template.xlsx"
wb.save(output_file)
print(f"✅ Excel template created: {output_file}")
print(f"\n📋 What's included:")
print(f"  • Leaves sheet with dropdowns and auto-calculated duration")
print(f"  • Holidays sheet with 2026 holidays pre-filled")
print(f"  • Instructions sheet with usage guide")
print(f"  • Proper formatting, borders, and colors")
print(f"  • Frozen headers for easy scrolling")
print(f"\n📤 Upload this file to SharePoint and update the file path in the config!")
