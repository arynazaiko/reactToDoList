import React from "react";
import PropTypes from "prop-types";

import ListItem from "./ListItem";

import "./styles.scss";

const ListGroup = ({ tasks, onComplete, onEdit, onDelete }) => {
  return (
    <ul className="list-group">
      {tasks.map(task => {
        return (
          <ListItem
            task={task}
            key={task.id}
            onComplete={onComplete}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

ListGroup.propTypes = {
  onComplete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      isCompleted: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  )
};

export default ListGroup;
