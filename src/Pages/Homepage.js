import React from "react";
import { useNavigate, Link } from "react-router-dom";
import HomepageCard from "../Components/HomepageCard";

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
    <div className="uk-container  uk-position-relative">
      <h1 className="uk-heading-medium">ProStudenty</h1>
      <div className="hlavni_nadpisss">
        <ul className="uk-subnav uk-subnav-pill uk-hidden@s uk-visible@l" uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium" id="muj-testovy-switcher">
          <li><a href="#">01</a></li>
          <li><a href="#">02</a></li>
          <li><a href="#">03</a></li>
          <li><a href="#">04</a></li>
        </ul>
        <h2 style={{ color: '#666666' }}>Chceš se naučit&nbsp; </h2>
        <ul className="uk-switcher ">
          <li>
            <h2 style={{ color: 'brown' }}><Link to="/dejepis" className="uk-link-reset">Dějepis</Link></h2>
          </li>
          <li>
            <h2 style={{ color: 'green' }}><Link to="/" className="uk-link-reset">Biologii</Link></h2>
          </li>
          <li>
            <h2 style={{ color: 'red' }}><Link to="/" className="uk-link-reset">Matematiku</Link></h2>
          </li>
          <li>
            <h2 style={{ color: 'purple' }}><Link to="/" className="uk-link-reset">Fyziku</Link></h2>
          </li>
        </ul>
        <h2 style={{ color: '#666666' }}>??</h2>
      </div>
      <div className="uk-padding-small" />
      <div className="uk-child-width-1-2@s uk-grid uk-child-width-1-3@l uk-grid-match moje-vyber-predmetu" uk-grid uk-scrollspy="cls: uk-animation-scale-up uk-transform-origin-bottom-center; target: .uk-card; delay: 250; repeat: false">


        <HomepageCard title="Dějepis" icon="bird" link="/dejepis" />
        <HomepageCard title="Biologie" icon="list" link="/biologie" />
        <HomepageCard title="Společenské vědy" icon="bird" link="/spolecenske-vedy" />
        <HomepageCard title="Dějepis" icon="bird" link="/dejepis" />




      </div>


      <div className="uk-padding-small"></div>
      <div className="uk-padding-small"></div>



    </div >

  )

}
export default Homepage;
