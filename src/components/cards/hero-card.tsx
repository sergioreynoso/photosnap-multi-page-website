import Image, { StaticImageData } from "next/image";
import { ReactNode, forwardRef } from "react";

export type ImageAttributes = {
  src: StaticImageData;
  alt: string;
};

type Props = {
  children?: ReactNode;
  theme?: "black" | "white";
  image: ImageAttributes;
  height?: "tall" | "short";
  bleed?: boolean;
  textPosition?: "on-right" | "on-left";
};

export const HeroCard = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      theme = "black",
      image,
      height = "short",
      bleed = false,
      textPosition = "on-left",
    }: Props,
    ref
  ) => {
    const blackTheme = "bg-brand-black text-brand-white";
    const whiteTheme = "bg-brand-white text-brand-black";
    const onLeft = "tablet:col-start-1 tablet:col-end-2";
    const onRight = "tablet:col-start-2 tablet:col-end-3";

    const cardBleed = bleed && "col-start-1 col-end-3";
    const cardHeight =
      height === "short" ? "tablet:h-[490px]" : "tablet:h-[650px]";
    const cardTheme = theme === "black" ? blackTheme : whiteTheme;

    const cardTextPosition = textPosition === "on-right" ? onRight : onLeft;
    const cardGridLayout =
      textPosition === "on-right"
        ? "tablet:grid-cols-[auto_495px] desktop:grid-cols-[auto_610px]"
        : "tablet:grid-cols-[495px_auto] desktop:grid-cols-[610px_auto]";

    return (
      <section
        ref={ref}
        className={`mx-auto max-w-[1440px] ${cardTheme} tablet:grid ${cardHeight} ${cardGridLayout}`}>
        <div
          className={`relative h-[294px] ${cardBleed} tablet:row-start-1 tablet:h-full`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes={bleed ? "100vw" : "(min-width:768px) 50vw, 100vw"}
            priority
          />
        </div>
        <div
          className={`relative row-start-1 flex items-center justify-center ${cardTextPosition} tablet:h-full`}>
          {children}
        </div>
      </section>
    );
  }
);

HeroCard.displayName = "HeroCard";
