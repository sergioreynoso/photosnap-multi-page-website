import FeaturesGroup from "@/src/components/layout-groups/product-features-group";
import Banner from "@/src/components/cards/banner";
import { FeaturesHeroCard } from "@/src/components/features/features-hero-card";

export default function Features() {
  return (
    <main className="mx-auto max-w-[1440px]">
      <FeaturesHeroCard />
      <FeaturesGroup grid />
      <Banner />
    </main>
  );
}
