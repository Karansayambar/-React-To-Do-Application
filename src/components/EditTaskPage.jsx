import{ useState } from 'react';
import TaskForm from './TaskForm';

const EditTaskPage = () => {
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEditTask = (task) => {
    setTaskToEdit(task); // Set the task to edit in state
  };

  const handleCloseEditForm = () => {
    setTaskToEdit(null); // Clear the task to edit
  };

  return (
    <div>
      {/* Button to trigger editing a task */}
      <button onClick={() => handleEditTask(Task)}>Edit Task</button>

      {/* Render TaskForm with taskToEdit as a prop */}
      {taskToEdit && (
        <TaskForm taskToEdit={taskToEdit} onClose={handleCloseEditForm} />
      )}
    </div>
  );
};

export default EditTaskPage;
