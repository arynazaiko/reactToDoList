import React from "react";
import classnames from "classnames";

import "./styles.scss";

const ListItem = ({ onComplete, task }) => {
  const handleComplete = taskId => {
    onComplete(taskId);
  };

  const classNames = classnames("list-group-item item-container", {
    ["list-group-item-dark"]: task.isCompleted
  });

  return (
    <li className={classNames}>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => handleComplete(task.id)}
      >
        Done
      </button>
      <div className="task-container">
        <h5>{task.name}</h5>
        <div className="text-muted">{task.description}</div>
      </div>
    </li>
  );
};

export default ListItem;
