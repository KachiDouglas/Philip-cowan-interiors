/**
 * Validates the CONFIG object has all required fields.
 * Throws a descriptive error if anything is missing.
 */
function validateConfig_() {
  if (!CONFIG || typeof CONFIG !== 'object') throw new Error('CONFIG is not defined.');
  if (!CONFIG.SS_ID) throw new Error('CONFIG.SS_ID is missing.');
  if (!CONFIG.RESPONSE_SHEET) throw new Error('CONFIG.RESPONSE_SHEET is missing.');
  if (!Array.isArray(CONFIG.STATIONS) || !CONFIG.STATIONS.length) {
    throw new Error('CONFIG.STATIONS is missing or empty.');
  }
}

/**
 * Returns the named sheet or throws if it does not exist.
 */

function assertSheet_(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) throw new Error(`Sheet "${sheetName}" not found in spreadsheet.`);
  return sheet;
}

/**
 * Asserts that a header row exists and has at least 2 columns
 * (timestamp + name) before any skill columns.
 */
function assertHeaders_(headers) {
  if (!headers || headers.length < 2) {
    throw new Error('Sheet has no headers or insufficient columns. Expected at least a timestamp column and a name column.');
  }
}