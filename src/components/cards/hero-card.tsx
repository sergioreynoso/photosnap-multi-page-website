"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

export type ImageAttributes = {
  src: StaticImageData;
  alt: string;
};

type Props = {
  children: React.ReactNode;
  image: ImageAttributes;
  bgColor?: "white" | "black";
  textPosition?: "left" | "right";
  accent?: boolean;
  fullBleed?: boolean;
};

export const HeroCard = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      image,
      bgColor = "black",
      textPosition = "right",
      accent,
      fullBleed = false,
    }: Props,
    ref
  ) => {
    const blackTheme = "bg-brand-black text-brand-white";
    const whiteTheme = "bg-brand-white text-brand-black";
    const theme = bgColor === "black" ? blackTheme : whiteTheme;
    const flexReverse =
      textPosition === "right" ? "tablet:flex-row-reverse" : "";
    const absolute = fullBleed ? "tablet:absolute" : "";
    const imageSizes = fullBleed ? "100vw" : "(max-width: 768px) 100vw, 50vw";

    return (
      <section
        ref={ref}
        className={`relative w-screen max-w-screen-desktop ${theme} tablet:flex ${flexReverse}`}>
        <div className="relative h-[294px] w-full flex-shrink tablet:h-[650px]">
          <Image
            src={image.src}
            alt={image.alt}
            priority
            quality={100}
            fill
            sizes={imageSizes}
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <div
          className={`relative flex max-w-[610px] ${absolute} bottom-0 left-0 right-[35%] top-0 flex-col items-start justify-center  tablet:flex-[1_0_64.5%]  desktop:flex-[1_0_42%]`}>
          {accent && (
            <span className="absolute left-8 top-0 block h-[6px] w-32 bg-brand-accent tablet:hidden" />
          )}
          <div className="relative flex flex-col items-start gap-4 py-18 pl-8 pr-6 tablet:px-14 tablet:py-0 desktop:px-28">
            {accent && (
              <span className="absolute bottom-0 left-0 top-0 hidden w-[6px] bg-brand-accent tablet:block" />
            )}
            {children}
          </div>
        </div>
      </section>
    );
  }
);

HeroCard.displayName = "HeroCard";