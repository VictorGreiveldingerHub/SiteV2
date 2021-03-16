import React, { useState } from 'react';

import initialTasks from './task';

import Form from './Form';
import List from './List';
import Counter from './Counter';

const Todolist = () => {

    const [tasks, setTasks] = useState(initialTasks);

    const tasksCounter = tasks.filter((task) => {
        console.log(!task.done);
        return !task.done;
    }).length;

    console.log(tasksCounter)
    return (
        <div>
            <Form />
            <Counter tasksCounter={tasksCounter}/>
            {/* <List tasks={task} handleCheckboxChange={handleCheckboxChange}/> */}
        </div>
    );
};

export default Todolist;