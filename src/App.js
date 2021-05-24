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
// contexts
import { LocaleContext } from "./contexts/locale-context";
// hooks
import useLocalStorage from "./hooks/use-local-storage";
// locales
import { locales } from "./locales";
// routes
import { ROUTES, REDIRECTS } from "./routes/appRoute";
// css
import "./App.css";

const renderRedirect = REDIRECTS.map((item) => (
  <Redirect key={Math.random()} from={item.from} to={item.to} />
));

const renderPath = ROUTES.map((item) => (
  <Route
    key={Math.random()}
    component={item.component}
    path={item.path}
    exact
  />
));

const App = () => {
  const [lang, setLang] = useLocalStorage("langCode", "en");

  const changeLanguage = (langCode) => {
    setLang(langCode);
    // eslint-disable-next-line no-console
    console.log(langCode);
  };

  return (
    <LocaleContext.Provider value={locales[lang]}>
      <Router className="app">
        <div>
          <Header preferredLocale={lang} changeLanguage={changeLanguage} />
          <Navbar />
          {renderRedirect}
          <Switch>{renderPath}</Switch>
          <Footer />
        </div>
      </Router>
    </LocaleContext.Provider>
  );
};

export default App;
