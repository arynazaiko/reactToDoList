import React from "react";
import classnames from 'classnames';

import connect from "../../connect";
import './styles.scss';

class ListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        isCompleted: false,
      }
    };
  }

  handleClick = (e) => {
    const { params } = this.state;

    e.preventDefault();
    this.setState({
      params: { ...params, isCompleted: true },
    });
  }

  render() {
    const { data } = this.props;
    const { params } = this.state;

    const classNames = classnames('list-group-item item-container', {
      ["list-group-item-dark"]: params.isCompleted,
    });

    return (
      <li className={classNames}>
        <button type="submit" className="btn btn-danger btn-sm" onClick={this.handleClick}>Done</button>
        <div className="task-container">
          <h5>
            {data.name}
          </h5>
          <div className="text-muted">
            {data.description}
          </div>
        </div>
      </li>
    );
  }
}

export default connect(ListItem);
