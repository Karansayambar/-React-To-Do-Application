// src/components/TaskList.js
import { useSelector } from 'react-redux';
import "./style.css";
import { completedStatus, pendingStatus,  } from '../redux/selectores';

const TaskList = () => {
  const pendingTasks = useSelector(pendingStatus);
  const completedTasks = useSelector(completedStatus)

  return (
    <>
    <div className='list-container-task'>
      <h3>Ongoing Tasks</h3>
      <ul>
        {pendingTasks.length > 0 ? (
            <ul>
                {pendingTasks.map((task, index) => (
                    <li key={index} className='task-item pending'>{task.name}</li>
                    ))}
            </ul>
                    ) : (
                    <p>No ongoing tasks found</p>
                )}
            </ul>
    </div>
    <div className='list-container-task'>
      <h3>Completed Tasks</h3>
      <ul>
        {completedTasks.length > 0 ? (
            <ul>
                {completedTasks.map((task, index) => (
                    <li key={index} className='task-item completed'>{task.name}</li>
                    ))}
            </ul>
                    ) : (
                    <p>No completed tasks found</p>
                )}
            </ul>
    </div>
    </>
  );
}

export default TaskList;
