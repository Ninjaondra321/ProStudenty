import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = ({ theme, setTheme }) => {

    const [dropdownIsShown, setDropdownIsShown] = useState(false);


    return (
        <div>
            <nav className="uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed uk-active uk-sticky-below uk-flex"
                style={{ "position": "fixed", "top": "0px", "width": "100vw" }}
                uk-navbar >
                <div className="uk-navbar-left nav-overlay">

                    <ul className="uk-navbar-nav">
                        <Link to="/" className="uk-navbar-item uk-logo">ProStudenty</Link>
                        <li className="uk-visible@s">
                            {
                                dropdownIsShown &&
                                <div className="uk-navbar-dropdown" style={{ position: "absolute", top: "80px", display: "unset", backgroundColor: "var(--background-color) " }}>
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
                            {theme === "light" && <p style={{ cursor: "pointer" }} onClick={() => setTheme("dark")}>Teď je light</p>}
                            {theme === "dark" && <p style={{ cursor: "pointer" }} onClick={() => setTheme("light")}>Teď je dark</p>}
                        </li>
                        <li className="uk-parent"><Link to="/settings">
                            <span uk-icon="cog"></span>




                        </Link></li>
                    </ul>

                </div>

                <div className="nav-overlay uk-navbar-right uk-hidden@s">


                    <ul className="uk-navbar-nav ">
                        <li className="uk-parent"><a href="#offcanvas-slide" className="" uk-toggle><span uk-icon="menu"></span></a>
                        </li>
                    </ul>




                </div>

                <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>

                    <div className="uk-navbar-item uk-width-expand">
                        <form className="uk-search uk-search-navbar uk-width-1-1">
                            <input className="uk-search-input" type="search" placeholder="Search" autofocus />
                        </form>
                    </div>

                    <a className="uk-navbar-toggle" uk-close uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
                        href="#"></a>

                </div>


            </nav >

        </div >

    )


    // return (
    //     <nav className="uk-navbar-container uk-margin uk-background-primary uk-flex uk-navbar-transparent" uk-navbar>
    //         <div className="uk-navbar-left nav-overlay">

    //             <ul className="uk-navbar-nav">
    //                 <a href="" className="uk-navbar-item uk-logo">ProStudenty</a>
    //                 <li className="uk-visible@s">
    //                     <a href="#" className="uk-button-text">Předměty</a>
    //                     <div className="uk-navbar-dropdown">
    //                         <ul className="uk-nav uk-navbar-dropdown-nav">
    //                             <li className="uk-nav-header">Přírodovědné</li>
    //                             <li><a href="#">Dějepis</a></li>
    //                             <li><a href="#">Biologie</a></li>
    //                             <li className="uk-nav-divider"></li>

    //                             <li className="uk-nav-header">Jazyky</li>
    //                             <li><a href="#">Čeština</a></li>
    //                             <li><a href="#">Angličtina</a></li>
    //                             <li className="uk-nav-divider"></li>

    //                             <li className="uk-nav-header">Technické</li>
    //                             <li><a href="#">Matematika</a></li>
    //                             <li><a href="#">Informatika</a></li>
    //                         </ul>
    //                     </div>
    //                 </li>
    //                 <li className="uk-visible@s"><a href="" className="uk-button-text">O Projektu</a></li>
    //             </ul>
    //         </div>

    //         <div className="uk-navbar-center nav-overlay">
    //         </div>


    //         <div className="uk-navbar-right nav-overlay uk-visible@s ">

    //             <div className="">
    //                 <a className="uk-navbar-toggle" href="#"><span uk-icon="cog"></span></a>
    //                 <div className="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
    //                     <form className="uk-search uk-search-navbar uk-width-1-1">
    //                         <input className="uk-search-input" type="search" placeholder="Search" autofocus />
    //                     </form>
    //                 </div>
    //             </div>

    //             <ul className="uk-navbar-nav uk-visible@s">
    //                 <li className="uk-parent"><a href=""><span uk-icon="cog"></span>
    //                 </a></li>
    //                 <li><a href=""></a></li>
    //             </ul>

    //         </div>

    //         <div className="nav-overlay uk-navbar-right uk-hidden@s">

    //             <a className="uk-navbar-toggle" uk-search-icon uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
    //                 href="#"></a>

    //             <ul className="uk-navbar-nav ">
    //                 <li className="uk-parent"><a href="#offcanvas-slide" className="" uk-toggle><span uk-icon="menu"></span></a>
    //                 </li>
    //             </ul>




    //         </div>

    //         <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>

    //             <div className="uk-navbar-item uk-width-expand">
    //                 <form className="uk-search uk-search-navbar uk-width-1-1">
    //                     <input className="uk-search-input" type="search" placeholder="Search" autofocus />
    //                 </form>
    //             </div>

    //             <a className="uk-navbar-toggle" uk-close uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
    //                 href="#"></a>

    //         </div>


    //     </nav>

    // )


    // return (
    //     <div >
    //         <Link to="/">Homepage</Link>
    //         <Link to="/about">About</Link>
    //         <Link to="/settings">Settings</Link>
    //         <Link to="/404">404</Link>
    //         <Link to="/dejepis">Dějepis</Link>
    //         <Link to="/dejepis/revoluce">Nefunkcni link</Link>
    //         <Link to="/dejepis/napoleon">Napoleon</Link>
    //         <Link to="/dejepis/velka_fr_revoluce">Velka fr revoluce</Link>
    //     </div>

    // );
}
export default NavBar;