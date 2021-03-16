import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from 'src/utils/elementsParam.js';

import './styles.scss';

// Imports Composants
import Todolist from '../Todolist';
import GithubAPI from '../GithubAPI';
import Gradient from '../Gradient';
import Chatroom from '../Chatroom';
// import LetterBoxed from '../LetterBoxed';

const Works = () => {
    return (
        <motion.div
            className="works-content"
            initial="initial"
            animate= "in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <section className="projets">
                <div>
                    <h3>React Todolist</h3>
                    <section>
                        Notions : useState, séparation des composants, (pas d'utilisation de Redux pour cet exemple) mais passage de props. 
                    <a href="https://github.com/VictorGreiveldingerHub/TodoListReact" target="no_blank">Le code sur Github</a>
                    </section>
                </div>
                <div>
                    <Todolist />
                </div>
            </section>
            <section className="projets">
                <div>
                    <h3>React Github API</h3>
                    <section>
                        Notions (gauche):
                    <a>Le code sur Github</a>
                    </section>
                </div>
                <div>
                    <GithubAPI />
                </div>
            </section>
            <section className="projets">
                <div>
                    <h3>Gradient de couleur</h3>
                    <section>
                        Notions (droite):
                    <a>Le code sur Github</a>
                    </section>
                </div>
                <div>
                    <Gradient />
                </div>
            </section>
            <section className="projets">
                <div>
                    <h3>Chatroom</h3>
                    <section>
                        Notions (gauche):
                    <a>Le code sur Github</a>
                    </section>
                </div>
                <div>
                    <Chatroom />
                </div>
            </section>
            {/* <section className="projets">
                <div>
                    <h3>Letter Boxed (si j'ai le temps</h3>
                    <section>
                        Notions (gauche):
                    <a>Le code sur Github</a>
                    </section>
                </div>
                <div>L'application fonctionnelle sur le coté</div>
            </section> */}
            <section className="projets">
                <div>
                    <h3>Portfolio V1</h3>
                    <section>
                        Notions (gauche):
                    <a>Le code sur Github</a>
                    </section>
                </div>
                <div>L'application fonctionnelle sur le coté lien vers le site</div>
            </section>
            <section className="projets">
                <div>
                    <h3>Portfolio v2</h3>
                    <section>
                        Notions (droite):
                    <a>Le code sur Github</a>
                    </section>
                </div>
                <div>L'application fonctionnelle sur le coté</div>
            </section>
        </motion.div>
    );
};

export default Works;