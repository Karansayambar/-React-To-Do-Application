// import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./action";

// const initialState = {
//   tasks: JSON.parse(localStorage.getItem("tasks")) || [],
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       {
//         var updatedAddTasks = [...state.tasks, action.payload];
//       }
//       localStorage.setItem("tasks", JSON.stringify(updatedAddTasks));
//       return {
//         ...state,
//         // tasks: [...state.tasks, action.payload],
//         tasks: updatedAddTasks,
//       };
//     case DELETE_TASK:
//       {
//         var deleteTasks = state.tasks.filter(
//           (task) => task.id !== action.payload
//         );
//       }
//       localStorage.setItem("tasks", JSON.stringify(deleteTasks));
//       return {
//         ...state,
//         // tasks: state.tasks.filter((task) => task.id !== action.payload),
//         tasks: deleteTasks,
//       };

//     case EDIT_TASK:
//       var { taskId, updatedTask } = action.payload;
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === taskId ? { ...task, ...updatedTask } : task
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;

import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./action";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  taskIdCounter: 1, // Initial task ID counter
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const newTask = {
        ...action.payload,
        id: state.taskIdCounter, // Assign current counter value as ID
      };
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
        taskIdCounter: state.taskIdCounter + 1, // Increment task ID counter
      };
    }
    case DELETE_TASK: {
      const deleteTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(deleteTasks));
      return {
        ...state,
        tasks: deleteTasks,
      };
    }
    case EDIT_TASK: {
      const { taskId, updatedTask } = action.payload;
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    default:
      return state;
  }
};

export default reducer;
