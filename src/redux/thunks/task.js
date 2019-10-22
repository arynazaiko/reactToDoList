import * as actions from "../actions";

export const createTaskThunk = (task) => dispatch => {
  dispatch(actions.createTask(task));
};

export const completeTaskThunk = (taskId) => dispatch => {
  dispatch(actions.completeTask(taskId));
};
