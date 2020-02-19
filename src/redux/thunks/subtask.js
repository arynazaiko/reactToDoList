import * as actions from "../actions";

export const createSubTaskThunk = (subtask) => dispatch => {
  dispatch(actions.createSubTask(subtask));
};
