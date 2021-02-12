// Import npm
import React from 'react';
import { Tween, Timeline } from 'react-gsap';

// Import Styles
import './styles.scss';

const Acceuil = () => {
    return (
        <div className="acceuil-container">
            <div className="lastname">Greiveldinger</div>
            <div className="firstname"><div className="line"/>Victor</div>
            <div className="info">developpeur junior</div>
            <div className="folio">
                folio
                <div className="nbr-folio">
                    <Timeline target={ <div>00<span style={{color: 'red', opacity: '0.7'}}>2</span></div> }>
                        <Tween from={{x: '-50vw'}}  duration={2}/>
                    </Timeline>
                </div>
            </div>
            <div className="contact">contact</div>
            <div className="localisation">
                <div>Metz</div>
                <div>france</div>
            </div>
            <div className="count-div">introduction</div>
            <div className="fast-summary">
                <ul className="list-fast-summary">
                    <li className="item-fast-summary">Intro</li>
                    <li className="item-fast-summary">Profil</li>
                    <li className="item-fast-summary">Works</li>
                    <li className="item-fast-summary">Compétences</li>
                </ul>
            </div>
            <div className="year">2021</div>
        </div>
    );
};

export default Acceuil;