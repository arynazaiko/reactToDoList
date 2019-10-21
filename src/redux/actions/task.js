// import { createAction } from 'redux-actions';

// export const createTask = createAction('CREATE_TASK');
export const createTask = task => ({ type: "CREATE_TASK", payload: task });
export const completeTask = task => ({ type: "COMPLETE_TASK", payload: task });
