import Image from "next/image";
import { banner } from "@/data";
import ArrowButton from "../buttons/arrow-button";

export default function PromoCard() {
  const { image, title, route, linkLabel } = banner;

  return (
    <div className="relative mx-auto h-[288px] w-full max-w-[1440px]">
      <span className="absolute left-8 top-0 block h-[6px] w-32 bg-brand-accent tablet:hidden" />
      <Image
        src={image.src}
        alt={image.alt}
        fill={true}
        quality={100}
        sizes="(max-width: 768px) 80vw, 100vw"
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 mx-auto flex flex-col items-start justify-center gap-6 px-7 text-brand-white tablet:flex-row tablet:items-center tablet:justify-between tablet:px-10 desktop:px-[165px]">
        <span className="absolute bottom-0 left-0 top-0 hidden w-[6px] bg-brand-accent tablet:block" />
        <h1 className="text-2xl font-bold uppercase tablet:w-[350px]">
          {title}
        </h1>
        <ArrowButton href={route}>{linkLabel}</ArrowButton>
      </div>
    </div>
  );
}
