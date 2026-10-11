import { Program } from "@/types";

export const programs: Program[] = [
  {
    slug: "primate-ecology-kibale",
    title: "Primate Behavioral Ecology & Albertine Conservation",
    subtitle: "A 12-day immersive field school at Makerere University Biological Field Station (MUBFS), Kibale National Park.",
    duration: "12 Days",
    discipline: "Biological Sciences",
    level: "Undergraduate / Graduate",
    credits: "3 – 6 US / ECTS Credits",
    fieldStation: "Makerere Biological Field Station (MUBFS), Kibale",
    chaperoneRatio: "1:6 Vetted Ratio",
    heroImage: "/images/chimp-ecology.jpg",
    shortDescription: "Conduct systematic focal animal ethograms on habituated chimpanzee troops, canopy microclimate stratification, and human-wildlife buffer analysis.",
    overview: "Kibale National Park harbors the highest primate density in East Africa. Based directly out of the Makerere University Biological Field Station (MUBFS) at Kanyawara, students bypass commercial tourist loops to embed alongside resident Ugandan primatologists and UWA conservation biologists. This curriculum combines dawn ethogram data collection, forest canopy light attenuation logging, and a faculty-evaluated capstone research symposium.",
    learningOutcomes: [
      "Design and execute 20+ hours of continuous focal animal sampling (Pan troglodytes schweinfurthii) using standardized ethograms.",
      "Quantify Albertine Rift rainforest canopy light attenuation, temperature gradients, and relative humidity across 3 stratification levels.",
      "Evaluate human-wildlife conflict buffer engineering, including live beehive fencing and Capsicum annuum chili boundary strips.",
      "Conduct a systematic wetland transect census of the prehistoric Shoebill Stork (Balaeniceps rex) in the Mabamba Ramsar wetland.",
      "Present empirical research findings at the capstone MUBFS Student Research Symposium."
    ],
    fieldHighlights: [
      "Access to Kanyawara long-term habituated chimpanzee troops",
      "Wet lab bench space and stereomicroscopes at MUBFS",
      "Field guest lectures from Makerere University senior faculty",
      "Dedicated 4x4 expedition fleet with Garmin inReach satellite SOS",
      "AMREF Flying Doctors aero-medical evacuation protocol staged via Kasese"
    ],
    stationDetails: {
      name: "Makerere Univ Biological Field Station (MUBFS)",
      elevation: "1,500m ASL",
      coordinates: "0°34'N, 30°21'E",
      evacStrip: "Kasese Bush Airstrip (KIB)",
      transitTime: "~42 min air transit protocol to Kampala Level-4 Trauma"
    },
    itinerary: [
      {
        day: 1,
        title: "Entebbe Arrival & Academic Briefing",
        location: "Entebbe & Lake Victoria Basin",
        schedule: [
          { time: "14:00", activity: "Arrival at Entebbe International Airport (EBB); UNCST research registration review & orientation" },
          { time: "17:30", activity: "Expedition health, water security & RAMS safety orientation by Collins Ssegawa" },
          { time: "19:30", activity: "Welcome dinner and symposium overview" }
        ],
        fieldKit: ["Field notebooks", "LifeStraw filtration units", "Garmin inReach communicators"],
        sdgFocus: "SDG 4: Quality Education"
      },
      {
        day: 2,
        title: "Mabamba Wetland Shoebill Census",
        location: "Mabamba Bay Ramsar Site",
        schedule: [
          { time: "06:30", activity: "Early canoe transect through papyrus waterways for Shoebill census" },
          { time: "11:30", activity: "Water quality testing: pH, dissolved oxygen, turbidity metrics" },
          { time: "14:00", activity: "Community wetland conservation cooperative round table" }
        ],
        fieldKit: ["Water test kits", "Binoculars 10x42", "GPS logging handsets"],
        sdgFocus: "SDG 15: Life on Land"
      },
      {
        day: 3,
        title: "Transit to Kibale via Fort Portal Crater Lakes",
        location: "Albertine Rift Escarpment",
        schedule: [
          { time: "07:30", activity: "4x4 convoy transit west across the Albertine Rift Valley" },
          { time: "13:00", activity: "Geological stop: Fort Portal volcanic explosion crater field" },
          { time: "16:00", activity: "Check-in at Makerere Biological Field Station (MUBFS) Kanyawara" }
        ],
        fieldKit: ["Geology compass", "Field maps", "Personal research kits"],
        sdgFocus: "SDG 13: Climate Action"
      },
      {
        day: 4,
        title: "Chimpanzee Troop Habituation & Ethogram Sampling",
        location: "MUBFS Rainforest Grid, Kibale",
        schedule: [
          { time: "06:00", activity: "Dawn forest entry; location of habituated troop morning nesting site" },
          { time: "07:30", activity: "4-hour continuous focal behavioral log (feeding, grooming, dominance)" },
          { time: "14:00", activity: "MUBFS computer laboratory data entry and initial R/SPSS descriptive stats" },
          { time: "18:00", activity: "Guest lecture: 'Four Decades of Primate Behavioral Ecology in Kibale'" }
        ],
        fieldKit: ["Ethogram data slates", "Decibel meters", "Canopy clinometers"],
        sdgFocus: "SDG 15: Life on Land"
      },
      {
        day: 5,
        title: "Canopy Stratification & Microclimate Profiling",
        location: "Kanyawara Research Tower",
        schedule: [
          { time: "07:00", activity: "Ascent to canopy meteorological observation towers" },
          { time: "10:30", activity: "Data logger deployment across ground, sub-canopy, and emergent crown" },
          { time: "15:00", activity: "Analysis of fruit phenology and seed dispersal correlation models" }
        ],
        fieldKit: ["Thermo-hygrometer loggers", "LUX light sensors", "Safety harness kits"],
        sdgFocus: "SDG 13: Climate Action"
      },
      {
        day: 6,
        title: "Human-Wildlife Conflict & Beehive Fence Engineering",
        location: "Kibale Community Park Border",
        schedule: [
          { time: "08:00", activity: "Inspection of elephant and crop-raiding boundary fences" },
          { time: "11:00", activity: "Field interview with farmers' cooperative on apiculture income dividends" },
          { time: "14:30", activity: "Data collection on chili-grease buffer deterrence efficacy" }
        ],
        fieldKit: ["Survey questionnaires", "Spatial tape measures", "Co-op record books"],
        sdgFocus: "SDG 17: Partnerships for the Goals"
      },
      {
        day: 7,
        title: "Independent Student Research Practicum — Part 1",
        location: "MUBFS Forest Sectors A–D",
        schedule: [
          { time: "06:30", activity: "Student research pairs deploy to assigned forest grid transects" },
          { time: "12:00", activity: "Lab processing of fecal parasite samples under stereomicroscopes" },
          { time: "16:00", activity: "Faculty supervision and preliminary hypothesis validation" }
        ],
        fieldKit: ["Stereomicroscopes", "Specimen preservation kits", "GPS track logs"],
        sdgFocus: "SDG 4: Quality Education"
      },
      {
        day: 8,
        title: "Independent Student Research Practicum — Part 2",
        location: "MUBFS Wet Labs",
        schedule: [
          { time: "07:00", activity: "Follow-up observational trials and data verification" },
          { time: "13:30", activity: "Statistical hypothesis testing in MUBFS seminar hall" },
          { time: "17:00", activity: "Drafting scientific posters and executive summaries" }
        ],
        fieldKit: ["Statistical workstations", "Poster draft boards", "Digital archives"],
        sdgFocus: "SDG 4: Quality Education"
      },
      {
        day: 9,
        title: "Transit to Queen Elizabeth: Savanna-Rainforest Ecozone",
        location: "Queen Elizabeth National Park",
        schedule: [
          { time: "08:00", activity: "Convoy south crossing the Equator line" },
          { time: "11:30", activity: "Comparative ecology study: Albertine rift savanna vs montane forest" },
          { time: "15:00", activity: "Kazinga Channel boat research transect: hippopotamus population density" }
        ],
        fieldKit: ["Telephoto optics", "Hydrophone gear", "Water transect slates"],
        sdgFocus: "SDG 15: Life on Land"
      },
      {
        day: 10,
        title: "Capstone Student Research Symposium",
        location: "MUBFS Main Academic Hall",
        schedule: [
          { time: "09:00", activity: "Opening address by Resident Chief Conservation Officer" },
          { time: "10:30", activity: "Student research poster presentations and peer critiques" },
          { time: "15:00", activity: "Joint symposium awards and delivery of data sets to UWA archive" }
        ],
        fieldKit: ["Research posters", "Formal symposium program", "Digital data repositories"],
        sdgFocus: "SDG 4: Quality Education"
      },
      {
        day: 11,
        title: "Equator Crossing & Return Transit to Kampala",
        location: "Masaka & Kampala Corridor",
        schedule: [
          { time: "08:30", activity: "Return journey via Masaka; Coriolis effect educational demonstration" },
          { time: "13:00", activity: "Drum-making artisan cooperative visit in Mpambire" },
          { time: "17:30", activity: "Arrival in Kampala; debrief dinner" }
        ],
        fieldKit: ["Travel journals", "Cooperative receipt logs"],
        sdgFocus: "SDG 17: Partnerships for the Goals"
      },
      {
        day: 12,
        title: "Makerere University Debrief & Departures",
        location: "Makerere Main Campus & Entebbe",
        schedule: [
          { time: "09:30", activity: "Closing symposium at Makerere University Zoology Department" },
          { time: "13:00", activity: "Entebbe Botanical Gardens guided phenology walk" },
          { time: "18:00", activity: "Airport transfers for outbound international flights" }
        ],
        fieldKit: ["Final academic transcripts", "Certificates of completion"],
        sdgFocus: "SDG 4: Quality Education"
      }
    ],
    priceEstimateUSD: 3450
  },
  {
    slug: "peace-studies-gulu",
    title: "Transitional Justice & Post-Conflict Recovery in Acholiland",
    subtitle: "A 10-day field course in Kampala, Jinja, and Gulu exploring ICC jurisprudence and indigenous Mato Oput restorative justice.",
    duration: "10 Days",
    discipline: "Peace & Conflict",
    level: "Undergraduate / Law / Postgraduate",
    credits: "3 – 4 US Credits / 6 ECTS",
    fieldStation: "Gulu University Institute of Peace & Strategic Studies (IPSS)",
    chaperoneRatio: "1:6 Vetted Ratio",
    heroImage: "/images/peace-studies.jpg",
    shortDescription: "Evaluate the tensions between international criminal law and indigenous customary reconciliation alongside the Acholi Council of Elders.",
    overview: "This course engages Northern Uganda's profound historical and contemporary journey from two decades of Lord's Resistance Army (LRA) conflict to community revitalization. In partnership with the Gulu University Institute of Peace & Strategic Studies (IPSS) and the Ker Kwaro Acholi (Council of Elders), students examine restorative justice frameworks, psychosocial reintegration of former abductees, and post-war memory curation.",
    learningOutcomes: [
      "Conduct comparative legal analysis between ICC Rome Statute mechanisms (Dominic Ongwen trial) and indigenous Mato Oput cleansing rituals.",
      "Engage directly with Acholi elders and women peacemaker networks on customary community land tenure conflicts.",
      "Audit psychosocial rehabilitation center programs supporting former child combatants in Kitgum and Gulu.",
      "Examine Buganda pre-colonial governance structures and their interaction with post-colonial constitutional development.",
      "Draft an institutional policy brief on ethical memorialization of mass civilian trauma sites."
    ],
    fieldHighlights: [
      "Direct academic dialogues with the Acholi Council of Elders (Ker Kwaro Acholi)",
      "Lectures by leading Gulu University IPSS legal scholars and conflict mediators",
      "Visits to Barlonyo and Lukodi memorial sites guided by survivor community liaisons",
      "Field visits to youth vocational and psychosocial reintegration cooperatives",
      "Duty-of-care coverage with AMREF aero-evacuation staging protocol at Gulu Airstrip"
    ],
    stationDetails: {
      name: "Gulu University IPSS Field Hub",
      elevation: "1,100m ASL",
      coordinates: "2°46'N, 32°18'E",
      evacStrip: "Gulu Regional Airfield (ULU)",
      transitTime: "~55 min air transit protocol to Kampala Level-4 Trauma"
    },
    itinerary: [
      {
        day: 1,
        title: "Kampala Arrival & Buganda Historical Foundations",
        location: "Kampala",
        schedule: [
          { time: "13:00", activity: "Arrival at Entebbe; transit to Kampala academic guest lodge" },
          { time: "16:00", activity: "Briefing: Colonial border creation and ethnic regional tensions in Uganda" }
        ],
        fieldKit: ["Academic reader", "Constitutional history maps"],
        sdgFocus: "SDG 16: Peace, Justice & Strong Institutions"
      },
      {
        day: 2,
        title: "Makerere University Peace Dialogue & Nile Hydro-Politics",
        location: "Kampala & Jinja",
        schedule: [
          { time: "09:00", activity: "Seminar at Makerere Department of Political Science" },
          { time: "14:00", activity: "Transit to Jinja; Source of the Nile geopolitical hydrology briefing" }
        ],
        fieldKit: ["Treaty documents", "Hydrological data briefs"],
        sdgFocus: "SDG 16: Peace, Justice & Strong Institutions"
      },
      {
        day: 3,
        title: "Northward Transit across Karuma Falls to Gulu",
        location: "Karuma Corridor & Acholiland",
        schedule: [
          { time: "08:00", activity: "Convoy transit through the historical northern corridor across Karuma" },
          { time: "14:30", activity: "Check-in at Gulu University IPSS academic field quarters" },
          { time: "17:00", activity: "Orientation: Cultural protocols and Acholi community ethics" }
        ],
        fieldKit: ["Field notebooks", "Audio recorder kits"],
        sdgFocus: "SDG 16: Peace, Justice & Strong Institutions"
      },
      {
        day: 4,
        title: "Mato Oput: Customary Jurisprudence vs. The ICC",
        location: "Ker Kwaro Acholi, Gulu",
        schedule: [
          { time: "09:30", activity: "Formal audience with the Acholi Council of Elders (*Ker Kwaro Acholi*)" },
          { time: "11:30", activity: "In-depth workshop on the bitter-root drinking ritual (*Mato Oput*) for reconciliation" },
          { time: "15:00", activity: "Legal seminar on ICC Dominic Ongwen sentencing and local perceptions of justice" }
        ],
        fieldKit: ["Legal comparative casebooks", "Ethics guidelines"],
        sdgFocus: "SDG 16: Peace, Justice & Strong Institutions"
      },
      {
        day: 5,
        title: "Site Memorialization: Lukodi Massacre Witness Accounts",
        location: "Lukodi Village",
        schedule: [
          { time: "09:00", activity: "Field visit to Lukodi massacre memorial site with community survivor committee" },
          { time: "13:30", activity: "Focus group with women elders on sexual violence transitional reparations" },
          { time: "16:30", activity: "Ethical documentation workshop: Avoiding re-traumatization in field interviews" }
        ],
        fieldKit: ["Oral history guidelines", "Consent documentation slates"],
        sdgFocus: "SDG 16: Peace, Justice & Strong Institutions"
      },
      {
        day: 6,
        title: "Psychosocial Reintegration & Vocational Recovery",
        location: "Kitgum & Gulu Centers",
        schedule: [
          { time: "08:30", activity: "Visit to youth rehabilitation cooperatives for former abductees" },
          { time: "12:00", activity: "Evaluation of trauma healing through traditional *Bwola* dance and music" },
          { time: "15:30", activity: "Micro-grant agricultural empowerment project inspection" }
        ],
        fieldKit: ["Project evaluation matrices", "Cooperative ledgers"],
        sdgFocus: "SDG 8: Decent Work & Economic Growth"
      },
      {
        day: 7,
        title: "Post-War Land Disputes & Customary Communal Tenure",
        location: "Amuru District",
        schedule: [
          { time: "09:00", activity: "Field observation of community boundary demarcation dispute mediation" },
          { time: "13:00", activity: "Dialogue with local magistrate on statutory law vs customary elder arbitration" },
          { time: "16:00", activity: "Student policy brief drafting sessions" }
        ],
        fieldKit: ["Land GIS overlays", "Cadastral survey summaries"],
        sdgFocus: "SDG 16: Peace, Justice & Strong Institutions"
      },
      {
        day: 8,
        title: "Gulu University IPSS Academic Colloquium",
        location: "Gulu University Main Campus",
        schedule: [
          { time: "09:30", activity: "Joint symposium with Gulu University postgraduate peace scholars" },
          { time: "13:30", activity: "Student presentation of preliminary policy briefs" },
          { time: "17:00", activity: "Cultural reciprocity dinner hosted by local women leaders" }
        ],
        fieldKit: ["Policy drafts", "Symposium slide decks"],
        sdgFocus: "SDG 4: Quality Education"
      },
      {
        day: 9,
        title: "Southward Transit to Entebbe via Ziwa Rhino Sanctuary",
        location: "Nakasongola & Kampala",
        schedule: [
          { time: "07:30", activity: "Convoy transit south through Nakasongola" },
          { time: "11:00", activity: "Stopover at Ziwa: Habitat restoration after post-conflict poaching depletion" },
          { time: "17:00", activity: "Arrival at Entebbe botanical lodge" }
        ],
        fieldKit: ["Conservation audit briefs"],
        sdgFocus: "SDG 15: Life on Land"
      },
      {
        day: 10,
        title: "Closing Debrief & International Departures",
        location: "Entebbe",
        schedule: [
          { time: "09:30", activity: "Faculty course evaluation and final grade accreditation handoff" },
          { time: "14:00", activity: "Airport transfers at EBB" }
        ],
        fieldKit: ["Accreditation dossiers", "Transcripts"],
        sdgFocus: "SDG 4: Quality Education"
      }
    ],
    priceEstimateUSD: 2950
  },
  {
    slug: "agro-ecology-elgon",
    title: "Agro-Ecology, Coffee Cooperatives & Climate Resilience",
    subtitle: "A 9-day high school & undergraduate field course on Mount Elgon volcanic slopes and Sipi Falls permaculture.",
    duration: "9 Days",
    discipline: "Agro-Ecology & CAS",
    level: "High School IB CAS / Undergraduate",
    credits: "IB CAS Hours / 3 US Credits",
    fieldStation: "Mount Elgon Sustainable Agriculture Hub, Sipi",
    chaperoneRatio: "1:6 Vetted Ratio",
    heroImage: "/images/agro-ecology.jpg",
    shortDescription: "Track organic Arabica coffee value chains, construct household bio-digesters, and survey volcanic slope reforestation with local farming cooperatives.",
    overview: "Mount Elgon’s fertile volcanic slopes produce world-renowned Arabica coffee, but face increasing threats from climate-driven landslides and deforestation. Designed specifically for high school International Baccalaureate (IB) CAS programs and undergraduate agro-ecology students, this course pairs direct service-learning with scientific data collection. Students live alongside coffee farming families in Sipi.",
    learningOutcomes: [
      "Trace the full supply chain of certified fair-trade organic Bugisu Arabica coffee from seedling to export cupping.",
      "Measure slope angle, soil moisture saturation, and root tensile stability to map high-risk landslide hazard zones.",
      "Participate in the hands-on planting of 300+ indigenous trees (*Cordia africana*, *Albizia*) for hillside watershed restoration.",
      "Build a functioning household bio-gas digester with local youth artisans to replace firewood dependence.",
      "Fulfill 45+ target International Baccalaureate (IB) Creativity, Activity, Service (CAS) hours."
    ],
    fieldHighlights: [
      "Deep homestay & cooperative immersion in Sipi Falls farming communities",
      "Hands-on coffee harvesting, pulping, solar drying, and professional cupping lab sessions",
      "Reforestation fieldwork directly advancing UN SDG 13 (Climate Action)",
      "Strict 1:6 chaperone ratio with female and male WFR-certified expedition chaperones",
      "LifeStraw community UV water stations and pre-audited allergen kitchen protocols"
    ],
    stationDetails: {
      name: "Sipi Agro-Ecology Station",
      elevation: "1,800m ASL",
      coordinates: "1°20'N, 34°22'E",
      evacStrip: "Tororo Regional Airstrip",
      transitTime: "~48 min air transit protocol to Kampala Level-4 Trauma"
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Entebbe & Expedition Safety Protocols",
        location: "Entebbe",
        schedule: [
          { time: "14:00", activity: "Airport reception; child safeguarding & IB CAS portfolio orientation" },
          { time: "17:00", activity: "Personal equipment audit and water security briefing" }
        ],
        fieldKit: ["CAS journals", "LifeStraw bottles"],
        sdgFocus: "SDG 4: Quality Education"
      },
      {
        day: 2,
        title: "Transit East through Jinja to Mount Elgon",
        location: "Mabira Forest, Mbale & Sipi",
        schedule: [
          { time: "07:30", activity: "Depart Entebbe; Mabira forest canopy buffer walk" },
          { time: "13:00", activity: "Lunch in Mbale; introduction to Bagisu ancestral cultural roots" },
          { time: "16:00", activity: "Ascent into Sipi Falls; check-in at eco-station lodge" }
        ],
        fieldKit: ["Altitude meters", "Trekking boots"],
        sdgFocus: "SDG 15: Life on Land"
      },
      {
        day: 3,
        title: "Arabica Seed to Cherry: Soil Health & Permaculture",
        location: "Sipi Organic Coffee Cooperative",
        schedule: [
          { time: "08:30", activity: "Soil nitrogen, phosphorus, pH field testing in volcanic shade-grown coffee plots" },
          { time: "12:00", activity: "Hands-on cherry harvesting alongside cooperative women farmers" },
          { time: "15:00", activity: "Eco-pulping and fermentation tank management audit" }
        ],
        fieldKit: ["Soil test kits", "Brix refractometers"],
        sdgFocus: "SDG 12: Responsible Consumption"
      },
      {
        day: 4,
        title: "Slope Reforestation & Landslide Hazard Mapping",
        location: "Upper Sipi Watershed",
        schedule: [
          { time: "08:00", activity: "Incline measurement and historical landslide scar inspection" },
          { time: "10:30", activity: "Community tree planting: 300 indigenous saplings in landslide-prone gullies" },
          { time: "15:00", activity: "GIS mapping of planted sapling GPS coordinates for long-term satellite monitoring" }
        ],
        fieldKit: ["Clinometers", "Tree planting spades", "GPS units"],
        sdgFocus: "SDG 13: Climate Action"
      },
      {
        day: 5,
        title: "Renewable Energy: Bio-Digester Construction Practicum",
        location: "Kewas Village Cooperative",
        schedule: [
          { time: "08:30", activity: "Household bio-gas system engineering workshop with local youth artisans" },
          { time: "11:00", activity: "Mixing substrate and sealing anaerobic digestion tanks" },
          { time: "14:30", activity: "Comparative carbon emission savings calculation vs traditional firewood" }
        ],
        fieldKit: ["Work gloves", "Construction tools", "Emission calculators"],
        sdgFocus: "SDG 7: Affordable & Clean Energy"
      },
      {
        day: 6,
        title: "Coffee Processing, Solar Drying & Professional Cupping",
        location: "Mbale Regional Quality Lab",
        schedule: [
          { time: "09:00", activity: "Moisture meter testing on raised African solar drying beds" },
          { time: "13:30", activity: "SCA-standard coffee cupping and sensory flavor profiling session" },
          { time: "16:00", activity: "Fair trade economic dividend flow analysis with cooperative board" }
        ],
        fieldKit: ["Cupping spoons", "Moisture meters", "SCA scorecards"],
        sdgFocus: "SDG 8: Decent Work & Economic Growth"
      },
      {
        day: 7,
        title: "Sipi Triple Waterfalls Trekking & Hydrology",
        location: "Sipi Falls Gorge",
        schedule: [
          { time: "08:00", activity: "Hydrology assessment of the three Sipi waterfall cascades" },
          { time: "12:00", activity: "Water catchment community usage survey" },
          { time: "15:30", activity: "Rock shelter visit and oral history session with Sebei community elders" }
        ],
        fieldKit: ["Flow meters", "Water filtration gear"],
        sdgFocus: "SDG 6: Clean Water & Sanitation"
      },
      {
        day: 8,
        title: "Student Capstone Presentations & Sipi Farewell",
        location: "Sipi Community Center",
        schedule: [
          { time: "09:30", activity: "Student presentation of CAS portfolios and agro-ecology research data" },
          { time: "13:00", activity: "Community farewell feast with Bagisu and Sebei cooperative members" },
          { time: "15:30", activity: "Transit to Jinja for overnight rest" }
        ],
        fieldKit: ["Portfolio binders", "Certificates"],
        sdgFocus: "SDG 4: Quality Education"
      },
      {
        day: 9,
        title: "Return to Entebbe & Outbound Departures",
        location: "Entebbe International Airport",
        schedule: [
          { time: "10:00", activity: "Final debrief and CAS supervisor verification sign-offs" },
          { time: "15:00", activity: "Airport transfers for outbound flights" }
        ],
        fieldKit: ["Target CAS forms", "Field completion certificates"],
        sdgFocus: "SDG 4: Quality Education"
      }
    ],
    priceEstimateUSD: 2450
  }
];
