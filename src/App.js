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

  const styleLayout = 1;

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
            {activeStyleButton === "style-1" ||
            activeStyleButton === "style-3" ? (
              <div className="app-top">
                <Header activeHeaderFooterColor={activeHeaderFooterColor} />
                <Navbar />
              </div>
            ) : (
              ""
            )}

            <div className="app-bottom">
              <div className="app-content">
                {activeStyleButton === "style-2" ||
                activeStyleButton === "style-3" ? (
                  <div className="app-content__left">
                    <Header
                      styleLayout={styleLayout}
                      activeHeaderFooterColor={activeHeaderFooterColor}
                    />

                    <Navbar styleLayout={styleLayout} />
                  </div>
                ) : (
                  ""
                )}

                <div
                  className={
                    activeStyleButton === "style-1"
                      ? "app-content__right-full"
                      : "app-content__right"
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
