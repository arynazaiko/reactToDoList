export const createSubTask = subtask => ({ type: "CREATE_SUBTASK", payload: subtask });
export const deleteSubTask = subtaskId => ({ type: "DELETE_SUBTASK", payload: subtaskId });
