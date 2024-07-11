// src/redux/selectors.js

export const selectTaskNames = (state) => state.tasks.map((task) => task.name);
export const detailTaskList = (state) => state.tasks;
export const completedStatus = (state) =>
  state.tasks.filter((item) => item.status === "completed");
export const pendingStatus = (state) =>
  state.tasks.filter((item) => item.status === "pending");
