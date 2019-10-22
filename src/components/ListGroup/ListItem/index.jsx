import React from "react";
import classnames from 'classnames';

import connect from "../../connect";
import './styles.scss';

class ListItem extends React.PureComponent {
  handleComplete = (taskId) => {
    const { completeTaskThunk } = this.props;

    completeTaskThunk(taskId);
  }

  render() {
    const { task } = this.props;

    const classNames = classnames('list-group-item item-container', {
      ["list-group-item-dark"]: task.isCompleted,
    });

    return (
      <li className={classNames}>
        <button type="button" className="btn btn-danger btn-sm" onClick={() => this.handleComplete(task.id)}>Done</button>
        <div className="task-container">
          <h5>
            {task.name}
          </h5>
          <div className="text-muted">
            {task.description}
          </div>
        </div>
      </li>
    );
  }
}

export default connect(ListItem);
