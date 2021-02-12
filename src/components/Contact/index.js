import React from 'react';

const Contact = () => {
    return (
        <div className="content">
            <div className="title">Parlons ensemble.</div>
            <div className="title-contact">CONTACT</div>
            <div className="formulaire">
                <form>
                    <div>
                        <label>Nom</label>
                        <input type="text" id="firstname" placeholder="Votre nom"></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" id="email" placeholder="Votre email"></input>
                    </div>
                    <div>
                        <label>Nom</label>
                        <input type="text" id="message" placeholder="Votre message"></input>
                    </div>
                    <div className="submit">
                        <button type="submit"></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;