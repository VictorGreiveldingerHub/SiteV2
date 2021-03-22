import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from 'src/utils/elementsParam.js';

import Portfolio1 from '../../assets/images/portfoliov1.png';
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
                        <h4 className="notions">Notions</h4>
                        <div className="notions-div">useState, séparation des composants, (pas d'utilisation de Redux pour cet exemple) mais passage de props et gestion des props (PropTypes).</div>
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
                    <h4 className="notions">Notions</h4>
                    <div className="notions-div">requête à une API, utilisation d'axios, useReducer, useEffect.</div>
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
                    <h4 className="notions">Notions</h4>
                    <div className="notions-div">utilisation de Redux, un store, un reducer, useSelector, useDispatch, actions </div>
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
                    <h4 className="notions">Notions</h4>
                    <div className="notions-div">WebSocket</div>
                    </section>
                </div>
                <div className="app-div">
                    {/* <Chatroom /> */}
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
            {/* <section className="projets">
                <div className="info-div">
                    <h3 className="info-div-h3">Portfolio V1</h3>
                    <section>
                    <h4 className="notions">Notions</h4>
                        <div className="notions-div">
                            Utilisation d'un framework CSS (Semantic-ui-react), déploiement sur O2Switch, JSX, 
                        </div>
                    </section>
                </div>
                <div className="app-div">
                    <img
                        className="image-site1"
                        src={Portfolio1}
                        alt="site web"
                    />
                </div>
            </section> */}
            <section className="projets">
                <div className="info-div">
                    <h3 className="info-div-h3">Portfolio v2</h3>
                    <section>
                    <h4 className="notions">Notions</h4> 
                    <div className="notions-div">Sans Framework css, mise en place manuelle de toute l'architecture du site, CSS / JSX </div>
                    </section>
                </div>
                <div className="app-div">

                </div>
            </section>
        </motion.div>
    );
};

export default Works;