import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Settings from "./Pages/Settings";
import Predmet from "./Pages/Predmet";
import Tema from "./Pages/Tema";
import Page404 from "./Pages/404";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";

import "./Style/ui-kit-z-webu.css";
import "./Style/style.css";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/> 

        <Route path="settings" element={<Settings/>} />
        <Route path="404" element={<Page404/>} />
        <Route path="about" element={<About/>} />
        <Route path=":predmet" element={<Predmet/>} />
        <Route path=":predmet/:tema" element={<Tema/>} />
        
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
