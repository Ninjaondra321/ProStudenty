import React, { useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CarouselCard from "../Components/CarouselCard";
import Carousel from "../Components/Carousel";

import Vybery from "../Components/Vybery";


const PredmetMainPage = ({ setGlobalInfoOPredmetu }) => {
    let { predmet } = useParams();

    const [predmetInfo, setPredmetInfo] = useState('Loading...');
    const [vybery, setVybery] = useState(null);
    const [search, setSearch] = useState('');
    const [obsah, setObsah] = useState(null);
    const [vysledkyVyhledavani, setVysledkyVyhledavani] = useState([]);

    const [obsahHlavni, setObsahHlavni] = useState(null);

    function findLessons() {
        // setVysledkyVyhledavani([])
        let prubezneVysledkyVyheldavani = []
        for (var key of Object.keys(obsah)) {

            if (obsah[key].key_words.includes(search.toLocaleLowerCase())) {

                prubezneVysledkyVyheldavani.push(obsah[key]);

            }

        }

        setVysledkyVyhledavani(prubezneVysledkyVyheldavani)


    }






    let navigate = useNavigate();


    useEffect(() => {
        setGlobalInfoOPredmetu(obsah)
    }, [obsah])




    useEffect(() => {

        fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/predmet.json")
            .then(response => response.json())
            .then(text => { setPredmetInfo(text) })
            .catch(error => { navigate("/404", { replace: true }) })

        fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/vybery.json")
            .then(response => response.json())
            .then(text => setVybery(text))
            .catch(error => console.log(error));

        fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/temata.json")
            .then(response => response.json())
            .then(text => setObsah(text))
            .catch(error => console.log(error));

        fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/obsah.json")
            .then(response => response.json())
            .then(response => setObsahHlavni(response))
            // .then(text => setObsah(text))
            .catch(error => console.log(error));


    }, [predmet]);

    // useEffect(() => {
    //     fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/predmet.json")
    //         .then(response => response.json())
    //         .then(text => setPredmetInfo(text))
    //         .catch(error => { navigate("/404", { replace: true }) })
    // }, [])

    // useEffect(() => {
    //     fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/vybery.json")
    //         .then(response => response.json())
    //         .then(text => setVybery(text))
    //         .catch(error => console.log(error));
    // }, [])

    // useEffect(() => {
    //     fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/temata.json")
    //         .then(response => response.json())
    //         .then(text => setObsah(text))
    //         .catch(error => console.log(error));
    // }, [])

    function upravLink(l) {
        if (l[0] === "/") {
            return l.substring(1)
        }
        return l
    }


    console.warn(obsahHlavni)



    return (
        <div class="tm-main  uk-section-default">
            <div class="uk-container uk-container-medium uk-position-relative moje-main-content-padding-left">

                <h1 className="uk-heading-large"> {predmetInfo.title && predmetInfo.title}</h1>

                <div className="uk-padding-small"></div>




                <div class=" uk-search-large" style={{ display: "inline-flex" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span class="material-symbols-outlined" style={{ fontSize: "50px" }}>search</span>
                    </div>
                    <input class="uk-search-input" type="search" placeholder="Vyhledat téma" value={search} onChange={(e) => { setSearch(e.target.value); console.log(search); findLessons() }} />
                </div>
                <hr />


                {!search &&

                    <div className="uk-hidden@m">
                        <h1>Obsah</h1>
                        <ul uk-accordion="multiple: true">

                            {console.log(obsahHlavni)}

                            {
                                Object.keys(obsahHlavni).map((key) => <li>
                                    <a class="uk-accordion-title" href="#">{obsahHlavni[key].title}</a>
                                    <div class="uk-accordion-content">
                                        <ul>
                                            {obsahHlavni[key].contents.map((item) =>
                                                <li>
                                                    <Link to={item.link}>{item.title}</Link>
                                                </li>
                                            )
                                            }
                                        </ul>
                                    </div>
                                </li>


                                )}

                        </ul>





                        <hr />
                    </div>
                }

                <div className={search !== "" && "uk-animation-fade uk-animation-reverse uk-hidden"} >
                    <Vybery vybery={vybery} />
                </div>


                {search &&
                    <div className="" style={{ padding: "20px" }}>






                        {vysledkyVyhledavani.map((tema) =>
                            <Link to={upravLink(tema.url)} >
                                <div className="uk-card uk-card-default uk-link-reset">
                                    <div className="uk-card-body uk-link-reset">

                                        <h3 className="uk-card-title uk-link-reset">{tema.title}</h3>
                                        <p className="uk-link-reset">{tema.ukazka}</p>
                                    </div>
                                </div>
                            </Link>


                        )}

                    </div>
                }

                {/* 
                {vybery && Object.keys(vybery).map((key) => <div className="vyber">
                    <h2>{vybery[key].title}</h2>
                    <Carousel temata={vybery[key].temata} /> 

            </div>
                )}*/}

            </div>
        </div >

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