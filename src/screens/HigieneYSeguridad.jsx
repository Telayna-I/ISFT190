import React, { useState, useRef } from "react";
import "./HigieneYSeguridad.css";
import { Accordion } from "../components/Accordion";

const HigieneYSeguridad = () => {
    const faqs = [
        {
            id: 1,
            header: "Competencia General",
            text: `El Técnico Superior es un profesional competente para la organización, planificación y organización de actividades, el diseño, la gestión de recursos de los servicios, la evaluación y control y la capacitación en aspectos inherentes a la higiene y seguridad en el trabajo.`,
        },
        {
            id: 2,
            header: "Áreas de Competencia",
            text: `• Planificar y organizar actividades relaciona das con la seguridad, higiene en ambientes de trabajo. \n • Diseñar procesos, puestos de trabajo, dispositivos, instalaciones, equipos y productos, con un enfoque preventivo y ergonómico, para ser utilizados en ámbitos laborales.\n • Gestionar los recursos de los servicios de seguridad e higiene de las organizaciones, confeccionando la documentación demandada por los organismos de fiscalización correspondientes. \n • Evaluar y controlar, realizando los procesos de medición y supervisión, de los aspectos relacionados con la higiene y seguridad en el trabajo. \n • Capacitar en la prevención de riesgos y enfermedades profesionales, coordinando acciones con los distintos sectores de la organización productiva.`,
        },
        {
            id: 3,
            header: "Área Ocupacional",
            text: `El Técnico Superior puede desempeñarse en los servicios de seguridad e higiene de las mas diversas organizaciones, como empresas industriales, comerciales de servicios, de construcción y actividades laborales en general.`,
        },
        {
            id: 4,
            header: "Identificación de la carrera",
            text: `• Carrera: Tecnicatura Superior en Higiene y Seguridad en el Trabajo \n • Rama: Técnica.\n• Título: Técnico Superior en Higiene y Seguridad en el Trabajo. (Res. 320/2013)\n • Duración: 3 (tres) años. \n • Horario: Nocturno. \n • Régimen: Presencial.`,
        },
        {
            id: 5,
            header: "Requisitos de inscripción",
            text: `• Certificado legalizado de estudios secundarios completos. \n • Fotocopia del D.N.I \n • Dos fotografías 4x4. \n • Certificado de buena salud. \n • Arancel de cooperadora.`,
        },
    ];
    return (
        <div className="main-Higiene">
            <div className="imgH-container">
                <h2 className="animate__animated animate__fadeIn">
                    Higiene y Seguridad en el Trabajo
                </h2>
                <img
                    className="seguridad animate__animated animate__fadeIn"
                    src="https://res.cloudinary.com/dzabbr9gy/image/upload/v1684455597/190/seguridad_jpz4l7.webp"
                />
                <img
                    className="pba animate__animated animate__fadeIn"
                    src="https://res.cloudinary.com/dzabbr9gy/image/upload/v1684803378/logo-pba_bco_hursd4.svg"
                />
            </div>
            <div className="plan animate__animated animate__fadeIn">
                <h2>Plan de Estudios</h2>
                <div className="primero">
                    <div className="pa">Primer año</div>
                    <div className="anual animate__animated animate__fadeIn">
                        <div className="title">Anual</div>
                        <div className="subjects-container">
                            <ul className="pl">
                                <li>Administración de las Organizaciones.</li>
                                <li>Psicología Laboral.</li>
                                <li>Física 1.</li>
                                <li>Química 1.</li>
                                <li>Medios de Representación.</li>
                            </ul>
                            <ul className="sl">
                                <li>Medicina del Trabajo 1.</li>
                                <li>Seguridad 1.</li>
                                <li>Derecho del Trabajo.</li>
                                <li>Practica Profesionalizante 1.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="primero">
                    <div className="pa">Segundo año</div>
                    <div className="anual animate__animated animate__fadeIn">
                        <div className="title">Anual</div>
                        <div className="subjects-container">
                            <ul className="pl">
                                <li>Estadística.</li>
                                <li>Física 2.</li>
                                <li>Química 2.</li>
                                <li>Ingles Técnico.</li>
                                <li>Ergonomía.</li>
                            </ul>
                            <ul className="sl">
                                <li>Seguridad 2.</li>
                                <li>Higiene Laboral y Medio Ambiente.</li>
                                <li>Medicina del Trabajo 2.</li>
                                <li>Practica Profesionalizante 2.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="primero">
                    <div className="pa">Tercer año</div>
                    <div className="anual animate__animated animate__fadeIn">
                        <div className="title">Anual</div>
                        <div className="subjects-container">
                            <ul className="pl">
                                <li>Comunicación y Administración de Medios.</li>
                                <li>Capacitación del Personal.</li>
                                <li>Seguridad 3.</li>
                            </ul>
                            <ul className="sl">
                                <li>Higiene Laboral y Medio Ambiente 2.</li>
                                <li>Control de la Contaminación.</li>
                                <li>Practica Profesionalizante.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img
                    className="pba-b"
                    src="https://res.cloudinary.com/dzabbr9gy/image/upload/v1684803378/logo-pba_bco_hursd4.svg"
                />
            </div>
            <Accordion faqs={faqs} />
        </div>
    );
};

export default HigieneYSeguridad;
