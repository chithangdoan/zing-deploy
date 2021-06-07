// libs
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OutOfBox from "./components/OutOfBox";
// contexts
import { LocaleContext } from "./contexts/locale-context";
// hooks
import useLocalStorage from "./hooks/useLocalStorage";
// locales
import { locales } from "./locales";
// routes
import { ROUTES, REDIRECTS } from "./routes/appRoute";
// css
import "./app.scss";

const renderRedirect = REDIRECTS.map((item) => (
  <Redirect key={item.from} from={item.from} to={item.to} />
));

const App = () => {
  const [lang, setLang] = useLocalStorage("langCode", "en");

  const changeLanguage = (langCode) => {
    setLang(langCode);
  };

  const listColors = [
    {
      name: "Đen Vâu",
      color: "#2d3436",
    },
    {
      name: "Binz",
      color: "#e84393",
    },
  ];

  const [activeHeaderFooterColor, setActiveHeaderFooterColor] = useState(
    "black"
  );

  const handleClickHeaderFooterColor = (chosenColor) => {
    setActiveHeaderFooterColor(chosenColor);
  };

  const renderPath = ROUTES.map((item) => (
    <Route key={Math.random()} path={item.path} exact>
      <item.component />
    </Route>
  ));

  const themeLayout = {
    "app-content-top": {
      "style-1": "app-content__top-full",
      "style-2": "app-content__top",
      "style-3": "app-content__top",
    },
    "app-content-left": {
      "style-1": "app-content__left",
      "style-2": "app-content__left-full",
      "style-3": "app-content__left-full",
    },
    "app-content-right": {
      "style-1": "app-content__right-full",
      "style-2": "app-content__right",
      "style-3": "app-content__right",
    },
  };

  const listStyleButtons = [
    {
      id: Math.random(),
      name: "style-1",
    },
    {
      id: Math.random(),
      name: "style-2",
    },
    {
      id: Math.random(),
      name: "style-3",
    },
  ];

  const [activeStyleButton, setActiveStyleButton] = useState(
    listStyleButtons[0].name
  );

  const handleClickStyleButton = (nameButton) => {
    setActiveStyleButton(nameButton);
  };

  return (
    <LocaleContext.Provider
      value={{
        langCode: lang,
        locales: locales[lang],
        changeLanguage,
        listStyleButtons,
        activeStyleButton,
        handleClickStyleButton,
      }}
    >
      <div className="wrapper">
        <Router>
          <div className="app">
            <div className={themeLayout["app-content-top"][activeStyleButton]}>
              <Header activeHeaderFooterColor={activeHeaderFooterColor} />
              <Navbar />
            </div>

            <div className="app-bottom">
              <div className="app-content">
                <div
                  className={themeLayout["app-content-left"][activeStyleButton]}
                >
                  <Header activeHeaderFooterColor={activeHeaderFooterColor} />
                  {activeStyleButton !== "style-1" ? <Navbar /> : ""}
                </div>

                <div
                  className={
                    themeLayout["app-content-right"][activeStyleButton]
                  }
                >
                  {renderRedirect}
                  <Switch>{renderPath}</Switch>
                </div>
              </div>
              <Footer activeHeaderFooterColor={activeHeaderFooterColor} />
            </div>
          </div>
        </Router>

        <OutOfBox
          listColors={listColors}
          handleClickHeaderFooterColor={handleClickHeaderFooterColor}
        />
      </div>
    </LocaleContext.Provider>
  );
};

export default App;
