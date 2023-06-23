import { homeData } from "@/data";
import PrimaryHeroSplit from "../cards/primary-hero-split";
import ArrowButton from "../buttons/arrow-button";

type Props = {
  limit?: number;
};

export default function HerosGroup({ limit = 4 }: Props) {
  return (
    <>
      {homeData.map((data, index) => {
        const { image, title, body, linkLabel, route } = data;

        const bgColor = index === 0 ? "black" : "white";
        const textPosition = index % 2 === 0 ? "right" : "left";
        const withAccent = index ? false : true;
        const Heading = index === 0 ? "h1" : "h2";

        if (index + 1 <= limit)
          return (
            <PrimaryHeroSplit
              image={image}
              accent={withAccent}
              bgColor={bgColor}
              textPosition={textPosition}>
              <div className="flex flex-col items-start gap-4">
                <Heading className="text-2xl uppercase tablet:text-3xl">
                  {title}
                </Heading>
                <p className="text-sm opacity-60">{body}</p>
                <ArrowButton href={`/${route}`}>{linkLabel}</ArrowButton>
              </div>
            </PrimaryHeroSplit>
          );
      })}
    </>
  );
}
