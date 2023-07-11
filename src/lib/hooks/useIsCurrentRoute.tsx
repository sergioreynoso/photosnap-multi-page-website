import { usePathname } from "next/navigation";

type RouteInfo = {
  isCurrentRoute: boolean;
  routeName: string;
};

export default function useIsCurrentRoute(route: string): RouteInfo {
  const routeName = usePathname();
  const isCurrentRoute = routeName === route;
  return { isCurrentRoute, routeName };
}
