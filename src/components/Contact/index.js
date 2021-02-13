import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './styles.scss';

const Contact = () => {
    const pageVariants = useSelector((state) => state.pageVariants);
    const pageTransition = useSelector((state) => state.pageTransition);
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
                        <label>Nom</label>
                        <input type="text" id="firstname" placeholder="Votre nom"></input>
                    </div>
                    <div className="input-field">
                        <label>Email</label>
                        <input type="text" id="email" placeholder="Votre email"></input>
                    </div>
                    <div className="input-field">
                        <label>Message</label>
                        <input type="text" id="message" placeholder="Votre message"></input>
                    </div>
                    <div className="submit">
                        <input type="submit"></input>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;