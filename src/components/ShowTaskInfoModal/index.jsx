import React from "react";
import PropTypes from "prop-types";

import ModalComponent from "../CommonModal";

import "./styles.scss";

class ShowTaskInfoModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        name: "",
        taskId: props.shownTask.id
      }
    };
  }

  handleChangeName = e => {
    const { params } = this.state;

    this.setState({
      params: { ...params, name: e.target.value }
    });
  };

  handleSubmit = e => {
    const { params } = this.state;
    const { onSubmit } = this.props;

    e.preventDefault();
    onSubmit(params);

    this.setState({
      params: {
        ...params,
        name: ""
      }
    });
  };

  shownTaskInfo = () => {
    const { name } = this.state.params;
    const { shownTask, onClose, subtasks } = this.props;

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
            return <li className="subtask-item" key={subtask.id}>{subtask.name}</li>;
          })}
        </ul>
        <div className="add-subtask-container">
          <input
            type="text"
            placeholder="Subtask"
            value={name}
            onChange={this.handleChangeName}
          />
          <button
            type="submit"
            className="submit-btn"
            onClick={this.handleSubmit}
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

  render() {
    return <ModalComponent body={this.shownTaskInfo()} />;
  }
}

ShowTaskInfoModal.propTypes = {
  shownTask: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  subtasks: PropTypes.array.isRequired,
};

export default ShowTaskInfoModal;
