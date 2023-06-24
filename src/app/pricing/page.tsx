import { pricingData } from "@/data";
import PrimaryHeroCard from "@/src/components/cards/primary-hero-card";
import PromoCard from "@/src/components/cards/promo-card";
import PricingList from "../../components/pricing/pricing-list";

export default function Pricing() {
  const { title, body, image } = pricingData.hero;
  return (
    <main className="mx-auto max-w-[1440px] pt-18">
      <PrimaryHeroCard image={image} accent>
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-2xl font-bold uppercase tablet:text-3xl">
            {title}
          </h1>
          <p className="text-sm opacity-60">{body}</p>
        </div>
      </PrimaryHeroCard>
      <PricingList />
      <PromoCard />
    </main>
  );
}
