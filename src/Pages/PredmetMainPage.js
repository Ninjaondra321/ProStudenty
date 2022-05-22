import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PredmetMainPage = () => {
    let { predmet } = useParams();

    const [predmetInfo, setPredmetInfo] = useState('Loading...');



    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Ninjaondra321/pro-studenty-sources/master/" + predmet + "/predmet.json")
            .then(response => response.json())
            .then(text => setPredmetInfo(text))
            .then(() => console.log(predmetInfo))
            .catch(error => console.log(error));
    }, [])





    return (
        <div>
            <h1>{predmetInfo.title}</h1>
            <p>{predmet}</p>
            <p>{predmetInfo.title}</p>
        </div>
    );
}
export default PredmetMainPage;