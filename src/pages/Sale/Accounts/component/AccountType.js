import React from 'react';
import {Select} from 'antd';
import axios from 'axios';
const {Option} = Select;
export default class AccountTypeSelect extends React.PureComponent {
  state = {
    Type: [],
    text: 'Select Type',
  };
  componentDidMount () {
    axios
      .get ('http://ams.leaderplanet.co.th/archemyApi/api/AccountType/GetList')
      .then (res => this.setState ({Type: res.data}))
      .catch (err => console.log (err));
  }
  render () {
    return (
      <React.Fragment>
        <Select
          value={this.props.typeId}
          style={{width: 120}}
          onChange={value => this.props.handleChange (value)}
        >
          {this.state.Type.map (items => (
            <Option value={items.id}>{items.typeName}</Option>
          ))}
        </Select>
      </React.Fragment>
    );
  }
}
