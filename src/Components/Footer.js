const Footer = ({ theme, setTheme }) => {


    return (
        <footer className="moje-footer">
            <div className="uk-container uk-position-relative" style={{ paddingTop: 50 }}>
                <div className="uk-child-width-1-1@s uk-child-width-1-4@m uk-grid-match" uk-grid="" >
                    <div>
                        <p className="uk-logo" style={{ textAlign: "start !important" }}> ProStudenty </p>
                        <ul>
                            <li><a href="/"><img src="imgs/blesk.svg" alt="blesk" /><p>GitHub - zdrojový kód</p></a></li>
                            <li><a href="/"><img src="imgs/blesk.svg" alt="blesk" /><p>GitHub - zápisy</p></a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Stránky</h4>
                        <ul>
                            <li><a href="/"><img src="imgs/blesk.svg" alt="blesk" /><p>Domovská stránka</p></a></li>
                            <li><a href="/"><img src="imgs/blesk.svg" alt="blesk" /><p>O projektu</p></a></li>
                            <li><a href="/"><img src="imgs/blesk.svg" alt="blesk" /><p>Nastavení</p></a></li>
                            <li><a href="/"><img src="imgs/blesk.svg" alt="blesk" /><p>Dokumentace</p></a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Další projekty</h4>
                        <ul>
                            <li>
                                <a href="/">
                                    <img src="imgs/blesk.svg" alt="blesk" />
                                    <p>ProLucku</p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="imgs/blesk.svg" alt="blesk" />
                                    <p>ProBiology</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>O autorovi</h4>
                        <ul>
                            <li>
                                <a href="/">
                                    <img src="imgs/blesk.svg" alt="blesk" />
                                    <p>Instagram</p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="imgs/blesk.svg" alt="blesk" />
                                    <p>Buy me a coffee</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}


export default Footer