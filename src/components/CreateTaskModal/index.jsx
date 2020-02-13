import React from "react";
import PropTypes from "prop-types";

import ModalComponent from "../CommonModal";

import "./styles.scss";

class CreateTaskModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        name: "",
        description: ""
      }
    };
  }

  handleChangeName = e => {
    const { params } = this.state;

    this.setState({
      params: { ...params, name: e.target.value }
    });
  };

  handleChangeDescription = e => {
    const { params } = this.state;

    this.setState({
      params: { ...params, description: e.target.value }
    });
  };

  handleSubmit = e => {
    const { params } = this.state;
    const { onSubmit, onClose } = this.props;

    e.preventDefault();
    onSubmit(params);
    onClose();

    this.setState({
      params: {
        name: "",
        description: ""
      }
    });
  };

  createTaskForm = () => {
    const { name, description } = this.state.params;
    const { onClose } = this.props;

    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Task name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Task name"
            value={name}
            onChange={this.handleChangeName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Task description"
            value={description}
            onChange={this.handleChangeDescription}
          />
        </div>
        <div className="buttons-container">
          <button
            type="submit"
            className="submit-btn"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <button type="button" className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    );
  };

  render() {
    return <ModalComponent body={this.createTaskForm()} />;
  }
}

CreateTaskModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default CreateTaskModal;
