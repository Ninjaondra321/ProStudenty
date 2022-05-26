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



function App() {

  const [theme, setTheme] = useState(null);
  const [previousTheme, setPreviousTheme] = useState(null);



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
    // setTimeout(() => {


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
    // }, 100);
  }


  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar theme={theme} changeTheme={changeTheme} /> */}
        <div className="uk-padding-small"></div>
        <div className="uk-padding-small"></div>
        <div className="uk-padding-small"></div>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="settings" element={<Settings />} />
          <Route path="404" element={<Page404 />} />
          <Route path="about" element={<About />} />
          <Route path=":predmet" element={<PredmetTemplate />}>
            <Route path="" element={<PredmetMainPage />} />
            <Route path=":tema" element={<Tema />} />

          </Route>

        </Routes>
        <NavBar theme={theme} setTheme={setTheme} />
      </BrowserRouter>

    </div>
  );
}

export default App;
