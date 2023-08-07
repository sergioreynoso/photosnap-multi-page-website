import PromoCard from "@/src/components/cards/banner";
import PricingList from "../../components/pricing/pricing-list";
import PricingCompareTable from "@/src/components/pricing/pricing-compare-table";
import { PricingHeroCard } from "@/src/components/pricing/pricing-hero-card";

export default function Pricing() {
  return (
    <main className="mx-auto max-w-[1440px] pt-18">
      <PricingHeroCard />
      <PricingList />
      <PricingCompareTable />
      <PromoCard />
    </main>
  );
}
