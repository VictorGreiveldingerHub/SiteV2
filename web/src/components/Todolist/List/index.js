import React from 'react';

const List = ({tasks}) => {
    const tasksJSX = tasks.map((task) => {
        return (
            <li key={task.id}>
                <input 
                    type="checkbox"
                    checked={task.done}
                />
                <span>{task.text}</span>
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