import React from 'react';
import Modal from 'antd';
export default class AddContracte extends React.PureComponent {
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState ({
      visible: true,
    });
  };

  handleOk = e => {
    console.log (e);
    this.setState ({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log (e);
    this.setState ({
      visible: false,
    });
  };
  render () {
    return (
      <React.Fragment>
        <Modal
          title="AddContract"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </React.Fragment>
    );
  }
}
