import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Tema = () => {
    let { predmet, tema } = useParams();

  return (
    <div>
      <h1>Predmet</h1>
        <p>{predmet}</p>
        <p>{tema} </p>
    </div>
  );
}
export default Tema;