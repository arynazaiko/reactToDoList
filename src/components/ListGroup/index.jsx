import React from 'react';

import connect from '../connect';

import ListItem from './ListItem';

class ListGroup extends React.PureComponent {
  render() {
    const { tasks } = this.props;

    return (
      <ul className='list-group list-group-flush'>
        {tasks.map((task) => {
          return <ListItem data={task} key={task.id} />
        })}
      </ul>
    );
  }
}

export default connect(ListGroup);