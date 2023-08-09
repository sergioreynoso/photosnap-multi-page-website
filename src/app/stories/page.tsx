"use client";
import StoriesGroup from "@components/layout-groups/stories-group";
import StoriesHeroCard from "@components/stories/stories-hero-card";

export default function Stories() {
  return (
    <main className="mx-auto max-w-[1440px]">
      <StoriesHeroCard />
      <StoriesGroup limit={Infinity} />
    </main>
  );
}
