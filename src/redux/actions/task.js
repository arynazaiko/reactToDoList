export const createTask = task => ({ type: "CREATE_TASK", payload: task });
export const completeTask = taskId => ({ type: "COMPLETE_TASK", payload: taskId });
export const editTask = task => ({ type: "EDIT_TASK", payload: task });
export const deleteTask = taskId => ({ type: "DELETE_TASK", payload: taskId });
