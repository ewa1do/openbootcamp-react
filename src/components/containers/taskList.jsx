import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levelsEnum.js';
import { Task } from '../../models/taskClass';
import TaskComponent from '../pure/task';

// importamos la hoja de estilos task.scss
import '../../styles/task.scss';

const TaskListComponent = function () {
  const defaultTask1 = new Task(
    'Example1',
    'Description 1',
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    'Example2',
    'Description 2',
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    'Example2',
    'Description 3',
    false,
    LEVELS.BLOCKING
  );

  // Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
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
      <div className='col-12'>
        <div className='card'>
          {/* Card header (title) */}
          <div className='card-header p-3'>
            <h5>Your Tasks</h5>
          </div>
          {/* Card body (content) */}
          <div
            className='card-body'
            data-mdb-perfect-scrollbar='true'
            style={{ position: 'relative', height: '400px' }}
          >
            <table>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Priority</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Iterar sobre una lista de tareas */}
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent key={index} task={task}></TaskComponent>
                  );
                })}
                {/* <TaskComponent task={defaultTask1}></TaskComponent> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* TODO: Aplicar un for/map para renderizar una lista */}
      {/* <TaskComponent task={defaultTask}></TaskComponent> */}
    </div>
  );
};

export default TaskListComponent;
