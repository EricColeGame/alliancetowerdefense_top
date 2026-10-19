export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Alliance Tower Defense Wiki",
  shortName: "Alliance Tower Defense",
  logoText: "A",
  tagline: "Codes, Units, Tier Lists & Strategy Guides",
  description: "Your ultimate Alliance Tower Defense guide! Explore codes, unit rankings, team builds, summoning tips, stage strategies, and weekly update coverage.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://alliancetowerdefense.top",
  supportEmail: "support@alliancetowerdefense.top",
  gameUrl: "https://www.roblox.com/games/99703116573266/Alliance-Tower-Defense",
  heroVideoId: "ZK-UbWqSL2A", // I Spent 24 Hours In Alliance Tower Defense gameplay video
  social: {
    discord: "https://discord.com/servers/mruptimes-games-1478504663971266610",
    youtube: "https://www.youtube.com/results?search_query=Alliance+Tower+Defense",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
