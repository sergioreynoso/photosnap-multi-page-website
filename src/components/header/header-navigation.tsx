"use client";
import useIsCurrentRoute from "@/src/lib/hooks/useIsCurrentRoute";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { useId } from "react";

type Props = {
  label: string;
};

const HeaderNavigation = ({ label }: Props) => {
  const id = useId();

  const Item = ({ route, label }: { route: string; label: string }) => {
    const { isCurrentRoute } = useIsCurrentRoute(route);
    return (
      <NavigationMenu.Item>
        <NavigationMenu.Link asChild active={isCurrentRoute}>
          <Link href={route} className=" hover:opacity-30">
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
        aria-labelledby={id}>
        <VisuallyHidden>
          <h2 id={id}>{label}</h2>
        </VisuallyHidden>
        <NavigationMenu.List className="flex flex-col items-center gap-3 tablet:flex-row tablet:items-center tablet:gap-8 desktop:h-full">
          <Item route="/stories" label="Stories" />
          <Item route="/features" label="Features" />
          <Item route="/pricing" label="Pricing" />
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
};

export default HeaderNavigation;
