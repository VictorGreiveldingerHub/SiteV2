import React from 'react';

const List = ({tasks, handleCheckboxChange}) => {
    const tasksJSX = tasks.map((t) => {
        return (
            <li key={t.id}>
                <input 
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={t.done}
                />
                <span>{t.text}</span>
            </li>
        )
    })
    return (
        <ul>
            {tasksJSX}
        </ul>
    );
};

export default List;