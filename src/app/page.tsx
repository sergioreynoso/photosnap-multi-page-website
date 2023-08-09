import FeaturesGroup from "../components/layout-groups/product-features-group";
import HerosGroup from "../components/layout-groups/heros-group";
import StoriesGroup from "../components/layout-groups/stories-group";
import HomeHero from "@components/home/home-hero-card";
import TestHeroCard from "../components/cards/test-hero-card";

export default async function Home() {
  return (
    <main>
      <HomeHero />
      <HerosGroup />
      <StoriesGroup />
      <FeaturesGroup limit={3} />
    </main>
  );
}
