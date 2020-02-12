import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./styles.scss";

const ListItem = ({ onComplete, onEdit, onDelete, task }) => {
  const handleComplete = () => {
    onComplete(task.id);
  };

  const handleEdit = () => {
    onEdit(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const classNames = classnames("task-container", {
    ["list-group-item-done"]: task.isCompleted
  });

  return (
    <li className="list-group-item">
      <button type="button" className="btn" onClick={handleComplete}>
        <i className="fas fa-check"></i>
      </button>
      <div className={classNames}>
        <div className="task-info">
          <span className="task-name">{task.name}</span>
          <div>{task.description}</div>
        </div>
        <div className="btn-group">
          <button type="button" onClick={handleEdit}>
            <i className="far fa-edit"></i>
          </button>
          <button type="button" onClick={handleDelete}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  onComplete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
};

export default ListItem;
