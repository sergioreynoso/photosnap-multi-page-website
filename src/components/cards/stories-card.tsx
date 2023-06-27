"use client";
import * as Separator from "@radix-ui/react-separator";

import { storyData } from "@/data";
import ArrowButton from "../buttons/arrow-button";
import Link from "next/link";
import ArrowIcon from "../icons/arrowIcon";
import Image from "next/image";

type Story = (typeof storyData.stories)[0];
type Props = {
  data: Story;
  showDate?: boolean;
};

export default function StoriesCard({ data, showDate = false }: Props) {
  const { image, title, author, linkLabel, route, date } = data;
  return (
    <Link href={`/${route}`} className="group block cursor-pointer">
      <div className="relative h-[375px] w-full flex-auto  bg-brand-white bg-gradient-to-t from-brand-black/60 to-brand-black/0 text-brand-white transition-transform group-hover:-translate-y-6 tablet:h-[500px] tablet:via-brand-black/0">
        <Image
          src={image.src}
          alt={image.alt}
          fill={true}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover mix-blend-multiply"
        />
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start px-8 pb-10 ">
          {showDate && <p>{date}</p>}
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-[13px]">{`by ${author}`}</p>
          <Separator.Root className="z-auto my-[15px] bg-brand-grey opacity-25 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
          <div className="flex w-full items-center justify-between text-xs uppercase">
            <p>{linkLabel}</p>
            <ArrowIcon />
          </div>
        </div>
        <span className="absolute -bottom-[6px] left-0 block h-[6px] w-full origin-top scale-y-0 bg-brand-accent transition-transform group-hover:scale-y-[6px]" />
      </div>
    </Link>
  );
}
