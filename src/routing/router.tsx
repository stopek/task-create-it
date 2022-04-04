import NotFoundContainer from "containers/NotFoundContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TRouteItem } from "./types";

interface IRouter {
  routes: TRouteItem[];
}

const Router = ({ routes }: IRouter) => (
  <BrowserRouter>
    <Routes>
      {routes.map((route, index) => (
        <Route key={`route-${index}`} {...route} />
      ))}

      <Route path="*" element={<NotFoundContainer />} />
    </Routes>
  </BrowserRouter>
);

export default Router;