import React from "react";

import Modal from './Modal';
import ListGroup from './ListGroup';
import connect from './connect';

import './styles.scss';

class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  handleOpen = () => {
    this.setState({
      isOpen: true,
    })
  }

  handleClose = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const { isOpen } = this.state;
    const { createTaskThunk, completeTaskThunk, tasks } = this.props;

    return (
     <div className="container">
        <button type="button" className="btn-add-task" onClick={this.handleOpen}>+</button>
        {/* <div className="divider"></div> */}
        <Modal onSubmit={createTaskThunk} isModalOpen={isOpen} onClose={this.handleClose} />
        <ListGroup tasks={tasks} onComplete={completeTaskThunk} />
     </div>
    );
  }
}

export default connect(MainPage);
