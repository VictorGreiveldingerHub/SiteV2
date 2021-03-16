import React from 'react';

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ajouter une tâche"
            />
        </form>
    );
};

export default Form;