import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./common/routes";
import generateRoute from "./common/routes/generateRoute";

function App() {
  return (
    <Routes>
      {routes.map((route) => generateRoute(route))}
      <Route path="*" element={<Navigate replace to="/dashboard" />} />
    </Routes>
  );
}

export default App;
