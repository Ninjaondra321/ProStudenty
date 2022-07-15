import React, { useEffect } from "react";
import { useState } from "react";

const InitialSettings = ({ theme, setTheme, userAgreedToAnal, setUserAgreedToAnal }) => {
    const [isShown, setIsShown] = useState(true);



    useEffect(() => {
        try {
            let y = localStorage.getItem("ProStudenty-AGREED-TO-COOKIES");
            console.log(y)
            if (y) {
                setIsShown(false);
                // TODO: Pak odkomentuj!!!!!
            }
        } catch (e) {
            console.warn('Mělo by se ukázat modal se souhlasem s cookies a nastavením vzhledu');
            // localStorage.setItem("ProStudenty-THEME", "light");
            // localStorage.setItem("ProStudenty-AGREED-TO-COOKIES", true);
        }
    }, []);

    function potvrditFormular() {
        localStorage.setItem("ProStudenty-AGREED-TO-COOKIES", true)
        localStorage.setItem("ProStudenty-THEME", theme);
        setIsShown(false);
    }


    return (
        <div>
            {isShown && <div>
                <div class="uk-modal uk-open" tabindex="-1" style={{ display: "block" }}>
                    <div class="uk-modal-dialog" style={{ backgroundColor: "var(--background-color)" }}>
                        <div class="uk-modal-header">
                            <h2 class="uk-modal-title">Vítej na mojí stránce!</h2>
                            <p>Ještě zbývá si přednastavit nějaké volby</p>
                        </div>

                        <div class="uk-modal-body">
                            <div>
                                <h3>Vzhled</h3>
                                <p>Vyber si vzhled, který chceš používat</p>
                                <h1>POZOR!! Stránka nefunguje jak má - jestli nesouhlasíte s cookies, zatím stránku nepoužívejte!!!</h1>

                                <div>
                                    <label><input class="uk-radio uk-hidden" type="radio" name="theme" />
                                        {theme === "light" &&
                                            <button className={"uk-button uk-button-default uk-width-1-2 uk-margin-small-bottom uk-button-primary "}>
                                                <span class="material-icons" style={{ verticalAlign: "text-bottom", paddingRight: "5px" }}>light_mode</span>
                                                Světlý
                                            </button>
                                        }
                                        {theme === "dark" &&
                                            <button className="uk-button uk-button-default uk-width-1-2 uk-margin-small-bottom  uk-center" onClick={() => setTheme("light")} >
                                                <span class="material-symbols-outlined" style={{ verticalAlign: "text-bottom", paddingRight: "5px" }}>light_mode</span>
                                                Světlý
                                            </button>
                                        }
                                    </label>
                                    <label><input class="uk-radio uk-hidden" type="radio" name="theme" />
                                        {theme !== "light" &&
                                            <button className={"uk-button uk-button-default uk-width-1-2 uk-margin-small-bottom uk-button-primary "} >
                                                <span class="material-icons" style={{ verticalAlign: "text-bottom", paddingRight: "5px" }}>dark_mode</span>
                                                Tmavé
                                            </button>
                                        }
                                        {theme !== "dark" &&
                                            <button className="uk-button uk-button-default uk-width-1-2 uk-margin-small-bottom " onClick={() => setTheme("dark")}>
                                                <span class="material-symbols-outlined" style={{ verticalAlign: "text-bottom", paddingRight: "5px" }}>dark_mode</span>
                                                Tmavé
                                            </button>
                                        }
                                    </label>

                                </div>
                            </div>

                            <div>
                                <h3>Cookies</h3>
                                <p>Pomohl bys mi se naučit precovat s analytikou stránek prosím?? <br />
                                    * Jedná se jen o "analytical cookies" - jiné tato stránka nepoužívá
                                </p>


                                <div>
                                    <label><input class="uk-radio uk-hidden" type="radio" name="cookies" />
                                        {!userAgreedToAnal &&
                                            <button className={"uk-button uk-button-default uk-width-1-2 uk-margin-small-bottom uk-button-primary "}>
                                                <span class="material-icons" style={{ verticalAlign: "text-bottom", paddingRight: "5px" }}>thumb_down</span>
                                                Raději ne
                                            </button>
                                        }
                                        {userAgreedToAnal &&
                                            <button className="uk-button uk-button-default uk-width-1-2 uk-margin-small-bottom  " onClick={() => setUserAgreedToAnal(false)}>
                                                <span class="material-symbols-outlined" style={{ verticalAlign: "text-bottom", paddingRight: "5px" }}>thumb_down</span>
                                                Raději ne
                                            </button>
                                        }
                                    </label>
                                    <label><input class="uk-radio uk-hidden" type="radio" name="cookies" />
                                        {userAgreedToAnal &&
                                            <button className={"uk-button uk-button-default uk-width-1-2 uk-margin-small-bottom uk-button-primary "} >
                                                <span class="material-icons" style={{ verticalAlign: "text-bottom", paddingRight: "5px" }}>thumb_up</span>
                                                Rád pomůžu
                                            </button>
                                        }
                                        {!userAgreedToAnal &&
                                            <button className="uk-button uk-button-default uk-width-1-2 uk-margin-small-bottom " onClick={() => setUserAgreedToAnal(true)}>
                                                <span class="material-symbols-outlined" style={{ verticalAlign: "text-bottom", paddingRight: "5px" }}>thumb_up</span>
                                                Rád pomůžu
                                            </button>
                                        }
                                    </label>

                                </div>
                            </div>
                        </div>

                        <div class="uk-modal-footer uk-text-right">
                            <button class="uk-button uk-button-primary uk-modal-close" onClick={() => potvrditFormular()} >
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default InitialSettings;