import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./common/routes";
import generateRoute from "./common/routes/generateRoute";
import { fetchUserToken } from "./https/storage";

function App() {
  return (
        <Routes>
        {routes.map((route) => generateRoute(route))}
        <Route
          path="*"
          element={
            fetchUserToken() ? (
              <Navigate replace to="/dashboard" />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
      </Routes>
  );
}

export default App;
