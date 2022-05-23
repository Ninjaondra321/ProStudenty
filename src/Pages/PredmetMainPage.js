import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CarouselCard from "../Components/Cards";
import Carousel from "../Components/Carousel";




const PredmetMainPage = () => {
    let { predmet } = useParams();

    const [predmetInfo, setPredmetInfo] = useState('Loading...');
    const [vybery, setVybery] = useState(null);

    console.log(predmet, "AUDUGIALUSGDUIAGLSIASIKUGLDIUGWUIGUJZHASGDLJFGDFSLHFISDKKLFDGG")



    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/predmet.json")
            .then(response => response.json())
            .then(text => setPredmetInfo(text))
            .then(() => console.log(predmetInfo, "PREDMET INFO"))
            .catch(error => console.log(error));
    }, [])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/vybery.json")
            .then(response => response.json())
            .then(text => setVybery(text))
            .then(() => console.error(vybery, "VYBERY"))
            .catch(error => console.log(error));
    }, [])


    console.log(predmetInfo, "PredmetInfo")
    console.log(vybery, "Vybery")




    return (
        <div class="tm-main  uk-section-default">
            <div class="uk-container uk-container-medium uk-position-relative moje-main-content-padding-left">

                <h1 className="uk-heading-large"> {predmetInfo.title && predmetInfo.title}</h1>

                <div className="uk-padding-small"></div>

                <div class="uk-search uk-search-large">
                    <span uk-search-icon></span>
                    <input class="uk-search-input" type="search" placeholder="Vyhledat téma" />
                </div>

                {vybery && Object.keys(vybery).map((key) => <div className="vyber">
                    <h2>{vybery[key].title}</h2>
                    <Carousel temata={vybery[key].temata} />

                </div>
                )}

            </div>
        </div>

        // <div class="tm-main  uk-section-default">
        //     <div class="uk-container uk-container-medium uk-position-relative moje-main-content-padding-left">

        //         <h1>{predmetInfo.title}</h1>
        //         <p>{predmet}</p>
        //         <p>{predmetInfo.title}</p>

        //         {/* <OwlCarousel className="owl-theme" loop margin={10} items={1}>
        //             {vybery.map((vyber) => <div className="item"><img src={vyber.img} alt="Owl Image" /></div>)}
        //         </OwlCarousel> */}

        //         <div className="vybery">
        //             {vybery && Object.keys(vybery).map((key) => <div className="vyber">
        //                 <h2>{vybery[key].title}</h2>
        //                 <div className="owl-carousel owl-theme">
        //                     <OwlCarousel className="owl-theme" nav loop items="3">
        //                         {vybery[key].temata.map((obj) =>

        //                             <CarouselCard icon={obj.icon} title={obj.title} link={obj.path} />

        //                         )}
        //                     </OwlCarousel>
        //                     {/* TADY POKRACUJ -- DODELAT!!! */}
        //                 </div>
        //             </div>
        //             )}

        //         </div>



        //     </div>
        // </div>
    );
}
export default PredmetMainPage;