import { combineReducers } from 'redux';

import taskReducer from './task';

const reducers = combineReducers({
  tasks: taskReducer,
});

export default reducers;