import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./common/components/redux/hooks";
import routes from "./common/routes";
import generateRoute from "./common/routes/generateRoute";
import route from "./common/routes/route";

function App() {
  const userID = useAppSelector((state) => state.user.user.id);
  return (
    <Routes>
      {routes.map((route) => generateRoute(route))}
      <Route
        path="*"
        element={
          userID ? (
            <Navigate replace to={route.protected.dashboard} />
          ) : (
            <Navigate replace to={route.nonprotected.buyer.login} />
          )
        }
      />
    </Routes>
  );
}

export default App;
