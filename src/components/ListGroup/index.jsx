import React from "react";

import ListItem from "./ListItem";

import "./styles.scss";

const ListGroup = ({ tasks, onComplete }) => {
  return (
    <ul className="list-group list-group-flush list-container">
      {tasks.map(task => {
        return <ListItem task={task} key={task.id} onComplete={onComplete} />;
      })}
    </ul>
  );
};

export default ListGroup;
