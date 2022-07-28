import React from "react";
import { useNavigate, Link } from "react-router-dom";
import HomepageCard from "../Components/HomepageCard";
import { Helmet } from "react-helmet";

import Footer from "../Components/Footer";


const Homepage = () => {

  const x = "<script> console.log('aspon-funguju') function change_switcher_next() { UIkit.switcher(document.getElementById('muj-testovy - switcher')).show('next') }  function run_switcher_next() { setTimeout(() => { change_switcher_next(); run_switcher_next() }, 2500) } run_switcher_next() </script> "

  function generateRandomColor() {
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"][Math.floor(Math.random() * 16)]
    }
    return color
  }




  document.documentElement.style.setProperty('--main-color', generateRandomColor());
  document.documentElement.style.setProperty('--secondary-color', generateRandomColor());


  return (
    <div>


      <div className="uk-container  uk-position-relative">

        {/* <!-- Hlavní nadpis --> */}
        <h1 className="uk-heading-xlarge" style={{ marginBottom: "0" }}>ProStudenty</h1>
        <div className="hlavni_nadpisss">
          <ul className="uk-subnav uk-subnav-pill uk-hidden@s uk-visible@l"
            uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
            id="muj-testovy-switcher">
            <li><a href="#">01</a></li>
            <li><a href="#">02</a></li>
            <li><a href="#">03</a></li>
            <li><a href="#">04</a></li>

          </ul>

          <h3 style={{ color: "#666666" }}>Chceš se naučit&nbsp; </h3>
          <ul className="uk-switcher ">
            <li>
              <h3 style={{ color: 'brown' }}><Link to="/dejepis" className="uk-link-reset">Dějepis</Link></h3>
            </li>
            <li>
              <h3 style={{ color: 'green' }}><Link to="/biologie" className="uk-link-reset">Biologii</Link></h3>
            </li>
            <li>
              <h3 style={{ color: 'red' }}><Link to="/matematika" className="uk-link-reset">Matematiku</Link></h3>
            </li>
            <li>
              <h3 style={{ color: 'purple' }}><Link to="/fyzika" className="uk-link-reset">Fyziku</Link></h3>
            </li>
          </ul>

          <h3 style={{ color: "#666666" }}>??</h3>
        </div>
        {/* <!-- End Hlavní nadpis --> */}


        {/* <!-- Výběr předmětů --> */}
        <h1>Přírodovědné</h1>
        <div className="uk-child-width-1-2@s uk-child-width-1-3@l uk-grid uk-grid-match moje-vyber-predmetu"
          uk-scrollspy="cls: uk-animation-scale-up uk-transform-origin-bottom-center; target: .uk-card; delay: 250; repeat: false"
          uk-grid="">

          <HomepageCard title="Dějepis" icon="bird" link="/dejepis" />
          <HomepageCard title="Biologie" icon="list" link="/biologie" />
          <HomepageCard title="Společenské vědy" icon="bird" link="/spolecenske-vedy" />
          <HomepageCard title="Dějepis" icon="bird" link="/dejepis" />

        </div>

        <h1>Technické</h1>
        <div className="uk-child-width-1-2@s uk-child-width-1-3@l uk-grid uk-grid-match moje-vyber-predmetu"
          uk-scrollspy="cls: uk-animation-scale-up uk-transform-origin-bottom-center; target: .uk-card; delay: 250; repeat: false"
          uk-grid="">

          <HomepageCard title="Dějepis" icon="bird" link="/dejepis" />
          <HomepageCard title="Biologie" icon="list" link="/biologie" />
          <HomepageCard title="Společenské vědy" icon="bird" link="/spolecenske-vedy" />
          <HomepageCard title="Dějepis" icon="bird" link="/dejepis" />

        </div>
        {/* <!-- End Výběr předmětů --> */}


        <div className="uk-padding"></div>
        <div className="uk-padding uk-hidden@s"></div>


        {/*  <!-- Sekce s povidanim 01 -->  */}
      </div>
      <div style={{ height: 500 }} className="center">
        <div className="background uk-visible@m" style={{ background: "var(--secondary-color)", position: "absolute", right: 0, width: "48vw", height: 500, clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)", zIndex: -1 }} />
        <div className="background uk-hidden@m" style={{ background: "var(--secondary-color)", position: "absolute", right: 0, width: "100vw", height: 600, clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)", zIndex: -1 }} />
        <div className="uk-container  uk-position-relative">
          <div className=" uk-child-width-1-2@s uk-child-width-1-2@l uk-grid-match" uk-grid="" >
            <div style={{ paddingTop: 20, display: "unset" }}>
              <h2 className="uk-heading-medium" uk-scrollspy="cls: uk-animation-slide-left-small;" style={{ paddingBottom: 40, paddingTop: 55 }} >
                Co to vlastně je??
              </h2>
              <p style={{ fontSize: "1rem" }} uk-scrollspy="cls: uk-animation-slide-left-medium;" >
                Lorem ipsum dolor sit amet, consectetur adipisicing Opes Source asihs
                elit. Labore, atque odio! Quod possimus, fugiat nobis eos, magnam
                consequuntur optio exercitationem placeat reprehenderit ab laudantium!
                Natus culpa reprehenderit facere eos nam!
              </p>
            </div>
            <div>
              <div
                uk-scrollspy="cls: uk-animation-slide-right-small"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }}>
                <img className="uk-hidden@m" src="imgs/Octocat.png" alt="octocat" style={{ height: 350, marginLeft: 40 }} uk-parallax="x: -80px; easing: 0;  " />
                <img className="uk-visible@m" src="imgs/Octocat.png" alt="octocat" style={{ height: 350, marginTop: "-80px" }} uk-parallax="y: 80px; " />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="uk-container  uk-position-relative">
        {/*  <!-- END Sekce s povidanim 01 -->  */}
        <div className="uk-padding"></div>



        {/*  <!-- Statistiky -->  */}
        <div className="uk-child-width-1-2 uk-child-width-1-4@m uk-grid-match moje-statisticsc" uk-grid="" uk-scrollspy="cls:  uk-animation-slide-left-medium; target: div; delay: 50; repeat: false" >

          <div className="uk-align-center  " style={{ margin: 0 }}>
            <div className="uk-card-hover uk-card" style={{ paddingBottom: 30 }}>
              <img uk-svg="stroke-animation: false" src="/imgs/mece01.svg" style={{ height: 190, width: "100%", paddingTop: 30 }} className="uk-flex uk-flex-center uk-link-reset uk-preserve  " />
              <h3 className="uk-flex uk-flex-center uk-heading-medium" style={{ margin: 0 }} >??</h3>
              <p className="uk-flex uk-flex-center" style={{ margin: 0 }}>Předmětů</p>
            </div>
          </div>

          <div className="uk-align-center  " style={{ margin: 0 }}>
            <div className="uk-card-hover uk-card" style={{ paddingBottom: 30 }}>
              <img uk-svg="stroke-animation: false" src="/imgs/mece01.svg" style={{ height: 190, width: "100%", paddingTop: 30 }} className="uk-flex uk-flex-center uk-link-reset uk-preserve  " />
              <h3 className="uk-flex uk-flex-center uk-heading-medium" style={{ margin: 0 }} >??</h3>
              <p className="uk-flex uk-flex-center" style={{ margin: 0 }}>Zápisů</p>
            </div>
          </div>

          <div className="uk-align-center  " style={{ margin: 0 }}>
            <div className="uk-card-hover uk-card" style={{ paddingBottom: 30 }}>
              <img uk-svg="stroke-animation: false" src="/imgs/mece01.svg" style={{ height: 190, width: "100%", paddingTop: 30 }} className="uk-flex uk-flex-center uk-link-reset uk-preserve  " />
              <h3 className="uk-flex uk-flex-center uk-heading-medium" style={{ margin: 0 }} >??</h3>
              <p className="uk-flex uk-flex-center" style={{ margin: 0 }}>Spokojených uživatelů</p>
            </div>
          </div>

          <div className="uk-align-center  " style={{ margin: 0 }}>
            <div className="uk-card-hover uk-card" style={{ paddingBottom: 30 }}>
              <img uk-svg="stroke-animation: false" src="/imgs/mece01.svg" style={{ height: 190, width: "100%", paddingTop: 30 }} className="uk-flex uk-flex-center uk-link-reset uk-preserve  " />
              <h3 className="uk-flex uk-flex-center uk-heading-medium" style={{ margin: 0 }} > ?? </h3>
              <p className="uk-flex uk-flex-center" style={{ margin: 0 }}>Hodnocení stránek</p>
            </div>
          </div>
        </div>
        {/*  <!-- END Statistiky -->  */}

        <div className="uk-padding"></div>



        {/*  <!-- Sekce s povidanim 02 -->  */}
      </div>
      <div style={{ height: 500 }} className="center">
        <div className="background uk-visible@m" style={{ background: "var(--main-color)", position: "absolute", left: 0, width: "48vw", height: 500, clipPath: "polygon(0% 0, 100% 0, 80% 100%, 0% 100%)", zIndex: -1 }} />
        <div className="background uk-hidden@m" style={{ background: "var(--main-color)", position: "absolute", right: 0, width: "100vw", height: 600, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)", zIndex: -1 }} />
        <div className="uk-container  uk-position-relative">
          <div className=" uk-child-width-1-2@s uk-child-width-1-2@l uk-grid-match" uk-grid="" >
            <div className="uk-visible@m">
              <div uk-scrollspy="cls: uk-animation-slide-left-small" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }} >
                <img
                  className="uk-visible@m" src="imgs/Octocat.png" alt="octocat" style={{ height: 350, marginTop: "-80px" }} uk-parallax="y: 80px; " />
              </div>
            </div>
            <div style={{ paddingTop: 20, display: "unset" }}>
              <h2 className="uk-heading-medium" uk-scrollspy="cls: uk-animation-slide-right-small;" style={{ paddingBottom: 40, paddingTop: 55 }} > Je to opravdu ZDARMA?? </h2>
              <p style={{ fontSize: "1rem" }} uk-scrollspy="cls: uk-animation-slide-right-medium;" >
                Lorem ipsum dolor sit amet, consectetur adipisicing Opes Source asihs
                elit. Labore, atque odio! Quod possimus, fugiat nobis eos, magnam
                consequuntur optio exercitationem placeat reprehenderit ab laudantium!
                Natus culpa reprehenderit facere eos nam!
              </p>
            </div>
            <div className="uk-hidden@m">
              <div uk-scrollspy="cls: uk-animation-slide-left-small" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }} >
                <img src="imgs/Octocat.png" alt="octocat" style={{ height: 350, marginLeft: "-40px" }} uk-parallax="x: 80px; easing: 0;  " />
              </div>
            </div>
          </div>
        </div>
      </div>





      {/*  <!-- END Sekce s povidanim 02 -->  */}


      <div className="uk-container  uk-position-relative">
        {/*  <!-- Accordion (faq) -->  */}
        <div className="uk-padding "></div>
        <div className="center">
          <h2>Často kladené dotazy</h2>
        </div>
        <div className="center">
          <ul uk-accordion="" className="uk-width-2xlarge"
            uk-scrollspy=" cls: uk-animation-slide-bottom-medium; target: li; delay: 50; repeat: false">
            <li className="uk-open">
              <a className="uk-accordion-title" href="#">Item 1</a>
              <div className="uk-accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.</p>
              </div>
            </li>
            <li>
              <a className="uk-accordion-title" href="#">Item 2</a>
              <div className="uk-accordion-content">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo
                  consequat. Duis aute irure dolor reprehenderit.</p>
              </div>
            </li>
            <li>
              <a className="uk-accordion-title" href="#">Item 3</a>
              <div className="uk-accordion-content">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat proident.</p>
              </div>
            </li>
          </ul>
        </div>

        {/*  <!-- END Accordion (faq) -->  */}

        <div className="uk-padding "></div>













      </div>
      <Footer></Footer>


      <Helmet>

        <script>
          {`function change_switcher_next() {UIkit.switcher(document.getElementById("muj-testovy-switcher")).show("next")}
          function run_switcher_next() {setTimeout(() => {change_switcher_next(); run_switcher_next()}, 2500)}run_switcher_next()`}
        </script>
      </Helmet>

    </div >

  )

}
export default Homepage;
