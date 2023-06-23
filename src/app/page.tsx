import HerosGroup from "../components/layout-groups/heros-group";
import StoriesGroup from "../components/layout-groups/stories-group";

export default async function Home() {
  return (
    <main className="mx-auto max-w-[1440px] pt-18">
      <HerosGroup />
      <StoriesGroup />
    </main>
  );
}
