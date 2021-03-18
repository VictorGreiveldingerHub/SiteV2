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
                <h3 className="skills-h3">S<span className="h3-span">oft</span></h3>
                <motion.div className="skills-div">
                    <div>
                        Linux, les lignes de commande & Git.
                    </div>
                    <div>
                        Github pour la gestion des hébergements et la gestion de développement logiciel.
                    </div>
                    <div>
                        Grâce aux nombreux ateliers à chaque fin de cours, nous étions libre de travailler en équipe, avec Discord et LiveShare de VsCode.
                    </div>
                    <div>
                        Le tout pour nous imprégner le plus possible avec la notion de méthode Agile SCRUM, que nous aurons tous exploiter lors de notre projet de fin d'étude.
                    </div>
                    <div>
                        Gestion de projet avec conception d'un cahier des charges, de base de donnée, user stories, wireframes, MVC (Model-View-Controller) sont des notions familiaire
                    </div>
                    <div>
                        <h4>Suite à la formation</h4>
                        <div>
                            Opquast
                        </div>
                        <div>
                            ElAO
                        </div>
                    </div>
                </motion.div>
            </section>
            <section className="frontend-section">
                <h3 className="skills-h3">F<span className="h3-span">ront-end</span></h3>
                <div className="skills-div">
                    <div>
                        HTML et CSS ...
                    </div>
                    <div>
                        Javascript, API, AJAX, POO ...
                    </div>
                    <div>
                        React, React-Router, Redux, store, gestion de state, Hooks ...
                    </div>
                    <div>
                        <h4>Récemment</h4>
                        <div>
                            Apprentissage de ThreeJs, React Three Fiber, WebGl, framer-motion, Locomotive-Scroll ... 
                        </div>
                    </div>
                    <div>
                        <h4>A venir</h4>
                        <div>
                            Apprentissage de AngularJs
                        </div>
                    </div>
                </div>
            </section>
            <section className="backend-section">
                <h3 className="skills-h3">B<span className="h3-span">ack-end</span></h3>
                <div className="skills-div">
                    <div>
                        NodeJs & Express
                    </div>
                    <div>
                        SQL ...
                    </div>
                    <div>
                        <h4>A venir</h4>
                        <div>
                            Apprentissage de PHP, Hapi
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </motion.div>
    );
};

export default Skills;