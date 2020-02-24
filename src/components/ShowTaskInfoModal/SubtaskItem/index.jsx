import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const SubtaskItem = ({ subtask, onDelete }) => {
  const handleDelete = () => {
    onDelete(subtask.id);
  };

  return (
    <li className="subtask-item">
      {subtask.name}
      <button type="button" className="delete-btn" onClick={handleDelete}>
        <i className="far fa-trash-alt"></i>
      </button>
    </li>
  );
};

SubtaskItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  subtasks: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    taskId: PropTypes.number.isRequired
  })
};

SubtaskItem.defaultProps = {
  subtasks: null
};

export default SubtaskItem;
