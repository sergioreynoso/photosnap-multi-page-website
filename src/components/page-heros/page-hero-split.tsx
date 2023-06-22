import Image, { StaticImageData } from "next/image";
import ArrowButton from "../buttons/arrow-button";
import { homeData } from "@/data";

type Data = {
  image: StaticImageData;
  title: string;
  body: string;
  linkLabel: string;
  route: string;
};

type Props = {
  data: Data;
  bgColor?: "white" | "black";
  textPosition?: "left" | "right";
  accent?: boolean;
};
// TODO: Add alt text to images
export default function PageHeroSplit({
  data,
  bgColor = "black",
  textPosition = "right",
  accent,
}: Props) {
  const { image, title, body, linkLabel, route } = data;
  const blackTheme = "bg-brand-black text-brand-white";
  const whiteTheme = "bg-brand-white text-brand-black";
  const theme = bgColor === "black" ? blackTheme : whiteTheme;
  const flexReverse = textPosition === "right" ? "tablet:flex-row-reverse" : "";

  return (
    <section
      className={`w-screen max-w-screen-desktop ${theme} tablet:flex ${flexReverse}`}>
      <div className="flex-shrink">
        <Image
          src={image}
          alt="man on peer overlooking lake"
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative flex h-[420px] max-w-[610px] flex-[1_0_64.5%] flex-col items-start justify-center tablet:h-[650px] desktop:flex-[1_0_42%]">
        {accent && (
          <span className="absolute left-8 top-0 block h-[6px] w-32 bg-brand-accent tablet:hidden" />
        )}
        <div className="relative flex flex-col items-start gap-4 pl-8 pr-6 tablet:px-14 desktop:px-28">
          {accent && (
            <span className="absolute bottom-0 left-0 top-0 hidden w-[6px] bg-brand-accent tablet:block" />
          )}
          <h1 className="text-2xl uppercase tablet:text-3xl">{title}</h1>
          <p className="text-sm opacity-60">{body}</p>
          <ArrowButton href={`/${route}`}>{linkLabel}</ArrowButton>
        </div>
      </div>
    </section>
  );
}
