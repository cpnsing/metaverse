import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home")),
  },
  {
    exact: true,
    path: "/profile",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/ProfileDetails/Profile")),
  },
  {
    exact: true,
    path: "/plot",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Plots/Index")),
  },
  {
    exact: true,
    path: "/upload-profile",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/ProfileDetails/UploadProfile")
    ),
  },
  {
    exact: true,
    path: "/contact-us",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticPage/ContactUs")),
  },

  {
    exact: true,
    path: "/term",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticPage/TermCondition")),
  },
  {
    exact: true,
    path: "/about-us",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticPage/AboutUs")),
  },
  {
    exact: true,
    path: "/privacy-policy",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StaticPage/PrivacyPolicy")),
  },
  {
    exact: true,
    path: "/plot-details",
    layout: HomeLayout,
    component: lazy(() => import("src/component/PlotDeatils")),
  },
  {
    exact: true,
    path: "/institute-details",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Institute/index")),
  },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
