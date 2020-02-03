import { connect } from "react-redux";

import { createTaskThunk, completeTaskThunk, editTaskThunk } from "../redux/thunks";

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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
