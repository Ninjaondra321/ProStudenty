import React, { useState } from "react";
import { Link } from "react-router-dom";


import lightMode from "../Icons/light_mode_FILL0.svg"

const NavBar = ({ theme, setTheme }) => {


    const [sidebarIsShown, setSidebarIsShown] = useState(false);

    return (
        <div>
            <nav className="uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed uk-active uk-sticky-below uk-flex"
                style={{ "position": "fixed", "top": "0px", "width": "100vw" }}
                uk-navbar="" >
                <div className="uk-navbar-left nav-overlay">

                    <ul className="uk-navbar-nav">
                        <Link to="/" className="uk-navbar-item uk-logo">ProStudenty</Link>

                        <li className="uk-visible@s">
                            <div >
                                <ul className="uk-navbar-nav">
                                    <li>
                                        <a className="uk-navbar-item">Předměty</a>
                                        <div className="uk-navbar-dropdown" style={{ background: "var(--background-color)" }}>
                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                <li className="uk-nav-header">Přírodovědné</li>
                                                <li><Link to="/dejepis">Dějepis</Link></li>
                                                <li><Link to="/biologie">Biologie</Link></li>
                                                <li className="uk-nav-divider"></li>

                                                <li className="uk-nav-header">Jazyky</li>
                                                <li><Link to="/cesky-jazyk">Čeština</Link></li>
                                                <li className="uk-nav-divider"></li>

                                                <li className="uk-nav-header">Technické</li>
                                                <li><Link to="/matematika">Matematika</Link></li>
                                                <li><Link to="/informatika">Informatika</Link></li>
                                                <li className="uk-nav-divider"></li>

                                                <li className="uk-nav-header">Ostatní</li>
                                                <li><Link to="/spolecenske-vedy">Společenské vědy</Link></li>
                                            </ul>
                                        </div>

                                    </li>

                                </ul>
                            </div>
                        </li>

                        <li className="uk-visible@s">
                            <Link to="/about" className="uk-navbar-item "  >O projektu</Link>
                        </li>


                    </ul>
                </div>



                <div className="uk-navbar-right nav-overlay uk-visible@s ">

                    <ul className="uk-navbar-nav uk-visible@s">
                        <li className="uk-parent ">
                            {theme === "light" && <a style={{ cursor: "pointer" }} onClick={() => setTheme("dark")}><span className="material-symbols-outlined">dark_mode</span></a>}
                            {theme === "dark" && <a style={{ cursor: "pointer" }} onClick={() => setTheme("light")}><img src={lightMode} /> </a>}
                        </li>
                        <li className="uk-parent"><Link to="/settings">
                            <span uk-icon="cog" ></span>
                        </Link></li>
                        <li>


                        </li>
                    </ul>

                </div>

                <div className="nav-overlay uk-navbar-right uk-hidden@s">


                    <ul className="uk-navbar-nav ">
                        <li className="uk-parent"><a onClick={() => setSidebarIsShown(true)}><span uk-icon="menu"></span></a>
                        </li>
                    </ul>




                </div>

                {/* <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>

                    <div className="uk-navbar-item uk-width-expand">
                        <form className="uk-search uk-search-navbar uk-width-1-1">
                            <input className="uk-search-input" type="search" placeholder="Search" autofocus />
                        </form>
                    </div>

                    <a className="uk-navbar-toggle" uk-close uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
                        href="#"></a>

                </div> */}


            </nav >

            {/* <div id="offcanvas-slide" uk-offcanvas="overlay: true" className="uk-offcanvas uk-offcanvas-overlay uk-open">
                <div className="uk-offcanvas-bar">
                    <h3>ProStudenty</h3>


                    <ul className="uk-nav uk-nav-default">

                        <li className="uk-nav-header">Předměty</li>
                        <li><a href="#">Dějepis</a></li>
                        <li><a href="#">Biologie</a></li>
                        <li className="uk-nav-divider"></li>
                        <li><a href="#">Čeština</a></li>
                        <li><a href="#">Ruština</a></li>
                        <li className="uk-nav-divider"></li>
                        <li><a href="#">Matematika</a></li>
                        <li><a href="#">Informatika</a></li>

                        <li className="uk-nav-header">O projektu</li>


                    </ul>

                    <div uk-sticky="position: bottom " className="uk-padding-small">
                        <a href="/"><span uk-icon="cog"></span></a>
                    </div>
                </div>


            </div> */}
            {sidebarIsShown &&

                <div id="offcanvas-slide" uk-offcanvas="overlay: true" className="uk-offcanvas uk-offcanvas-overlay uk-open " tabindex="-1" style={{ display: "block" }}>
                    <button style={{ position: "absolute", opacity: "0%", height: "100vh", width: "100vw", right: "0", top: "0", bottom: "0" }} onClick={() => setSidebarIsShown(false)}>

                    </button>


                    <div className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide uk-animation-slide-left"   >
                        <Link to="/">
                            <h3>ProStudenty</h3>
                        </Link>


                        <ul className=" uk-nav uk-nav-default">

                            <li className="uk-nav-header">Předměty</li>
                            <li><Link to="/dejepis">Dějepis</Link></li>
                            <li><Link to="/biologie">Biologie</Link></li>
                            <li className="uk-nav-divider"></li>
                            <li><Link to="/spolecenske-vedy">Společenské vědy</Link></li>
                            <li className="uk-nav-divider"></li>
                            <li><Link to="/cestina">Čeština</Link></li>
                            <li className="uk-nav-divider"></li>
                            <li><Link to="/matematika">Matematika</Link></li>
                            <li><Link to="/informatika">Informatika</Link></li>

                            <li className="uk-nav-header">O projektu</li>


                        </ul>

                        <div uk-sticky="position: bottom " className="uk-padding-small uk-sticky uk-active uk-sticky-fixed" style={{ position: "fixed", top: "805.359px", width: "230px" }}>
                        </div><div className="uk-sticky-placeholder" style={{ height: "52.6406px", margin: "0px" }}></div>
                    </div>
                    <div uk-sticky="position: bottom " className="uk-padding-small">
                        <Link to="/settings"><span uk-icon="cog"></span></Link>
                        <a>
                            {theme === "light" && <span style={{ cursor: "pointer" }} onClick={() => setTheme("dark")} className="material-symbols-outlined">dark_mode</span>}
                            {theme === "dark" && <span style={{ cursor: "pointer" }} onClick={() => setTheme("light")} className="material-symbols-outlined">light_mode</span>}

                        </a>

                    </div>

                </div>
            }
        </div >

    )


}
export default NavBar;