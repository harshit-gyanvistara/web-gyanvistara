import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/contact", "/privacy", "/terms"].map((p) => ({ url: `${SITE}${p}`, lastModified: new Date() }));
}
