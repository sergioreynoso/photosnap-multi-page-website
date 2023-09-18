import data from "@/data";
import ProductFeaturesCard from "@components/cards/product-features-card";

type Props = {
  limit?: number;
  grid?: boolean;
};

export default function FeaturesGroup({
  limit = Infinity,
  grid = false,
}: Props) {
  const features = data.features;

  if (!grid)
    return (
      <div className="flex flex-col items-center gap-14 py-20 tablet:gap-20 tablet:px-32 tablet:py-[120px] desktop:flex-row desktop:items-start desktop:justify-center desktop:gap-8">
        {features.map((feature, index) => {
          const { id, title, body, image } = feature;
          if (index + 1 <= limit)
            return (
              <ProductFeaturesCard key={id} image={image}>
                <div className="flex flex-col items-center gap-4">
                  <h2 className="text-lg font-bold">{title}</h2>
                  <p className="text-center opacity-60">{body}</p>
                </div>
              </ProductFeaturesCard>
            );
        })}
      </div>
    );

  return (
    <div className="grid grid-cols-1 place-items-center gap-14 px-8 py-20 tablet:grid-cols-2 tablet:gap-x-3 tablet:gap-y-[72px] tablet:px-10 desktop:grid-cols-3 desktop:py-[160px]">
      {features.map((feature, index) => {
        const { id, title, body, image } = feature;
        if (index + 1 <= limit)
          return (
            <ProductFeaturesCard key={id} image={image}>
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-center opacity-60">{body}</p>
              </div>
            </ProductFeaturesCard>
          );
      })}
    </div>
  );
}
