
import React from "react";
import { Link } from "react-router-dom";

const CarouselCard = ({ title, icon, link }) => {

    let iconURL = ""

    if (['ptak', "bird"].includes(icon.toLowerCase())) {
        iconURL = "https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/icons/ptak.svg"
    }
    else if (["list", "leaf"].includes(icon.toLowerCase())) {
        iconURL = "https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/icons/leaf.svg"
    } else {
        iconURL = "https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/icons/ptak.svg"
    }

    if (link[0] === "/") {
        link = link.substring(1)
    }




    console.warn([title, icon, link])

    return (
        <div className="item">
            <Link className="uk-card uk-card-default uk-card-hover uk-card-body  uk-visible-toggle item " to={link} tabIndex={0} style={{ height: '250px' }}>
                <img uk-svg="stroke-animation: false" src={iconURL} style={{ height: '190px', width: '100%', opacity: '0.5', position: 'absolute', top: 0, left: 0, paddingTop: '30px', filter: 'blur(20px)' }} className="uk-flex uk-flex-center uk-link-reset uk-preserve  " />
                <div className="uk-animation-toggle uk-invisible-hover" style={{ height: '220px', marginTop: '-30px', paddingTop: '30px' }} tabIndex={0}>
                    <img uk-svg="stroke-animation: true" src={iconURL} style={{ height: '190px', width: '100%', opacity: 1, position: 'absolute', top: 0, left: 0, paddingTop: '30px' }} className="uk-flex uk-flex-center uk-link-reset  uk-animation-stroke  uk-preserve" />
                </div>
                <h3 className="uk-card-title uk-link-reset" style={{ position: 'absolute', bottom: '30px', left: '60px' }}>
                    {title}</h3>
            </Link>
        </div>

    );
}

CarouselCard.defaultProps = {
    title: "Název",
    icon: "ptak",
    link: "/"
}




export default CarouselCard;