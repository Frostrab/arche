import React from 'react';
import {Select} from 'antd';

const {Option} = Select;
export default class AccountStatus extends React.PureComponent {
  state = {
    Type: [],
    text: 'Select Type',
  };
  componentDidMount () {
    this.setState ({
      Type: [
        {
          valueKey: 'UnActive',
          valueText: 'UnActive',
        },
        {
          valueKey: 'Active',
          valueText: 'Active',
        },
      ],
    });
  }
  render () {
    return (
      <React.Fragment>
        <Select
          value={this.props.status}
          style={{width: 200}}
          onChange={value => this.props.handleChange (value)}
        >
          {this.state.Type.map (items => (
            <Option value={items.valueKey}>{items.valueText}</Option>
          ))}
        </Select>
      </React.Fragment>
    );
  }
}
