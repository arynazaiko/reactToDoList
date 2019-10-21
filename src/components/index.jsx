import React from "react";

import Form from './Form';
import ListGroup from './ListGroup';
import connect from './connect';

class MainPage extends React.PureComponent {
  render() {
    return (
     <div className='container'>
      <Form />
      <ListGroup />
     </div>
    );
  }
}

export default connect(MainPage);
