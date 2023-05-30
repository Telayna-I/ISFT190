import React, { useState, useRef } from "react";
import "./HigieneYSeguridad.css";
import { Accordion } from "../components/Accordion";

const GestionAmbiental = () => {
    const faqs = [
        {
            id: 1,
            header: "Competencia General",
            text: `Es el profesional con formación científica, tecnológica y ética, competente para la intervención en los procesos técnicos específicos del campo de la gestión ambiental. Diseñará y ejecutará planes y programas tendientes a la vigilancia ambiental y sanitaria, en ámbitos urbanos y rurales. Asimismo, coordinará actividades de protección y promoción de la salud ambiental e implementará estrategias de atención primaria ambiental.`,
        },
        {
            id: 2,
            header: "Áreas de Competencia",
            text: `
            • Realizar diagnósticos ambientales. \n 
            • Diseñar planes, programas y/o proyectos. \n
            • Diagramar y coordinar la busqueda y recolección de datos. \n
            • Organizar los recursos humanos y materiales. \n
            • Gestionar programas de educación ambiental y sanitaria. \n
            • Gestionar información sobre problemáticas ambientales. \n
            • Implementar estrategias de atención ambiental y sanitaria. \n
            • Realizar estudios e informes sobre problemas ambientales. \n
            • Ejecutar monitoreos ambientales. \n
            • Realizar un seguimiento y monitoreo en cada etapa de implementación de los planes o programas de gestión ambiental. \n
            • Evaluar la incidencia de las acciones implementadas. \n
            • Controlar la aplicación de la legislación ambiental y sanitaria. \n
            • Controlar la calidad de afluentes líquidos, residuos sólidos y semisólidos, emisiones gaseosas. \n
            `,
        },
        {
            id: 3,
            header: "Área Ocupacional",
            text: `El Técnico Superior en Gestión Ambiental y Salud puede ejercer sus actividades, tanto en forma autónoma, como en relación de dependencia. Asimismo, tendrá la posibilidad de desempeñarse en:

                • Instituciones públicas y/o privadas de jurisdicción Nacional, Provincial y Municipal, del área de la salud y del ambiente. \n
                • Sistemas de gestión ambiental del subsector público y/o privado e inter jurisdiccional. \n
                • Establecimientos industriales, parques industriales. \n
                • Aseguradoras de Riesgos del Trabajo (ART). \n
                • Todos aquellos ámbitos en donde se requiera su desempeño, acorde al marco legal vigente. \n

            `,
        },
        {
            id: 4,
            header: "Identificación de la carrera",
            text: `
            • Carrera: Tecnicatura Superior en Gestión Ambiental y Salud \n 
            • Rama: Técnica. \n 
            • Título: Técnico Superior en Gestión Ambiental y Salud. (Res.442/08) \n 
            • Duración: 3 (tres) años. \n 
            • Horario: Nocturno. \n 
            • Régimen: Presencial.`,
        },
        {
            id: 5,
            header: "Requisitos de inscripción",
            text: `
            • Certificado legalizado de estudios secundarios completos. \n 
            • Fotocopia del D.N.I \n 
            • Dos fotografías 4x4. \n 
            • Certificado de buena salud. \n 
            • Arancel de cooperadora.`,
        },
    ];
    return (
        <div className="main-Higiene">
            <div className="imgH-container">
                <h2 className="animate__animated animate__fadeIn">Gestion Ambiental y Salud</h2>
                <img
                    className="seguridad animate__animated animate__fadeIn"
                    src="https://res.cloudinary.com/dzabbr9gy/image/upload/v1684455599/190/Gestion_Ambiental_wwir7q.jpg"
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
                    <div className="anual">
                        <div className="title">Anual</div>
                        <div className="subjects-container">
                            <ul className="pl">
                                <li>Biología.</li>
                                <li>Química.</li>
                                <li>Física.</li>
                                <li>Matemática y Estadística.</li>
                                <li>Metodología de la Investigación.</li>
                            </ul>
                            <ul className="sl">
                                <li>Derecho Ambiental.</li>
                                <li>Salud y Problemática Ambiental I.</li>
                                <li>Practica Profesional I.</li>
                                <li>Espacio de Definición Institucional I.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="primero">
                    <div className="pa">Segundo año</div>
                    <div className="anual">
                        <div className="title">Anual</div>
                        <div className="subjects-container">
                            <ul className="pl">
                                <li>Ecología.</li>
                                <li>Inglés Técnico.</li>
                                <li>Geología e Hidrología.</li>
                                <li>Química del Ambiente.</li>
                                <li>Epidemiología.</li>
                            </ul>
                            <ul className="sl">
                                <li>Salud y Problemática Ambiental II.</li>
                                <li>Practica Profesional II.</li>
                                <li>Espacio de Definición Institucional II.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="primero">
                    <div className="pa">Tercer año</div>
                    <div className="anual">
                        <div className="title">Anual</div>
                        <div className="subjects-container">
                            <ul className="pl">
                                <li>Sociología de las Organizaciones.</li>
                                <li>Control Ambiental.</li>
                                <li>Seguridad e Higiene en el Trabajo.</li>
                                <li>Gestión Medioambiental.</li>
                            </ul>
                            <ul className="sl">
                                <li>Salud y Problemática Ambiental III.</li>
                                <li>Práctica Profesional III.</li>
                                <li>Espacio de Definición Institucional III.</li>
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

export default GestionAmbiental;
