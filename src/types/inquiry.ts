export type InquiryInterest =
  | "student_placement"
  | "volunteer"
  | "post_safari"
  | "leisure_safari"
  | "university_partnership";

export type InquiryStatus =
  | "new"
  | "contacted"
  | "application_sent"
  | "confirmed"
  | "completed_lost";

export interface InquiryDynamicFields {
  placementSector?: "medical_healthcare" | "social_work_education" | "community_ngo" | "other";
  durationWeeks?: number | string;
  targetMonth?: string;
  universityName?: string;
  fieldOfStudy?: string;
  safariAddonInterested?: boolean | string;
  travelStyle?: "homestay" | "guest_house" | "eco_lodge";
  safariPackage?: "5_day_post_placement" | "gorilla_bwindi" | "chimp_kibale" | "murchison_jinja" | "custom";
  travelersCount?: number | string;
  targetTravelDates?: string;
  departmentOrFaculty?: string;
  estimatedCohortSize?: number | string;
  chaperoneNeeds?: boolean | string;
}

export interface Inquiry {
  id: string;
  interest: InquiryInterest;
  fullName: string;
  email: string;
  phoneOrWhatsApp: string;
  country: string;
  travelType: "individual" | "group";
  dynamicFields: InquiryDynamicFields;
  message: string;
  status: InquiryStatus;
  assignedTo?: string;
  notes?: string;
  slaDeadline: string; // ISO timestamp (createdAt + 24h)
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
}

export interface InquiryFormData {
  interest: InquiryInterest;
  fullName: string;
  email: string;
  phoneOrWhatsApp: string;
  country: string;
  travelType: "individual" | "group";
  dynamicFields: InquiryDynamicFields;
  message: string;
  safeguardingAgreed: boolean;
  botTrap?: string; // honeypot
}
