import FeaturesGroup from "@/src/components/grids/product-features-grid";
import Banner from "@components/cards/banner";
import { FeaturesHeroCard } from "@components/features/features-hero-card";

export default function Features() {
  return (
    <main className="mx-auto max-w-[1440px]">
      <FeaturesHeroCard />
      <FeaturesGroup grid />
      <Banner />
    </main>
  );
}
