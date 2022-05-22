import React, { useEffect } from "react";
import { useParams, useNavigate, } from "react-router-dom";

import { useState } from "react";
import Markdown from "markdown-to-jsx";


const Tema = () => {
  let { predmet, tema } = useParams();

  const [tema_md, setTema_md] = useState('Nacitani...');

  const [prevTema, setPrevTema] = useState('');

  let navigate = useNavigate();

  console.log('Teeemaa')

  if (prevTema !== tema) {
    fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/" + tema + ".md")
      .then(response => { if (response.ok) { return response.text() } else { throw new Error("Chyba") } })

      .then(text => setTema_md(text))
      .then(() => console.log(generateContents()))
      .catch(error => { navigate("/404", { replace: true }) })


    // .catch(error => {
    //   console.log(error);
    //   navigate("/404", { replace: true });
    // }

    // );

    setPrevTema(tema);

  }


  function generateContents() {
    let ids = document.querySelectorAll('*[id]');
    let listOfIds = [];
    for (let i = 0; i < ids.length; i++) {
      if (!["root"].includes(ids[i].id)) {
        listOfIds.push(ids[i].id);
      }
    }
    console.info(listOfIds);
  }


  return (
    <div>
      <h1>Predmet</h1>
      <p>{predmet}</p>
      <p>{tema} </p>

      <Markdown options={{ slugify: str => str }}>
        {tema_md}
      </Markdown>
    </div>
  );
}
export default Tema;