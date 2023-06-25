
import React, { useState } from "react";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="parent">
        <Child
          showModal={this.state.showModal}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

const Child = ({ showModal, handleButtonClick }) => {
  return (
    <div>
      <button onClick={handleButtonClick}>Show Modal</button>
      {showModal && <Modal />}
    </div>
  );
};

const Modal = () => {
  return <div className="modal">Modal Content</div>;
};

export default Parent;

