import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useState } from "react";
import Markdown from "markdown-to-jsx";


const Tema = () => {
  let { predmet, tema } = useParams();

  const [tema_md, setTema_md] = useState('Nacitani...');



  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/dejepis/napoleon.md")
      .then(response => response.text())
      .then(text => setTema_md(text))
      .then(() => console.log(generateContents()))
      .catch(error => console.log(error));
  }
  )


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