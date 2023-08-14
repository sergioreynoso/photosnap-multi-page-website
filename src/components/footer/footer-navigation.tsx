import useIsCurrentRoute from "@/src/lib/hooks/useIsCurrentRoute";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { useId } from "react";

type Props = {
  label: string;
};

export default function FooterNavigation({ label }: Props) {
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
    <NavigationMenu.Root
      className="text-center text-xs font-bold uppercase text-brand-white"
      aria-labelledby={id}>
      <VisuallyHidden>
        <h2 id={id}>{label}</h2>
      </VisuallyHidden>
      <NavigationMenu.List className="flex flex-col gap-5  tablet:flex-row desktop:h-full desktop:-translate-x-[10px] desktop:flex-col desktop:items-start desktop:gap-5">
        <Item route="/" label="Home" />
        <Item route="/stories" label="Stories" />
        <Item route="/features" label="Features" />
        <Item route="/pricing" label="Pricing" />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
