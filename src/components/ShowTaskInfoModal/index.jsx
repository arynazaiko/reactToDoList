import React, { useState } from "react";
import PropTypes from "prop-types";

import ModalComponent from "../CommonModal";
import SubtaskItem from "./SubtaskItem";

import "./styles.scss";

const ShowTaskInfoModal = ({ shownTask, onClose, onSubmit, subtasks, onDelete }) => {
  const [subtaskName, setSubtaskName] = useState("");

  const handleSubtaskSubmit = e => {
    e.preventDefault();
    onSubmit({ name: subtaskName, taskId: shownTask.id });

    setSubtaskName('');
  };

  const shownTaskInfo = () => {
    return (
      <div className="shown-task-container">
        <div className="task-info-container">
          <div className="title">Name:</div>
          <div>{shownTask.name}</div>
        </div>
        <div className="task-info-container">
          <div className="title">Description:</div>
          <div>{shownTask.description}</div>
        </div>
        <ul className="subtasks-list">
          {subtasks.map(subtask => {
            return (
              <SubtaskItem
                subtask={subtask}
                onDelete={onDelete}
                key={subtask.id}
              />
            );
          })}
        </ul>
        <div className="add-subtask-container">
          <input
            type="text"
            placeholder="Subtask"
            value={subtaskName}
            onChange={e => setSubtaskName(e.target.value)}
          />
          <button
            type="submit"
            className="submit-btn"
            onClick={handleSubtaskSubmit}
          >
            Add subtask
          </button>
        </div>
        <button type="button" className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    );
  };

  return <ModalComponent body={shownTaskInfo()} />;
}

ShowTaskInfoModal.propTypes = {
  shownTask: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  subtasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      taskId: PropTypes.number.isRequired
    }).isRequired
  )
};

export default ShowTaskInfoModal;
