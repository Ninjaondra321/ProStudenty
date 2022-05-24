
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel";

const Vybery = ({ vybery }) => {



    return (
        <div className="item">
            {vybery && Object.keys(vybery).map((key) => <div className="vyber">
                <h2>{vybery[key].title}</h2>
                <Carousel temata={vybery[key].temata} />

            </div>
            )}
        </div>

    );
}

export default Vybery;