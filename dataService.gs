/**
 * Unified data service for the frontend.
 * Includes caching and payload versioning for robustness.
 */
function getUnifiedData() {
  try {
    validateConfig_();

    const cache = CacheService.getScriptCache();
    const cacheKey = `unifiedData_v${CONFIG.PAYLOAD_VERSION}`;
    const cached = cache.get(cacheKey);
    if (cached) return JSON.parse(cached);

    const ss = SpreadsheetApp.openById(CONFIG.SS_ID);
    const sheet = assertSheet_(ss, CONFIG.RESPONSE_SHEET);
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    assertHeaders_(headers);

    const skillMap = buildSkillMap_(headers);
    Logger.log(skillMap);
    const { employees, peerExperts } = buildEmployeeData_(data.slice(1), skillMap);

    const payload = {
      payloadVersion: CONFIG.PAYLOAD_VERSION,
      target: CONFIG.TARGET,
      scoreMax: CONFIG.SCORE_MAX,
      expertThreshold: CONFIG.EXPERT_THRESHOLD,
      stationList: CONFIG.STATIONS,
      skillMap: skillMap,
      employees: employees,
      peerExperts: peerExperts
    };

    cache.put(cacheKey, JSON.stringify(payload), CONFIG.CACHE_TTL_SECONDS);
    return payload;
  } catch (err) {
    Logger.log(err);
    return {
      error: {
        message: 'Failed to load analytics data. Check configuration and sheet access.',
        details: err && err.message ? err.message : String(err)
      }
    };
  }
}

function getEmployeeRecord(name, rangeMode) {
  try {
    validateConfig_();
    const ss = SpreadsheetApp.openById(CONFIG.SS_ID);
    const sheet = assertSheet_(ss, CONFIG.RESPONSE_SHEET);
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    assertHeaders_(headers);

    const skillMap = buildSkillMap_(headers);
    const rowInfo = findEmployeeRow_(data, name, rangeMode);
    if (!rowInfo) {
      return { error: { message: 'Employee record not found for the selected range.' } };
    }

    const skills = {};
    skillMap.forEach(s => {
      skills[s.code] = parseFloat(rowInfo.row[s.index]) || 0;
    });

    const lastUpdated = rowInfo.date
      ? Utilities.formatDate(rowInfo.date, 'GMT', 'dd MMM yyyy')
      : 'Unknown';

    return { name: safeString_(name), skills: skills, lastUpdated: lastUpdated };
  } catch (err) {
    Logger.log(err);
    return { error: { message: 'Failed to load employee record.', details: err && err.message ? err.message : String(err) } };
  }
}

function addNewEmployee(name) {
  try {
    validateConfig_();
    const cleanName = safeString_(name);
    if (!cleanName) return { error: { message: 'Employee name is required.' } };

    const ss = SpreadsheetApp.openById(CONFIG.SS_ID);
    const sheet = assertSheet_(ss, CONFIG.RESPONSE_SHEET);
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    assertHeaders_(headers);

    const skillMap = buildSkillMap_(headers);
    const row = new Array(headers.length).fill('');
    row[0] = new Date();
    row[1] = cleanName;
    skillMap.forEach(s => { row[s.index] = 0; });

    sheet.appendRow(row);
    clearUnifiedCache_();

    return { success: true };
  } catch (err) {
    Logger.log(err);
    return { error: { message: 'Failed to add employee.', details: err && err.message ? err.message : String(err) } };
  }
}

function updateEmployeeSkills(name, rangeMode, skills) {
  try {
    validateConfig_();
    const cleanName = safeString_(name);
    if (!cleanName) return { error: { message: 'Employee name is required.' } };

    const ss = SpreadsheetApp.openById(CONFIG.SS_ID);
    const sheet = assertSheet_(ss, CONFIG.RESPONSE_SHEET);
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    assertHeaders_(headers);

    const skillMap = buildSkillMap_(headers);
    const rowInfo = findEmployeeRow_(data, cleanName, rangeMode);
    if (!rowInfo) {
      return { error: { message: 'Employee record not found for the selected range.' } };
    }

    const updatedRow = rowInfo.row.slice();
    skillMap.forEach(s => {
      if (skills && Object.prototype.hasOwnProperty.call(skills, s.code)) {
        const val = Number(skills[s.code]);
        updatedRow[s.index] = isNaN(val) ? 0 : val;
      }
    });

    sheet.getRange(rowInfo.rowIndex, 1, 1, headers.length).setValues([updatedRow]);
    clearUnifiedCache_();

    return { success: true };
  } catch (err) {
    Logger.log(err);
    return { error: { message: 'Failed to update employee.', details: err && err.message ? err.message : String(err) } };
  }
}

function deleteEmployeeRow(name) {
  try {
    validateConfig_();
    const cleanName = safeString_(name);
    if (!cleanName) return { error: { message: 'Employee name is required.' } };

    const ss = SpreadsheetApp.openById(CONFIG.SS_ID);
    const sheet = assertSheet_(ss, CONFIG.RESPONSE_SHEET);
    const data = sheet.getDataRange().getValues();
    const rowInfo = findEmployeeRow_(data, cleanName, null);
    if (!rowInfo) {
      return { error: { message: 'Employee record not found.' } };
    }

    sheet.deleteRow(rowInfo.rowIndex);
    clearUnifiedCache_();

    return { success: true };
  } catch (err) {
    Logger.log(err);
    return { error: { message: 'Failed to delete employee row.', details: err && err.message ? err.message : String(err) } };
  }
}

function findEmployeeRow_(data, name, rangeMode) {
  const cutoff = getRangeCutoff_(rangeMode);
  let best = null;

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const rowName = safeString_(row[1]);
    if (!rowName || rowName !== name) continue;

    const date = safeDate_(row[0]);
    if (cutoff && (!date || date < cutoff)) continue;

    if (!best) {
      best = { rowIndex: i + 1, row: row, date: date };
      continue;
    }

    if (date && (!best.date || date > best.date)) {
      best = { rowIndex: i + 1, row: row, date: date };
    } else if (!date && !best.date && i + 1 > best.rowIndex) {
      best = { rowIndex: i + 1, row: row, date: date };
    }
  }

  return best;
}

function getRangeCutoff_(rangeMode) {
  const now = new Date();
  if (rangeMode === '12W') return new Date(now.getTime() - 84 * 24 * 60 * 60 * 1000);
  if (rangeMode === '3M') return new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
  return null;
}

function clearUnifiedCache_() {
  const cacheKey = `unifiedData_v${CONFIG.PAYLOAD_VERSION}`;
  CacheService.getScriptCache().remove(cacheKey);
}

function getEmployeeNames() {
  try {
    validateConfig_();
    const ss = SpreadsheetApp.openById(CONFIG.SS_ID);
    const sheet = assertSheet_(ss, CONFIG.RESPONSE_SHEET);
    const data = sheet.getDataRange().getValues();
    const seen = {};
    const names = [];
    for (let i = 1; i < data.length; i++) {
      const name = safeString_(data[i][1]);
      if (name && !seen[name]) { seen[name] = true; names.push(name); }
    }
    return names.sort();
  } catch (err) {
    Logger.log(err);
    return [];
  }
}

/**
 * Persists one training-session save to a wide-format "Training Responses" sheet.
 *
 * Layout mirrors the Google Form response sheet:
 *   Col 1: Timestamp
 *   Col 2: Employee
 *   Col 3: Station
 *   Col 4+: One column per question ID (e.g. FDN-Q001, CUT-Q003 …)
 *            Header = question ID; cell value = 'Yes', 'No', or ''
 *
 * New question-ID columns are added automatically the first time a station is
 * saved, so all 10 stations accumulate across one shared sheet over time.
 *
 * @param {string} employeeName  Name of the selected employee.
 * @param {string} stationLabel  Human-readable station name (e.g. "Cutting Station").
 * @param {Object[]} payload     Array of question entries, each with:
 *                                 - questionId    {string}  stable ID (e.g. 'CUT-Q003')
 *                                 - globalIndex   {number}  0-based index across all stations
 *                                 - categoryTitle {string}  question category heading
 *                                 - question      {string}  full question text
 *                                 - answer        {string}  'yes', 'no', or ''
 */
function saveTrainingAnswers(employeeName, stationLabel, payload) {
  try {
    const cleanName = safeString_(employeeName);
    if (!cleanName) return { error: { message: 'Employee name is required.' } };

    const ss = SpreadsheetApp.openById(CONFIG.SS_ID);

    // Get or create the wide-format response sheet.
    let sheet = ss.getSheetByName('Training Responses');
    if (!sheet) {
      sheet = ss.insertSheet('Training Responses');
      sheet.appendRow(['Timestamp', 'Employee', 'Station']);
      sheet.setFrozenRows(1);
    }

    // ── Step 1: Read existing headers into a map {questionId -> colNumber (1-indexed)} ──
    const lastExistingCol = Math.max(sheet.getLastColumn(), 3);
    const headerValues = sheet.getRange(1, 1, 1, lastExistingCol).getValues()[0];
    const headerMap = {};
    headerValues.forEach(function(h, i) {
      if (h) headerMap[String(h)] = i + 1;
    });

    // ── Step 2: Add a new header column for every question ID not yet in the sheet ──
    // Sort by globalIndex so columns always appear in the same left-to-right order
    // regardless of which station is saved first.
    const newIds = (payload || [])
      .filter(function(item) { return item.questionId && !headerMap[item.questionId]; })
      .sort(function(a, b) { return (a.globalIndex || 0) - (b.globalIndex || 0) });

    let nextCol = lastExistingCol + 1;
    newIds.forEach(function(item) {
      sheet.getRange(1, nextCol).setValue(item.questionId);
      headerMap[item.questionId] = nextCol;
      nextCol++;
    });

    // ── Step 3: Upsert by exact employee name ──
    // If the employee already has a row, edit that row in place; otherwise create
    // a new one.  This prevents duplicate partial rows for repeat submissions.
    const totalCols = nextCol - 1;
    const targetRow = findTrainingResponseRowByName_(sheet, cleanName);

    // Start from the existing row values (if found) so unanswered payload fields
    // do not wipe out previously saved answers.
    const row = targetRow
      ? sheet.getRange(targetRow, 1, 1, totalCols).getValues()[0]
      : new Array(totalCols).fill('');

    const tsFormatted = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd MMM yyyy HH:mm');
    row[0] = tsFormatted;   // col 1: Timestamp
    row[1] = cleanName;     // col 2: Employee
    row[2] = stationLabel;  // col 3: Last updated station

    (payload || []).forEach(function(item) {
      const col = headerMap[safeString_(item.questionId)];
      // Only write non-empty answers on update, preserving previously saved data.
      if (col && item.answer) row[col - 1] = item.answer;
    });

    if (targetRow) {
      sheet.getRange(targetRow, 1, 1, totalCols).setValues([row]);
    } else {
      sheet.getRange(sheet.getLastRow() + 1, 1, 1, totalCols).setValues([row]);
    }

    return { success: true };
  } catch (err) {
    Logger.log(err);
    return { error: { message: 'Failed to save answers.', details: err && err.message ? err.message : String(err) } };
  }
}

/**
 * Finds an existing response row by exact employee name match (column B).
 * Returns null when no row exists.
 */
function findTrainingResponseRowByName_(sheet, employeeName) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return null;

  const nameValues = sheet.getRange(2, 2, lastRow - 1, 1).getValues();

  // Search bottom-up so if legacy duplicates exist, we edit the most recent one.
  for (let i = nameValues.length - 1; i >= 0; i--) {
    if (safeString_(nameValues[i][0]) === employeeName) {
      return i + 2;
    }
  }

  return null;
}
