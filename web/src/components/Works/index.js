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
                <div className="info-div">
                    <h3 className="info-div-h3">React Todolist</h3>
                    <section>
                        Notions : useState, séparation des composants, (pas d'utilisation de Redux pour cet exemple) mais passage de props et gestions des props (PropTypes).
                    </section>
                </div>
                <div className="app-div">
                    <Todolist />
                </div>
            </section>
            <section className="projets">
                <div className="info-div">
                    <h3 className="info-div-h3">React Github API</h3>
                    <section>
                        Notions : requête à une API, utilisation d'axios, useReducer, useEffect.
                    </section>
                </div>
                <div className="app-div">
                    <GithubAPI />
                </div>
            </section>
            <section className="projets">
                <div className="info-div">
                    <h3 className="info-div-h3">Gradient de couleur</h3>
                    <section>
                        Notions : utilisation de Redux, un store, un reducer, useSelector, useDispatch, actions 
                    </section>
                </div>
                <div className="app-div">
                    <Gradient />
                </div>
            </section>
            <section className="projets">
                <div className="info-div">
                    <h3 className="info-div-h3">Chatroom</h3>
                    <section>
                        Notions : A venir
                    </section>
                </div>
                <div className="app-div">
                    <Chatroom />
                </div>
            </section>
            {/* <section className="projets">
                <div>
                    <h3>Letter Boxed (si j'ai le temps</h3>
                    <section>
                        Notions (gauche):
                    </section>
                </div>
                <div>L'application fonctionnelle sur le coté</div>
            </section> */}
            <section className="projets">
                <div className="info-div">
                    <h3 className="info-div-h3">Portfolio V1</h3>
                    <section>
                        Notions : Utilisation d'un framework CSS avec Semantic-ui-react
                    </section>
                </div>
                <div className="app-div">L'application fonctionnelle sur le coté lien vers le site</div>
            </section>
            <section className="projets">
                <div className="info-div">
                    <h3 className="info-div-h3">Portfolio v2</h3>
                    <section>
                        Notions : Sans Framework css, mise en place manuelle de toute l'architecture du site, CSS / JSX 
                    </section>
                </div>
                <div className="app-div">L'application fonctionnelle sur le coté</div>
            </section>
        </motion.div>
    );
};

export default Works;