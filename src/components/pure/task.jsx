import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { Task } from '../../models/taskClass';

// importamos la hoja de estilos task.scss
import '../../styles/task.scss';

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log('Created Task');

    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  return (
    <div>
      <h3 className='task-name'>Name: {task.name}</h3>
      <h3>Description: {task.description}</h3>
      <h3>Completed: {task.completed ? 'FINALIZADA' : 'EN PROCESO'}</h3>
      <h3>Level: {task.level}</h3>
    </div>
  );
};

TaskComponent.propTypes = {
  task: Proptypes.instanceOf(Task),
};

export default TaskComponent;
