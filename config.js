/**
 * Central configuration for the KPI visualization app.
 * Philip Cowan Skill Analytics - Version 1.1
 */
const CONFIG = {
  // Spreadsheet ID containing the Google Form responses
  SS_ID: '1KM3mYg5STn9qeeaR9PrAOtuHRhX7Lg6Z0izFgotuvIM',
  
  // Sheet tab where the form responses are stored
  RESPONSE_SHEET: 'Form Responses 1',
  
  // Target score used by the UI for gap analysis
  TARGET: 4,
  
  // Highest possible score in the scale
  SCORE_MAX: 6,
  
  // Score that qualifies as expert/master for peer support (Strengths)
  EXPERT_THRESHOLD: 5,
  
  // Cache TTL in seconds for unified payload
  CACHE_TTL_SECONDS: 300,
  
  // Payload version for frontend/backward compatibility
  PAYLOAD_VERSION: '1.0',
  
  /**
   * STATION METADATA
   * Uses 'start/end' for continuous blocks or 'columns' for non-sequential selection.
   */
  STATIONS: [
    { name: 'Cutting', code: 'CUT', start: 2, end: 14 },
    { name: 'Sewing', code: 'SEW', start: 15, end: 37 },
    
    // Split: Heading & Taping (Surgical Selection)
    { name: 'Heading', code: 'HDG', columns: [38, 39, 41, 42, 43, 44] },
    { name: 'Taping', code: 'TAP', columns: [40, 45, 46, 47, 48, 49] },
    
    { name: 'Pressing & Dressing', code: 'PRD', start: 50, end: 59 },
    
    // Split: Soft Furnishings (Individualized Column Lists)
    { name: 'Pelmet', code: 'PEL', columns: [60, 61, 62, 63, 64, 65, 66] },
    { name: 'Roman', code: 'ROM', columns: [67, 68, 69, 70, 71, 72, 73, 74] },
    { name: 'Cushion', code: 'CSH', columns: [75, 76, 77, 78, 79] },
    
    { name: 'Quality Control', code: 'QCT', start: 80, end: 89 }
  ]
};