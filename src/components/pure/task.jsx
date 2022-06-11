import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { Task } from '../../models/taskClass';

// importamos la hoja de estilos task.scss
import '../../styles/task.scss';
import { LEVELS } from '../../models/levelsEnum';

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log('Created Task');

    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  /**
   * function which returns a bagde depending of the task's level
   */
  const taskLevelBadge = () => {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-primary'>{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-warning'>{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-danger'>{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  };

  /**
   *
   * @returns returns an icon depending on the task
   */

  const taskCompletedIcon = function () {
    let result;

    if (task.completed)
      result = <i className='bi bi-toggle-on' style={{ color: 'green' }}></i>;
    else
      result = <i className='bi bi-toggle-off' style={{ color: 'gray' }}></i>;

    return result;
  };

  return (
    <tr className='fw-normal'>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        {/* Execution of function to returns a badge element */}
        {taskLevelBadge()}
      </td>
      <td className='align-middle'>
        {taskCompletedIcon()}
        {/* {task.completed ? (
          <i className='bi bi-toggle-on' style={{ color: 'green' }}></i>
        ) : (
          <i className='bi bi-toggle-off' style={{ color: 'gray' }}></i>
        )} */}
        <i
          className='bi bi-trash'
          style={{ color: 'tomato', paddingLeft: '.3em' }}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: Proptypes.instanceOf(Task),
};

export default TaskComponent;
