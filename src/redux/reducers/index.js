import { combineReducers } from 'redux';

import taskReducer from './task';
import subTaskReducer from './subtask';

const reducers = combineReducers({
  tasks: taskReducer,
  subtasks: subTaskReducer,
});

export default reducers;
