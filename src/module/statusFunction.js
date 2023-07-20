// statusUpdates.js
import { tasks, storeTasksToLocalStorage } from './taskFunction.js';

const updateStatus = (index, completed) => {
  tasks[index].completed = completed;
  storeTasksToLocalStorage();
};

export default updateStatus;
