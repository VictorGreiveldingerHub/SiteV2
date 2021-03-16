import React from 'react';

import tasks from './task';

import Form from './Form';
import List from './List';
import Counter from './Counter';

const Todolist = () => {
    return (
        <div>
            <Form />
            <Counter tasks={tasks}/>
            <List tasks={tasks}/>
        </div>
    );
};

export default Todolist;