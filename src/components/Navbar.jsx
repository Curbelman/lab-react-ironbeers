import React from "react";
import { NavLink } from "react-router-dom";

const homeIcon = "https://cdn-icons-png.flaticon.com/512/988/988934.png"

function Navbar () {
    return (
        <nav style={{backgroundColor: '#0009EB'}}>
            <NavLink to="/">
                <img src={homeIcon} alt="home" height="70" />
            </NavLink>
        </nav>
    )
}

export default Navbar;