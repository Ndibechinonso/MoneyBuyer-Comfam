type access = "guest-only" | "loggedin-user";

export interface RouteConfig {
  path: string;
  access: access;
  Component: any;
}
