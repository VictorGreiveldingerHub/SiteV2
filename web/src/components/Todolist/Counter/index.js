import React from 'react';

import './styles.scss';

const Counter = ({tasksCounter}) => {
    console.log(tasksCounter);
    return (
        <div className="todo-counter">{tasksCounter} tâche à faire</div>
    );
};

export default Counter;