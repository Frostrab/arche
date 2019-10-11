import React from 'react';
import {Select} from 'antd';
import axios from 'axios';

const {Option} = Select;
export default class AccountStatus extends React.PureComponent {
  state = {
    Type: [],
    text: 'Select Type',
  };

  render () {
    return (
      <React.Fragment>
        {this.props.data.map (item => {
          JSON.stringify (item);
        })}
      </React.Fragment>
    );
  }
}
