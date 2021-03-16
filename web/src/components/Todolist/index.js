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

    const handleCheckboxChange = (taskId) => {
        const newTasks = tasks.map((task) => {
          const taskCopy = { ...task };
          if (taskCopy.id === taskId) taskCopy.done = !taskCopy.done;
          return taskCopy;
        });
        setTasks(newTasks);
    };

    return (
        <div>
            <Form />
            <Counter tasksCounter={tasksCounter}/>
            <List tasks={tasks} handleCheckboxChange={handleCheckboxChange}/>
        </div>
    );
};

export default Todolist;