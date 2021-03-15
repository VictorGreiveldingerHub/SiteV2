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
                <motion.div
                    className="skills-div"
                   
                >
                    <div>
                        Pendant ma formation, j'ai pu m'entrainer à utiliser Linux, la ligne de commande & Git pour faciliter le travail en groupe
                    </div>
                    <div>
                        avec l'utilisation de Github pour la gestion des hébergements et la gestion de développement logiciel.
                    </div>
                    <div>
                        Grâce aux nombreux ateliers à chaque fin de cours, nous étions libre de travailler en équipe, avec Discord et LiveShare de VsCode.
                    </div>
                    <div>
                        Le tout pour nous imprégner le plus possible avec la notion de méthode Agile SCRUM, que nous aurons tous exploiter lors de notre projet de fin d'étude dont voici la présentation
                        <motion.button>
                            Hold
                        </motion.button>
                    </div>
                </motion.div>
            </section>
            <section className="frontend-section">
                <h3 className="skills-h3">F<span className="h3-span">ront-end</span></h3>
                <div className="skills-div">
                    <div>
                        Cette formation a commencé avec le HTML et le CSS, langages de création d'une page web ...
                    </div>
                    <div>
                        puis est venu le tour de Javascript (avec la création des premiers algorithmes), orienté côté client, et en complément du HTML/CSS, pour l'intéractivité dans nos pages web & web mobile. 
                    </div>
                    <div>
                        Grâce aux nombreux ateliers à chaque fin de cours, nous étions libre de travailler en équipe, avec Discord et LiveShare de VsCode.
                    </div>
                    <div>
                        Le tout pour nous imprégner le plus possible avec la notion de méthode Agile SCRUM, que nous aurons tous exploiter lors de notre projet de fin d'étude dont voici la présentation
                    </div>
                    Utilisation du HTML5, CSS3, Javascript, React
                </div>
            </section>
            <section className="backend-section">
                <h3 className="skills-h3">B<span className="h3-span">ack-end</span></h3>
                <div className="skills-div">
                    Utilisation de NodeJs, Express
                </div>
            </section>
        </div>
        </motion.div>
    );
};

export default Skills;