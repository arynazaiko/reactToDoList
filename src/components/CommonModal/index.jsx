import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const ModalComponent = ({ body }) => {
  return <div className="modal-container">{body}</div>;
};

ModalComponent.propTypes = {
  body: PropTypes.object.isRequired,
};

export default ModalComponent;
