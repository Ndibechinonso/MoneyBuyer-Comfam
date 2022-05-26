import { lazy } from "react";
import { RouteConfig } from "./types";

/**  function to lazy-load routes */
const loadModules = (link: string) =>
  lazy(() => import(`../../../modules/pages/${link}`));

export const routes: RouteConfig[] = [
  {
    path: "/dashboard",
    element: loadModules("Dashboard"),
  },
  {
    path: "/delivery",
    element: loadModules("Delivery"),
  },
  {
    path: "/dispute",
    element: loadModules("Dispute"),
  },
  {
    path: "*",
    element: loadModules("NoMatch"),
  },
  {
    path: "/transaction",
    element: loadModules("Transaction"),
  },
  {
    path: "/wallet",
    element: loadModules("Wallet"),
  },
];
