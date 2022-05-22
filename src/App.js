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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
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
      </BrowserRouter>

    </div>
  );
}

export default App;
