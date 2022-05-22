import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CarouselCard from "../Components/Cards";

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';


const PredmetMainPage = () => {
    let { predmet } = useParams();

    const [predmetInfo, setPredmetInfo] = useState('Loading...');
    const [vybery, setVybery] = useState(null);


    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/predmet.json")
            .then(response => response.json())
            .then(text => setPredmetInfo(text))
            .then(() => console.log(predmetInfo))
            .catch(error => console.log(error));
    }, [])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/vybery.json")
            .then(response => response.json())
            .then(text => setVybery(text))
            .then(() => console.log(vybery))
            .catch(error => console.log(error));
    }, [])





    return (
        <div class="tm-main  uk-section-default">
            <div class="uk-container uk-container-medium uk-position-relative moje-main-content-padding-left">

                <h1>{predmetInfo.title}</h1>
                <p>{predmet}</p>
                <p>{predmetInfo.title}</p>

                {/* <OwlCarousel className="owl-theme" loop margin={10} items={1}>
                    {vybery.map((vyber) => <div className="item"><img src={vyber.img} alt="Owl Image" /></div>)}
                </OwlCarousel> */}

                <div className="vybery">
                    {vybery && Object.keys(vybery).map((key) => <div className="vyber">
                        <h2>{vybery[key].title}</h2>
                        <div className="owl-carousel owl-theme">
                            {vybery[key].temata.map((obj) =>

                                <CarouselCard icon={obj.icon} title={obj.title} link={obj.path} />

                            )}
                            {/* TADY POKRACUJ -- DODELAT!!! */}
                        </div>
                    </div>
                    )}

                </div>



            </div>
        </div>
    );
}
export default PredmetMainPage;