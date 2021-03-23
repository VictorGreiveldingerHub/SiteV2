import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

// Import Perso
import { pageVariants, pageTransition } from 'src/utils/elementsParam.js';
import './styles.scss';

const Contact = () => {

    // Pour l'envoie de mail 
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // On créé un nouvel objet avec les informations utilisateurs
        const newMessage = {
            prenom,
            nom,
            mail,
            message,
        };
        // Test de l'objet reçu
        console.log(newMessage);
    };

    return (
        <motion.div
            className="content"
            initial="initial"
            animate= "in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>
            <div>
                <div className="title">Parlons ensemble.</div>
                <div className="title-contact">CONTACT</div>
                <div className="formulaire">
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <div className="form-field-line" />
                            <div className="form-field-line-complete" />
                            <label className="form-label">Prénom</label>
                            <input
                                className="input-field"
                                type="text"
                                id="firstname"
                                placeholder="Votre prénom"
                                onChange={(e) => setPrenom(e.target.value)}
                                value={prenom}
                            />
                        </div>
                        <div className="input-field">
                        <div className="form-field-line" />
                            <div className="form-field-line-complete" />
                            <label className="form-label">Nom</label>
                            <input
                                className="input-field"
                                type="text"
                                id="lastname"
                                placeholder="Votre nom"
                                onChange={(e) => setNom(e.target.value)}
                                value={nom}
                            />
                        </div>
                        <div className="input-field">
                        <div className="form-field-line" />
                            <div className="form-field-line-complete" />
                            <label className="form-label">Email</label>
                            <input
                                className="input-field"
                                type="text"
                                id="email"
                                placeholder="Votre email"
                                onChange={(e) => setMail(e.target.value)}
                                value={mail}
                            />
                        </div>
                        <div className="textarea-wrap">
                            <label className="form-label">Message</label>
                            <div className="textarea-line"/>
                            <textarea
                                type="text"
                                id="message"
                                placeholder="Votre message"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            />
                        </div>
                        <div className="submit-container">
                            <button className="button-submit" type="submit">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;