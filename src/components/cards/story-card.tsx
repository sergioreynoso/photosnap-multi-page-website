"use client";
import * as Separator from "@radix-ui/react-separator";
import { motion, Variants } from "framer-motion";

import data from "@/data";
import Link from "next/link";
import ArrowIcon from "@components/icons/arrowIcon";
import Image from "next/image";

const containerVariant: Variants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
    },
  },
};

const childVariant: Variants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

type Story = (typeof data.stories)[0];
type Props = {
  data: Story;
  showDate?: boolean;
};

export default function StoriesCard({ data, showDate = false }: Props) {
  const { image, title, author, linkLabel, route, date } = data;
  return (
    <Link href={`/${route}`} className="group block cursor-pointer">
      <motion.div
        variants={containerVariant}
        initial="initial"
        animate="visible"
        className="relative h-[375px] w-full flex-auto  bg-brand-white bg-gradient-to-t from-brand-black/60 to-brand-black/0 text-brand-white transition-transform group-hover:-translate-y-6 motion-reduce:transition-none tablet:h-[500px] tablet:via-brand-black/0">
        <Image
          src={image.src}
          alt={image.alt}
          placeholder="blur"
          fill={true}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover mix-blend-multiply"
        />
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start px-10 pb-10 ">
          {showDate && <p>{date}</p>}
          <motion.h2
            variants={childVariant}
            className="inline-block text-lg font-bold">
            {title}
          </motion.h2>
          <motion.p variants={childVariant} className="mb-3 text-[13px]">
            {`by ${author}`}
          </motion.p>
          <motion.div variants={childVariant} className="mb-[20px] w-full">
            <Separator.Root
              className="bg-brand-grey opacity-25 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px"
              orientation="horizontal"
            />
          </motion.div>
          <motion.div
            variants={childVariant}
            className="flex w-full items-center justify-between text-xs uppercase">
            <p>{linkLabel}</p>
            <div>
              <ArrowIcon />
            </div>
          </motion.div>
        </div>
        <span className="absolute -bottom-[6px] left-0 block h-[6px] w-full origin-top scale-y-0 bg-brand-accent transition-transform group-hover:scale-y-[6px] motion-reduce:transition-none" />
      </motion.div>
    </Link>
  );
}
