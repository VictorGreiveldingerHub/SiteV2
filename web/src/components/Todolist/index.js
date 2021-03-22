import React, { useState } from 'react';
import './styles.scss';

import initialTasks from './task';

import Form from './Form';
import List from './List';
import Counter from './Counter';

const Todolist = () => {

    const [tasks, setTasks] = useState(initialTasks);
    const [newTaskText, setNewTaskText] = useState("");

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

    const addTask = () => {
        // Calcul d'un id pour la nouvelle tâche
        const taskIds = tasks.map((task) => task.id);

        const maxId = Math.max(...taskIds);
        const id = maxId + 1;
        // const id = (Math.max(...taskIds)) + 1;
    
        // Modélisation de la nouvelle tâche
        const taskToAdd = {
          id,
          text: newTaskText,
          done: false,
        };
        const newTasks = [...tasks, taskToAdd];
    
        // MÀJ du state de l'élément React
        setTasks(newTasks);
        // On vide l'input du formulaire
        setNewTaskText('');
    };

    return (
        <div className="todolist">
            <Form
                text={newTaskText}
                addTask={addTask}
                updateText={setNewTaskText}
            />
            <Counter tasksCounter={tasksCounter}/>
            <List tasks={tasks} handleCheckboxChange={handleCheckboxChange}/>
        </div>
    );
};

export default Todolist;