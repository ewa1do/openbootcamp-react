import React from 'react';
import Proptypes from 'prop-types';
import { Task } from '../../models/taskClass';

const TaskComponent = ({ task }) => {
  return (
    <div>
      <h3>Name: {task.name}</h3>
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
