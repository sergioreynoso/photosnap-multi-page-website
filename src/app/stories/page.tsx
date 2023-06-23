import StoriesGroup from "@/src/components/layout-groups/stories-group";
import { storyData } from "@/data";
import PrimaryHeroSplit from "@/src/components/cards/primary-hero-split";
import ArrowButton from "@/src/components/buttons/arrow-button";

export default function Stories() {
  const { image, route, title, linkLabel, body } = storyData.hero;
  return (
    <main className="mx-auto max-w-[1440px] pt-18">
      <PrimaryHeroSplit image={image} fullBleed>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-2xl uppercase tablet:text-3xl">{title}</h1>
          <p className="text-sm opacity-60">{body}</p>
          <ArrowButton href={`/${route}`}>{linkLabel}</ArrowButton>
        </div>
      </PrimaryHeroSplit>
      <StoriesGroup limit={Infinity} />
    </main>
  );
}
