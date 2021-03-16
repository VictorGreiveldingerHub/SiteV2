import React from 'react';

const Counter = ({tasks}) => {
    const tasksCounter = tasks.filter((task) => {
        return !task.done;
    }).lenght;
    return (
        <div>{tasksCounter} tâche à faire</div>
    );
};

export default Counter;