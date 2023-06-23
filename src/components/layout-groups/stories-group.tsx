import { storyData } from "@/data";
import StoriesCard from "../cards/stories-card";

type Props = {
  limit?: number;
};

export default function StoriesGroup({ limit = 4 }: Props) {
  const { stories } = storyData;
  return (
    <div className="tablet:grid tablet:grid-cols-2 desktop:grid-cols-4">
      {stories.map((storyData, index) => {
        if (index + 1 <= limit)
          return <StoriesCard key={storyData.id} data={storyData} />;
      })}
    </div>
  );
}
