// == Import Npm / Yarn
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
        visible: { opacity: 1},
        hidden: { opacity: 0}
    };
    
    const navigationLinksJSX = navigationLinks.map((link) => {
        return (
            <Link
                key={link.id}
                exact
                to={link.url}
                className="nav-link"
            >
                <li key={link.id} className="list-summary">
                    {link.identification}
                </li>
            </Link>
        );
    });

    return (
        <AnimatePresence exitBeforeEnter>
            { showMenu && (
            <motion.div
                className="backdrop"
                variants={backdrop}
                initial="hidden"
                animate="visible"
                onClick={() => dispatch({ type: 'CLOSE_MENU'})}
            >
                <motion.ul className="list-container">
                    {navigationLinksJSX}
                </motion.ul>
                <button
                    className="cls-button"
                    onClick={() => dispatch({ type: 'CLOSE_MENU'})}
                >
                    <div className="cls-line"/>Close
                </button>
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
        </AnimatePresence>
        
    );
};

export default MenuNav;