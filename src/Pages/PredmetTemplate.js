import React from "react";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const PredmetTemplate = () => {
  let { predmet, tema } = useParams();

  console.log(predmet)

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
      .then(() => console.log(predmetInfo))
      .catch(error => console.log(error));
  }, [])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/obsah.json")
      .then(response => response.json())
      .then(response => setObsah(response))
      // .then(text => setObsah(text))
      .then(() => console.warn(obsah))
      .catch(error => console.log(error));
  }, [])





  return (
    <div>
      <h1>{predmetInfo.title}</h1>
      <p>{predmet}</p>
      <p>{predmetInfo.color}</p>


      <p>{Object.keys(obsah).map((key) => <div><h3>{obsah[key].title} {console.log(obsah[key].title)} </h3> <ul> {obsah[key].contents.map((obj) => <li> <Link to={"/" + predmet + obj.link}>{obj.title}</Link></li>)} </ul></div>)
      } </p >



      <Outlet />
    </div >
  );
}
export default PredmetTemplate;