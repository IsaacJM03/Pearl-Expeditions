import { ResearchStation } from "@/types";

export const researchStations: ResearchStation[] = [
  {
    id: "mubfs-kibale",
    name: "Makerere Biological Field Station (MUBFS)",
    discipline: "Primate Behavioral Ecology & Albertine Canopy",
    location: "Kanyawara, Kibale National Park (Western Uganda)",
    coordinates: "0°34'N, 30°21'E",
    elevation: "1,500m ASL",
    facilities: [
      "Wet & dry analytical biological laboratories",
      "Microbiology benches & compound stereomicroscopes",
      "Canopy observation research towers (32m height)",
      "40-bed academic dormitories & faculty solar cottages",
      "Dedicated high-speed Starlink field satellite terminal"
    ],
    evacAirstrip: "Kasese Bush Airstrip (KIB)",
    emergencyTransitTime: "~42 min air evacuation protocol via AMREF Flying Doctors",
    mapX: 25,
    mapY: 62,
    description: "East Africa's premier tropical forest research station, operated by Makerere University for over 50 years. Home to four habituated chimpanzee communities and continuous phenological observation transects."
  },
  {
    id: "gulu-ipss",
    name: "Gulu University Institute of Peace & Strategic Studies (IPSS)",
    discipline: "Transitional Justice & Customary Reconciliation",
    location: "Gulu City & Acholi Sub-region (Northern Uganda)",
    coordinates: "2°46'N, 32°18'E",
    elevation: "1,100m ASL",
    facilities: [
      "Transitional justice archives & oral history vaults",
      "Academic seminar auditorium (120 seats)",
      "Community reconciliation dialogue council circle",
      "Liaison desk with Acholi Council of Elders (*Ker Kwaro Acholi*)"
    ],
    evacAirstrip: "Gulu Regional Airfield (ULU)",
    emergencyTransitTime: "~55 min air evacuation protocol via AMREF Flying Doctors",
    mapX: 52,
    mapY: 28,
    description: "The intellectual epicenter of northern Uganda's post-war transition. IPSS bridges international criminal law (ICC) with ancestral community cleansing rituals (*Mato Oput*) and grassroots peacebuilding."
  },
  {
    id: "mabamba-wetland",
    name: "Mabamba Bay Ramsar Living Wetland",
    discipline: "Avian Wetland Ecology & Shoebill Stork Census",
    location: "Lake Victoria Basin, Wakiso District",
    coordinates: "0°07'N, 32°20'E",
    elevation: "1,134m ASL",
    facilities: [
      "Motorized wetland research canoes with silent electric outboards",
      "Water physicochemical telemetry monitoring kits",
      "Community wetland conservation cooperative research center",
      "Lake Victoria water quality baseline station"
    ],
    evacAirstrip: "Entebbe International Airport (EBB)",
    emergencyTransitTime: "~18 min emergency road/water transit to Entebbe / Kampala medical facilities",
    mapX: 55,
    mapY: 76,
    description: "A globally recognized Ramsar wetland site harboring one of Africa's most significant populations of the prehistoric Shoebill Stork (*Balaeniceps rex*). Co-managed with indigenous fishermen."
  },
  {
    id: "sipi-elgon",
    name: "Mount Elgon Agro-Ecology & Permaculture Hub",
    discipline: "Volcanic Agroforestry & Climate Hazard Mapping",
    location: "Sipi Falls, Kapchorwa / Mbale (Eastern Slopes)",
    coordinates: "1°20'N, 34°22'E",
    elevation: "1,800m – 2,200m ASL",
    facilities: [
      "Volcanic soil chemistry & moisture saturation testing station",
      "SCA-certified specialty Arabica coffee cupping lab",
      "Household bio-gas renewable energy demonstration center",
      "GIS landslide risk mapping & reforestation tree nursery"
    ],
    evacAirstrip: "Tororo Regional Airfield",
    emergencyTransitTime: "~48 min aero-medical flight protocol to Kampala Level-4",
    mapX: 84,
    mapY: 56,
    description: "Perched atop the volcanic fertile rim of Mount Elgon. Focuses on slope stabilization, indigenous tree reforestation, and direct economic reciprocity with Bugisu organic coffee cooperatives."
  },
  {
    id: "nakasero-hq",
    name: "Nakasero Trauma Center & Makerere University HQ",
    discipline: "Level-4 Medical Command & Academic Central Secretariat",
    location: "Kampala Central (Nakasero Hill & Makerere Main)",
    coordinates: "0°19'N, 32°34'E",
    elevation: "1,200m ASL",
    facilities: [
      "Level-4 Emergency & Intensive Care Unit (ICU)",
      "Direct aero-ambulance ground ambulance triage bay",
      "Makerere University Central Administration & REC Committee",
      "Collins Ssegawa Expedition Operations Liaison Desk"
    ],
    evacAirstrip: "Kololo / Entebbe International (Direct Ambulance Transit)",
    emergencyTransitTime: "Designated Receiving Facility — Established admission liaison protocol",
    mapX: 61,
    mapY: 69,
    description: "The institutional coordination liaison for Pearl Roots & Expeditions. Coordinates communications, RAMS duty-of-care protocols, and admission liaison with premier Kampala trauma centers."
  }
];
