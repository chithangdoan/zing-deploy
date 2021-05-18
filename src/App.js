// libs
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// css
import "./App.css";

import { ROUTES, REDIRECTS } from "./routes/appRoute";

const renderPath = ROUTES.map((item) => (
  <Route path={item.path} component={item.component} exact />
));

const renderRedirect = REDIRECTS.map((item) => (
  <Redirect from={item.from} to={item.to} />
));

const App = () => (
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

export default App;
