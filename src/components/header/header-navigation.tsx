"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

const HeaderNavigation = () => {
  const Item = ({ href, label }: { href: string; label: string }) => {
    return (
      <NavigationMenu.Item>
        <NavigationMenu.Link asChild>
          <Link href={href} className=" hover:opacity-30">
            {label}
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  };

  return (
    <div className="hidden tablet:block">
      <NavigationMenu.Root
        className="text-center text-sm font-bold uppercase tracking-[2.5px] text-brand-black tablet:text-xs"
        orientation="horizontal">
        <NavigationMenu.List className="item-center flex flex-col gap-3 tablet:flex-row tablet:items-center tablet:gap-8 desktop:h-full">
          <Item href="/stories" label="Stories" />
          <Item href="/features" label="Features" />
          <Item href="/pricing" label="Pricing" />
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
};

export default HeaderNavigation;
