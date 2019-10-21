import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { createTaskThunk, completeTaskThunk } from "../redux/thunks";

const mapStateToProps = (state) => {
  const { tasks } = state;

  return {
    tasks: tasks.tasks,
  };
};

const mapDispatchToProps = {
  createTaskThunk: createTaskThunk,
  completeTaskThunk: completeTaskThunk,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
