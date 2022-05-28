import React, { useEffect } from "react";
import { useParams, useNavigate, } from "react-router-dom";

import { useState } from "react";
import Markdown from "markdown-to-jsx";


const Tema = () => {
  let { predmet, tema } = useParams();

  const [tema_md, setTema_md] = useState('Nacitani...');

  const [prevTema, setPrevTema] = useState('');

  const [listOfIds, setListOfIds] = useState([]);

  let navigate = useNavigate();


  if (prevTema !== tema) {

    fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/" + tema + ".md")
      .then(response => { if (response.ok) { return response.text() } else { throw new Error("Chyba") } })

      .then(text => setTema_md(text))
      .then(() => setTimeout(() => { generateContents() }, 10))
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
    setListOfIds(listOfIds);

  }


  return (
    <div class="tm-main uk-section uk-section-default">
      <div class="uk-container uk-container-small uk-position-relative">

        <Markdown options={{ slugify: str => str }}>
          {tema_md}
        </Markdown>


        <div class="tm-sidebar-right moje-obsah">
          <div uk-sticky="offset: 160" class="uk-sticky uk-active uk-sticky-below uk-sticky-fixed"
          // style="position: fixed; top: 160px; width: 200px;"
          >
            <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100 "
              class="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">

              {listOfIds.map((id) => <li class=""><a href={'#' + id}>{id}</a></li>)}
              <li class="uk-nav-divider"></li>
            </ul>
          </div>
          <div class="uk-sticky-placeholder"
          // style="height: 507px; margin: 0px;"
          ></div>
        </div>



      </div>
    </div>
  );
}
export default Tema;