import React from 'react';
import {Select} from 'antd';
import axios from 'axios';
const {Option} = Select;
export default class ProductType extends React.PureComponent {
  state = {
    Type: [],
    text: 'Select Type',
  };
  componentDidMount () {
    axios
      .get ('http://ams.leaderplanet.co.th/archemyApi/api/ProductType/GetList')
      .then (res => this.setState ({Type: res.data}))
      .catch (err => console.log (err.response));
  }
  render () {
    return (
      <React.Fragment>
        <Select
          value={this.props.productTypeId}
          style={{width: 200}}
          onChange={value => this.props.handleChangeType (value)}
        >
          {this.state.Type.map (items => (
            <Option value={items.id}>
              {items.productTypeName}
            </Option>
          ))}
        </Select>
      </React.Fragment>
    );
  }
}
