import React from "react";
import { Accordion } from "../components/Accordion";
import "./CienciaDeDatosIA.css";

const CienciaDeDatosIA = () => {
    const faqs = [
        {
            id: 1,
            header: "Competencia General",
            text: `
            El Técnico Superior podrá construir redes neuronales y liderar exitosamente proyectos de Machine Learning que permitan implementar visión por computadora y aplicarlas a datos e imágenes. También podrá aplicar IA para procesar audio y texto a partir de aplicaciones que permitan, por ejemplo, reconocimiento automático del habla, síntesis de música, entre otras posibilidades. \n

            A partir de la consulta y la interpretación de las necesidades del cliente y/u organización, podrá implementar y modelar la solución, por lo cual realiza tareas de programación y entrenamiento, pudiendo también realizar acciones de mantenimiento, mejoras y actualizaciones de soluciones. \n

            El Técnico Superior podrá participar activamente en el desarrollo colaborativo de proyectos de innovación, interactuando con actores relacionados o no con su disciplina, estableciendo el diálogo con especialistas del campo particular en el cual está inserto su proyecto de trabajo.
            .`,
        },
        {
            id: 2,
            header: "Perfil Profesional",
            text: `
            El Técnico Superior en Ciencia de Datos e Inteligencia Artificial estará capacitado para realizar proyectos de innovación que involucren actividades tanto del campo de la Ciencia de Datos como de la IA. Estará calificado para pensar con criterio estadístico situaciones de trabajo que involucren una amplia cantidad de datos, comprendiendo el ciclo de trabajo de la Ciencia de Datos dentro de una organización o para un cliente particular. Para ello, deberá conocer las técnicas específicas para explorar, limpiar y preparar diversas fuentes de datos antes su procesamiento.
            `,
        },
        {
            id: 3,
            header: "Funciones que ejerce el Profesional",
            text: `
                • Diseñar proyectos, analizando los requerimientos e interpretando las características de los problemas a resolver. \n
                • Diseñar soluciones que involucren el análisis de datos. \n
                • Desarrollar sistemas de inteligencia artificial, que además involucren Visión Artificial o Procesamiento del Habla. \n
                • Organizar y gestionar proyectos, donde organizara el trabajo en relación a los requisitos técnicos, recursos humanos y costos, entre otros. \n

            `,
        },
        {
            id: 4,
            header: "Identificación de la carrera",
            text: `
            • Carrera: Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial. \n 
            • Rama: Técnica. \n 
            • Título: Técnico Superior en Ciencia de Datos e Inteligencia Artificial. (Res.2730/22) \n 
            • Duración: 3 (tres) años. \n 
            • Horario: Nocturno. \n 
            • Régimen: Presencial.`,
        },
        {
            id: 5,
            header: "Equivalencias",
            text: `
            Los ingresantes que acrediten trayectorias afines de Educación Secundaria, Técnica y/o Formación Profesional aprobadas con la certificación correspondiente, podrán acreditar unidades curriculares de acuerdo al presente diseño curricular.`,
        },
        {
            id: 6,
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
                <h2 className="title-cdd animate__animated animate__fadeIn">
                    Ciencia de datos e Inteligencia Artificial
                </h2>
                <img
                    className="seguridad animate__animated animate__fadeIn"
                    src="https://res.cloudinary.com/dzabbr9gy/image/upload/v1684455601/190/ciencia_de_datos_rmer0o.jpg"
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
                        <div className="title">Primer Cuatrimestre</div>
                        <div className="subjects-container subjects-containerr">
                            <ul className="pl cd">
                                <li>Lógica Computacional.</li>
                                <li>Elementos de Análisis de datos e IA I.</li>
                                <li>Ingles para Ciencia de Datos e IA I.</li>
                                <li>Técnicas de Programación.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="anual">
                        <div className="title">Segundo Cuatrimestre</div>
                        <div className="subjects-container subjects-containerr">
                            <ul className="sl cd">
                                <li>Administración y Gestión de Base de Datos.</li>
                                <li>Estadística y Probabilidades para Gestión de Datos.</li>
                                <li>PP: Aproximación al Campo Laboral.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="primero">
                    <div className="pa">Segundo año</div>
                    <div className="anual">
                        <div className="title">Primer Cuatrimestre</div>
                        <div className="subjects-container subjects-containerr">
                            <ul className="pl cd">
                                <li>Desarrollo de Sistemas de Inteligencia Artificial.</li>
                                <li>Técnicas de Procesamiento del Habla.</li>
                                <li>Ciencia de Datos.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="anual">
                        <div className="title">Segundo Cuatrimestre</div>
                        <div className="subjects-container subjects-containerr">
                            <ul className="sl cd">
                                <li>Modelizado de Minería de Datos.</li>
                                <li>Procesamiento de Aprendizaje Automático.</li>
                                <li>PP: Análisis y Exploración de Datos.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="primero">
                    <div className="pa">Tercer año</div>
                    <div className="anual">
                        <div className="title">Primer Cuatrimestre</div>
                        <div className="subjects-container subjects-containerr">
                            <ul className="pl cd">
                                <li>Gestión de Proyectos.</li>
                                <li>Seminario de Actualización.</li>
                                <li>PP: Modelizado de Sistemas de IA.</li>
                                <li>Tecnología y Ambiente.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="anual">
                        <div className="title">Segundo Cuatrimestre</div>
                        <div className="subjects-container subjects-containerr">
                            <ul className="sl cd">
                                <li>Taller de Comunicación.</li>
                                <li>Técnica de Procesamiento Digital de Imágenes.</li>
                                <li>PP: Proyecto Integrador.</li>
                                <li>Trabajo, Tecnología y Sociedad.</li>
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

export default CienciaDeDatosIA;
