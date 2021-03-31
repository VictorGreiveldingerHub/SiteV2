import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from 'src/utils/elementsParam.js';

import './styles.scss';


const Skills = () => {
    return (
        <motion.div
            className="profil-container"
            initial="initial"
            animate= "in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="skills">
                <section className="global-section">
                    <div className="global-container">
                        <h3 className="skills-h3">S<span className="h3-span">oft</span></h3>
                        <div className="skills-div">
                            <ul className="liste">
                                <li className="item-skill">Linux, les lignes de commande & Git.</li>
                                <li className="item-skill">Github pour la gestion des hébergements et la gestion de développement logiciel.</li>
                                <li className="item-skill">Travail en équipe, avec Discord et LiveShare de VsCode et travail en autonomie.</li>
                                <li className="item-skill">Méthode Agile SCRUM, exploité lors de notre projet de fin d'étude.</li>
                                <li className="item-skill">
                                    Gestion de projet - conception d'un cahier des charges, de base de donnée, user stories, wireframes, MVC (Model-View-Controller)
                                </li>
                            </ul>
                            <div className="after-soft">
                                <h4 className="after-h4">Suite à la formation</h4>
                                <div className="opquast">
                                    <h3 className="soft-title">Opquast</h3>
                                    <motion.div className="results" whileHover={{color: "rgb(51, 51, 51)", backgroundColor: "rgb(238, 238, 216)"}}>
                                        <a href="https://directory.opquast.com/fr/certificat/92F3MC/" target="no_blank" className="resultats">Mes résultats</a>
                                    </motion.div>
                                    <motion.div className="more" whileHover={{color: "rgb(51, 51, 51)", backgroundColor: "rgb(238, 238, 216)"}}>
                                        <a href="https://www.opquast.com/" className="description-opquast" target="no_blank">En savoir plus</a>
                                    </motion.div>
                                </div>
                                <div className="elao">
                                    <h3 className="soft-title">ElAO</h3>
                                    <div>
                                        <span className="elao-span">Niveau B2 - Indépendance</span>
                                    </div>
                                    <motion.div className="more" whileHover={{color: "rgb(51, 51, 51)", backgroundColor: "rgb(238, 238, 216)"}}>
                                        <a href="https://www.elao.co/" className="description-opquast" target="no_blank">En savoir plus</a>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="frontend-section">
                    <div className="front-container">
                        <h3 className="skills-h3">F<span className="h3-span">ront-end</span></h3>
                        <div className="skills-div">
                            <ul className="liste">
                                <li className="item-skill">HTML, CSS, SCSS.</li>
                                <li className="item-skill">Javascript, API, AJAX, POO.</li>
                                <li className="item-skill">React, React-Router, Redux, store, gestion de state, Hooks.</li>
                            </ul>
                            <div>
                                <div className="skill-left-row">
                                    <h4 className="after-h4">Récemment</h4>
                                    <div>Apprentissage de ThreeJs, React Three Fiber, WebGl, framer-motion, Locomotive-Scroll ...</div>
                                </div>
                                <div className="skill-right-row">
                                    <h4 className="after-h4">A venir</h4>
                                    <div>Apprentissage de AngularJs & VueJs</div>
                                </div>
                            </div>
                        <div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="global-section">
                    <div className="global-container">
                        <h3 className="skills-h3">B<span className="h3-span">ack-end</span></h3>
                        <div className="skills-div">
                            <ul className="liste">
                                <li className="item-skill">NodeJs.</li>
                                <li className="item-skill">ExpressJs.</li>
                                <li className="item-skill">Mise en place d'une BDD, gestion d'une BDD, déploiement via AWS.</li>
                                <li className="item-skill">PostgreSQL.</li>
                            </ul>
                            <div className="skill-right-row">
                                <h4 className="after-h4">A venir</h4>
                                <div>Apprentissage de Hapi & PHP</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default Skills;