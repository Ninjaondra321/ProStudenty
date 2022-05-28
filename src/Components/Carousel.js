
import React from "react";
import { Link } from "react-router-dom";
import CarouselCard from "./CarouselCard";

const Carousel = ({ temata }) => {



    return (
        <div className="moje-carousel">
            {temata.map((obj) =>

                <CarouselCard title={obj.title} icon={obj.icon} link={obj.path} />
            )}

        </div>

    );
}
export default Carousel;