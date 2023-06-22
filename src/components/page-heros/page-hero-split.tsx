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
};
// TODO: Add alt text to images
export default function PageHeroSplit({
  data,
  bgColor = "black",
  textPosition = "right",
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
      <div className="relative flex h-[420px] max-w-[610px] flex-[1_0_64.5%] flex-col justify-center gap-4 pl-8 pr-6 tablet:h-[650px] tablet:px-14 desktop:flex-[1_0_42%]">
        <span className="absolute top-0 block h-[6px] w-32 bg-brand-accent"></span>
        <h1 className="text-2xl uppercase tablet:text-3xl">{title}</h1>
        <p className="text-sm opacity-60">{body}</p>
        <ArrowButton href={`/${route}`}>{linkLabel}</ArrowButton>
      </div>
    </section>
  );
}
