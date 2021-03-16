import React from 'react';

const Counter = ({tasksCounter}) => {
    console.log(tasksCounter);
    return (
        <div>{tasksCounter} tâche à faire</div>
    );
};

export default Counter;