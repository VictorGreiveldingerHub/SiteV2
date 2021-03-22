import React from 'react';
import './styles.scss';

const List = ({tasks, handleCheckboxChange}) => {
    const tasksJSX = tasks.map((t) => {
        return (
            <li
                key={t.id}
                className="todo-li"
            >
                <input 
                    type="checkbox"
                    className="todo-list-input"
                    onChange={() => {handleCheckboxChange(t.id)}}
                    checked={t.done}
                />
                <span className="todo-span">{t.text}</span>
            </li>
        )
    })
    return (
        <ul className="todo-ul">
            {tasksJSX}
        </ul>
    );
};

export default List;