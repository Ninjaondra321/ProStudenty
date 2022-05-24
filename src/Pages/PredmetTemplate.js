import React from "react";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import SideBarObsah from "../Components/SideBar";

const PredmetTemplate = () => {
  let { predmet, tema } = useParams();



  const [posledniTema, setPosledniTema] = useState(null);

  if (posledniTema !== tema) {
    setPosledniTema(tema);
  }

  const [predmetInfo, setPredmetInfo] = useState('Loading...');
  const [obsah, setObsah] = useState('');

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/predmet.json")
      .then(response => response.json())
      .then(text => setPredmetInfo(text))
      .catch(error => console.log(error));
  }, [])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/obsah.json")
      .then(response => response.json())
      .then(response => setObsah(response))
      // .then(text => setObsah(text))
      .catch(error => console.log(error));
  }, [])





  return (
    <div>


      <div className="tm-sidebar-left uk-visible@l">

        <Link className="uk-link-muted" to={"/" + predmet}>
          <h3>
            {predmetInfo.title}</h3>
        </Link>

        {Object.keys(obsah).map((key) => <ul className="uk-nav uk-nav-default tm-nav"><li className="uk-nav-header">{obsah[key].title}  </li> <ul> {obsah[key].contents.map((obj) => <li> <Link to={"/" + predmet + obj.link}>{obj.title}</Link></li>)} </ul></ul>)
        }
      </div>

      <SideBarObsah obsah={obsah} predmet={predmet} />

      <Outlet />
    </div >
  );
}
export default PredmetTemplate;