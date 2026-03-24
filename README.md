# Philip Cowan Interiors Analytics

Production and training analytics web app built on Google Apps Script.

This application helps supervisors and operations teams:
- Track employee skill levels by station and machine.
- Manage employee records and skill updates.
- Capture structured training Yes/No responses.
- Visualize training completion by employee, by station, and overall.

The app is designed for both day-to-day users (supervisors/managers) and developers who need to maintain or extend the system.

## Table of Contents
- Overview
- User Guide
- Pages and Navigation
- UI and Visualization Design
- Data Model and Processing Logic
- State Management and Rendering Control
- Project Structure
- Setup and Installation
- Deployment with clasp
- Common Workflows for Developers
- Future Improvements

## Overview

### What the app does
The app reads employee skill data and training response data from Google Sheets, then provides:
- Individual skill analytics dashboards.
- Factory heatmap comparisons.
- Staff management tools (add/edit/delete employee rows).
- Training content and answer capture.
- Training completion visuals with weighted percentages.

### Why it is valuable
- Standardizes how performance is measured across stations.
- Makes gaps easy to identify using visual cues and completion percentages.
- Supports training planning by highlighting critical low-completion areas.

## User Guide

### 1. Open the app
Load the Apps Script web app URL.

### 2. Choose a section from the top navigation
Available sections:
- Individual Dashboard
- Factory Heatmap
- Manage-Staff
- Staff-Training
- Training-visuals

### 3. Typical workflows

#### Workflow A: Review individual skills
1. Go to Individual Dashboard.
2. Select an employee.
3. Review radar chart, strengths, gaps, and trainer suggestions.

#### Workflow B: Compare staff across the factory
1. Go to Factory Heatmap.
2. Switch mode between section averages and machine heatmap.
3. Filter by section if needed.

#### Workflow C: Manage employee records
1. Go to Manage-Staff.
2. Select an employee explicitly from the dropdown (no default preselection).
3. Update station scores and save.
4. Optionally add new employee or delete the selected employee row.

#### Workflow D: Record training checks
1. Go to Staff-Training.
2. Select an employee.
3. Select training page and section.
4. Mark each question Yes or No.
5. Save Results.

#### Workflow E: Analyze training completion
1. Go to Training-visuals.
2. Select an employee from the Training-visuals dropdown.
3. View:
	 - Overall completion donut chart.
	 - Station performance horizontal bar chart.
	 - Station breakdown table.
	 - Critical gaps panel.

### Important behavior
- Training-visuals does not fetch or render employee training metrics until a user is explicitly selected.
- Before selection, the view shows placeholder messaging and dimmed cards.
- Missing training responses are treated as No for completion percentages.

## Pages and Navigation

### Primary pages/screens
There are 5 primary views in the single-page React app:
1. Individual Dashboard
2. Factory Heatmap
3. Manage-Staff
4. Staff-Training
5. Training-visuals

### Training pages
Inside Staff-Training, there are 11 training content pages:
- Induction Guide
- Foundation
- Cutting
- Sewing
- Heading
- Taping
- Pressing
- Pelmet
- Roman Blind
- Cushion
- Quality Control

### Navigation model
- Top nav buttons switch primary views.
- Staff-Training contains its own page and section tabs.
- All rendering occurs in one root template and one React app.

## UI and Visualization Design

### Layout strategy
- Top-level nav and controls at the top.
- Main content area switches by active view.
- Training-visuals layout:
	- Top: overall completion card (donut + summary).
	- Middle: station comparison chart.
	- Bottom: station table + critical gaps.

### Core components
- Dropdowns/selects for employee and filtering.
- Buttons for actions and view switching.
- Chart.js charts:
	- Radar chart for skills.
	- Doughnut chart for overall training completion.
	- Horizontal bar chart for station completion.
- Tables for detailed breakdowns.

### Why these visualizations
- Donut chart: quick at-a-glance progress toward 100% overall training completion.
- Horizontal bar chart: easiest way to compare many stations with long labels.
- Breakdown table: exact numbers for audits and decisions.
- Critical gaps panel: prioritizes low-completion/high-volume areas.

### Color semantics
- Green: high performance.
- Yellow: medium performance.
- Red: low performance.

## Data Model and Processing Logic

### Data sources
- Main skill data sheet: configured by `CONFIG.RESPONSE_SHEET` (currently Form Responses 1).
- Training responses sheet: Training Responses (wide format, one question ID per column).

### Fetch strategy
- Unified analytics payload fetched through `getUnifiedData()`.
- Employee list fetched via `getEmployeeNames()`.
- Training completion fetched only when Training-visuals employee is selected via `getEmployeeTrainingCompletion(employeeName)`.

### Employee matching
- Name matching uses exact trimmed string comparison.
- Training completion reads the latest matching row for employee name in Training Responses.

### Yes/No transformation
- Yes is counted as positive completion.
- No is counted as incomplete.
- Blank/missing is treated as No in completion math.

### Percentage formulas

Per-station completion:

`Completion % per Station = Yes Count / Total Station Questions * 100`

Overall completion (weighted by question volume):

`Overall Completion % = Total Yes Across All Stations / Total Questions Across All Stations * 100`

This ensures stations with more questions contribute proportionally more to overall completion.

## State Management and Rendering Control

### Key state patterns
- Controlled selects for all employee dropdowns.
- Separate selection state for Training-visuals to avoid implicit fetches from other views.
- Guarded effects and guarded handlers to prevent null/empty selections from triggering processing.

### Initial render controls
- Training-visuals starts with no selected employee.
- Charts and table remain empty/dimmed until explicit selection.
- Loading indicators appear only after user-triggered fetch.

### Validation/guards
- Null/empty selection checks before API calls.
- No save/update/delete operations proceed without explicit employee selection.

## Project Structure

### Apps Script backend files
- `code.gs`: web app entry (`doGet`) and HTML include helper.
- `config.gs`: spreadsheet ID, station metadata, score settings.
- `dataService.gs`: data read/write APIs, training save logic, training completion metrics.
- `employeeService.gs`: employee aggregation helpers.
- `skillMapService.gs`: header-to-skill map builder.
- `validation.gs`: config/sheet/header assertions.
- `trainingData.gs`: training content dataset and accessor.

### Frontend/template files
- `index.html`: root template and script/style bootstrapping.
- `javascript.html`: main React app and all view rendering.
- `style.html`: dashboard styles.
- `trainingStyles.html`: training-focused style rules.

### Config/deploy files
- `appsscript.json`: Apps Script manifest.
- `.clasp.json`: clasp project binding.
- `.claspignore`: push filter (currently only `.gs`, `.html`, and manifest).

## Setup and Installation

### Prerequisites
- Node.js installed.
- Google account with access to Apps Script project and spreadsheet.
- `clasp` installed globally:

```bash
npm install -g @google/clasp
```

### Authenticate and verify

```bash
clasp login
clasp status
```

### Local project expectations
- This project is Apps Script-first. There is no separate Node runtime build step required to run in production.
- Frontend libraries (React, ReactDOM, Tailwind, Chart.js, Babel) are loaded via CDN in `index.html`.

## Deployment with clasp

### Push latest code

```bash
clasp push
```

### Check deployments

```bash
clasp deployments
```

### Optional versioning and deployment

```bash
clasp version "Describe the release"
clasp deploy
```

## Common Workflows for Developers

### Add a new station
1. Add station metadata in `config.gs` (`CONFIG.STATIONS`).
2. Ensure sheet columns/headers exist for station questions.
3. Add training content/questions in `trainingData.gs`.
4. Update any station mappings that rely on code prefixes in `javascript.html` and `dataService.gs`.
5. Validate visuals and completion calculations for the new station.

### Modify completion logic
Primary function:
- `getEmployeeTrainingCompletion(employeeName)` in `dataService.gs`.

When changing assumptions (for example, how blanks are treated), update:
- Backend calculation code.
- Training-visuals explanatory text in UI.

### Add a new visualization
1. Add local state/refs in `javascript.html`.
2. Add guarded rendering to avoid initial null state issues.
3. Create/destroy Chart.js instance in effect cleanup.
4. Keep employee-selection gating in place to avoid unnecessary fetches.

## Future Improvements

- Add date-range filters for training completion trends.
- Add CSV/PDF export for training visuals and breakdown tables.
- Add role-based access (admin vs viewer).
- Add optimistic UI updates and structured toast notifications.
- Add lightweight unit/integration tests for calculation helpers.
- Add stronger schema validation for sheet headers and question IDs.
- Add cache strategy for training completion endpoint if dataset grows significantly.

## Notes for New Developers

Start with these files first:
1. `code.gs` for entry routing.
2. `dataService.gs` for business logic and API surface.
3. `javascript.html` for UI behavior and rendering.
4. `trainingData.gs` for training content and question structure.

If you can explain the flow from:
- employee select -> API call -> transformed metrics -> chart render,
you are ready to implement new features safely.
