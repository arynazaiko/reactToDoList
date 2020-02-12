import React from "react";
import PropTypes from "prop-types";

import Modal from "./Modal";
import ListGroup from "./ListGroup";
import connect from "./connect";

import "./styles.scss";

class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpenCreateTaskModal: false,
      editTaskId: null
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

  render() {
    const { isOpenCreateTaskModal, editTaskId } = this.state;
    const {
      createTaskThunk,
      completeTaskThunk,
      editTaskThunk,
      deleteTaskThunk,
      tasks
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
        />

        {isOpenCreateTaskModal ? (
          <Modal onSubmit={createTaskThunk} onClose={this.handleClose} />
        ) : ''}

        {editTaskId ? (
          <Modal
            onSubmit={editTaskThunk}
            onClose={this.handleCloseEditModal}
            editedTask={this.getEditedTask()}
          />
        ) : ''}
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
    }).isRequired,
  )
}

export default connect(MainPage);
