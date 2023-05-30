import React from "react";
import { Link } from "react-router-dom";
import "./HomeView.css";
import "animate.css";

const HomeView = () => {
    return (
        <main>
            <h1>Oferta Academica</h1>
            <div className="main">
                <div className="carrera animate__animated animate__fadeIn">
                    <div className="img-container">
                        <img src="https://res.cloudinary.com/dzabbr9gy/image/upload/v1684455597/190/seguridad_jpz4l7.webp" />
                    </div>
                    <div className="data">
                        <h2>Higiene y Seguridad en el Trabajo</h2>
                        <p>
                            El Técnico Superior es un profesional competente para la organización,
                            planificación y organización de actividades, el diseño, la gestión de
                            recursos de los servicios, la evaluación y control <span>…</span>
                        </p>
                        <Link to="/Higiene-y-Seguridad">Ver más</Link>
                    </div>
                </div>
                <div className="carrera animate__animated animate__fadeIn">
                    <div className="img-container">
                        <img src="https://res.cloudinary.com/dzabbr9gy/image/upload/v1684455599/190/Gestion_Ambiental_wwir7q.jpg" />
                    </div>
                    <div className="data gestion">
                        <h2>Gestion Ambiental y Salud</h2>
                        <p>
                            Es profesional con formación científica, tecnológica y ética, competente
                            para la investigación en los procesos técnicos específicos del campo de
                            la gestión ambiental. Diseñará y ejecutará <span>…</span>
                        </p>
                        <Link to="/Gestion-Ambiental">Ver más</Link>
                    </div>
                </div>
                <div className="carrera animate__animated animate__fadeIn">
                    <div className="img-container">
                        <img src="https://res.cloudinary.com/dzabbr9gy/image/upload/v1684455601/190/ciencia_de_datos_rmer0o.jpg" />
                    </div>
                    <div className="data">
                        <h2>Ciencia de Datos e Inteligencia Artificial</h2>
                        <p>
                            El Técnico Superior podrá construir redes neuronales y liderar
                            exitosamente proyectos de Machine Learning, también podrá aplicar IA
                            para procesar audio y texto a partir de aplicaciones que permitan
                            <span>…</span>
                        </p>
                        <Link to="/Ciencia-de-Datos">Ver más</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomeView;
