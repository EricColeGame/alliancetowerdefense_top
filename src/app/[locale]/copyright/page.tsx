import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Alliance Tower Defense, Roblox, game artwork, logos, unit names, and related media belong to MrUpTime&apos;s Games, Roblox Corporation, and their respective rights holders.</p>
      <p>This independent fan wiki presents community-created guides, commentary, and reference material for informational purposes.</p>
      <p>If you own rights to content displayed here and have a concern, contact <a className="text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
