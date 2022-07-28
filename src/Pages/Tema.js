import React, { useEffect } from "react";
import { useParams, useNavigate, } from "react-router-dom";

import { useState } from "react";
import Markdown from "markdown-to-jsx";

import { Link } from "react-router-dom";

import Helmet from "react-helmet";


const Tema = ({ infoOPredmetu }) => {
  let { predmet, tema } = useParams();

  console.log(infoOPredmetu);

  const [tema_md, setTema_md] = useState('Nacitani...');

  const [prevTema, setPrevTema] = useState('');

  const [listOfIds, setListOfIds] = useState([]);

  let navigate = useNavigate();

  const [obsahNaMobiluIsShown, setObsahNaMobiluIsShown] = useState(false);


  const [infoOTematu, setInfoOTematu] = useState(null)

  useEffect(() => {
    for (var key of Object.keys(infoOPredmetu)) {
      if ([tema, "/" + tema].includes(infoOPredmetu[key].url)) {
        setInfoOTematu(infoOPredmetu[key]);
      }
    }
  }, [infoOPredmetu, tema]);



  if (prevTema !== tema) {

    fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/" + tema + ".md")
      .then(response => { if (response.ok) { return response.text() } else { throw new Error("Chyba") } })

      .then(text => setTema_md(text))
      .then(() => setTimeout(() => { generateContents() }, 10))
      .catch(error => { navigate("/404", { replace: true }) })


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

        <div id="ContentToPrint">

          <Markdown options={{ slugify: str => str }}>
            {tema_md}
          </Markdown>
        </div>


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
      {!obsahNaMobiluIsShown && <div className="uk-hidden@l" onClick={() => setObsahNaMobiluIsShown(true)} style={{ position: "fixed", bottom: "15px", right: "15px", backgroundColor: "var(--secondary-color)", borderRadius: "50px", height: "30px", width: "30px", display: "flex", textAlign: "center", alignItems: "center", cursor: "pointer" }}><span class="material-symbols-outlined" style={{ paddingLeft: "2px", color: "var(--background-color)" }}>arrow_back_ios_new</span></div>}


      {obsahNaMobiluIsShown &&
        <div id="offcanvas-slide" uk-offcanvas="flip: true; overlay: true" class="uk-offcanvas uk-offcanvas-overlay uk-open " tabindex="-1" style={{ display: "block" }}>
          <button style={{ position: "absolute", opacity: "0%", height: "100vh", width: "100vw", right: "0", top: "0", bottom: "0", left: "0" }} onClick={() => setObsahNaMobiluIsShown(false)}>

          </button>


          <div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide uk-animation-slide-right" style={{ position: "absolute", left: "calc(100vw - 270px)" }}  >
            <h3>{listOfIds[0]}</h3>

            <ul uk-scrollspy-nav="closest: li; scroll: true; offset: 100 "
              class="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">

              {listOfIds.map((id) => <li class=""><a href={'#' + id}>{id}</a></li>)}
              <li class="uk-nav-divider"></li>
            </ul>

            {/* 
            <div uk-sticky="position: bottom " class="uk-padding-small uk-sticky uk-active uk-sticky-fixed" style={{ position: "fixed", top: "805.359px", width: "230px" }}>
            </div><div class="uk-sticky-placeholder" style={{ height: "52.6406px", margin: "0px" }}></div> */}
          </div>


        </div>

      }


      <Helmet>
        {infoOPredmetu &&
          <title>{"ProStudenty | " + infoOPredmetu.title}</title>
        }
        {
          !infoOPredmetu &&
          <title>{"ProStudenty | " + infoOTematu.title}</title>
        }
      </Helmet>




    </div >
  );
}
export default Tema;