import React from 'react';
import { LEVELS } from '../../models/levelsEnum.js';
import { Task } from '../../models/taskClass';
import TaskComponent from '../pure/task';

const TaskListComponent = function () {
  const defaultTask = new Task(
    'Example',
    'Default description',
    false,
    LEVELS.NORMAL
  );

  const changeState = (id) => {
    console.log('Change state of a task');
  };

  return (
    <div>
      <div>
        <h1>Your Task:</h1>
      </div>
      {/* TODO: Aplicar un for/map para renderizar una lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
