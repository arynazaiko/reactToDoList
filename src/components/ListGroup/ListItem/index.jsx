import React from "react";
import classnames from "classnames";

import "./styles.scss";

const ListItem = ({ onComplete, onEdit, task }) => {
  const handleComplete = () => {
    onComplete(task.id);
  };

  const handleEdit = () => {
    onEdit(task.id);
  };

  const classNames = classnames("task-container", {
    ["list-group-item-done"]: task.isCompleted
  });

  return (
    <li className="list-group-item">
      <button
        type="button"
        className="btn"
        onClick={handleComplete}
      >
        Done
      </button>
      <div className={classNames}>
        <span className="task-name">{task.name}</span>
        <div>{task.description}</div>
        <button type="button" onClick={handleEdit}>edit</button>
      </div>
    </li>
  );
};

export default ListItem;
