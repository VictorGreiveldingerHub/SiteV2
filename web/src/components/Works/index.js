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
                    <div className="left-row">
                        <h4 className="notions">Notions</h4> 
                    </div>
                    <div className="right-row">
                        <div className="right-row-top">
                            <h3 className="info-div-h3">React Todolist</h3>
                        </div>
                        <div className="right-row-top-1">
                            <div className="general">
                                <h4 className="projets-subtitle">general</h4>
                                useState, séparation des composants, (pas d'utilisation de Redux pour cet exemple) mais passage de props et gestion des props (PropTypes).
                            </div>
                        </div>
                        <div className="right-row-mid">
                            <div className="mvp">
                                <h4 className="projets-subtitle">mvp</h4>
                                possibilité d'ajouter une tâche, compteur de tâche
                            </div>
                        </div>
                        <div className="right-row-mid-1">
                            <div className="amelioration">
                                <h4 className="projets-subtitle">améliorations et veille</h4>
                                possibilité de supprimer une tâche, drag & drop, mettre un libellé sur une tâche, tâche prioritaire en premiere, ajout d'effet à l'apparition / suppression de la tâche
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-div">
                    <Todolist />
                </div>
            </section>
            <section className="projets">
                <div className="info-div-reverse">
                    <div className="left-row-reverse">
                        <h4 className="notions">Notions</h4> 
                    </div>
                    <div className="right-row">
                        <div className="right-row-top-reverse">
                            <h3 className="info-div-h3">React Github API</h3>
                        </div>
                        <div className="right-row-top-1-reverse">
                            <div className="general">
                                <h4 className="projets-subtitle">general</h4>
                                requête à une API, utilisation d'axios, useReducer, useEffect
                            </div>
                        </div>
                        <div className="right-row-mid-reverse">
                            <div className="mvp">
                                <h4 className="projets-subtitle">mvp</h4>
                                faire une recherche grâce à l'API Github, nombre de résultat
                            </div>
                        </div>
                        <div className="right-row-mid-1">
                            <div className="amelioration">
                                <h4 className="projets-subtitle">améliorations et veille</h4>
                                améliorer l'experience utilisateur par l'ajout de spinner, auto-complétion, pagination des résultats, choix d'un thème dark ou light
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-div">
                    <GithubAPI />
                </div>
            </section>
            <section className="projets">
                <div className="info-div">
                    <div className="left-row">
                        <h4 className="notions">Notions</h4> 
                    </div>
                    <div className="right-row">
                        <div className="right-row-top">
                            <h3 className="info-div-h3">Gradient de couleur</h3>
                        </div>
                        <div className="right-row-top-1">
                            <div className="general">
                                <h4 className="projets-subtitle">general</h4>
                                utilisation de Redux, un store, un reducer, useSelector, useDispatch, actions.
                            </div>
                        </div>
                        <div className="right-row-mid">
                            <div className="mvp">
                                <h4 className="projets-subtitle">mvp</h4>
                                possibilité de générer la premiere, derniere ou les deux de maniere aléatoire. Changement du sens.
                            </div>
                        </div>
                        <div className="right-row-mid-1">
                            <div className="amelioration">
                                <h4 className="projets-subtitle">améliorations et veille</h4>
                                ajouter des directions
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-div">
                    <Gradient />
                </div>
            </section>
            <section className="projets">
                <div className="info-div-reverse">
                    <div className="left-row-reverse">
                        <h4 className="notions">Notions</h4> 
                    </div>
                    <div className="right-row">
                        <div className="right-row-top-reverse">
                            <h3 className="info-div-h3">Portfolio V1</h3>
                        </div>
                        <div className="right-row-top-1-reverse">
                            <div className="general">
                                <h4 className="projets-subtitle">general</h4>
                                Utilisation d'un framework CSS (Semantic-ui-react), déploiement sur O2Switch, JSX, React.
                            </div>
                        </div>
                        <div className="right-row-mid-reverse">
                            <div className="mvp">
                                <h4 className="projets-subtitle">mvp</h4>
                                MVP disponible <a href="http://victorgreiveldinger.com" target="no_blank">ici</a>
                            </div>
                        </div>
                        <div className="right-row-mid-1">
                            <div className="amelioration">
                                <h4 className="projets-subtitle">améliorations et veille</h4>
                                pour l'instant ce site était essentiellement déstiné à l'entrainement
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-div">
                    <img
                        style={{width: "100%"}}
                        className="image-site1"
                        src={Portfolio1}
                        alt="site web"
                    />
                </div>
            </section>
            <section className="projets">
                <div className="info-div">
                    <div className="left-row">
                        <h4 className="notions">Notions</h4> 
                    </div>
                    <div className="right-row">
                        <div className="right-row-top">
                            <h3 className="info-div-h3">portfolio v2</h3>
                        </div>
                        <div className="right-row-top-1">
                            <div className="general">
                                <h4 className="projets-subtitle">general</h4>
                                Sans Framework css, JSX, Redux & store, SoC, React, React-Router, framer-motion, hébergement via O2Switch.
                            </div>
                        </div>
                        <div className="right-row-mid">
                            <div className="mvp">
                                <h4 className="projets-subtitle">mvp</h4>
                                responsive, design, CSS,
                            </div>
                        </div>
                        <div className="right-row-mid-1">
                            <div className="amelioration">
                                <h4 className="projets-subtitle">améliorations et veille</h4>
                                ajout d'éléments pour l'amélioration de l'experience utilisateur, ajout de nouvelle application, améliorer les transitions entre chaque page
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projets">
                <div className="info-div-reverse">
                    <div className="left-row-reverse">
                        <h4 className="notions">Notions</h4> 
                    </div>
                    <div className="right-row">
                        <div className="right-row-top-reverse">
                            <h3 className="info-div-h3">Pair2Peer</h3>
                        </div>
                        <div className="right-row-top-1-reverse">
                            <div className="general">
                                <h4 className="projets-subtitle">general</h4>
                                dans le cadre de mon projet de fin d'étude, construction d'un site de mise en relation de développeur avec React, Bulma comme framework CSS, Hapi en back, react leaflet pour la map
                            </div>
                        </div>
                        <div className="right-row-mid-reverse">
                            <div className="mvp">
                                <h4 className="projets-subtitle">mvp</h4>
                                site responsive, possibilité d'inscription, de contact, un chat, modification de son profil
                            </div>
                        </div>
                        <div className="right-row-mid-1">
                            <div className="amelioration">
                                <h4 className="projets-subtitle">ce que j'ai fait sur ce site</h4>
                                Implémentation de la carte avec react leaflet et récupération des données utilisateurs via notre BDD, implémentation du formulaire de contact & d'inscription, mise en place d'une sécurité Recaptcha
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-div">
                <iframe className="video" src="https://www.youtube.com/embed/nRSm9SfLXbw?start=2290" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </section>
        </motion.div>
    );
};

export default Works;