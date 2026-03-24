/**
 * Builds the skill/machine map from sheet headers.
 * Supports both continuous ranges (start/end) and specific column lists.
 */
function buildSkillMap_(headers) {
  const skillMap = [];
  
  CONFIG.STATIONS.forEach(st => {
    // Determine which column indices to process for this specific station
    let targetIndices = [];
    
    if (st.columns && Array.isArray(st.columns)) {
      // Use the surgical column list if provided
      targetIndices = st.columns;
    } else if (typeof st.start === 'number' && typeof st.end === 'number') {
      // Otherwise use the continuous range
      for (let i = st.start; i <= st.end; i++) {
        targetIndices.push(i);
      }
    }

    targetIndices.forEach(i => {
      if (headers[i]) {
        const title = headers[i].toString();
        
        // Grouping logic: Only items starting with "Machine:" are treated as hardware
        const isMachine = title.toLowerCase().trim().startsWith("machine");
        
        skillMap.push({
          index: i,
          station: st.code,
          stationName: st.name,
          // Clean the label for the UI (remove [CODE])
          label: title.replace(/\[.*?\]\s?/, "").trim(), 
          // Extract the unique code from brackets
          code: title.match(/\[(.*?)\]/)?.[1] || `SKL-${i}`,
          isMachine: isMachine 
        });
      }
    });
  });
  
  return skillMap;
}