// libs
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// constants
import { PATH } from "../constants/path";
import { REDIRECT } from "../constants/redirect";

const renderPath = PATH.map((item) => (
  <Route path={item.path} component={item.component} exact />
));

const renderRedirect = REDIRECT.map((item) => (
  <Redirect from={item.from} to={item.to} />
));

const AppRoute = () => (
  <Router>
    <div>
      <Header />
      <Navbar />
      {renderRedirect}
      <Switch>{renderPath}</Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRoute;
