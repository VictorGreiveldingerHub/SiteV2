import React from 'react';

import './styles.scss';

const Counter = ({tasksCounter}) => {
    console.log(tasksCounter);
    let sentence = 'tâche';
    if (tasksCounter > 1) sentence += 's'
    return (
        <div className="todo-counter">{tasksCounter} {sentence} à faire</div>
    );
};

export default Counter;