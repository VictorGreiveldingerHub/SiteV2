import React, { useState, createRef, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import locomotiveScroll from "locomotive-scroll";

// Import Perso
import { pageVariants, pageTransition } from 'src/utils/elementsParam.js';
import 'src/components/Description/locoStyles.css';
import './styles.scss';

const Contact = () => {

    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');
    const scrollRef = createRef();

    
    useEffect(() => {
        const scroll = new locomotiveScroll({
        scrollFromAnywhere: true,
        el: scrollRef.current,
        smooth: true,
        });
    });

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

        axios.post("http://localhost:8080/contact", newMessage);

    };

    return (
        <motion.div
            className="content"
            initial="initial"
            animate= "in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div ref={scrollRef}>
                <div className="title">Parlons ensemble.</div>
                <div className="title-contact">CONTACT</div>
                <div className="formulaire">
                    <form onSubmit={handleSubmit}>
                        <div className="input-field" data-scroll data-scroll-speed="1.5">
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
                            ></input>
                        </div>
                        <div className="input-field" data-scroll data-scroll-speed="2">
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
                            ></input>
                        </div>
                        <div className="input-field" data-scroll data-scroll-speed="2.5">
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
                            ></input>
                        </div>
                        <div className="textarea-wrap" data-scroll data-scroll-speed="3">
                            <label className="form-label">Message</label>
                            <div className="textarea-line"/>
                            <textarea
                                type="text"
                                id="message"
                                placeholder="Votre message"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            ></textarea>
                        </div>
                        <div className="submit-container" data-scroll data-scroll-speed="3.5">
                            <button className="button-submit" type="submit">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;