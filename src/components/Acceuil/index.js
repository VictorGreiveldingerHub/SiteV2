// Import npm
import React from 'react';
import { Tween, Timeline, SplitChars } from 'react-gsap';

// Import Styles
import './styles.scss';

const Acceuil = () => {
    return (
        <div className="acceuil-container">
            <div className="lastname">Greiveldinger</div>
            <div className="firstname"><div className="line"></div>Victor</div>
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
        </div>
    );
};

export default Acceuil;