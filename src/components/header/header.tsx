"use client";
import Logo from "@/public/logo/photosnap_logo_white.png";
import Image from "next/image";
import Link from "next/link";
import HeaderMobileNavigation from "./header-mobile-navigation";
import HeaderNavigation from "./header-navigation";
import PrimaryButton from "@components/buttons/primary-button";
import useIsCurrentRoute from "@/src/lib/hooks/useIsCurrentRoute";

export default function Header() {
  const { isCurrentRoute } = useIsCurrentRoute("/");

  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex h-[72px] max-w-full justify-center bg-brand-white px-6 tablet:px-10">
      <div className="flex w-full max-w-[1110px] items-center justify-between">
        <Link href="/" {...(isCurrentRoute ? { "aria-current": "page" } : {})}>
          <Image src={Logo} alt="logo" priority className="h-4 w-[170px]" />
        </Link>
        <HeaderNavigation label="header navigation" />
        <div className="hidden tablet:block">
          <PrimaryButton href="#">Get an Invite</PrimaryButton>
        </div>
        <div className="tablet:hidden">
          <HeaderMobileNavigation />
        </div>
      </div>
    </header>
  );
}
