import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <a href="/">
                <img src="https://www.isft190.com.ar/img/core-img/logo.png" />
            </a>
            <nav>
                <h2 className="name">
                    Instituto Superior de Formación Técnica N.º 190 Ext. Bahia Blanca
                </h2>
            </nav>
        </header>
    );
};

export default NavBar;
