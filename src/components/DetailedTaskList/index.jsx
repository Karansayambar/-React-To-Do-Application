import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import TaskForm from '../TaskForm';
import { deleteTask, editTask } from '../redux/action';
import "./style.css";

const DetailedTaskList = () => {
  const taskLists = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [editTaskId, setEditTaskId] = useState(null);
  const [showTaskList, setShowTaskList] = useState(true); // State to manage task list visibility

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  }

  const handleEditTask = (taskId) => {
    setEditTaskId(taskId); // Set the taskId to edit
  }

  const handleCloseTaskForm = (updatedTask) => {
    if (updatedTask) {
      dispatch(editTask(updatedTask.id, updatedTask));
    }
    setEditTaskId(null); // Reset taskId to null to close the form
  }

  const handleToggleTaskList = () => {
    setShowTaskList(!showTaskList); // Toggle task list visibility
  }

  return (
    <div>
      <Button onClick={handleToggleTaskList} variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
        {showTaskList ? 'Hide Task List' : 'Show Task List'}
      </Button>

      {showTaskList ? (
        <div id='task-list'>
          {taskLists.map((task, index) => (
            <div key={index} id='each-task'>
              <div>{task.name}</div>
              {editTaskId === task.id ? (
                <TaskForm taskToEdit={task} onClose={handleCloseTaskForm} />
              ) : (
                <div>
                  <p>{task.description}</p>
                  <div className='clip1'>
                    <p>{task.category}</p>
                    <p>{task.status}</p>
                  </div>
                  <div className='clip2'>
                    <p>{task.startDate.slice(0, 10)}</p>
                    <p>{task.endDate.slice(0, 10)}</p>
                  </div>
                  <div className='clip3'>
                    <p>{task.startTime.slice(0, 5)}</p>
                    <p>{task.endTime.slice(0, 5)}</p>
                  </div>
                  <div className='clip4'>
                    <IconButton aria-label="delete" size="small" onClick={() => handleDeleteTask(task.id)}>
                      <Delete fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="edit" size="small" onClick={() => handleEditTask(task.id)}>
                      <Edit fontSize="small" />
                    </IconButton>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="background-image">
          <h3>Welcome to Task Manager!</h3>
          <p>Please click "Show Task List" to view your tasks.</p>
          <img src='public\Pngtree-blue.png' className='img-1'/>
        </div>
      )}
    </div>
  );
}

export default DetailedTaskList;
