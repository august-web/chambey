import { AboutPreviewSection } from "@/sections/AboutPreviewSection";
import { CommunityCtaSection } from "@/sections/CommunityCtaSection";
import { FieldsOverviewSection } from "@/sections/FieldsOverviewSection";
import { HeroSection } from "@/sections/HeroSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <FieldsOverviewSection />
      <CommunityCtaSection />
    </>
  );
}
