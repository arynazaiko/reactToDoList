import { connect } from "react-redux";

import { createTaskThunk, completeTaskThunk, editTaskThunk, deleteTaskThunk } from "../redux/thunks";

const mapStateToProps = (state) => {
  const { tasks } = state;

  return {
    tasks: tasks.tasks,
  };
};

const mapDispatchToProps = {
  createTaskThunk: createTaskThunk,
  completeTaskThunk: completeTaskThunk,
  editTaskThunk: editTaskThunk,
  deleteTaskThunk: deleteTaskThunk,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
