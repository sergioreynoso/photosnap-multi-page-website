import PrimaryHeroCard from "@/src/components/cards/primary-hero-card";
import { featuresData } from "@/data";
import FeaturesGroup from "@/src/components/layout-groups/features-group";
import PromoCard from "@/src/components/cards/promo-card";

export default function Features() {
  const { title, body, image } = featuresData.hero;

  return (
    <main className="mx-auto max-w-[1440px] pt-18">
      <PrimaryHeroCard image={image}>
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-2xl font-bold uppercase tablet:text-3xl">
            {title}
          </h1>
          <p className="text-sm opacity-60">{body}</p>
        </div>
      </PrimaryHeroCard>
      <FeaturesGroup grid />
      <PromoCard />
    </main>
  );
}
