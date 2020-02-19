import { connect } from "react-redux";

import {
  createTaskThunk,
  completeTaskThunk,
  editTaskThunk,
  deleteTaskThunk,
  createSubTaskThunk
} from "../redux/thunks";

const mapStateToProps = state => {
  const { tasks, subtasks } = state;

  return {
    tasks: tasks.tasks,
    subtasks: subtasks.subtasks,
  };
};

const mapDispatchToProps = {
  createTaskThunk: createTaskThunk,
  completeTaskThunk: completeTaskThunk,
  editTaskThunk: editTaskThunk,
  deleteTaskThunk: deleteTaskThunk,
  createSubTaskThunk: createSubTaskThunk
};

export default connect(mapStateToProps, mapDispatchToProps);
