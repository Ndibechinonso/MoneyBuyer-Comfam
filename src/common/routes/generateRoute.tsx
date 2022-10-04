import { Suspense } from "react";
import { Route } from "react-router-dom";
import Auth from "../components/Layout/Auth";
import Buyer from "../components/Layout/Buyer";
import SuspenseFallBack from "../components/SuspenseFallback";
import { RouteConfig } from "./types";

function generateRoute({ Component, access, path }: RouteConfig) {
  return (
    <Route key={path} element={access === "guest-only" ? <Auth /> : <Buyer />}>
      <Route
        path={path}
        element={
          <Suspense fallback={<SuspenseFallBack />}>
            <Component />
          </Suspense>
        }
      />
    </Route>
  );
}

export default generateRoute;
