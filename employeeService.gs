/**
 * Builds the employees array and peerExperts map from raw sheet rows.
 *
 * @param {Array[]} rows  - 2D array of row data (header row already removed).
 * @param {Object[]} skillMap - Output of buildSkillMap_().
 * @returns {{ employees: Object[], peerExperts: Object }}
 */
function buildEmployeeData_(rows, skillMap) {
  // Group rows by employee name, keeping only the most-recent entry per person.
  const byName = {};

  rows.forEach(function(row) {
    const name = safeString_(row[1]);
    if (!name) return;

    const date = safeDate_(row[0]);
    const existing = byName[name];

    if (!existing) {
      byName[name] = { row: row, date: date };
    } else if (date && (!existing.date || date > existing.date)) {
      byName[name] = { row: row, date: date };
    }
  });

  const expertThreshold = CONFIG.EXPERT_THRESHOLD || 5;
  const peerExperts = {};

  const employees = Object.keys(byName).map(function(name) {
    const entry = byName[name];
    const individualSkills = {};

    skillMap.forEach(function(skill) {
      const score = parseFloat(entry.row[skill.index]) || 0;
      individualSkills[skill.code] = score;

      // Record as a peer expert for this skill if they meet the threshold.
      if (score >= expertThreshold) {
        if (!peerExperts[skill.code]) peerExperts[skill.code] = [];
        peerExperts[skill.code].push(name);
      }
    });

    const lastUpdated = entry.date
      ? Utilities.formatDate(entry.date, Session.getScriptTimeZone(), 'dd MMM yyyy')
      : 'Unknown';

    return { name: name, lastUpdated: lastUpdated, individualSkills: individualSkills };
  });

  return { employees: employees, peerExperts: peerExperts };
}

/**
 * Safely converts a value to a trimmed string. Returns '' for null/undefined.
 */
function safeString_(val) {
  if (val === null || val === undefined) return '';
  return String(val).trim();
}

/**
 * Safely parses a value as a Date. Returns null if invalid.
 */
function safeDate_(val) {
  if (!val) return null;
  if (val instanceof Date) return isNaN(val.getTime()) ? null : val;
  const d = new Date(val);
  return isNaN(d.getTime()) ? null : d;
}