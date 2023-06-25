
import React, { useState } from 'react';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="parent">
        <h1>Parent Component</h1>
        {this.state.showModal && <h3>Modal Content</h3>}
        <Child handleClick={this.handleClick} />
      </div>
    );
  }
}

const Child = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={props.handleClick}>Show Modal</button>
    </div>
  );
};

export default Parent;
