import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="sede">
                <h4>SEDE</h4>
                <p>
                    <CiLocationOn className="icon" />
                    Villanueva 175 (Altos) - Punta Alta
                </p>
                <p>
                    <BsTelephone className="icon" />
                    (2932) 435160
                </p>
                <p>
                    <CiMail className="icon" />
                    isft190estudiantes@gmail.com
                </p>
            </div>
            <div className="anexo">
                <h4>ANEXO BAHIA BLANCA</h4>
                <p>
                    <CiLocationOn className="icon" />
                    Azara 1250 - Bahía Blanca
                </p>
                <p>
                    <CiMail className="icon" />
                    isft190ext-bahia@abc.gob.ar
                </p>
            </div>
        </footer>
    );
};

export default Footer;
