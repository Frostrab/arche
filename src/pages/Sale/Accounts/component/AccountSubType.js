import React from 'react';
import {Select} from 'antd';

const {Option} = Select;
export default class AccountTypeSelect extends React.PureComponent {
  state = {
    Type: [],
    text: 'Select Type',
  };
  componentDidMount () {
    this.setState ({
      Type: [
        {
          id: 1,
          subTypeName: 'Low Energy',
        },
      ],
    });
  }
  render () {
    return (
      <React.Fragment>
        <Select
          value={this.props.subTypeId}
          style={{width: 120}}
          onChange={value => this.props.handleChange (value)}
        >
          {this.state.Type.map (items => (
            <Option value={items.id}>{items.subTypeName}</Option>
          ))}
        </Select>
      </React.Fragment>
    );
  }
}
