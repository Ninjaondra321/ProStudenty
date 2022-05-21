import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {


    return (
<div>
    <Link to="/">Homepage</Link>
    <Link to="/about">About</Link>
    <Link to="/settings">Settings</Link>
    <Link to="/404">404</Link>
    <Link to="/dejepis">Dějepis</Link>
    <Link to="/dejepis/revoluce">Revoluce 1848</Link>
</div>

    );
}
export default NavBar;