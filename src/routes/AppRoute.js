// components
import Home from "../pages/Home";
import About from "../pages/About";
// constants
import { PATH } from "../constants/path";

export const ROUTES = [
  {
    name: "MP3",
    path: PATH.HOME,
    component: Home,
  },
  {
    name: "NEWS",
    path: PATH.HOME,
    component: Home,
  },
  {
    name: "TV",
    path: PATH.HOME,
    component: Home,
  },
  {
    name: "ZALO PC",
    path: PATH.HOME,
    component: Home,
  },
  {
    name: "ABOUT",
    path: PATH.ABOUT,
    component: About,
  },
];

export const REDIRECTS = [
  {
    from: PATH.ZING_DEPLOY,
    to: PATH.HOME,
  },
];
