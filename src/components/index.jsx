import React from "react";
import PropTypes from "prop-types";

import ListGroup from "./ListGroup";
import CreateTaskModal from "./CreateTaskModal";
import EditTaskModal from "./EditTaskModal";
import ShowTaskInfoModal from "./ShowTaskInfoModal";
import connect from "./connect";

import "./styles.scss";

class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpenCreateTaskModal: false,
      editTaskId: null,
      shownTaskId: null
    };
  }

  handleOpen = () => {
    this.setState({
      isOpenCreateTaskModal: true
    });
  };

  handleClose = () => {
    this.setState({
      isOpenCreateTaskModal: false
    });
  };

  handleOpenEditModal = id => {
    this.setState({
      editTaskId: id
    });
  };

  handleCloseEditModal = () => {
    this.setState({
      editTaskId: null
    });
  };

  getEditedTask = () => {
    const { editTaskId } = this.state;
    const { tasks } = this.props;

    return tasks.find(task => task.id === editTaskId);
  };

  handleOpenShowTaskModal = id => {
    this.setState({
      shownTaskId: id
    });
  };

  handleCloseShowTaskModal = () => {
    this.setState({
      shownTaskId: null
    });
  };

  getShownTask = () => {
    const { shownTaskId } = this.state;
    const { tasks } = this.props;

    return tasks.find(task => task.id === shownTaskId);
  };

  getSubtasks = () => {
    const { shownTaskId } = this.state;
    const { subtasks } = this.props;

    return subtasks.filter(subtask => subtask.taskId === shownTaskId);
  }

  render() {
    const { isOpenCreateTaskModal, editTaskId, shownTaskId } = this.state;
    const {
      createTaskThunk,
      completeTaskThunk,
      editTaskThunk,
      deleteTaskThunk,
      tasks,
      createSubTaskThunk,
    } = this.props;

    return (
      <div className="container">
        <button
          type="button"
          className="btn-add-task"
          onClick={this.handleOpen}
        >
          <i className="fas fa-plus"></i>
        </button>
        <ListGroup
          tasks={tasks}
          onComplete={completeTaskThunk}
          onEdit={this.handleOpenEditModal}
          onDelete={deleteTaskThunk}
          onOpenTaskModal={this.handleOpenShowTaskModal}
        />

        {isOpenCreateTaskModal ? (
          <CreateTaskModal
            onSubmit={createTaskThunk}
            onClose={this.handleClose}
          />
        ) : (
          ""
        )}

        {editTaskId ? (
          <EditTaskModal
            onSubmit={editTaskThunk}
            onClose={this.handleCloseEditModal}
            editedTask={this.getEditedTask()}
          />
        ) : (
          ""
        )}

        {shownTaskId ? (
          <ShowTaskInfoModal
            shownTask={this.getShownTask()}
            onClose={this.handleCloseShowTaskModal}
            onSubmit={createSubTaskThunk}
            subtasks={this.getSubtasks()}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

MainPage.propTypes = {
  createTaskThunk: PropTypes.func.isRequired,
  completeTaskThunk: PropTypes.func.isRequired,
  editTaskThunk: PropTypes.func.isRequired,
  deleteTaskThunk: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      isCompleted: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  )
};

export default connect(MainPage);
