import React, { useState } from "react";
import { Link } from "react-router-dom";




const NavBar = ({ theme, setTheme }) => {

    const [dropdownIsShown, setDropdownIsShown] = useState(false);

    const [sidebarIsShown, setSidebarIsShown] = useState(false);

    return (
        <div>
            <nav className="uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed uk-active uk-sticky-below uk-flex"
                style={{ "position": "fixed", "top": "0px", "width": "100vw" }}
                uk-navbar >
                <div className="uk-navbar-left nav-overlay">

                    <ul className="uk-navbar-nav">
                        <Link to="/" className="uk-navbar-item uk-logo">
                            {/* <p>

                                <svg width="40" height="40" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_105_2)">

                                        <path d="M483.111 174.303C498.595 174.995 504.147 195.097 491.213 203.638L370.257 283.516C364.473 287.336 361.806 294.446 363.651 301.127L369.639 322.806C374.814 341.543 348.394 351.56 339.847 334.102L271.529 194.572L158.193 361.916C147.567 377.606 123.31 365.068 129.965 347.325L150.86 291.615C153.294 285.125 151.273 277.805 145.852 273.484L32.506 183.132C20.386 173.47 27.7097 153.944 43.1938 154.636L196.5 161.49C198.557 161.582 200.576 162.07 202.448 162.927L271.529 194.572L323 169.134C325.421 167.937 328.105 167.373 330.803 167.494L483.111 174.303Z" fill="black" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_f_105_2" x="-43" y="-19" width="598" height="521" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="54.5" result="effect1_foregroundBlur_105_2" />
                                        </filter>
                                        <clipPath id="clip0_105_2">
                                            <rect width="512" height="512" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p> */}



                            ProStudenty
                        </Link>
                        <li className="uk-visible@s">
                            {
                                dropdownIsShown &&
                                <div className="uk-navbar-dropdown uk-animation-fade uk-animation-scale-up uk-transform-origin-top-left uk-animation-fast" style={{ position: "absolute", top: "80px", display: "unset", backgroundColor: "var(--background-color) " }}>
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

                            }


                        </li>


                        <li>
                            <li className="uk-visible@s">
                                <div >
                                    <ul className="uk-navbar-nav">
                                        <li>

                                            <a className="uk-button-text">Předměty</a>
                                            <input style={{ position: "absolute", top: "0px", height: "77px", width: "100px", opacity: "0%", cursor: "pointer" }} onFocus={() => setDropdownIsShown(true)} onBlur={() => setTimeout(() => setDropdownIsShown(false), 100)} />
                                        </li>

                                    </ul>
                                </div>
                            </li>
                        </li>
                        <li className="uk-visible@s"><Link to="/about" className="" style={{ textDecoration: "none", border: "none" }} >O projektu</Link> </li>


                    </ul>
                </div>



                <div className="uk-navbar-right nav-overlay uk-visible@s ">

                    {/* <div className="">
                        <a className="uk-navbar-toggle" uk-search-icon href="#"></a>
                        <div className="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
                            <form className="uk-search uk-search-navbar uk-width-1-1">
                                <input className="uk-search-input" type="search" placeholder="Search" autofocus />
                            </form>
                        </div>
                    </div> */}

                    <ul className="uk-navbar-nav uk-visible@s">
                        <li className="uk-parent ">
                            {theme === "light" && <a style={{ cursor: "pointer" }} onClick={() => setTheme("dark")}><span class="material-symbols-outlined">dark_mode</span></a>}
                            {theme === "dark" && <a style={{ cursor: "pointer" }} onClick={() => setTheme("light")}><span class="material-symbols-outlined">light_mode</span></a>}
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
                <div class="uk-offcanvas-bar">
                    <h3>ProStudenty</h3>


                    <ul class="uk-nav uk-nav-default">

                        <li class="uk-nav-header">Předměty</li>
                        <li><a href="#">Dějepis</a></li>
                        <li><a href="#">Biologie</a></li>
                        <li class="uk-nav-divider"></li>
                        <li><a href="#">Čeština</a></li>
                        <li><a href="#">Ruština</a></li>
                        <li class="uk-nav-divider"></li>
                        <li><a href="#">Matematika</a></li>
                        <li><a href="#">Informatika</a></li>

                        <li class="uk-nav-header">O projektu</li>


                    </ul>

                    <div uk-sticky="position: bottom " class="uk-padding-small">
                        <a href="/"><span uk-icon="cog"></span></a>
                    </div>
                </div>


            </div> */}
            {sidebarIsShown &&

                <div id="offcanvas-slide" uk-offcanvas="overlay: true" class="uk-offcanvas uk-offcanvas-overlay uk-open " tabindex="-1" style={{ display: "block" }}>
                    <button style={{ position: "absolute", opacity: "0%", height: "100vh", width: "100vw", right: "0", top: "0", bottom: "0" }} onClick={() => setSidebarIsShown(false)}>

                    </button>


                    <div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide uk-animation-slide-left"   >
                        <Link to="/">
                            <h3>ProStudenty</h3>
                        </Link>


                        <ul class=" uk-nav uk-nav-default">

                            <li class="uk-nav-header">Předměty</li>
                            <li><Link to="/dejepis">Dějepis</Link></li>
                            <li><Link to="/biologie">Biologie</Link></li>
                            <li class="uk-nav-divider"></li>
                            <li><Link to="/spolecenske-vedy">Společenské vědy</Link></li>
                            <li class="uk-nav-divider"></li>
                            <li><Link to="/cestina">Čeština</Link></li>
                            <li class="uk-nav-divider"></li>
                            <li><Link to="/matematika">Matematika</Link></li>
                            <li><Link to="/informatika">Informatika</Link></li>

                            <li class="uk-nav-header">O projektu</li>


                        </ul>

                        <div uk-sticky="position: bottom " class="uk-padding-small uk-sticky uk-active uk-sticky-fixed" style={{ position: "fixed", top: "805.359px", width: "230px" }}>
                        </div><div class="uk-sticky-placeholder" style={{ height: "52.6406px", margin: "0px" }}></div>
                    </div>
                    <div uk-sticky="position: bottom " class="uk-padding-small">
                        <Link to="/settings"><span uk-icon="cog"></span></Link>
                        <a>
                            {theme === "light" && <span style={{ cursor: "pointer" }} onClick={() => setTheme("dark")} class="material-symbols-outlined">dark_mode</span>}
                            {theme === "dark" && <span style={{ cursor: "pointer" }} onClick={() => setTheme("light")} class="material-symbols-outlined">light_mode</span>}

                        </a>

                    </div>

                </div>
            }
        </div >

    )


}
export default NavBar;