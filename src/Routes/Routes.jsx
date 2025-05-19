import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Insights from "../Pages/Insights";
import Contact from "../Pages/Contact";
import Work from "../Pages/Work";
import { ABOUT, CONTACT, HOME, INSIGHTS, SERVICES, WORK } from "./Routerurl";

const routes = createBrowserRouter([
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: ABOUT,
    element: <About />,
  },
  {
    path: SERVICES,
    element: <Services />,
  },
  {
    path: INSIGHTS,
    element: <Insights />,
  },
  {
    path: CONTACT,
    element: <Contact />,
  },
  {
    path: WORK,
    element: <Work />,
  },
]);

export default routes;
