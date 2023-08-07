import FeaturesGroup from "../components/layout-groups/product-features-group";
import HerosGroup from "../components/layout-groups/heros-group";
import StoriesGroup from "../components/layout-groups/stories-group";
import HomeHero from "@components/home/home-hero-card";

export default async function Home() {
  return (
    <main className="mx-auto max-w-[1440px] pt-18">
      <HomeHero />
      <HerosGroup />
      <StoriesGroup />
      <FeaturesGroup limit={3} />
    </main>
  );
}
