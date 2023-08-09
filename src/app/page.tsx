import FeaturesGroup from "@components/layout-groups/product-features-group";
import PromoGroup from "@components/layout-groups/promo-group";
import StoriesGroup from "@components/layout-groups/stories-group";
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
