"use client";
import useIsCurrentRoute from "@/src/lib/hooks/useIsCurrentRoute";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

type Props = {
  routes?: {
    route: string;
    label: string;
  }[];
};

const defaultRoute = [
  {
    route: "/",
    label: "Home",
  },
];

const Navigation = ({ routes = defaultRoute }: Props) => {
  return (
    <NavigationMenu.Root className="w-full text-xs font-bold uppercase @container">
      <NavigationMenu.List className="flex flex-col items-center justify-center gap-5 @[350px]:flex-row @[350px]:gap-9">
        {routes.map(({ route, label }) => (
          <Item key={route} route={route} label={label} />
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

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

export default Navigation;
