import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pearlroots.com";
  const now = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/programs/student-placements", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/programs/medical-healthcare-placements", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/programs/social-work-and-education", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/programs/community-development-ngo", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/volunteer-uganda", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/tours/5-day-post-placement-safari", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/tours/leisure-safaris", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/about-and-safety", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/safeguarding", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/for-universities", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/journal", priority: 0.7, changeFrequency: "weekly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
