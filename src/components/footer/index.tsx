"use client";
import LogoIMG from "@/public/photosnap_logo_black.png";
import Image from "next/image";
import SocialIcons from "./social-icons";
import FooterNavigation from "./footer-navigation";
import Link from "next/link";
import ArrowButton from "../buttons/arrow-button";

export default function Footer() {
  const Logo = () => (
    <Link href="/">
      <Image src={LogoIMG} alt="logo" className="h-4 w-[170px]" priority />
    </Link>
  );

  const GetAnInviteBtn = () => (
    <ArrowButton href="#">Get an invite</ArrowButton>
  );
  const CopyRight = () => (
    <div className="flex flex-col items-center gap-2 tablet:flex-row tablet:items-end tablet:gap-4">
      <Link href="/design-system" className="opacity-50 hover:opacity-60">
        Design System
      </Link>
      <p className="opacity-50">Copyright 2019. All Rights Reserved</p>
    </div>
  );

  return (
    <footer className="h-[540px] w-full bg-brand-black px-6 py-14 text-brand-white tablet:h-[284px] tablet:px-10 tablet:py-16">
      <div className="mx-auto h-full w-full max-w-[1110px]">
        <div className="flex  flex-col items-center justify-between gap-8 tablet:hidden">
          <Logo />
          <SocialIcons />
          <div className="mb-7 mt-2">
            <FooterNavigation />
          </div>
          <GetAnInviteBtn />
          <CopyRight />
        </div>
        {/* Tablet */}
        <div className="hidden h-full flex-col justify-between tablet:flex desktop:hidden">
          <div className="grid grid-cols-2 grid-rows-2 items-center gap-3">
            <Logo />
            <div className="justify-self-end">
              <GetAnInviteBtn />
            </div>
            <FooterNavigation />
          </div>
          <div className="flex items-center justify-between">
            <SocialIcons />
            <CopyRight />
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden h-full justify-between gap-32 desktop:flex">
          <div className="flex flex-col justify-between">
            <Logo />
            <SocialIcons />
          </div>
          <FooterNavigation />
          <div className="ml-auto flex flex-col items-end justify-between">
            <GetAnInviteBtn />
            <CopyRight />
          </div>
        </div>
      </div>
    </footer>
  );
}
