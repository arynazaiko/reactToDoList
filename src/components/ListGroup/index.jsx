import React from "react";

import ListItem from "./ListItem";

import "./styles.scss";

const ListGroup = ({ tasks, onComplete, onEdit }) => {
  return (
    <ul className="list-group">
      {tasks.map(task => {
        return <ListItem task={task} key={task.id} onComplete={onComplete} onEdit={onEdit} />;
      })}
    </ul>
  );
};

export default ListGroup;
