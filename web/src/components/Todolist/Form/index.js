import React from 'react';
import './styles.scss';

const Form = ({ text, addTask, updateText }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask();
    };

    const handleChange = (evt) => {
        const currentText = evt.currentTarget.value;
        updateText(currentText);
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                className="todo-input"
                type="text"
                id="todo-input"
                placeholder="Ajouter une tâche"
                autoComplete="off"
                onChange={handleChange}
                value={text}
            />
        </form>
    );
};

export default Form;