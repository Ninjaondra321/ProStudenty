import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Homepage from "./Pages/Homepage";
import Settings from "./Pages/Settings";
import Tema from "./Pages/Tema";
import Page404 from "./Pages/404";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import PredmetMainPage from "./Pages/PredmetMainPage";
import PredmetTemplate from "./Pages/PredmetTemplate";

import "./Style/ui-kit-z-webu.css";
import "./Style/style.css";
import { useEffect, useState } from "react";


import React from "react";
import InitialSettings from "./Components/InitialSetting";



function App() {

  const [theme, setTheme] = useState(null);
  const [previousTheme, setPreviousTheme] = useState(null);
  // const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [infoOPredmetu, setInfoOPredmetu] = useState(null);
  const [userAgreedToAnal, setUserAgreedToAnal] = useState(true);

  const [isNew, setIsNew] = useState(false);


  useEffect(() => {
    try {
      let x = localStorage.getItem("ProStudenty-AGREED-TO-COOKIES");
      if (x === null) {
        setIsNew(true);
      }
    } catch {
      setIsNew(true)
    }
  }, []);




  if (theme !== previousTheme || theme === null) {
    if (theme === null) {
      if (localStorage.getItem("ProStudenty-THEME")) {
        setTheme(localStorage.getItem("ProStudenty-THEME"));
        setPreviousTheme(localStorage.getItem("ProStudenty-THEME"));
      } else {
        setTheme("light");
        setPreviousTheme("light");
        localStorage.setItem("ProStudenty-THEME", "light");
      }

    } else {
      setPreviousTheme(theme);
      localStorage.setItem("ProStudenty-THEME", theme)

    }
  }




  applyTheme()


  function applyTheme() {
    if (theme === "dark") {
      document.documentElement.style.setProperty('--text-color', '#eee');
      document.documentElement.style.setProperty('--text-secondary-color', '#bbb');
      document.documentElement.style.setProperty('--background-color', '#111');
      document.documentElement.style.setProperty('--shadow-color-01', 'rgba(255, 255, 255, 4%)');
      document.documentElement.style.setProperty('--shadow-color-02', 'rgba(255, 255, 255, 12%)');
    } else {
      document.documentElement.style.setProperty('--text-color', '#222');
      document.documentElement.style.setProperty('--text-secondary-color', '#666');
      document.documentElement.style.setProperty('--background-color', '#fff');
      document.documentElement.style.setProperty('--shadow-color-01', 'rgba(0, 0, 0, 8%)');
      document.documentElement.style.setProperty('--shadow-color-02', 'rgba(0, 0, 0, 16%)');
    }
  }



  return (
    <div className="App">
      <BrowserRouter basename="/ProStudenty">
        {/* <NavBar theme={theme} changeTheme={changeTheme} /> */}
        <div className="uk-padding-small"></div>
        <div className="uk-padding-small"></div>
        <div className="uk-padding-small"></div>
        {isNew &&

          <InitialSettings theme={theme} setTheme={setTheme} userAgreedToAnal={userAgreedToAnal} setUserAgreedToAnal={setUserAgreedToAnal} />
        }
        <Routes>
          <Route path="" element={<Homepage />} />

          <Route path="settings" element={<Settings setTheme={setTheme} theme={theme} userAgreedToAnal={userAgreedToAnal} setUserAgreedToAnal={setUserAgreedToAnal} />} />
          <Route path="404" element={<Page404 />} />
          <Route path="about" element={<About />} />
          <Route path=":predmet" element={<PredmetTemplate />}>
            <Route path="" element={<PredmetMainPage setGlobalInfoOPredmetu={setInfoOPredmetu} />} />
            <Route path=":tema" element={<Tema infoOPredmetu={infoOPredmetu} />} />

          </Route>

        </Routes>
        <NavBar theme={theme} setTheme={setTheme} />
      </BrowserRouter>

    </div>
  );
}

export default App;
