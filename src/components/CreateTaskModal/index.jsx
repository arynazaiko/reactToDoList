import React, { useState } from "react";
import PropTypes from "prop-types";

import ModalComponent from "../CommonModal";

import "./styles.scss";

const CreateTaskModal = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const params = {
    name,
    description
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...params });
    onClose();

    setName("");
    setDescription("");
  };

  const createTaskForm = () => {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Task title</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter title"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Task description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="buttons-container">
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button type="button" className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    );
  };

  return <ModalComponent body={createTaskForm()} />;
};

CreateTaskModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default CreateTaskModal;
