// components
import Home from "../pages/Home";
import About from "../pages/About";
// constants
import { PATH } from "../constants/path";

export const ROUTES = [
  {
    name: "Home",
    path: PATH.HOME,
    component: Home,
  },
  {
    name: "About",
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
