export interface PlacementSectorContent {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  badge: string;
  overview: string;
  keyHighlights: string[];
  clinicalOrFieldScope: string[];
  ethicalGuardrails: string[];
  targetDisciplines: string[];
  suggestedDuration: string;
  verificationPlaceholder?: string;
}

export interface TourContent {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  duration: string;
  tagline: string;
  overview: string;
  highlights: string[];
  itinerary: { day: number; title: string; location: string; description: string }[];
  included: string[];
  excluded: string[];
  responsibleTourismNote: string;
}

export interface FounderStoryContent {
  headline: string;
  subheadline: string;
  narrative: string[];
  ethosPillars: { title: string; description: string }[];
  parentAdvisorLetter: {
    salutation: string;
    body: string[];
    signOff: string;
  };
}

export interface SafeguardingContent {
  principles: { title: string; rule: string; rationale: string }[];
  feeTransparency: {
    overview: string;
    proportions: { category: string; description: string; targetSharePlaceholder: string }[];
    reassuranceNote: string;
  };
}

export const cmsContent = {
  brand: {
    name: "Pearl Roots & Expeditions",
    tagline: "Gain Global Experience. Empower Communities. Explore the Pearl of Africa.",
    foundingLocation: "Entebbe & Mpigi, Uganda",
    directWhatsApp: "+256700892410",
    email: "collins@pearlroots.com",
    slaPromiseHours: 24,
  },

  pillars: [
    {
      id: "grow",
      title: "GROW",
      tagline: "Academic Rigor & Clinical Experience",
      description: "Embed in accredited Ugandan clinical and field settings under seasoned local supervisors. Accumulate verified elective hours, institutional logbook sign-offs, and pre-graduation competency.",
      icon: "GraduationCap"
    },
    {
      id: "serve",
      title: "SERVE",
      tagline: "Ethical, Community-Led Impact",
      description: "Reject guilt-driven 'voluntourism'. Support locally designed and locally staffed projects. Volunteers operate strictly as junior learners and capacity contributors under continuous local oversight.",
      icon: "HandHeart"
    },
    {
      id: "discover",
      title: "DISCOVER",
      tagline: "Earned Wildlife & Cultural Adventure",
      description: "After the discipline of field service comes the earned reward: track mountain gorillas in Bwindi, cruise the Kazinga Channel, and unwind on Lake Bunyonyi with licensed Ugandan guides.",
      icon: "Compass"
    }
  ],

  audiencePersonas: [
    {
      id: "students",
      label: "University Students",
      badge: "Pre-Graduation Electives",
      description: "Medical, nursing, public health, and social work students requiring clinical hours, institutional credit, and formal supervisor sign-offs.",
      primaryAction: { text: "Explore Student Placements", href: "/programs/student-placements" },
      secondaryAction: { text: "Institutional Credit Info", href: "/for-universities" }
    },
    {
      id: "volunteers",
      label: "Independent Volunteers",
      badge: "Gap-Year & Career Breaks",
      description: "Passionate travelers seeking meaningful, ethical community immersion without white-savior dynamics or commercial exploitation.",
      primaryAction: { text: "Volunteer in Uganda", href: "/volunteer-uganda" },
      secondaryAction: { text: "Read Safeguarding Policy", href: "/safeguarding" }
    },
    {
      id: "travelers",
      label: "Leisure Travelers",
      badge: "Safaris & Expeditions",
      description: "Wildlife lovers desiring premier gorilla trekking, savannah expeditions, and cultural tours that reinvest revenue into local habitat protection.",
      primaryAction: { text: "View Leisure Safaris", href: "/tours/leisure-safaris" },
      secondaryAction: { text: "5-Day Post-Placement Safari", href: "/tours/5-day-post-placement-safari" }
    }
  ],

  placementSectors: {
    medicalHealthcare: {
      slug: "medical-healthcare-placements",
      title: "Medical & Healthcare Placements",
      subtitle: "Supervised clinical electives and public health fieldwork across district hospitals and community health outreach teams.",
      heroImage: "/images/hero-rainforest.jpg",
      badge: "Clinical Elective & Public Health",
      overview: "Designed specifically for pre-med, MBBS, nursing, midwifery, and public health candidates. Placements take place in regional referral hospitals, district health centers, and maternal-child health networks across central and western Uganda. All students are matched to senior Ugandan medical officers.",
      keyHighlights: [
        "Structured shadowing in general surgery, obstetrics/gynecology, pediatrics, and triage.",
        "Mobile community outreach clinics delivering diagnostic screenings and immunization logistics.",
        "Laboratory diagnostics and tropical disease surveillance (malaria, tuberculosis, schistosomiasis).",
        "Direct faculty evaluation and institutional clinical logbook sign-offs."
      ],
      clinicalOrFieldScope: [
        "Strictly observational shadowing and supervised assistance matched to verified training level.",
        "Students never perform invasive procedures independently or exceed their home institution scope.",
        "Informed patient consent required prior to any clinical observation.",
        "Strict adherence to patient dignity, privacy, and local clinical protocols."
      ],
      ethicalGuardrails: [
        "Zero exploitation: Local clinicians lead all care decisions; international students are learners, not primary providers.",
        "Spotlight on Uganda's Public Health Leadership: Learn how Uganda pioneered global HIV/AIDS prevention through community-based education, open disclosure, and peer adherence networks.",
        "Respectful, stigma-free language throughout all clinical discussions."
      ],
      targetDisciplines: ["Medicine (MBBS / MD)", "Nursing & Midwifery", "Public Health (MPH)", "Biomedical Sciences", "Physiotherapy"],
      suggestedDuration: "4 to 12 Weeks",
      verificationPlaceholder: "[VERIFY BEFORE PUBLISHING: Partner hospital Memorandums of Understanding pending formal annual clearance]"
    } as PlacementSectorContent,

    socialWorkEducation: {
      slug: "social-work-and-education",
      title: "Social Work & Education Placements",
      subtitle: "Ethical primary school teaching assistance, youth mentorship, and community psycho-social support under strict safeguarding protocols.",
      heroImage: "/images/peace-studies.jpg",
      badge: "Education & Child Development",
      overview: "Partner with community-governed primary schools, vocational youth institutes, and district social welfare offices. Participants support lesson preparation, literacy groups, and youth life-skills workshops under the continuous supervision of certified Ugandan teachers and social workers.",
      keyHighlights: [
        "Classroom teaching assistance with emphasis on interactive literacy and numeracy.",
        "After-school sports, creative arts, and vocational mentorship clubs.",
        "Case-study shadowing with licensed community social development officers.",
        "Participatory resource creation utilizing locally sustainable teaching aids."
      ],
      clinicalOrFieldScope: [
        "All volunteer interactions with children occur in open view of certified local school staff.",
        "Volunteers never have unchaperoned one-on-one contact with minors.",
        "Background check (police clearance certificate) mandatory prior to arrival.",
        "Minimum commitment duration [CONFIRM: 4 weeks] to ensure child attachment stability."
      ],
      ethicalGuardrails: [
        "Strict ban on commercialized orphanage tourism: We exclusively partner with community family-preservation initiatives and recognized day schools.",
        "Social media protection: No unconsented photography of children; zero geotagging or identifiable vulnerability posting.",
        "Empowerment over dependency: Curricula build local educator capacity rather than replacing local teachers."
      ],
      targetDisciplines: ["Social Work (BSW/MSW)", "Elementary & Secondary Education", "Child Psychology", "Youth Development"],
      suggestedDuration: "4 to 16 Weeks",
      verificationPlaceholder: "[VERIFY BEFORE PUBLISHING: Community primary school partner agreements subject to termly review]"
    } as PlacementSectorContent,

    communityDevelopmentNGO: {
      slug: "community-development-ngo",
      title: "Community Development & NGO Placements",
      subtitle: "Grassroots capacity building, women's micro-savings cooperatives, sustainable agro-ecology, and participatory action research.",
      heroImage: "/images/agro-ecology.jpg",
      badge: "Grassroots Development & Microfinance",
      overview: "Immerse within community-rooted non-governmental organizations and self-help cooperatives. Work alongside Ugandan community leaders on climate resilience, female economic empowerment, microfinance savings circles (VSLAs), and clean water advocacy.",
      keyHighlights: [
        "Shadow Village Savings & Loan Associations (VSLA) financial record-keeping and business mentorship.",
        "Document regenerative permaculture and sustainable soil management in agro-ecological co-ops.",
        "Participatory community needs assessments and grant monitoring.",
        "Monitoring and evaluation (M&E) reporting for local grassroots foundations."
      ],
      clinicalOrFieldScope: [
        "Co-design approach: Community leaders establish all priorities; volunteers provide administrative and research support.",
        "Skills transfer: Focus on documentation, computer literacy, and quantitative data collection.",
        "Cultural immersion: Regular community town halls and vernacular language learning."
      ],
      ethicalGuardrails: [
        "Zero foreign saviorism: Projects are owned and driven by local committees.",
        "Economic equity: 100% of volunteer project contributions flow through community-managed bank accounts.",
        "Sustainability: Focus on interventions that operate smoothly regardless of international volunteer presence."
      ],
      targetDisciplines: ["International Development", "Economics & Finance", "Environmental Studies", "Agro-Ecology", "Sociology"],
      suggestedDuration: "3 to 12 Weeks",
      verificationPlaceholder: "[VERIFY BEFORE PUBLISHING: NGO registration details and partner agreements pending publication clearance]"
    } as PlacementSectorContent
  },

  volunteerUganda: {
    slug: "volunteer-uganda",
    title: "Independent Volunteer Program in Uganda",
    subtitle: "Ethical, community-integrated volunteering for gap-year travelers, career-breakers, and active retirees.",
    heroImage: "/images/hero-rainforest.jpg",
    overview: "For self-directed individuals seeking to contribute tangible skills to grassroots Ugandan initiatives while experiencing authentic daily life. From organic coffee farming to community library building, our independent volunteer pathway pairs you with a vetted local host family and dedicated project mentor.",
    benefits: [
      "Vetted host family accommodation or private guest house in safe residential neighborhoods.",
      "Comprehensive 3-day cultural and Luganda language orientation in Entebbe/Kampala.",
      "Dedicated 24/7 in-country coordinator on call via WhatsApp and field visits.",
      "Flexible start dates throughout the year with bespoke placement matching.",
      "Built-in weekend excursions and preferred rates on post-placement wildlife safaris."
    ],
    sectorsAvailable: [
      "Community Health Outreach Support",
      "Youth Mentorship & English/Math Tutoring",
      "Permaculture & Agro-Forestry Cooperatives",
      "Women's Artisan & Micro-Enterprise Guilds"
    ],
    pricingNote: "Transparent fee structure: covers airport transfer, orientation, safe lodging, three meals daily, project donation stipend, and 24/7 security backup. [CONFIRM: exact weekly fee schedule]."
  },

  tours: {
    postPlacementSafari: {
      slug: "5-day-post-placement-safari",
      title: "5-Day Post-Placement Safari: Queen Elizabeth & Lake Bunyonyi",
      subtitle: "The earned adventure: classic savannah big-game safari, Kazinga Channel boat cruise, and peaceful crater lake relaxation.",
      heroImage: "/images/hero-rainforest.jpg",
      duration: "5 Days / 4 Nights",
      tagline: "The Earned Reward After Meaningful Service",
      overview: "Having completed your hospital elective or community placement, transition seamlessly into Uganda's legendary western wildlife corridor. Witness tree-climbing lions, massive pods of hippos, and over 600 bird species before unwinding at the terraced islands of Lake Bunyonyi.",
      highlights: [
        "Game drives across the Kasenyi plains searching for lions, leopards, and Uganda kobs.",
        "Two-hour Kazinga Channel boat cruise with elephants, cape buffaloes, and abundant water birds.",
        "Exploration of the Kyambura Gorge subterranean forest or Kalinzu Forest chimpanzee tracking.",
        "Canoeing, swimming, and relaxation at Lake Bunyonyi—one of Africa's deepest, bilharzia-free lakes.",
        "Seamless door-to-door transfer directly from your placement site with professional safari driver-guide."
      ],
      itinerary: [
        {
          day: 1,
          title: "Transfer from Placement Site to Queen Elizabeth National Park",
          location: "Queen Elizabeth NP",
          description: "Depart your placement base in our customized 4x4 pop-top safari vehicle. Traverse the scenic crater lakes region, cross the Equator, and arrive at your eco-lodge for a sundowner dinner overlooking the savannah."
        },
        {
          day: 2,
          title: "Kasenyi Savannah Game Drive & Kazinga Channel Boat Cruise",
          location: "Queen Elizabeth NP",
          description: "Early dawn game drive tracking lions, hyenas, and herds of elephants. In the afternoon, embark on the world-renowned Kazinga Channel boat safari where hundreds of hippos and bathing elephants gather along the banks."
        },
        {
          day: 3,
          title: "Ishasha Tree-Climbing Lions & Transfer to Lake Bunyonyi",
          location: "Ishasha Sector & Kabale",
          description: "Journey through the southern Ishasha sector scanning giant fig trees for famous tree-climbing lions. Ascend into the Kigezi highlands ('Switzerland of Africa') to the serene shores of Lake Bunyonyi."
        },
        {
          day: 4,
          title: "Bunyonyi Island Exploration & Cultural Heritage",
          location: "Lake Bunyonyi",
          description: "Piped dugout canoe excursion across the 29 islands of Lake Bunyonyi, including historic Punishment Island (Akampene). Afternoon free for swimming in freshwater, hiking terraced hilltops, or relaxing."
        },
        {
          day: 5,
          title: "Equator Crossing & Return to Entebbe/Kampala",
          location: "Entebbe International Airport",
          description: "Scenic return journey across the rolling Ankole hills. Stop at the Uganda Equator monument for lunch and traditional craft markets before airport drop-off for evening departure flights."
        }
      ],
      included: [
        "All ground transport in customized 4WD safari Land Cruiser with pop-up roof",
        "4 nights comfortable en-suite accommodation at vetted eco-lodges",
        "All meals (breakfast, lunch, dinner) throughout the safari",
        "Uganda Wildlife Authority (UWA) park entry fees & ranger guide fees",
        "Kazinga Channel boat cruise fees",
        "Lake Bunyonyi island canoe excursion",
        "Dedicated professional Ugandan safari guide-driver",
        "AMREF Flying Doctors aero-medical emergency insurance coverage"
      ],
      excluded: [
        "International flights",
        "Uganda entry tourist visa ($50 online)",
        "Personal souvenirs and alcoholic beverages",
        "Discretionary tips for safari driver and lodge staff"
      ],
      responsibleTourismNote: "100% of our safari itineraries are operated in strict compliance with Uganda Wildlife Authority conservation rules, supporting community tourism concessions along park borders."
    } as TourContent,

    leisureSafaris: {
      slug: "leisure-safaris",
      title: "Uganda Leisure Safaris & Primate Expeditions",
      subtitle: "Bespoke wildlife safaris: Mountain gorillas in Bwindi, chimpanzees in Kibale, Murchison Falls, and authentic cultural expeditions.",
      heroImage: "/images/chimp-ecology.jpg",
      duration: "3 to 10 Days Tailored",
      tagline: "Unforgettable Encounters Across the Pearl of Africa",
      overview: "Designed for leisure travelers, families, and university faculty looking for premier wildlife expeditions. We connect you directly with experienced Ugandan naturalist guides, luxury eco-lodges, and authorized Uganda Wildlife Authority gorilla and chimpanzee permits.",
      featuredPackages: [
        {
          title: "Bwindi Mountain Gorilla Habituation & Trekking",
          duration: "3 - 4 Days",
          location: "Bwindi Impenetrable National Park",
          description: "Stand face-to-face with the endangered mountain gorillas in their ancient mist-covered rainforest habitat. Led by veteran UWA trackers.",
          priceIndicator: "From $1,450 USD (incl. $800 UWA Gorilla Permit)"
        },
        {
          title: "Kibale Forest Chimpanzee Experience & Bigodi Wetland",
          duration: "3 Days",
          location: "Kibale National Park & Bigodi",
          description: "Track habituated chimpanzee communities through East Africa's premier primate sanctuary, accompanied by guided birding walks through community-managed wetlands.",
          priceIndicator: "From $850 USD (incl. UWA Chimp Permit)"
        },
        {
          title: "Murchison Falls & Source of the Nile Expedition",
          duration: "4 - 5 Days",
          location: "Murchison Falls NP & Jinja",
          description: "Watch the mighty River Nile explode through a 7-meter gorge, spot Rothschild giraffes, and explore the historic Source of the Nile in Jinja with white-water rafting.",
          priceIndicator: "From $980 USD"
        },
        {
          title: "Batwa & Buganda Living Cultural Heritage Tour",
          duration: "3 - 5 Days",
          location: "Southwestern Uganda & Central Kingdom",
          description: "Authentic, respectful cultural exchanges celebrating indigenous forest lore, traditional royal history, and community music without staged tourist spectacles.",
          priceIndicator: "From $620 USD"
        }
      ]
    }
  },

  foundersStory: {
    headline: "Born from Uganda's Soil, Guided by Lived Experience",
    subheadline: "Collins and Patricia Ssegawa's Journey: From Watoto Mpigi to Ethical Fieldwork Leadership",
    narrative: [
      "Collins Ssegawa's commitment to ethical international engagement is not an academic theory—it is his life story. Having lost both of his parents by 2006, Collins grew up within the Watoto community homes in Mpigi, central Uganda.",
      "Surrounded by local house mothers and devoted community teachers, Collins experienced first-hand the profound difference between transient, self-serving tourists and genuine international volunteers who came with humility, professional skills, and long-term dedication.",
      "Determined to bridge Uganda with the global academic community, Collins went on to dedicate more than 5 years at the Institute of Field Research Center in Uganda. There, he managed field operations, clinical safety protocols, and cross-cultural logistics for hundreds of international university students, professors, and independent travelers.",
      "Together with his wife Patricia Ssegawa, Collins founded Pearl Roots & Expeditions to pioneer a restorative paradigm: one where international participants gain rigorous, career-defining education, local communities retain sovereign control over their projects, and Uganda's breathtaking natural heritage is experienced with reverence."
    ],
    ethosPillars: [
      {
        title: "Locally Led Sovereignty",
        description: "Ugandan doctors, headteachers, and cooperative chairs direct all work. We never invent projects to entertain foreign visitors."
      },
      {
        title: "Dignity Over Pity",
        description: "We adamantly reject 'poverty tourism'. Our host communities are partners and educators, not victims in need of saving."
      },
      {
        title: "Academic Rigor",
        description: "Student electives follow structured syllabi, verified logbooks, and formal institutional mentor evaluations."
      },
      {
        title: "Earned Discovery",
        description: "Wildlife safaris are the joyous, earned reward following committed placement service, reinvesting tourism dollars into local conservation."
      }
    ],
    parentAdvisorLetter: {
      salutation: "A Personal Message to Parents and University Study Abroad Advisors",
      body: [
        "Sending a son, daughter, or undergraduate student across the globe to East Africa is an act of deep trust. As Ugandan parents and seasoned field operators, Collins and Patricia Ssegawa view your student's safety, physical well-being, and moral development as our highest duty of care.",
        "We do not outsource student supervision to third-party travel agencies. From the moment students land at Entebbe International Airport to the minute they board their return flight, they are accompanied by our vetted local coordinators.",
        "We maintain comprehensive Risk Assessment & Management (RAMS) protocols, round-the-clock emergency communication, direct liaison with home faculties, and immediate aero-medical evacuation clearance via AMREF Flying Doctors.",
        "Your students will return home safe, inspired, academically enriched, and forever connected to the warmth of Uganda."
      ],
      signOff: "Collins & Patricia Ssegawa, Founders"
    }
  } as FounderStoryContent,

  safeguardingPolicy: {
    childProtectionRules: [
      {
        title: "Continuous Supervised Contact Only",
        description: "Volunteers and students are never permitted to be alone with children. Every interaction must occur in open, visible communal spaces under the direct supervision of vetted Ugandan school or healthcare staff."
      },
      {
        title: "Mandatory Background & Police Clearances",
        description: "Every participant working in educational, child health, or youth settings must submit an official police criminal record check (e.g., FBI check, DBS enhanced, or national equivalent) prior to arrival."
      },
      {
        title: "Strict Ban on Overnight / Unsupervised Contact",
        description: "Volunteers are strictly forbidden from hosting children at volunteer accommodations or entering dormitory areas without senior staff present."
      },
      {
        title: "Child Dignity & Photography Prohibition",
        description: "No photos or videos of minors may be published on personal social media without signed parental/guardian and organizational consent. Geotagging and depicting vulnerable situations are strictly prohibited."
      },
      {
        title: "Minimum 4-Week Childcare Placement Rule",
        description: "To prevent attachment disruption and emotional harm caused by rotating short-term visitors, all educational and youth placements require a minimum 4-week commitment [CONFIRM: minimum duration]."
      },
      {
        title: "Absolute Rejection of Orphanage Tourism",
        description: "We strictly do not facilitate or endorse visits to orphanages. Research shows institutionalization harms children; we support only community-based family preservation and day school programs."
      }
    ],

    medicalScopeRules: [
      {
        title: "Observation & Shadowing Bounds",
        description: "Students perform observational shadowing and clinical support strictly calibrated to their certified educational level. They never act as independent primary clinicians."
      },
      {
        title: "Informed Patient Consent",
        description: "Local patients have the unconditional right to refuse student observation without compromising their clinical care. Student badges clearly identify trainee status."
      },
      {
        title: "Patient Confidentiality & Data Protection",
        description: "No identifiable patient records, photos, or clinical notes may leave hospital premises, complying with Ugandan and international medical privacy standards."
      }
    ],

    feeTransparency: {
      overview: "We believe ethical organizations must publish transparent financial breakdowns. Participant fees are reinvested into the host ecosystem rather than extracted.",
      allocations: [
        {
          category: "Local Host Families & Community Projects",
          description: "Direct lodging stipends, host meals, and direct cash contributions to host health clinics and schools.",
          percentagePlaceholder: "45% - 50% [CONFIRM: actual audited percentage]"
        },
        {
          category: "Field Operations & Safety Infrastructure",
          description: "Dedicated 24/7 in-country coordinators, 4x4 transport, AMREF aero-evacuation coverage, and airport logistics.",
          percentagePlaceholder: "25% - 30% [CONFIRM: actual audited percentage]"
        },
        {
          category: "Administration, Regulatory & Taxes",
          description: "Ugandan business registration (URSB), insurance policies, banking/transaction fees, and staff salaries.",
          percentagePlaceholder: "15% - 20% [CONFIRM: actual audited percentage]"
        },
        {
          category: "Emergency Contingency Reserve",
          description: "Dedicated liquid reserve maintained for unforeseen field emergencies or health evacuations.",
          percentagePlaceholder: "5% [CONFIRM: actual audited percentage]"
        }
      ]
    }
  },

  forUniversities: {
    hero: {
      headline: "Accredited Global Health & Fieldwork Partnerships in Uganda",
      subheadline: "Turnkey institutional risk clearance, supervised elective hours, and verified supervisor evaluations for university faculties."
    },
    institutionalOfferings: [
      {
        title: "Verifiable Clinical & Field Electives",
        description: "Standardized syllabi and logbook protocols matching US, UK, European, and Australian pre-graduation clinical requirements."
      },
      {
        title: "Faculty-Led Custom Study Abroad",
        description: "Full in-country logistical orchestration for faculty-led cohorts: private 4x4 transport, vetted accommodation, AMREF aero-medical insurance, and academic guest lectures."
      },
      {
        title: "Institutional RAMS & Safety Dossier",
        description: "Comprehensive Risk Assessment and Management Strategy (RAMS) documentation covering infectious disease, emergency evacuation, water security, and 24/7 incident response."
      },
      {
        title: "Official Logbook & Transcript Sign-Off",
        description: "Formal sign-off by registered Ugandan medical officers, clinical preceptors, and institutional supervisors on university completion certificates."
      }
    ],
    faqs: [
      {
        q: "How does Pearl Roots verify clinical supervision for our students?",
        a: "Every medical and healthcare placement is attached to a registered Ugandan Medical Officer or Clinical Preceptor who reviews the student's learning contract, supervises shifts, and completes weekly sign-offs."
      },
      {
        q: "What medical evacuation procedures are in place for remote placements?",
        a: "All international participants are enrolled in our AMREF Flying Doctors aero-medical protocol. In an acute emergency, air ambulances land at designated bush airstrips with rapid transfer to Kampala Level-4 trauma facilities."
      },
      {
        q: "Can our faculty arrange a site inspection visit prior to student dispatch?",
        a: "Yes. Collins Ssegawa hosts university study abroad directors and department heads for structured 4-day institutional familiarization visits across our partner clinics and field stations."
      }
    ]
  },

  faqList: [
    {
      q: "How quickly will someone respond to my inquiry?",
      a: "We guarantee a personal response within 24 hours. Collins or our senior in-country coordinator will review your goals and schedule a WhatsApp or video consultation."
    },
    {
      q: "Can I add a safari onto my student placement?",
      a: "Yes! The safari is designed as your earned reward. You can select our popular 5-day Queen Elizabeth & Lake Bunyonyi safari directly during your inquiry, or customize dates closer to departure."
    },
    {
      q: "What are the visa and vaccination requirements for Uganda?",
      a: "International travelers require an online Uganda e-Visa ($50 USD) and a valid Yellow Fever vaccination certificate. We provide a comprehensive pre-departure pack with step-by-step visa instructions upon application confirmation."
    },
    {
      q: "How are host families vetted for independent volunteers?",
      a: "Host families undergo a thorough multi-step vetting process including home physical inspections (running water, private lockable rooms, perimeter security), background interviews, and references from local village councils."
    },
    {
      q: "What is your child safeguarding policy for educational placements?",
      a: "We maintain zero tolerance for child exploitation. Volunteers are never permitted alone with children, must submit criminal background checks, commit to a minimum stay of 4 weeks, and cannot take unconsented photographs."
    }
  ]
};
