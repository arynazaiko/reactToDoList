import React from "react";

import connect from "../connect";

import './styles.scss';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        name: "",
        description: "",
      }
    };
  }

  handleChangeName = (e) => {
    const { params } = this.state;

    this.setState({
      params: { ...params, name: e.target.value }
    });
  };


  handleChangeDescription = (e) => {
    const { params } = this.state;

    this.setState({
      params: { ...params, description: e.target.value }
    });
  };

  handleSubmit = (e) => {
    const { params } = this.state;
    const { createTaskThunk } = this.props;

    e.preventDefault();
    createTaskThunk(params);
  };

  render() {
    const { name, description } = this.state;

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
        <button type="submit" className="btn btn-info btn-block mb-2" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default connect(Form);
