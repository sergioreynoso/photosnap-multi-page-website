import PageHeroSplit from "../components/page-heros/page-hero-split";
import { homeData } from "@/data";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-18">
      {homeData.map((data, index) => {
        const bgColor = index === 0 ? "black" : "white";
        const textPosition = index % 2 === 0 ? "right" : "left";
        return (
          <PageHeroSplit
            key={data.id}
            data={data}
            bgColor={bgColor}
            textPosition={textPosition}
          />
        );
      })}
    </main>
  );
}
