// == Import Npm / Yarn
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { motion, useCycle } from 'framer-motion';
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
    
    const navigationLinksJSX = navigationLinks.map((link) => {
        return (
            <NavLink
                key={link.id}
                exact
                to={link.url}
                className="nav-link"
            >
                <li key={link.id} className="list-summary">
                    {link.identification}
                </li>
            </NavLink>
        );
    });
    if ( showMenu ) {
        return (
            <>
                <ul className="list-container">{navigationLinksJSX}</ul>
                <button
                    className="cls-button"
                    onClick={() => dispatch({ type: 'CLOSE_MENU'})}
                >
                    <div className="cls-line"/>Close
                </button>
            </>
        );
    } else {
        return (
            <div className="header">
                  <div>
                        <button
                            className="burger-menu-button" 
                            value={showMenu}
                            onClick={() => dispatch({ type: 'DISPLAY_MENU'})}
                        >
                            <img src={MenuSvg} className="burger-menu-icon" />
                        </button>
                    </div>
            </div>
        );
    }
};

export default MenuNav;