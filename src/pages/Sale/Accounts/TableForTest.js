import React from 'react'
import { Table } from 'antd'
export default class TableForTest extends React.PureComponent {
  state = {
    column: [
      {
        title: 'Product Name',
        dataIndex: 'productName',
        width: '30%',
        editable: true,
      },
      {
        title: 'Contract Price',
        dataIndex: 'contractPrince',
        editable: true,
      },
    ],
    data: this.props.data,
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      //   this.fetchData (this.props.userID);
      this.setState({ data: [...this.state.data, prevProps.data] })
      console.log(prevProps.data)
    }
  }
  render() {
    console.log(this.state.data)
    return <Table dataSource={this.state.data} columns={this.state.column} />
  }
}
