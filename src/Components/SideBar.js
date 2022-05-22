import React from "react";
import { useNavigate, Link } from "react-router-dom";

const SideBarObsah = (obsah, predmet) => {
    return (
        <div>
            {/* {obsah.lenght > 0 && Object.keys(obsah).map((key) => <div><h3>{obsah[key].title} {console.log(obsah[key].title)} </h3> <ul> {obsah[key].contents.map((obj) => <li> <Link to={"/" + predmet + obj.link}>{obj.title}</Link></li>)} </ul></div>)
            } */}


        </div>
    );
}
export default SideBarObsah;