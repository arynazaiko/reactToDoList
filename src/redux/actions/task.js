export const createTask = task => ({ type: "CREATE_TASK", payload: task });
export const completeTask = taskId => ({ type: "COMPLETE_TASK", payload: taskId });