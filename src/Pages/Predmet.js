import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Predmet =() =>  {
    let { predmet } = useParams();

  return (
    <div>
      <h1>Predmet</h1>
        <p>{predmet}</p>
    </div>
  );
}
export default Predmet;