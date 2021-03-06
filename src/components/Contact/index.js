import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from 'src/utils/elementsParam.js';
import locomotiveScroll from "locomotive-scroll";
import './styles.scss';
import 'src/components/Description/locoStyles.css';

const Contact = () => {
    return (
        <motion.div
            className="content"
            initial="initial"
            animate= "in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="title">Parlons ensemble.</div>
            <div className="title-contact">CONTACT</div>
            <div className="formulaire">
                <form>
                    <div className="input-field">
                        <div className="form-field-line" />
                        <div className="form-field-line-complete" />
                        <label className="form-label">Prénom</label>
                        <input className="input-field" type="text" id="firstname" placeholder="Votre prénom"></input>
                    </div>
                    <div className="input-field">
                    <div className="form-field-line" />
                        <div className="form-field-line-complete" />
                        <label className="form-label">Nom</label>
                        <input className="input-field" type="text" id="lastname" placeholder="Votre nom"></input>
                    </div>
                    <div className="input-field">
                    <div className="form-field-line" />
                        <div className="form-field-line-complete" />
                        <label className="form-label">Email</label>
                        <input className="input-field" type="text" id="email" placeholder="Votre email"></input>
                    </div>
                    <div className="textarea-wrap">
                        <label className="form-label">Message</label>
                        <input className="input-field" type="text" id="message" placeholder="Votre message"></input>
                    </div>
                    <div className="submit-container">
                        <input type="submit"></input>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;