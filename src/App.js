import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

const listRoute = [
  {
    url: "/",
    component: "Home",
  },
  {
    url: "/about",
    component: "About",
  },
];

const renderRoute = listRoute.map((item) => (
  <Route path={item.url} component={item.component} />
));

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Navbar />
    </div>
    <Switch>{renderRoute}</Switch>
  </Router>
);

export default App;
