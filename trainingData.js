const TRAINING_PAGE_DATA = {
  "cushion": {
    "station": {
      "name": "Cushion Station Training Assessment",
      "subtitle": "Philipcowan Interiors",
      "scoreRequirement": "Employees must demonstrate accurate cutting, clean assembly, and professional cushion finishing to pass the assessment."
    },
    "overview": {
      "introduction": "The Cushion Station Training Assessment is a comprehensive program designed to equip employees with the essential skills needed to produce high-quality cushions. The training emphasizes precision, efficiency, and attention to detail because cushions serve both functional and aesthetic roles.",
      "purposeIntro": "The assessment builds competence progressively by breaking cushion production into modular stages that reduce errors, limit waste, and support consistent standards for durability, symmetry, and finish quality.",
      "purposes": [
        "Measure and cut cushion panels accurately while accounting for seam allowance and grain direction.",
        "Prepare and install zips and piping neatly for both function and presentation.",
        "Assemble cushion covers consistently, including boxed or shaped variations where required.",
        "Insert filling evenly and complete final checks for symmetry, comfort, and finish quality."
      ],
      "learningOutcome": "Upon successful completion, the employee will be capable of independently producing cushions that are dimensionally accurate and structurally sound. This proficiency reduces rework rates, ensures customer satisfaction, and supports scalable production in a competitive market."
    },
    "modules": [
      {
        "code": "CUS-01",
        "title": "Cushion Panel Cutting",
        "description": "Covers accurate fabric handling, tool selection, and measurement techniques, including seam allowances and grain alignment to prevent warping."
      },
      {
        "code": "CUS-02",
        "title": "Zip Installation",
        "description": "Focuses on concealed, coil, or invisible zip application so zips are aligned cleanly and operate smoothly without puckering."
      },
      {
        "code": "CUS-03",
        "title": "Piping Construction",
        "description": "Covers the making of decorative piping by cutting bias strips, wrapping cording, and sewing with the appropriate machine foot for a uniform edge finish."
      },
      {
        "code": "CUS-04",
        "title": "Cushion Assembly",
        "description": "Integrates previous modules into full cover construction, including handling curves, gussets, and reinforcement at stress points."
      },
      {
        "code": "CUS-05",
        "title": "Cushion Filling",
        "description": "Focuses on inserting and distributing foam or fiber filling evenly so the finished cushion is full, balanced, and free from lumps."
      }
    ],
    "phases": [
      {
        "title": "Preparation and Cutting",
        "description": "This phase establishes the correct dimensions, material orientation, and panel layout before sewing begins.",
        "activities": [
          "Interpret the job sheet for dimensions, fabric type, zip type, and any fire-retardant or allergen-free requirements.",
          "Inspect the fabric under bright light for snags, shading issues, or pattern repeat inconsistencies.",
          "Locate and mark the central motif when patterned fabrics require symmetrical placement.",
          "Measure panels carefully and add the standard seam allowance, typically about 1.5 cm.",
          "Cut with straight, accurate edges and maintain a tolerance of about plus or minus 2 mm."
        ],
        "warning": "Wear cut-resistant gloves and keep fingers clear of blades during all cutting operations."
      },
      {
        "title": "Component Preparation",
        "description": "This phase prepares sub-assemblies so intermediate quality checks can be completed before final construction.",
        "activities": [
          "Cut piping strips on the bias, usually at 45 degrees, to allow smooth shaping around edges.",
          "Wrap cording snugly to avoid waving or uneven piping thickness.",
          "Overlock raw zip insertion edges to reduce fraying and improve long-term zip performance.",
          "Press folds cleanly to prepare the zip area for accurate stitching.",
          "Check fabric grain direction before joining components so the finished cushion does not twist."
        ],
        "warning": "Ignoring straight grain alignment can distort the final cushion shape even when the panels were cut accurately."
      },
      {
        "title": "Technical Sewing",
        "description": "This machine-work phase directly affects zip function, piping quality, seam consistency, and overall durability.",
        "activities": [
          "Install the zipper in the back panel or gusset using a zipper foot for close, accurate stitching.",
          "Test the zip several times to confirm smooth opening and closing.",
          "Attach piping to the front panel, starting mid-side so joins remain discreet.",
          "Notch piping seam allowances around corners to achieve crisp turns without bunching.",
          "Align front and back panels right sides together and leave the zip half-open before sewing the perimeter.",
          "Use a walking foot for thick or slippery fabrics such as velvet or leather where needed."
        ],
        "warning": "If the zipper is fully closed before perimeter sewing, turning the cover right-side out becomes difficult and can damage the seam or zip area."
      },
      {
        "title": "Finishing and Quality Control",
        "description": "This dressing phase converts the sewn shell into a market-ready cushion through shaping, filling, and detailed inspection.",
        "activities": [
          "Trim seam allowances near corners at 45 degrees to reduce bulk before turning.",
          "Turn the cover right-side out and use a bamboo pointer or similar tool to sharpen corners carefully.",
          "Insert the cushion filling and massage it into the corners and edges for even plumpness.",
          "Use baffles where required for feather fills to prevent clumping.",
          "Compare the final dimensions to the job sheet, remove loose threads, and assess symmetry and pattern alignment."
        ],
        "warning": "Over-pointing corners or forcing the insert can damage the fabric or distort the finished shape."
      }
    ],
    "questions": [
      {
        "title": "Job Interpretation and Cutting",
        "items": [
          "Can you identify the correct dimensions and fabric from the job sheet?",
          "Can you measure and cut panels within a plus or minus 2 mm tolerance?",
          "Can you center a fabric pattern symmetrically on the cushion face?"
        ]
      },
      {
        "title": "Zip Work",
        "items": [
          "Can you install a zipper so it operates smoothly and is neatly concealed?",
          "Can you prepare the zip area to reduce fraying and puckering during use?"
        ]
      },
      {
        "title": "Piping and Assembly",
        "items": [
          "Can you create and attach piping evenly around the cushion perimeter?",
          "Can you notch piping corners correctly to ensure a crisp shape?",
          "Can you assemble the cover with a consistent 1.5 cm seam allowance?"
        ]
      },
      {
        "title": "Filling and Shaping",
        "items": [
          "Can you insert and distribute filling to achieve a professional, lump-free finish?",
          "Can you point the corners neatly without damaging the fabric?"
        ]
      },
      {
        "title": "Final Inspection",
        "items": [
          "Can you perform a final quality check for symmetry and thread neatness?",
          "Can you confirm the finished cushion meets dimensional and presentation standards?"
        ]
      }
    ]
  },
  "cutting": {
    "station": {
      "name": "Cutting Station Training Assessment",
      "subtitle": "Philipcowan Interiors",
      "scoreRequirement": "Minimum average score of 4 across all core questions"
    },
    "overview": {
      "introduction": "The Cutting Station Training Assessment is a foundational program tailored to build employee competence in preparing accurate fabric panels for curtains, Roman blinds, pelmets, and cushions. Because cutting determines fit, alignment, and waste levels, this station directly impacts downstream sewing and assembly quality.",
      "purposeIntro": "The assessment focuses on precision, material efficiency, and safe machine handling so that each cut panel is production-ready. It supports measurable outcomes in:",
      "purposes": [
        "Dimensional accuracy to tolerance targets (e.g., +/-2 mm where specified)",
        "Pattern and grain alignment for visual consistency",
        "Material yield optimization to reduce waste and rework",
        "Safe operation of manual and automated cutting equipment",
        "Consistent handover quality to next production stations"
      ],
      "learningOutcome": "On completion, employees can independently plan layouts, measure and mark correctly, execute manual or automated cuts safely, and verify cut quality before handover. This reduces scrap, supports production speed, and improves first-time-right output."
    },
    "modules": [
      {
        "code": "CUT-01",
        "title": "Fabric Layout Planning",
        "description": "Plan fabric positioning based on grain, pattern repeat, and order priorities to maximize yield and reduce avoidable offcuts."
      },
      {
        "code": "CUT-02",
        "title": "Manual and Automated Measuring and Marking",
        "description": "Apply accurate measuring and clear marking techniques using tapes, rulers, and station equipment while allowing for hems, headings, and seam allowances."
      },
      {
        "code": "CUT-03",
        "title": "Automated Fabric Cutting",
        "description": "Operate key machines safely and correctly, including setup checks, calibration awareness, and basic programming steps."
      },
      {
        "code": "CUT-04",
        "title": "Pattern Alignment Techniques",
        "description": "Align motifs and repeats across panels to preserve design continuity in finished products."
      },
      {
        "code": "CUT-05",
        "title": "Cut Panel Inspection",
        "description": "Inspect dimensions, edge quality, grain direction, and labeling to ensure each panel is ready for the next station."
      }
    ],
    "phases": [
      {
        "title": "Preparation and Layout",
        "description": "Set up materials, interpret requirements, and position fabric for efficient and accurate cutting.",
        "activities": [
          "Review order specifications including dimensions, allowances, piece count, and product type.",
          "Inspect fabric under adequate lighting for holes, stains, pulls, shading, and grain issues.",
          "Plan layout strategy for plain and patterned fabrics, including repeat matching where required.",
          "Lay and secure fabric flat without wrinkles or tension distortion before marking and cutting."
        ],
        "warning": "Poor layout planning can significantly increase waste and rework."
      },
      {
        "title": "Measuring and Marking",
        "description": "Translate job specifications into accurate, visible cutting lines and reference marks.",
        "activities": [
          "Measure dimensions with approved tools and verify values against the cutting sheet.",
          "Apply clear cut lines and reference points for joins, matches, and directional fabrics.",
          "Account for seam allowances, heading style requirements, and turnings where applicable.",
          "Double-check critical measurements before moving to cutting execution."
        ],
        "warning": "Always align to grain direction to prevent twisting or warping after assembly."
      },
      {
        "title": "Cutting Execution",
        "description": "Perform controlled cutting using manual or automated methods according to order and fabric characteristics.",
        "activities": [
          "Use manual tools for single-layer or specialist tasks with focus on straightness and edge quality.",
          "Operate Flatbed Measure and Cutter for standard panels after setup checks.",
          "Use AGA-2300 and CCS-2300 according to machine procedures and safety controls.",
          "Maintain layer alignment and adjust technique for thickness, slippage risk, and pattern consistency."
        ],
        "warning": "Measure twice and cut once; verify calibration before high-volume runs."
      },
      {
        "title": "Finishing and Quality Control",
        "description": "Confirm that cut panels meet dimensional, visual, and handling requirements before release.",
        "activities": [
          "Trim rough edges and address fray-prone areas as required by process standards.",
          "Inspect dimensions, pattern continuity, grain orientation, and fabric condition.",
          "Label and separate panels clearly for the next station handover.",
          "Complete final quality check against station quality criteria."
        ],
        "warning": "Unlabeled or mis-grouped pieces can create downstream delays and assembly errors."
      }
    ],
    "questions": [
      {
        "title": "Fabric Layout",
        "items": [
          "Can you lay plain fabric flat on the cutting table without wrinkles?",
          "Can you align patterned fabric so the pattern runs straight?",
          "Can you match pattern repeats across multiple pieces?",
          "Can you position custom fabric correctly according to instructions?"
        ]
      },
      {
        "title": "Measurement",
        "items": [
          "Can you measure curtain panel dimensions correctly?",
          "Can you mark cutting lines clearly and accurately on fabric?",
          "Can you calculate required yield for alternate cuts? (advanced)"
        ]
      },
      {
        "title": "Machine Operation",
        "items": [
          "Can you operate the Flatbed Measure and Cutter correctly?",
          "Can you use the Measuring Machine (AGA-2300) correctly?",
          "Can you operate the Automatic Fabric Cutting Machine (CCS-2300) safely and correctly?"
        ]
      },
      {
        "title": "Cutting Skill",
        "items": [
          "Can you perform manual cutting when required?",
          "Can you avoid fraying or damaging fabric during cutting?"
        ]
      },
      {
        "title": "Cutting Quality Check",
        "items": [
          "Can you verify that cut pieces match required dimensions?",
          "Can you verify that patterned pieces align correctly?",
          "Can you separate and label cut pieces correctly for the next station?"
        ]
      }
    ]
  },
  "foundation": {
    "overview": {
      "introduction": "The Foundation Training Assessment is a prerequisite program designed to evaluate new employees on essential entry-level skills before advancing to station-specific or core production training. This assessment covers critical areas such as interpreting instructions, understanding fabrics, accurate measuring, and workplace safety.",
      "purposeIntro": "This assessment ensures employees can safely and effectively contribute to production processes involving products like curtains, Roman blinds, pelmets, and cushions. By focusing on atomic skills through targeted questions and practical demonstrations, the assessment:",
      "purposes": [
        "Minimizes risks and reduces errors in downstream tasks",
        "Promotes a standardized baseline of competence",
        "Maintains quality, efficiency, and compliance",
        "Supports reduced training time for advanced modules",
        "Lowers defect rates and enhances productivity"
      ],
      "learningOutcome": "Upon passing the assessment, the employee will possess the foundational skills to interpret orders, handle fabrics correctly, measure accurately, and operate safely. This enables seamless integration into production flows and independent application of competencies to avoid common pitfalls like fabric defects, measurement errors, or safety violations."
    },
    "structure": {
      "intro": "The assessment is organized into four key categories derived from the Foundation Modules, each evaluating discrete skills necessary for all factory roles.",
      "requirementText": "Successful completion requires a minimum average score of 4 across all questions.",
      "categories": [
        {
          "icon": "📋",
          "title": "Instruction Interpretation",
          "description": "FND-03 | Read and apply production specifications to prevent misproduction"
        },
        {
          "icon": "🧵",
          "title": "Fabric Understanding",
          "description": "FND-04 | Material identification and handling without introducing defects"
        },
        {
          "icon": "📏",
          "title": "Measuring",
          "description": "FND-05 | Precision techniques for dimensional accuracy in cutting and assembly"
        },
        {
          "icon": "🛡️",
          "title": "Safety",
          "description": "FND-02 | Adherence to protocols around tools and workspaces"
        }
      ],
      "methodIntro": "Employees must demonstrate proficiency through:",
      "methods": [
        "Verbal explanations and descriptions",
        "Practical demonstrations with sample materials and tools",
        "Hands-on task completion under observation",
        "Immediate supervisor feedback"
      ]
    },
    "phases": [
      {
        "title": "Preparation and Review",
        "description": "This initial phase sets the stage for the assessment, emphasizing review and setup to simulate real production scenarios.",
        "activities": [
          "<strong>Gather Materials:</strong> Sample instruction sheets, fabric swatches (plain, patterned, custom), measuring tapes, markers, scissors/cutters, and allowances for curtains",
          "<strong>Orientation Recap:</strong> Review factory structure (FND-01) and how skills fit into production flow",
          "<strong>Safety Briefing:</strong> Reinforce rules like powering off equipment and keeping hands clear",
          "<strong>Protective Gear:</strong> Ensure employees wear protective gear (e.g., gloves for cutters)"
        ]
      },
      {
        "title": "Skill Demonstration (Core Evaluation)",
        "description": "Employees perform tasks under observation, addressing each question category using real or mock setups.",
        "activities": [
          "<strong>Instruction Interpretation:</strong> Present a sample sheet; have employee explain and locate elements",
          "<strong>Fabric Understanding:</strong> Provide swatches; employee identifies types, grains, and defects",
          "<strong>Measuring:</strong> Measure and mark fabric to specs with ±2 mm tolerance (varies by job)",
          "<strong>Safety:</strong> Observe handling of tools/irons and workspace maintenance"
        ],
        "warning": "Common Mistake: Rushing measurements—emphasize double-checking for accuracy."
      },
      {
        "title": "Feedback and Documentation",
        "description": "Post-demonstration, review performance and document scores for records.",
        "activities": [
          "Discuss strengths and areas for improvement",
          "Provide retraining options if needed",
          "Document scores and completion status"
        ]
      }
    ],
    "questions": [
      {
        "icon": "📋",
        "title": "Instruction Interpretation",
        "questions": [
          "Can you read and explain the job's instruction sheet?",
          "Can you find the measurements written on the instruction sheet?",
          "Can you identify the width and drop measurement of the product?",
          "Can you explain the difference between finished size and cut size, turnings, and allowances?",
          "Can you identify how many pieces must be produced from the order sheet?"
        ]
      },
      {
        "icon": "🧵",
        "title": "Fabric Understanding",
        "questions": [
          "Can you identify plain fabric?",
          "Can you identify patterned fabric?",
          "Can you identify custom or special fabric?",
          "Can you identify the width of the fabric (140cm, 300cm)?",
          "Can you identify the direction of the fabric grain? (advanced)",
          "Can you spot visible defects in fabric (holes, stains, pulls)?"
        ]
      },
      {
        "icon": "📏",
        "title": "Measuring",
        "questions": [
          "Can you use a measuring tape correctly?",
          "Can you mark measurements clearly on fabric?",
          "Can you measure a straight line accurately?"
        ]
      },
      {
        "icon": "🛡️",
        "title": "Safety",
        "questions": [
          "Do you handle scissors safely?",
          "Do you handle cutters safely?",
          "Do you handle hot irons safely?",
          "Do you keep the workstation clean and organized?"
        ]
      }
    ]
  },
  "heading": {
    "station": {
      "name": "Heading Station Training Assessment",
      "subtitle": "Philipcowan Interiors",
      "scoreRequirement": "Minimum average score of 4 across all core questions"
    },
    "overview": {
      "introduction": "The Heading Station Training Assessment equips employees with the skills to produce professional curtain headings including pinch pleats, pencil pleats, eyelets, and goblet styles. The heading dictates how a curtain hangs, its fullness, and its overall aesthetic — errors in pleat spacing, symmetry, or attachment lead to costly rework and curtains that fail installation requirements.",
      "purposeIntro": "Through focused modules and machine-based practice, trainees develop the ability to:",
      "purposes": [
        "Identify and interpret different heading styles from job instructions",
        "Calculate pleat spacing and fullness reduction accurately using the pinch pleat machine",
        "Set up and operate the EPS-2200-6 Pinch Pleater and Hyproflex machines correctly",
        "Produce evenly spaced, symmetrical pleats and attach header tape securely",
        "Inspect finished headings for quality and prepare them for the Pressing and Dressing station"
      ],
      "learningOutcome": "On completion, employees can independently identify the required heading style, calculate and form correct pleat spacing, operate heading machines safely, and deliver symmetrical, structurally sound curtain headings that meet client and installation specifications."
    },
    "modules": [
      {
        "code": "HED-01",
        "title": "Curtain Heading Types",
        "description": "Covers heading styles including pinch pleat, goblet, eyelet, and pencil pleat — their applications, fabric suitability, and how each affects drape, fullness, and installation requirements."
      },
      {
        "code": "HED-02",
        "title": "Pleat Calculation and Spacing",
        "description": "Teaches pleat count calculation based on curtain width and fullness ratio, pleat and flat measurement entry into the pinch pleat machine, and manual interval marking where required."
      },
      {
        "code": "HED-03",
        "title": "Machine Setup and Pleat Formation",
        "description": "Covers setup and operation of the EPS-2200-6 Pinch Pleater and Hyproflex, including depth and spacing configuration, symmetry checks, and calibration of settings using test fabric."
      }
    ],
    "phases": [
      {
        "title": "Preparation and Measuring",
        "description": "Review the job specification, verify materials, and calculate pleat layout before machine operation begins.",
        "activities": [
          "<strong>Review the Job Sheet:</strong> Confirm heading style, curtain dimensions, fullness ratio, buckram size, and hook type specified for the order.",
          "<strong>Inspect Sewn Panels:</strong> Check that panels arrived from sewing with clean hems and correct finished dimensions; identify any defects before starting.",
          "<strong>Calculate Pleat Spacing:</strong> Enter the required reduction into the pinch pleat machine to generate pleat and flat measurements; this process will be demonstrated during training.",
          "<strong>Prepare Buckram and Hooks:</strong> Select the correct buckram width and hook type as specified on the instruction sheet; confirm compatibility with the installation track.",
          "<strong>Mark Returns:</strong> Note end returns and overlaps (typically 10 cm) to ensure pleats distribute evenly across the full width including edges."
        ],
        "warning": "Handle pins, hooks, and sharp tools carefully — secure fabric before marking and avoid placing materials on the floor where they can be stepped on."
      },
      {
        "title": "Machine Setup and Initial Pleat Formation",
        "description": "Configure heading machines and begin forming pleats, testing on scrap fabric before working on the final panel.",
        "activities": [
          "<strong>Set Up the EPS-2200-6:</strong> Configure pleat depth, spacing, and style (triple, twin, cartridge) based on job requirements; run a test piece to verify output.",
          "<strong>Adjust the Hyproflex:</strong> Set for the fabric weight and heading style; use for eyelet formation or flexible fabric guidance as required.",
          "<strong>Form Preliminary Pleats:</strong> Feed the panel through the machine using automatic guidance; manual pleating technique will be further demonstrated by your trainer where needed.",
          "<strong>Check Symmetry:</strong> Confirm pleats mirror evenly across the center of the curtain; adjust settings if spacing drifts before proceeding to the full panel."
        ],
        "warning": "Always test machine settings on a scrap piece of matching fabric — uneven tension on the final panel will require full rework."
      },
      {
        "title": "Stitching and Header Attachment",
        "description": "Attach header tape or buckram securely and stitch heading components to produce a durable, aligned finish.",
        "activities": [
          "<strong>Attach Header Tape:</strong> Position tape or buckram along the top edge with correct alignment; pin or tack to hold before stitching.",
          "<strong>Stitch on the Conveyor Lockstitch:</strong> Sew the header tape in straight, continuous lines; backstitch at ends and pleat bases to handle hook load.",
          "<strong>Form Eyelets (where required):</strong> Use the Hyproflex to punch and finish eyelets at correct spacing for eyelet-headed curtains.",
          "<strong>Align Across the Full Width:</strong> Guide the curtain evenly to keep the heading line straight from edge to edge."
        ],
        "warning": "Reduce machine speed on heavy or lined fabrics to prevent skipped stitches at pleat bases where multiple layers meet."
      },
      {
        "title": "Finishing and Quality Control",
        "description": "Inspect the completed heading, insert hardware, and prepare the curtain for the Pressing and Dressing station.",
        "activities": [
          "<strong>Insert Hooks:</strong> Place hooks at the correct pleat intervals for even hanging; test tension across the width. Note: hook insertion is a high-skill activity.",
          "<strong>Trim and Neaten:</strong> Remove loose threads, fold under any raw edges, and steam lightly to settle and define pleats.",
          "<strong>Inspect Spacing and Symmetry:</strong> Measure pleat intervals, hang temporarily to check level and visual balance, and verify there are no loose stitches or exposed buckram.",
          "<strong>Final QC Check:</strong> Confirm buckram is fully concealed, hook positions are correct, and the heading meets the job specification before handover."
        ],
        "warning": "Any heading that fails the symmetry or spacing check must be corrected before passing to Pressing and Dressing — crooked headings cannot be corrected at a later stage."
      }
    ],
    "questions": [
      {
        "title": "Heading Knowledge",
        "items": [
          "Can you identify different curtain heading styles from a job sheet?",
          "Can you explain how heading style affects fullness and drape?",
          "Can you identify the correct buckram width and hook type from instructions?"
        ]
      },
      {
        "title": "Measurement and Calculation",
        "items": [
          "Can you measure the correct pleat spacing for a given curtain width?",
          "Can you enter the correct reduction into the pinch pleat machine to generate pleat and flat sizes?",
          "Can you account for end returns and overlaps in your pleat layout?"
        ]
      },
      {
        "title": "Machine Setup and Operation",
        "items": [
          "Can you set up the EPS-2200-6 Pinch Pleater correctly for a specified style?",
          "Can you set up and operate the Hyproflex machine?",
          "Can you set up the conveyor lockstitch and attach header tape correctly?"
        ]
      },
      {
        "title": "Pleat Formation and Stitching",
        "items": [
          "Can you create evenly spaced pleats across a curtain panel?",
          "Can you keep pleats symmetrical from the centre to each edge?",
          "Can you align the heading evenly across the full curtain width?",
          "Can you form eyelets correctly using the Hyproflex?"
        ]
      },
      {
        "title": "Quality Inspection",
        "items": [
          "Can you inspect finished pleats for spacing consistency and symmetry?",
          "Can you verify that buckram is fully concealed and hooks are correctly positioned?",
          "Can you identify a heading defect and determine whether it requires correction before handover?"
        ]
      }
    ]
  },
  "index": {
    "guide": {
      "title": "Foundation and Core Production Skills Training Guide",
      "subtitle": "Philipcowan Interiors",
      "badge": "Onboarding and Core Skills",
      "introduction": "The Foundation and Core Production Skills Training Guide serves as an essential onboarding resource for new employees in Philip Cowan Interiors manufacturing floor. This comprehensive program introduces foundational knowledge and universal skills required across all production stations, ensuring a safe, efficient, and quality-driven workforce.",
      "summary": "By covering factory orientation, safety protocols, material handling, and basic operational principles, the guide builds a strong base for specialized station training. It emphasizes practical application, precision, and compliance with industry standards, reducing onboarding time, minimizing errors, and fostering a culture of continuous improvement.",
      "uses": [
        "New hire training sessions",
        "Reference material for existing staff",
        "Self-paced learning through the factory website"
      ]
    },
    "foundationModules": {
      "intro": "Foundation modules FND01 to FND05 provide entry-level knowledge critical for all employees, regardless of assigned station. These modules are delivered through interactive sessions including presentations, demonstrations, and quizzes so employees understand core concepts before advancing to hands-on roles.",
      "modules": [
        {
          "code": "FND01",
          "title": "Factory Orientation",
          "purpose": "Introduce employees to the structure of the manufacturing operation and show how their role fits into the wider production ecosystem.",
          "topics": [
            "Company production flow",
            "Departments",
            "Production stations",
            "Product categories"
          ],
          "detailGroups": [
            {
              "label": "Stations",
              "items": [
                "Cutting",
                "Sewing",
                "Heading",
                "Taping",
                "Pressing and Dressing",
                "Pelmet",
                "Roman",
                "Cushion",
                "Quality Control"
              ]
            },
            {
              "label": "Factory Products Include",
              "items": [
                "Curtains",
                "Roman blinds",
                "Pelmets",
                "Cushions"
              ]
            },
            {
              "label": "Process Overview",
              "text": "Interpret Order Specification -> Fabric Preparation -> Cutting -> Sewing -> Heading -> Taping -> Pressing and Dressing -> Quality Control"
            }
          ],
          "learningOutcome": "Employee understands how every station contributes to the final product, enabling better collaboration and awareness of interdependencies."
        },
        {
          "code": "FND02",
          "title": "Workplace Safety",
          "purpose": "Ensure employees operate safely around machines, preventing accidents and promoting a secure work environment.",
          "topics": [
            "Machine safety",
            "Fabric handling",
            "Electrical safety",
            "Emergency procedures"
          ],
          "detailGroups": [
            {
              "label": "Machines",
              "items": [
                "Flatbed Measure and Cutter",
                "Measuring Machine (AGA2300)",
                "Automatic Fabric Cutting Machine (CCS2300)",
                "Lockstitch CCP2300 (conveyor)",
                "Lockstitch CCP3000 (removable head)",
                "Overlock ACP3000 (removable head)",
                "Blind Hemmer Yamato CM352",
                "Conveyor",
                "EPS22006 Pinch Pleater",
                "Hyproflex",
                "DCP3000 Taper (conveyor)",
                "Flatbed iron",
                "Standalone irons",
                "Walkingfoot Lockstitch with Roller",
                "Inspection Hoist"
              ]
            },
            {
              "label": "Safety Rules",
              "items": [
                "Never operate a machine without training",
                "Keep your hands clear of cutting blades",
                "Power off the equipment before maintenance"
              ]
            }
          ],
          "learningOutcome": "Employee can identify hazards, follow safety protocols, and respond to emergencies, contributing to zero-incident operations."
        },
        {
          "code": "FND03",
          "title": "Instruction Sheet Interpretation",
          "purpose": "Teach employees how to read production specifications accurately because this skill is referenced by every station and directly impacts product quality.",
          "topics": [
            "Interpretation of key elements in instruction sheets"
          ],
          "detailGroups": [
            {
              "label": "Instruction Sheets Include",
              "items": [
                "Product type",
                "Dimensions",
                "Seam allowance",
                "Fabric type",
                "Pattern direction",
                "Special instructions"
              ]
            }
          ],
          "learningOutcome": "An employee can interpret production instructions without assistance, minimizing errors in subsequent production phases."
        },
        {
          "code": "FND04",
          "title": "Fabric Knowledge",
          "purpose": "Teach employees how materials behave to ensure proper selection and handling.",
          "topics": [
            "Grain direction",
            "Stretch behaviour",
            "Pattern alignment",
            "Defect identification"
          ],
          "detailGroups": [
            {
              "label": "Fabric Types",
              "items": [
                "Plain fabric",
                "Patterned fabric",
                "Custom design fabric"
              ]
            }
          ],
          "learningOutcome": "Employee selects the correct fabric orientation before production, reducing waste and improving product integrity."
        },
        {
          "code": "FND05",
          "title": "Measurement and Accuracy",
          "purpose": "Teach precision handling of materials to maintain consistency across all stations.",
          "topics": [
            "Measuring techniques",
            "Tolerance limits",
            "Marking techniques"
          ],
          "detailGroups": [
            {
              "label": "Example Tolerance",
              "text": "Plus or minus 2 mm production tolerance"
            }
          ],
          "learningOutcome": "Employee applies accurate measurements in practice, ensuring products meet dimensional specifications and quality benchmarks."
        }
      ]
    },
    "coreSkills": {
      "title": "Level 1 Core Production Skills",
      "intro": "Level 1 modules CPR01 to CPR04 focus on skills used across multiple stations, preventing repetition in station-specific training. They build on the foundation modules and are taught through hands-on workshops, simulations, and assessments.",
      "modules": [
        {
          "code": "CPR01",
          "title": "Machine Fundamentals",
          "purpose": "Introduce basic machine operation principles to build confidence and competence.",
          "topics": [
            "Machine components",
            "Speed control",
            "Threading",
            "Maintenance basics"
          ],
          "detailGroups": [
            {
              "label": "Machines Referenced",
              "items": [
                "Lockstitch machines",
                "Overlock machines",
                "Cutting machines"
              ]
            }
          ],
          "learningOutcome": "Employee understands basic machine behaviour, enabling safe and effective use in various stations."
        },
        {
          "code": "CPR02",
          "title": "Fabric Handling",
          "purpose": "Teach correct material manipulation to avoid defects and ensure smooth workflows.",
          "topics": [
            "Folding",
            "Alignment",
            "Pattern matching",
            "Defect avoidance"
          ],
          "detailGroups": [
            {
              "label": "Referenced By",
              "items": [
                "Cutting",
                "Sewing",
                "Cushion",
                "Roman"
              ]
            }
          ],
          "learningOutcome": "Employee handles fabrics proficiently, supporting quality across interconnected production processes."
        },
        {
          "code": "CPR03",
          "title": "Basic Sewing Principles",
          "purpose": "Teach universal stitching concepts foundational to sewing-related stations.",
          "topics": [
            "Straight stitching",
            "Seam allowance",
            "Edge finishing",
            "Stitch consistency"
          ],
          "detailGroups": [
            {
              "label": "Machines Referenced",
              "items": [
                "Lockstitch CCP2300",
                "Lockstitch CCP3000",
                "Overlock ACP3000"
              ]
            }
          ],
          "learningOutcome": "Employee produces consistent seams, enhancing durability and aesthetics in final products."
        },
        {
          "code": "CPR04",
          "title": "Production Quality Standards",
          "purpose": "Introduce factory quality expectations to instill a commitment to excellence.",
          "topics": [
            "Measurement accuracy",
            "Seam strength",
            "Visual alignment",
            "Finishing quality"
          ],
          "detailGroups": [],
          "learningOutcome": "Employee applies quality checks at every step, reducing defects and supporting overall production standards."
        }
      ]
    },
    "delivery": {
      "intro": "Training is conducted in phases with theoretical overviews, practical demonstrations, and supervised practice. Sessions are modular, allowing flexibility for group or individual pacing.",
      "phases": [
        "Theoretical overviews to build shared understanding",
        "Practical demonstrations that show correct methods and standards",
        "Supervised practice to reinforce competence in real tasks"
      ],
      "assessmentMethods": [
        "Quizzes",
        "Practical demonstrations",
        "Scenario-based evaluations"
      ],
      "closing": "This guide accelerates onboarding while remaining a reference for ongoing training, helping employees contribute to superior soft furnishings production across all stations."
    },
    "scoring": {
      "intro": "Supervisors use a 0 to 6 scale for objective evaluation during assessments, providing clear feedback for development.",
      "levels": [
        {
          "score": 0,
          "label": "Cannot do",
          "description": "No familiarity and requires full instruction."
        },
        {
          "score": 1,
          "label": "Has seen it",
          "description": "Observed the task but never attempted it."
        },
        {
          "score": 2,
          "label": "Can do with help",
          "description": "Performs under close guidance."
        },
        {
          "score": 3,
          "label": "Can do slowly",
          "description": "Works independently but inefficiently."
        },
        {
          "score": 4,
          "label": "Can do correctly",
          "description": "Executes accurately at moderate speed."
        },
        {
          "score": 5,
          "label": "Can do fast and consistently",
          "description": "Performs efficiently and reliably in production settings."
        },
        {
          "score": 6,
          "label": "Can train others",
          "description": "Demonstrates mastery and can mentor peers."
        }
      ],
      "note": "For station-specific training, refer to the individual assessment documents such as Cushion, Roman Blind, and other production stations."
    }
  },
  "pelmet": {
    "station": {
      "name": "Pelmet Station Training Assessment",
      "subtitle": "Philipcowan Interiors",
      "scoreRequirement": "Employees must demonstrate accurate measuring, clean wrapping, and finish quality that meets pelmet production standards."
    },
    "overview": {
      "introduction": "The Pelmet Station Training Assessment is a targeted program designed to train employees in the creation of high-quality pelmets, decorative valances or cornices used to conceal hardware and add aesthetic appeal. The training prioritizes precision, material handling, and finishing skills because pelmets must be structurally sound and visually seamless.",
      "purposeIntro": "The assessment develops step-by-step mastery of pelmet construction so employees can reduce waste, avoid distortions, and deliver durable, visually balanced products tailored to client requirements.",
      "purposes": [
        "Understand pelmet structure, materials, and design variations used in production.",
        "Measure and prepare frames, padding, and fabric accurately before assembly.",
        "Wrap and secure fabric neatly without bubbles, sags, or visible fasteners.",
        "Refine corners, edges, and decorative details to a professional finish."
      ],
      "learningOutcome": "After completing the training, the employee will be proficient in independently producing structured pelmets that are functional and aesthetically pleasing. This includes crafting items with accurate dimensions and flawless finishes, free from defects such as visible seams or shape inconsistencies."
    },
    "modules": [
      {
        "code": "PEL-01",
        "title": "Pelmet Structure",
        "description": "Explores pelmet components including wooden, foam, or MDF frames, padding layers, attachment methods, and design variations such as straight, shaped, or upholstered styles."
      },
      {
        "code": "PEL-02",
        "title": "Fabric Wrapping",
        "description": "Teaches frame covering techniques using staples, glue, or stitching while handling different fabrics to achieve taut, even application without pulls or sags."
      },
      {
        "code": "PEL-03",
        "title": "Pelmet Finishing",
        "description": "Focuses on refinement tasks such as edge trimming, corner mitering, decorative additions, and quality checks for symmetry, durability, and presentation."
      }
    ],
    "phases": [
      {
        "title": "Preparation and Measuring",
        "description": "This blueprint phase emphasizes careful planning to prevent material inefficiency and ensure the pelmet fits correctly.",
        "activities": [
          "Review the job sheet for width, height, overhang allowances, padding thickness, and mounting requirements.",
          "Inspect the frame for warps or cracks and inspect fabric for tears, flaws, or color mismatch.",
          "Check padding materials such as foam or batting for consistent thickness and coverage.",
          "Position patterned fabric centrally on the pelmet face for balanced visual alignment.",
          "Measure fabric with a steel rule, allowing extra material for wrapping around the edges.",
          "Cut fabric accurately using sharp shears or a rotary blade with a tolerance of about plus or minus 2 mm."
        ],
        "warning": "Handle cutting tools carefully, wear protective gloves, and secure materials properly to prevent slips and injuries."
      },
      {
        "title": "Component Preparation",
        "description": "This phase prepares the frame, padding, and fabric so assembly can proceed smoothly with fewer adjustments later.",
        "activities": [
          "Apply batting or foam evenly to the frame using adhesive spray and trim off excess material.",
          "Iron the fabric to remove wrinkles before wrapping begins.",
          "Cut lining or support pieces as required by the job specification.",
          "Overlock raw fabric edges to reduce fraying during handling and wrapping.",
          "Test adhesives on scrap materials first to confirm they do not stain or mark the fabric."
        ],
        "warning": "Always align the fabric grain parallel to the frame to prevent sagging and uneven tension after wrapping."
      },
      {
        "title": "Technical Wrapping",
        "description": "This core fabrication phase tests the ability to wrap the pelmet cleanly and securely, directly affecting shape, contour, and durability.",
        "activities": [
          "Drape the fabric over the front face and pull it taut before securing from the center outward.",
          "Use staples, glue, or stitching to avoid bubbles and maintain smooth surface tension.",
          "Fold side sections neatly and miter corners for crisp, clean lines.",
          "Secure the back edges and trim away excess fabric for a neat hidden finish.",
          "Attach mounting brackets or Velcro strips in balanced, centered positions.",
          "Use light steaming after wrapping to relax minor puckers where appropriate."
        ],
        "warning": "Visible fasteners, loose tension, or poorly aligned corners will weaken both the appearance and durability of the pelmet."
      },
      {
        "title": "Finishing and Quality Control",
        "description": "This polish phase refines the pelmet and verifies that it meets display-ready standards with strong attention to detail.",
        "activities": [
          "Miter and tuck corners precisely using glue or stitches to create seamless joins.",
          "Apply trims or bindings where specified and secure them for durability.",
          "Remove adhesive residue and apply any required protective sprays or treatments.",
          "Label the product for installation orientation if needed.",
          "Measure the finished pelmet against the specification and inspect fabric tension, symmetry, and corner sharpness."
        ],
        "warning": "Minor asymmetry or bulging at the corners is highly visible on finished pelmets and should be corrected before release."
      }
    ],
    "questions": [
      {
        "title": "Structure and Planning",
        "items": [
          "Can you explain the structural purpose of a pelmet?",
          "Can you identify the key materials and components required for the pelmet build?"
        ]
      },
      {
        "title": "Measuring and Cutting",
        "items": [
          "Can you measure the pelmet fabric correctly including wrapping allowances?",
          "Can you cut pelmet fabric accurately to plus or minus 2 mm tolerance?"
        ]
      },
      {
        "title": "Wrapping Technique",
        "items": [
          "Can you wrap fabric neatly around the frame without bubbles or sags?",
          "Can you secure the back and side edges without visible fasteners on the front?"
        ]
      },
      {
        "title": "Finishing Quality",
        "items": [
          "Can you finish the pelmet corners with clean, mitered joins?",
          "Can you apply trims or finishing details neatly and evenly?"
        ]
      },
      {
        "title": "Inspection",
        "items": [
          "Can you perform a final inspection for symmetry, shape, and finish?",
          "Can you confirm the pelmet meets the specified dimensions and presentation standard?"
        ]
      }
    ]
  },
  "pressing": {
    "station": {
      "name": "Pressing & Dressing Station Training Assessment",
      "subtitle": "Philipcowan Interiors",
      "scoreRequirement": "Employees must demonstrate safe, fabric-appropriate pressing and final dressing standards to pass the assessment."
    },
    "overview": {
      "introduction": "The Pressing & Dressing Station Training Assessment equips employees with the skills required to achieve professional, wrinkle-free finishes on soft furnishings such as cushions, Roman blinds, pelmets, and curtains. The station focuses on the controlled application of heat, moisture, and pressure to enhance fabric appearance, remove manufacturing creases, and prepare products for final packaging.",
      "purposeIntro": "The program develops progressive competence in fabric finishing so employees can reduce rework, prevent fabric damage, and deliver consistent presentation quality.",
      "purposes": [
        "Apply steam, heat, and pressure correctly to remove wrinkles and manufacturing creases.",
        "Use fabric-specific techniques to avoid scorching, shine, distortion, or print damage.",
        "Operate Flatbed and Standalone Irons safely and effectively for different job types.",
        "Dress and present finished products to a market-ready standard before packaging."
      ],
      "learningOutcome": "Upon completion, the employee will independently produce wrinkle-free, professionally dressed products. This includes applying correct temperatures to various fabrics, using Flatbed and Standalone Irons safely, and conducting thorough inspections to eliminate defects like burns or distortions."
    },
    "modules": [
      {
        "code": "PRD-01",
        "title": "Steam Pressing Techniques",
        "description": "Introduces the safe use of steam for wrinkle removal, covering temperature settings, dry pressing versus steaming, fabric testing, and the use of protective pressing cloths for delicate materials."
      },
      {
        "code": "PRD-02",
        "title": "Fabric Finishing",
        "description": "Focuses on post-pressing refinement, including fabric-specific handling for plain and patterned materials and achieving smooth, crisp seams, edges, and pleats."
      },
      {
        "code": "PRD-03",
        "title": "Final Product Dressing",
        "description": "Covers the arrangement, shaping, and final presentation of products, including hanging, fold checking, plumping, symmetry checks, and final quality audits."
      }
    ],
    "phases": [
      {
        "title": "Preparation and Setup",
        "description": "This readiness phase stresses accurate equipment setup, as incorrect settings can cause irreversible damage to synthetic or textured fabrics.",
        "activities": [
          "Review the job sheet for fabric type, product specifications, and any special notes such as heat-sensitive linings.",
          "Inspect the item under bright lighting for wrinkles, stains, and surface issues before pressing.",
          "Test a small inconspicuous area with steam to confirm heat tolerance, especially for patterned, coated, or delicate fabrics.",
          "Select the Flatbed Iron for large panels or Standalone Irons for detailed work.",
          "Set temperatures appropriately: around 150 C for synthetics and silk, around 190 C for rayon or viscose, and 200 C or above for cotton and linen.",
          "Prepare pressing cloths or other protective aids for shiny or heat-sensitive materials."
        ],
        "warning": "Always unplug irons when not in use, use heat-resistant gloves, and maintain ventilation to avoid steam burns."
      },
      {
        "title": "Core Pressing Techniques",
        "description": "This phase focuses on the controlled application of heat to relax fibers without distorting the fabric shape.",
        "activities": [
          "Match the iron or steam setting to the tested fabric tolerance and start low for synthetics.",
          "Use a lift-and-press motion instead of sliding to avoid stretching plain fabrics.",
          "Protect patterned fabrics with a pressing cloth and work from the reverse side when possible.",
          "Hold the steamer nozzle about 6 to 15 cm away and work downward in sections for wrinkle removal.",
          "Apply light pressure through a cloth barrier for stubborn creases."
        ],
        "warning": "Excessive heat on synthetic fabrics can cause melting or shine marks, so increase temperature gradually only when needed."
      },
      {
        "title": "Tool-Specific Application",
        "description": "This hands-on phase evaluates proficiency with pressing equipment to ensure finish quality and production efficiency.",
        "activities": [
          "Use the Flatbed Iron for large items such as blind panels, applying even pressure and steam bursts for deep wrinkles.",
          "Use Standalone Irons for detailed areas such as seams, corners, and shaped edges.",
          "Integrate both tools by pressing main panels on the Flatbed and refining edges or corners with Standalone Irons.",
          "Press seams open or to one side according to job requirements.",
          "Use vertical steaming for hanging items like curtains to preserve natural drape."
        ],
        "warning": "Keep the iron moving consistently in detailed areas to avoid leaving visible iron marks."
      },
      {
        "title": "Final Dressing and Quality Control",
        "description": "The presentation phase transforms pressed items into showroom-ready products through shaping, arranging, and final inspection.",
        "activities": [
          "Dress the product for presentation, including hanging Roman blinds to check fold evenness.",
          "Plump cushions by massaging the filling and shape pelmets for symmetry.",
          "Inspect under bright light for wrinkles, burns, shine patches, distortion, or unevenness.",
          "Compare the final result against specifications and trim any loose threads.",
          "Record issues found during final QC to support process improvement."
        ],
        "warning": "A visually acceptable product can still fail if it does not match the job specification or presentation standard."
      }
    ],
    "questions": [
      {
        "title": "Temperature and Fabric Control",
        "items": [
          "Can you set the correct temperature for the specific fabric type?",
          "Can you test a fabric safely before applying full heat or steam?"
        ]
      },
      {
        "title": "Pressing Technique",
        "items": [
          "Can you press plain fabric without causing stretching or damage?",
          "Can you press patterned fabric without distorting the print?",
          "Can you effectively remove stubborn wrinkles using steam?"
        ]
      },
      {
        "title": "Equipment Handling",
        "items": [
          "Can you operate the Flatbed Iron correctly and safely?",
          "Can you use Standalone Irons for detailed seam and corner work?"
        ]
      },
      {
        "title": "Product Dressing",
        "items": [
          "Can you shape and present the finished product to a professional standard?",
          "Can you choose the correct finishing approach for the product type being handled?"
        ]
      },
      {
        "title": "Quality Control",
        "items": [
          "Can you perform a final inspection to identify burns, shine, creases, or distortion?",
          "Can you confirm the finished item meets presentation and specification requirements?"
        ]
      }
    ]
  },
  "qc": {
    "station": {
      "name": "Quality Control Station Training Assessment",
      "subtitle": "Philipcowan Interiors",
      "scoreRequirement": "Employees must demonstrate consistent inspection accuracy, safe hoist use, and evidence-based pass or fail decisions to pass the assessment."
    },
    "overview": {
      "introduction": "The Quality Control Station Training Assessment prepares employees for the rigorous evaluation of finished soft furnishings. This station serves as the final gatekeeper, ensuring that curtains, Roman blinds, pelmets, cushions, and other products meet factory standards before shipment.",
      "purposeIntro": "The assessment focuses on systematic inspection, defect identification, measurement verification, and objective decision-making so issues are caught before products reach the customer.",
      "purposes": [
        "Inspect finished products methodically for visible defects, construction flaws, and presentation issues.",
        "Verify dimensions and tolerances against the job sheet using appropriate measurement tools.",
        "Perform functional tests on products and mechanisms to confirm reliable operation.",
        "Record findings accurately and make clear pass or fail decisions supported by factory standards."
      ],
      "learningOutcome": "Upon successful completion, the employee will be able to make informed pass or fail decisions. This includes operating the Inspection Hoist safely, detecting flaws originating from upstream stations, and recording findings accurately in the QC system so only defect-free products are released."
    },
    "modules": [
      {
        "code": "QCT-01",
        "title": "Visual Inspection",
        "description": "Teaches detailed scanning for aesthetic and structural defects, including stains, loose threads, shading issues, and other visible faults using proper lighting and inspection discipline."
      },
      {
        "code": "QCT-02",
        "title": "Measurement Verification",
        "description": "Focuses on dimensional accuracy by comparing finished products to job specifications using tapes, calipers, or digital tools and checking against tolerance limits."
      },
      {
        "code": "QCT-03",
        "title": "Functional Testing",
        "description": "Covers performance checks, including safe use of the Inspection Hoist to hang and test products so mechanisms, zips, and operation can be verified before release."
      }
    ],
    "phases": [
      {
        "title": "Preparation and Setup",
        "description": "This review foundation phase ensures the inspector starts with the right references, tools, and setup for an unbiased evaluation.",
        "activities": [
          "Review the job sheet and cross-reference the finished product against the original specifications, including dimensions, materials, and key features.",
          "Inspect the Inspection Hoist, measuring tools, lighting, and the digital QC checklist before beginning the inspection.",
          "Mount curtains, blinds, or other items securely using the correct clamps or hooks.",
          "Adjust the hoist height to an ergonomic inspection level for clear viewing and safe handling."
        ],
        "warning": "Use two-person lifts for heavy items and inspect hoist cables for fraying before every use to prevent accidents."
      },
      {
        "title": "Visual and Defect Identification",
        "description": "This phase develops the inspector's eye by applying a systematic scan that catches aesthetic and construction issues customers would notice.",
        "activities": [
          "Examine the fabric under varied lighting conditions for holes, stains, snags, shading differences, or surface damage.",
          "Rotate the item on the hoist to inspect it from multiple angles.",
          "Check seams for puckering, skipped stitches, uneven allowances, and weak joins.",
          "Perform a light tug test where appropriate to confirm seam strength.",
          "Look for pressing defects such as shine marks, scorching, persistent wrinkles, or pattern misalignment."
        ],
        "warning": "Rushed visual scans miss defects, so inspect the item in defined sections such as top, middle, and bottom."
      },
      {
        "title": "Measurement and Functional Testing",
        "description": "This practical phase turns inspection into measurable evidence by comparing the product to the specification and verifying real-world operation.",
        "activities": [
          "Measure finished width, drop, and any other critical dimensions against the job sheet.",
          "Record exact measurements accurately in the QC system.",
          "Operate Roman blind mechanisms to confirm smooth raising and lowering.",
          "Open and close zips repeatedly on cushions or similar products to check for snags or resistance.",
          "Flag any deviation greater than the allowed tolerance, such as more than 2 mm where applicable.",
          "Use the hoist elevation feature to inspect high or normally hidden areas such as curtain headers."
        ],
        "warning": "Do not rely on appearance alone when a product has moving parts or tight dimensional tolerances."
      },
      {
        "title": "Documentation and Decision-Making",
        "description": "This closure phase finalizes the evaluation and ensures the product has a traceable quality record for release or rework.",
        "activities": [
          "Record specific defects in the QC system, including defect type, location, and photos where required.",
          "Approve products that meet all criteria and clearly label failed items for rework.",
          "Consult a supervisor on borderline cases where standards require confirmation.",
          "Bundle approved items for shipping and contribute to the daily QC summary to identify recurring trends."
        ],
        "warning": "Poor documentation weakens traceability and makes it harder to correct upstream process problems."
      }
    ],
    "questions": [
      {
        "title": "Setup and Safety",
        "items": [
          "Can you operate the Inspection Hoist safely and ergonomically?",
          "Can you prepare the correct tools and reference documents before inspection begins?"
        ]
      },
      {
        "title": "Visual Inspection",
        "items": [
          "Can you perform a systematic visual scan to identify fabric flaws?",
          "Can you identify sewing defects like skipped stitches or weak joins?",
          "Can you identify pressing defects such as shine or scorch marks?",
          "Can you detect pattern misalignments in matched pairs?"
        ]
      },
      {
        "title": "Measurement Verification",
        "items": [
          "Can you verify product measurements against the job sheet to a plus or minus 2 mm accuracy?",
          "Can you distinguish between acceptable variance and a rejectable dimensional error?"
        ]
      },
      {
        "title": "Functional Testing",
        "items": [
          "Can you perform functional checks on products such as Roman blinds or zipped cushions?",
          "Can you identify when a mechanism or closure is likely to fail in customer use?"
        ]
      },
      {
        "title": "Documentation and Decisions",
        "items": [
          "Can you accurately record findings and upload photos into the QC system?",
          "Can you confidently justify a pass or fail decision based on factory standards?"
        ]
      }
    ]
  },
  "romans": {
    "station": {
      "name": "Roman Blind Station Training Assessment",
      "subtitle": "Philipcowan Interiors",
      "scoreRequirement": "Employees must demonstrate accurate construction, safe cord system handling, and smooth Roman blind operation to pass the assessment."
    },
    "overview": {
      "introduction": "The Roman Blind Station Training Assessment is a structured program aimed at developing proficiency in crafting high-quality Roman blinds. These window treatments rely on an elegant folding mechanism and require a high level of technical precision. The training focuses on accuracy, safety, and efficiency because Roman blinds must balance smooth operation with a clean, consistent drape.",
      "purposeIntro": "The assessment builds skills step-by-step so employees can reduce defects such as uneven pleats or cord jams while producing blinds that meet aesthetic, functional, and child-safety requirements.",
      "purposes": [
        "Understand Roman blind structure, core components, and fold behavior during operation.",
        "Measure, cut, and prepare blind panels accurately with the correct allowances.",
        "Sew rod pockets and cord channels evenly to support balanced lifting and stacking.",
        "Test final operation to confirm smooth movement, fold symmetry, and safety compliance."
      ],
      "learningOutcome": "Upon completion, the employee will independently manufacture functional Roman blinds that operate reliably and meet high aesthetic standards. This includes producing blinds with precise measurements, secure components, and flawless mechanics while supporting child safety compliance and minimizing returns."
    },
    "modules": [
      {
        "code": "ROM-01",
        "title": "Roman Blind Structure",
        "description": "Covers the anatomy of a Roman blind, including the headrail, fabric panels, rods, cord channels, lift mechanisms, fabric types, and how fold depth affects stacking when the blind is raised."
      },
      {
        "code": "ROM-02",
        "title": "Rod Pocket Sewing",
        "description": "Focuses on creating secure rod pockets by measuring and folding horizontal hems at even intervals and stitching them accurately for reliable rod insertion without bunching."
      },
      {
        "code": "ROM-03",
        "title": "Cord Channel Assembly",
        "description": "Covers the setup of vertical tapes or rings with accurate spacing so the blind lifts evenly and the mechanism remains balanced during use."
      },
      {
        "code": "ROM-04",
        "title": "Roman Blind Testing",
        "description": "Focuses on functional verification by simulating installation, checking smooth raising and lowering, and confirming even fold alignment within the expected tolerance."
      }
    ],
    "phases": [
      {
        "title": "Preparation and Measuring",
        "description": "This foundation stage ensures the blind is planned correctly before fabrication, reducing structural errors and material waste.",
        "activities": [
          "Review the job sheet for window dimensions, fabric choice, pleat count, and child-safe mechanism requirements.",
          "Inspect the fabric for weave flaws, fading, motif repetition, and suitability of weight and drape.",
          "Center patterned fabrics so folds appear symmetrical when the blind is raised and lowered.",
          "Mark key construction points clearly using fabric markers or guides.",
          "Measure and cut with the correct allowances, such as top hem and side seam margins, while maintaining about plus or minus 3 mm precision."
        ],
        "warning": "Secure fabric with weights to prevent slipping, and use appropriate eye protection when handling sharp tools or cutting equipment."
      },
      {
        "title": "Component Preparation",
        "description": "This phase prepares the blind elements for controlled assembly and allows early checks before the full build is completed.",
        "activities": [
          "Fold and press rod pocket hems at calculated intervals based on the blind design.",
          "Stitch pockets with reinforced ends so they can support rod weight during use.",
          "Position vertical tapes or sew rings in evenly spaced columns across the panel width.",
          "Use chalk lines or guides to keep cord channels perfectly straight.",
          "Check the layout on a flat surface and account for any potential fabric stretch or shrinkage."
        ],
        "warning": "Ignoring fabric stretch or misaligning the channel layout will cause the blind to lift crookedly or stack unevenly."
      },
      {
        "title": "Technical Sewing",
        "description": "This core construction phase assesses sewing quality because pocket accuracy and channel alignment directly affect blind operation and durability.",
        "activities": [
          "Sew rod pockets horizontally on the wrong side of the panel with even tension.",
          "Press seams flat to avoid bulk that may interfere with folding.",
          "Stitch cord channels vertically and integrate them cleanly with the headrail attachment method.",
          "Thread cords through rings or channels carefully to ensure there are no twists.",
          "Hem all edges and secure bottom weights so the finished blind hangs straight.",
          "Use a walking foot when needed for multilayer fabrics such as blackout-lined blinds to prevent puckering."
        ],
        "warning": "Uneven stitching or twisted cords will reduce blind performance and can cause jamming during operation."
      },
      {
        "title": "Finishing and Quality Control",
        "description": "This refinement phase focuses on the final user experience, ensuring the blind operates smoothly and presents clean, even folds.",
        "activities": [
          "Insert rods into the pockets so they sit flat without forcing the fabric.",
          "Thread the lift cords through the mechanism and secure knots safely at the bottom.",
          "Hang the blind on a test frame and raise and lower it multiple times.",
          "Check that pleats stack neatly and that safety features comply with the required cord length or breakaway standards.",
          "Measure the finished blind against the specification, trim loose threads, and verify fold symmetry."
        ],
        "warning": "A Roman blind that looks correct at rest can still fail if the lift system jams or the folds do not stack evenly during testing."
      }
    ],
    "questions": [
      {
        "title": "Structure and Planning",
        "items": [
          "Can you explain the structural components of a Roman blind?",
          "Can you identify the correct allowances and key measurement points before cutting?"
        ]
      },
      {
        "title": "Measuring and Layout",
        "items": [
          "Can you measure and cut Roman blind panels to a plus or minus 3 mm tolerance?",
          "Can you align patterns and fold positions to maintain visual symmetry?"
        ]
      },
      {
        "title": "Pocket and Channel Sewing",
        "items": [
          "Can you sew rod pockets at perfectly even intervals?",
          "Can you sew cord channels straight to ensure a balanced lift?"
        ]
      },
      {
        "title": "Assembly and Operation",
        "items": [
          "Can you insert rods correctly so the blind sits flat?",
          "Can you thread lift cords and safety breakaway features correctly?",
          "Can you verify the blind raises and lowers without jamming?"
        ]
      },
      {
        "title": "Quality Control",
        "items": [
          "Can you inspect fold alignment for symmetry and uniform stacking?",
          "Can you confirm the finished blind meets appearance, function, and safety expectations?"
        ]
      }
    ]
  },
  "sewing": {
    "station": {
      "name": "Sewing Station Training Assessment",
      "subtitle": "Philipcowan Interiors",
      "scoreRequirement": "Minimum average score of 4 across all core questions"
    },
    "overview": {
      "introduction": "The Sewing Station Training Assessment trains employees in the fundamental stitching techniques required to assemble soft furnishings including curtains, Roman blinds, pelmets, and cushions. As sewing forms the structural and visual backbone of every product, accurate machine setup, consistent technique, and fabric sensitivity are essential — flawed seams affect durability, appearance, and customer satisfaction.",
      "purposeIntro": "Through progressive modules and practical demonstrations, trainees build the competence to:",
      "purposes": [
        "Set up, thread, and operate industrial sewing machines safely and correctly",
        "Adjust tension and stitch settings for different fabric weights and product requirements",
        "Sew accurate, consistent straight seams and hems to factory tolerances",
        "Handle lightweight and heavy fabrics without introducing defects",
        "Inspect sewn work and correct faults before handover to the next station"
      ],
      "learningOutcome": "On completion, employees can independently set up station machines, select correct settings, and sew a range of soft furnishing products to quality standards. They will identify and correct their own sewing faults, maintain a clean workstation, and hand over finished work correctly labeled and ready for the next stage."
    },
    "modules": [
      {
        "code": "SEW-01",
        "title": "Straight Seam Sewing",
        "description": "Introduces basic stitching on Lockstitch machines (CCP-2300, CCP-3000), covering seam types, allowance consistency, backstitching, and speed control on sample panels."
      },
      {
        "code": "SEW-02",
        "title": "Edge Finishing with Overlock",
        "description": "Teaches overlocking techniques using the Overlock ACP-3000 to achieve clean, fray-resistant edges, including setup, stitch width adjustment, and application across fabric types."
      },
      {
        "code": "SEW-03",
        "title": "Heavy Fabric Handling",
        "description": "Addresses sewing challenges with thick and layered materials using the Walking-foot Lockstitch machine, including tension adjustment, needle selection, and feed pressure settings."
      },
      {
        "code": "SEW-04",
        "title": "Specialist Hem Work",
        "description": "Covers invisible hemming using the Blind Hemmer Yamato CM-352, adding weights to hems, turning corners, and applying trims to finished curtain panels."
      }
    ],
    "phases": [
      {
        "title": "Preparation and Machine Setup",
        "description": "Configure the machine and workstation correctly before sewing begins to prevent tension faults, needle breaks, and rework.",
        "activities": [
          "<strong>Review the Job Sheet:</strong> Confirm product type, fabric weight, stitch requirements, seam allowances, and any special instructions.",
          "<strong>Inspect Fabric Panels:</strong> Check cut panels for defects, correct grain direction, and confirm dimensions match specification.",
          "<strong>Switch On and Thread the Machine:</strong> Power on the correct machine for the task (CCP-2300, CCP-3000, ACP-3000, CM-352, or Walking-foot); thread upper and bobbin correctly following the machine path.",
          "<strong>Set Tension and Stitch Length:</strong> Test on a scrap piece of the same fabric — adjust until stitches are balanced with no puckering or looping.",
          "<strong>Select Needle:</strong> Match needle size and type to fabric weight; replace if the needle shows any sign of damage or blunting."
        ],
        "warning": "Always power off before rethreading, changing needles, or accessing the bobbin area. Eye protection should be worn when operating at speed."
      },
      {
        "title": "Core Sewing Techniques",
        "description": "Build fundamental stitching skills with a focus on consistency, seam allowance control, and clean finishing.",
        "activities": [
          "<strong>Sew Straight Seams:</strong> Align fabric edges and guide at a steady pace; backstitch at start and end of every seam to lock threads securely.",
          "<strong>Sew Hems:</strong> Fold and press hems to the specified depth before stitching; sew close and parallel to the folded edge.",
          "<strong>Add Weights and Sew Corners:</strong> Insert curtain weights into hem corners and sew corners neatly to retain shape.",
          "<strong>Join Fabric Widths:</strong> Match patterns or grain lines across fabric widths before sewing joins for curtains and blinds.",
          "<strong>Apply Heading Tape:</strong> Position and sew heading tape at the correct depth from the top edge of curtain panels.",
          "<strong>Maintain Seam Allowance:</strong> Use machine guides or chalk marks to hold a consistent allowance throughout."
        ],
        "warning": "Rushing causes wandering seam lines and uneven allowances — start at reduced speed, especially on long seams."
      },
      {
        "title": "Fabric-Specific Handling",
        "description": "Adapt technique and machine settings to handle different fabric types correctly without introducing defects.",
        "activities": [
          "<strong>Lightweight Fabrics:</strong> Reduce tension and use a fine needle to prevent puckering; support the fabric evenly as it feeds.",
          "<strong>Heavy Fabrics:</strong> Switch to the Walking-foot machine for multi-layer or thick fabrics; adjust presser foot pressure to prevent feed slippage.",
          "<strong>Apply Trims:</strong> Position and sew decorative trims or tapes to curtain panels according to the job specification.",
          "<strong>Overlock Edges:</strong> Use the ACP-3000 to neaten raw edges on fabrics prone to fraying before or after seaming.",
          "<strong>Invisible Hemming:</strong> Use the CM-352 Blind Hemmer for concealed hems on curtains requiring a clean face finish."
        ],
        "warning": "Always test on a matching fabric scrap first when switching machine or fabric type — never test settings on the job piece."
      },
      {
        "title": "Finishing and Quality Control",
        "description": "Inspect, correct, and prepare all sewn work to confirm it meets quality standards before handover.",
        "activities": [
          "<strong>Inspect Seams:</strong> Check straightness, stitch consistency, and tension balance across all sewn seams and hems.",
          "<strong>Use the Inspection Hoist:</strong> Hang curtains on the inspection hoist to check drop accuracy, hem level, and overall appearance.",
          "<strong>Identify and Correct Faults:</strong> Unpick and resew skipped stitches, loose threads, or uneven allowances without damaging the fabric.",
          "<strong>Trim and Neaten:</strong> Remove excess threads and trim any uneven edges before bundling.",
          "<strong>Label and Hand Over:</strong> Attach the job ticket and group completed pieces correctly for the next station."
        ],
        "warning": "Any defect found at this stage must be corrected or escalated — do not pass faulty work to the next station."
      }
    ],
    "questions": [
      {
        "title": "Machine Setup",
        "items": [
          "Can you switch on the Lockstitch CCP-2300 (conveyor)?",
          "Can you switch on the Lockstitch CCP-3000 (removable head)?",
          "Can you switch on the Overlock ACP-3000?",
          "Can you switch on the Blind Hemmer Yamato CM-352?",
          "Can you thread a lockstitch machine correctly?",
          "Can you adjust thread tension correctly for a given fabric?",
          "Can you rethread a bobbin correctly?",
          "Can you replace a sewing needle safely?",
          "Can you control machine speed while sewing?",
          "Can you oil the machine's moving parts correctly?"
        ]
      },
      {
        "title": "Sewing Skills",
        "items": [
          "Can you sew a straight seam accurately?",
          "Can you sew a hem to the correct depth?",
          "Can you add weights to a hem and sew the corners neatly?",
          "Can you join two fabric panels neatly with correct allowance?",
          "Can you apply a trim to curtain panels correctly?",
          "Can you keep seam allowance consistent along a full seam?"
        ]
      },
      {
        "title": "Fabric Handling",
        "items": [
          "Can you sew lightweight fabric without puckering?",
          "Can you sew heavy fabric without skipped stitches or machine damage?",
          "Can you guide fabric smoothly through the machine without pulling or pushing?"
        ]
      },
      {
        "title": "Machine Operation",
        "items": [
          "Can you operate the Lockstitch CCP-2300 correctly?",
          "Can you operate the Lockstitch CCP-3000 correctly?",
          "Can you operate the Overlock ACP-3000 correctly?",
          "Can you operate the Blind Hemmer Yamato CM-352 correctly?",
          "Can you operate the Walking-foot Lockstitch machine correctly?"
        ]
      },
      {
        "title": "Quality Inspection",
        "items": [
          "Can you check seam straightness after sewing?",
          "Can you identify loose or broken stitches on a finished item?",
          "Can you correctly use the inspection hoist to check a finished curtain?",
          "Can you identify and correct a sewing fault without damaging the fabric?"
        ]
      }
    ]
  },
  "taping": {
    "station": {
      "name": "Taping Station Training Assessment",
      "subtitle": "Philipcowan Interiors",
      "scoreRequirement": "Minimum average score of 4 across all core questions"
    },
    "overview": {
      "introduction": "The Taping Station Training Assessment trains employees in the precise application of tapes to soft furnishings including curtains and Roman blinds. Tapes — such as hook-and-loop (Velcro), header tapes, and lead-weighted tapes — are critical for both functionality and aesthetics. Errors including tape twists, uneven placement, or weak attachment result in poor drape, failed functionality, or product returns.",
      "purposeIntro": "Through modular instruction and hands-on machine practice, trainees develop the ability to:",
      "purposes": [
        "Identify the correct tape type for each product and job specification",
        "Measure and cut tape accurately, accounting for overlaps and tolerances",
        "Set up and operate the DCP-3000 Taper safely and correctly",
        "Align tape without twists or buckling along edges, hems, and top channels",
        "Finish tape ends neatly and inspect attachment quality before handover"
      ],
      "learningOutcome": "On completion, employees can independently select the appropriate tape, measure and position it correctly, sew it securely using the DCP-3000, and finish ends to a professional standard. They will identify and correct misalignments or puckering before products move to the next station."
    },
    "modules": [
      {
        "code": "TAP-01",
        "title": "Tape Types and Applications",
        "description": "Introduces tape varieties including sew-in Velcro, pencil pleat header tape, and lead-weighted bottom tape. Covers fabric compatibility and how to identify the correct tape from job sheet specifications."
      },
      {
        "code": "TAP-02",
        "title": "Tape Alignment and Positioning",
        "description": "Teaches accurate tape positioning along edges and hems using chalk marks and alignment guides. Covers even tension, symmetry across panel widths, and troubleshooting misaligned tape before sewing."
      },
      {
        "code": "TAP-03",
        "title": "Tape Sewing Techniques",
        "description": "Covers machine attachment using the DCP-3000 Taper, including setup, stitch consistency, handling fabric thickness variations, backstitching at ends, and neat end-finishing to prevent fraying or detachment."
      }
    ],
    "phases": [
      {
        "title": "Preparation and Measuring",
        "description": "Select materials, review specifications, and accurately measure tape before machine setup begins.",
        "activities": [
          "<strong>Review the Job Sheet:</strong> Confirm product type, tape type, required length (including end allowances of 5–10 cm), and exact placement position on the product.",
          "<strong>Inspect Materials:</strong> Check tape rolls for defects such as uneven width, adhesive failures, or damage; verify the incoming fabric panels from the Sewing station are correct.",
          "<strong>Measure and Cut Tape:</strong> Use a ruler or the DCP-3000 measure function to cut tape to the exact required length; account for overlaps and positional tolerances.",
          "<strong>Mark Placement Positions:</strong> Use tailor's chalk to mark the tape start, end, and edge line on the fabric to guide straight, symmetrical placement."
        ],
        "warning": "Incorrect tape length cannot be corrected after sewing — always measure and verify before cutting."
      },
      {
        "title": "Machine Setup and Tape Alignment",
        "description": "Configure the DCP-3000 Taper and position tape on the fabric correctly before sewing begins.",
        "activities": [
          "<strong>Set Up the DCP-3000:</strong> Load appropriate needles and thread for the tape width (typically 2–5 cm); adjust presser foot and stitch settings; test on a matching fabric scrap.",
          "<strong>Position the Tape:</strong> Lay tape along the chalk guide mark, ensuring it sits flat and aligned with the fabric edge or hem line.",
          "<strong>Check for Twists:</strong> Smooth the tape along its full length; remove any buckling or tension unevenness before feeding through the machine.",
          "<strong>Pin or Tack if Needed:</strong> On long panels, pin tape at intervals to maintain alignment while sewing."
        ],
        "warning": "Always double-check alignment before sewing — a twisted or offset tape sewn in requires full removal and rework."
      },
      {
        "title": "Sewing and Attachment",
        "description": "Feed and sew the taped panel through the DCP-3000, maintaining consistent pace and stitch quality throughout.",
        "activities": [
          "<strong>Attach Tape Smoothly:</strong> Feed the fabric and tape through the DCP-3000 at a controlled, even speed; sew close to both tape edges for a secure hold.",
          "<strong>Adapt to Fabric Type:</strong> Reduce speed for delicate fabrics; use a walking foot for thick or multi-layer combinations to prevent slippage.",
          "<strong>Backstitch at Ends:</strong> Reinforce the start and finish of each tape run with backstitching to prevent pull-out under load.",
          "<strong>Finish Tape Ends Neatly:</strong> Fold, miter, or seal tape ends as appropriate for the product to prevent fraying or detachment during use."
        ],
        "warning": "Monitor thread tension throughout — puckering under the tape indicates incorrect tension and must be corrected before continuing."
      },
      {
        "title": "Finishing and Quality Control",
        "description": "Inspect, trim, and prepare the finished product before handover to the next station.",
        "activities": [
          "<strong>Load onto Inspection Hoist:</strong> Hang curtains and voiles on the inspection hoist to check tape straightness, drape, and overall finish under realistic conditions.",
          "<strong>Trim Excess Threads:</strong> Remove all loose threads; press lightly to set the tape and fabric flat without distortion.",
          "<strong>Inspect Tape Alignment:</strong> Measure straightness along the tape run, check both sewn edges are secure, and tug gently to verify attachment strength.",
          "<strong>Final QC Check:</strong> Compare the finished product against the job specification; identify and correct any twists, puckering, or loose ends before handover."
        ],
        "warning": "Do not pass any product with a tape twist or insecure end to the next station — these defects are visible in the finished hang and cannot be corrected later."
      }
    ],
    "questions": [
      {
        "title": "Tape Knowledge",
        "items": [
          "Can you identify different types of tape used in soft furnishing products?",
          "Can you select the correct tape type from a job sheet specification?"
        ]
      },
      {
        "title": "Measurement",
        "items": [
          "Can you measure and cut tape to the correct length including end allowances?",
          "Can you mark the correct tape placement position on fabric before sewing?"
        ]
      },
      {
        "title": "Machine Setup",
        "items": [
          "Can you set up the DCP-3000 Taper with the correct needle, thread, and stitch settings?",
          "Can you test machine settings on a scrap piece before sewing the final panel?"
        ]
      },
      {
        "title": "Tape Application",
        "items": [
          "Can you align tape correctly on fabric without twists or buckling?",
          "Can you attach tape smoothly through the DCP-3000 at a consistent pace?",
          "Can you finish tape ends neatly to prevent fraying or detachment?"
        ]
      },
      {
        "title": "Quality Inspection",
        "items": [
          "Can you inspect tape alignment for straightness and symmetry after sewing?",
          "Can you use the inspection hoist to verify the finished product hang and drape?",
          "Can you identify and correct a tape defect before handover?"
        ]
      }
    ]
  }
};

function getAllTrainingPageData() {
  return JSON.parse(JSON.stringify(TRAINING_PAGE_DATA));
}
