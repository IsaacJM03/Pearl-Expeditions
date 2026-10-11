export interface Program {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  discipline: "Biological Sciences" | "Peace & Conflict" | "Agro-Ecology & CAS";
  level: string;
  credits: string;
  fieldStation: string;
  chaperoneRatio: string;
  heroImage: string;
  shortDescription: string;
  overview: string;
  learningOutcomes: string[];
  fieldHighlights: string[];
  stationDetails: {
    name: string;
    elevation: string;
    coordinates: string;
    evacStrip: string;
    transitTime: string;
  };
  itinerary: {
    day: number;
    title: string;
    location: string;
    schedule: { time: string; activity: string }[];
    fieldKit: string[];
    sdgFocus: string;
  }[];
  priceEstimateUSD: number;
}

export interface ResearchStation {
  id: string;
  name: string;
  discipline: string;
  location: string;
  coordinates: string;
  elevation: string;
  facilities: string[];
  evacAirstrip: string;
  emergencyTransitTime: string;
  mapX: number; // percentage on SVG viewBox
  mapY: number; // percentage on SVG viewBox
  description: string;
}

export interface ProposalState {
  discipline: string;
  cohortSize: number;
  durationDays: number;
  season: string;
  accommodationType: "station-dorm" | "academic-cottage" | "safari-tented";
  requireUNCST: boolean;
  requireAMREF: boolean;
  notes: string;
}
