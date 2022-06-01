import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = ({ setTheme, theme }) => {



  return (
    <div class="tm-main uk-section uk-section-default" >
      <div class="uk-container uk-container-small uk-position-relative" >

        <h1>Nastavení</h1>

        <h2>Vzhled</h2>

        <div class="uk-margin">
          <div uk-form-custom="target: > * > span:first-child">

            <select onChange={(e) => setTheme(e.target.value)}>
              <option value="light" selected={theme === "light"}>Světlé</option>
              <option value="dark" selected={theme === "dark"}>Tmavé</option>


            </select>

            {/* Select tag, that wen you click on it, it outputs it's value  */}
            {/* <select onChange={(e) => setTheme(e.target.value)}> */}

            <button class="uk-button uk-button-default" type="button" tabindex="-1">
              <span></span>
              <span uk-icon="icon: chevron-down"></span>
            </button>
          </div>
        </div>

        <h2>Cookies</h2>
        <div>
          <label><input class="uk-checkbox" type="checkbox" checked={false} disabled /><b> Základní cookies</b> (aplikace místo nich využívá localhost)</label>
          <br />
          <label><input class="uk-checkbox" type="checkbox" /><b>Statistické cookies</b> (sbírání dat pro vylepšení webu)</label>
          <br />
          <label><input class="uk-checkbox" type="checkbox" checked={false} disabled /><b>Marketingové cookies</b> (aplikace reklamy nezobrazuje)</label>
          <br />



        </div>




      </div>
    </div>
  );
}
export default Settings;