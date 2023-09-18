import FeaturesGroup from "@/src/components/grids/product-features-grid";
import PromoGroup from "@/src/components/grids/promo-grid";
import StoriesGroup from "@/src/components/grids/stories-grid";
import HomeHero from "@components/home/home-hero-card";

export default async function Home() {
  return (
    <main>
      <HomeHero />
      <PromoGroup />
      <StoriesGroup />
      <FeaturesGroup limit={3} />
    </main>
  );
}
