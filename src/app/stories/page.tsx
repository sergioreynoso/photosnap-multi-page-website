"use client";
import StoriesGroup from "@/src/components/layout-groups/stories-group";
import StoriesHeroCard from "@/src/components/stories/stories-hero-card";

export default function Stories() {
  return (
    <main className="mx-auto max-w-[1440px] pt-18">
      <StoriesHeroCard />
      <StoriesGroup limit={Infinity} />
    </main>
  );
}
