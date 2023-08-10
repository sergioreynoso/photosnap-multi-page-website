import BannerCard from "@components/cards/banner";
import PricingList from "@components/pricing/pricing-list";
import PricingCompareTable from "@components/pricing/pricing-compare-table";
import { PricingHeroCard } from "@components/pricing/pricing-hero-card";

export default function Pricing() {
  return (
    <main className="mx-auto max-w-[1440px]">
      <PricingHeroCard />
      <PricingList />
      <PricingCompareTable />
      <BannerCard />
    </main>
  );
}
