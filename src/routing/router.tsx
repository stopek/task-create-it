import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routes } from "./routes";

const Router = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route, index) => (
        <Route key={`route-${index}`} {...route} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;