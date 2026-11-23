import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { PromoGrid } from "@/components/home/PromoGrid";
import { MissionBanner } from "@/components/home/MissionBanner";
import { FavoritesCarousel } from "@/components/home/FavoritesCarousel";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { EditorialPicks } from "@/components/home/EditorialPicks";
import { SocialGallery } from "@/components/home/SocialGallery";
import { ValuesStrip } from "@/components/home/ValuesStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <PromoGrid />
      <MissionBanner />
      <FavoritesCarousel />
      <TestimonialSlider />
      <EditorialPicks />
      <SocialGallery />
      <ValuesStrip />
    </>
  );
}
