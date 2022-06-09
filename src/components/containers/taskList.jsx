import React, { useState, useEffect } from 'react';
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

  // Estado del componente
  const [tasks, setTasks] = useState(defaultTask);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida
  useEffect(() => {
    console.log('Task State has been modified');
    setLoading(false);
    return () => {
      console.log('TaskList component is going to unmount...');
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log('TODO: Change state of a task');
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
