import React, { useState } from "react";
import PropTypes from "prop-types";

import ListGroup from "./ListGroup";
import CreateTaskModal from "./CreateTaskModal";
import EditTaskModal from "./EditTaskModal";
import ShowTaskInfoModal from "./ShowTaskInfoModal";
import connect from "./connect";

import "./styles.scss";

const MainPage = ({
  tasks,
  subtasks,
  createTaskThunk,
  completeTaskThunk,
  editTaskThunk,
  deleteTaskThunk,
  createSubTaskThunk,
  deleteSubTaskThunk
}) => {
  const [isOpenCreateTaskModal, changeCreateTaskModalVisibility] = useState(
    false
  );
  const [editTaskId, setEditTaskId] = useState(null);
  const [shownTaskId, setShownTaskId] = useState(null);

  const handleOpen = () => {
    changeCreateTaskModalVisibility(true);
  };

  const handleClose = () => {
    changeCreateTaskModalVisibility(false);
  };

  const handleOpenEditModal = id => {
    setEditTaskId(id);
  };

  const handleCloseEditModal = () => {
    setEditTaskId(null);
  };

  const getEditedTask = () => {
    return tasks.find(task => task.id === editTaskId);
  };

  const handleOpenShowTaskModal = id => {
    setShownTaskId(id);
  };

  const handleCloseShowTaskModal = () => {
    setShownTaskId(null);
  };

  const getShownTask = () => {
    return tasks.find(task => task.id === shownTaskId);
  };

  const getSubtasks = () => {
    return subtasks.filter(subtask => subtask.taskId === shownTaskId);
  };

  return (
    <div className="container">
      <button type="button" className="btn-add-task" onClick={handleOpen}>
        <i className="fas fa-plus"></i>
      </button>
      <ListGroup
        tasks={tasks}
        onComplete={completeTaskThunk}
        onEdit={handleOpenEditModal}
        onDelete={deleteTaskThunk}
        onOpenTaskModal={handleOpenShowTaskModal}
      />

      {isOpenCreateTaskModal ? (
        <CreateTaskModal onSubmit={createTaskThunk} onClose={handleClose} />
      ) : (
        ""
      )}

      {editTaskId ? (
        <EditTaskModal
          onSubmit={editTaskThunk}
          onClose={handleCloseEditModal}
          editedTask={getEditedTask()}
        />
      ) : (
        ""
      )}

      {shownTaskId ? (
        <ShowTaskInfoModal
          shownTask={getShownTask()}
          onClose={handleCloseShowTaskModal}
          onSubmit={createSubTaskThunk}
          subtasks={getSubtasks()}
          onDelete={deleteSubTaskThunk}
        />
      ) : (
        ""
      )}
    </div>
  );
};

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
  ),
  createSubTaskThunk: PropTypes.func.isRequired,
  deleteSubTaskThunk: PropTypes.func.isRequired,
  subtasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      taskId: PropTypes.number.isRequired
    }).isRequired
  )
};

export default connect(MainPage);
