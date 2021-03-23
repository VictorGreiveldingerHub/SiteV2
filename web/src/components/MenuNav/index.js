// == Import Npm / Yarn
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


// Import Composants / fichiers
import MenuSvg from 'src/assets/images/menu.svg';

// Import styles
import './styles.scss';

const MenuNav = () => {

    const dispatch = useDispatch();

    // Boutton pour afficher le menu avec state F/T 
    const showMenu = useSelector((state) => state.displayMenu);

    // On récup la valeur d'un map sur l'element du state que l'on veut mapper => ici navigation,
    // le tout mit dans navigationLinks
    // Nous retourne une liste avec les titres du sommaire
    const navigationLinks = useSelector((state) => state.navigation);

    const backdrop = {
        visible: { opacity: 1, duration: 2},
        hidden: { opacity: 0}
    };
    
    const navigationLinksJSX = navigationLinks.map((link) => {
        return (
            <li className="item" key={link.id}>
                <NavLink className="link" to={link.url} activeClassName="active-item">
                    <div className="inner-link">
                        <span className="anim-layer">
                            <motion.span className="anime-text">
                                {link.identification}
                            </motion.span>
                        </span>
                        <motion.div className="label">
                            {link.identification}
                        </motion.div>
                    </div>
                </NavLink>
            </li>
        );
    });
    return (
        <>
            { showMenu && (
                <motion.div
                    className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    onClick={() => dispatch({ type: 'CLOSE_MENU'})}
                >
                    {/** Partie gauche */}
                    <motion.button
                        className="cls-button"
                        onClick={() => dispatch({ type: 'CLOSE_MENU'})}
                    >
                        Close
                    </motion.button>

                     {/** Partie centrale */}
                        <div className="partie-centrale">
                            <div className="background-center-section"/>
                            <nav className="menu-main-navigation">
                                <ul className="list">
                                    {navigationLinksJSX}
                                </ul>
                            </nav>
                        </div>
                   
                    {/** Partie droite */}
                    <div className="contact-zone">
                        <h2 className="contact-title">Contactez moi</h2>
                        <a href="https://www.linkedin.com/in/victorgreiveldinger/" target="no_blank">Linkedin</a>
                        <a href="https://github.com/VictorGreiveldingerHub" target="no_blank">Github</a>
                        <a href="#" style={{fontSize: "smaller"}}>victorgreiveldinger@gmail.com</a>
                    </div>
                </motion.div>
            )}
            <div className="header">
                <div>
                    <button
                        className="burger-menu-button" 
                        onClick={() => dispatch({ type: 'DISPLAY_MENU'})}
                    >
                        <img src={MenuSvg} className="burger-menu-icon" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default MenuNav;