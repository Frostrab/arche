import React from 'react'
import { Select } from 'antd'
import axios from 'axios'

const { Option } = Select
export default class AccountStatus extends React.PureComponent {
  state = {
    Type: [],
    text: 'Select Type',
  }
  componentDidMount() {
    axios
      .get(
        `http://ams.leaderplanet.co.th/archemyApi/api/Account/GetListSignContract`
      )
      .then(res => this.setState({ Type: res.data }))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <React.Fragment>
        <Select
          value={this.props.accountId}
          style={{ width: 200 }}
          onChange={value => this.props.handleChange(value)}
        >
          {this.state.Type.map(items => (
            <Option value={items.id}>{items.accountName}</Option>
          ))}
        </Select>
      </React.Fragment>
    )
  }
}
