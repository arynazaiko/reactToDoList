import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ModalComponent from "../CommonModal";

import "./styles.scss";

const EditTaskModal = ({ onSubmit, onClose, editedTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const params = {
    name,
    description
  };

  useEffect(() => {
    if (editedTask) {
      setName(editedTask.name);
      setDescription(editedTask.description);
    }
  }, [editedTask]);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...params, id: editedTask.id });
    onClose();

    setName("");
    setDescription("");
  };

  const createTaskForm = () => {
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
            onChange={e => setName(e.target.value)}
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

EditTaskModal.propTypes = {
  editedTask: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

EditTaskModal.defaultProps = {
  editedTask: null
};

export default EditTaskModal;
