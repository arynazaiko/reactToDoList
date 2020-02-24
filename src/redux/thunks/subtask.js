import * as actions from "../actions";

export const createSubTaskThunk = (subtask) => dispatch => {
  dispatch(actions.createSubTask(subtask));
};

export const deleteSubTaskThunk = (subtaskId) => dispatch => {
  dispatch(actions.deleteSubTask(subtaskId));
};
