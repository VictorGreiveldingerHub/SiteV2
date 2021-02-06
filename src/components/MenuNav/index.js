// == Import Npm / Yarn
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MenuSvg from 'src/assets/images/menu.svg';

// Import styles
import './styles.scss';

const MenuNav = () => {
    const dispatch = useDispatch();
    const showMenu = useSelector((state) => state.displayMenu);
// On récup la valeur d'un map sur l'element du state que l'on veut mapper => ici navigation,
// le tout mit dans navigationLinks
    const navigationLinks = useSelector((state) => state.navigation).map((link) => {
        if (showMenu) {
        return (
            <NavLink
                exact
                key={link.id}
                to={link.url}
                className={link.className}
                activeClassName="menu-link--active"
            >
                {link.identification}
            </NavLink>
        );
        } else {
            return <></>
        }
    });
    return (
        <div className="header">
            <div>
                <button
                    className="burger-menu-button"
                    value={showMenu}
                    onClick={() => dispatch({ type: 'DISPLAY_MENU'})}>
                    <img
                        src={MenuSvg}
                        className="burger-menu"
                    />
                </button>
            </div>
            <nav className="navigation-links">
                {navigationLinks}
            </nav>
        </div>
    );
};

export default MenuNav;