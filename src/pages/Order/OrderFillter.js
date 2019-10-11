import React from 'react'
import { Table, Input, Select, Button, Menu, Modal, Dropdown, Icon } from 'antd'
import axios from 'axios'
const { Option } = Select

export default class OrderFillter extends React.PureComponent {
  state = {
    ProductTypeID: 0,
    ProductTypeList: [],
    ProductGetList: [],
    AccountsList: [],
    ProductID: 0,
    AccountsID: 0,
    dataList: [],
    rowSelect: [],
    pageStatus: 'view',
    columns: [
      {
        title: 'AccountName',
        dataIndex: 'accountName',
        key: 'accountName',
      },
      {
        title: 'TotalAmount',
        dataIndex: 'totalAmount',
        key: 'totalAmount',
      },
      {
        title: 'Order Date',
        dataIndex: 'orderDate',
        key: 'orderDate',
        render: (text, record) =>
          text.split('T')[0].split('-')[2] +
          '/' +
          text.split('T')[0].split('-')[1] +
          '/' +
          text.split('T')[0].split('-')[0],
      },
      //   {
      //     title: 'Status',
      //     dataIndex: 'status',
      //     key: 'status',
      //   },
      //   {
      //     title: '',
      //     dataIndex: 'address',
      //     key: 'address',
      //     width: '10%',
      //     render: (text, record) => (
      //       <Button onClick={() => this.handleEditClick (record)}>edit</Button>
      //     ),
      //   },
    ],
  }
  handleEditClick = record => {
    this.setState({ pageStatus: 'edit', rowSelect: record })
  }
  handleChangeType = async value => {
    console.log(`selected ${value}`)
    await this.setState({ ProductTypeID: value })
  }
  handleChangeItem = async value => {
    console.log(`selected ${value}`)
    await this.setState({ ProductID: value })
  }
  handleChangeAccount = async value => {
    console.log(`selected ${value}`)
    await this.setState({ AccountsID: value })
  }
  handleContactOk = e => {
    console.log(e)
    this.setState({
      modalContact: false,
    })
  }
  handleContractOk = e => {
    console.log(e)
    this.setState({
      modalContract: false,
    })
  }
  handlePlnnOk = e => {
    console.log(e)
    this.setState({
      modalPlan: false,
    })
  }

  handleContactCancel = e => {
    console.log(e)
    this.setState({
      modalContact: false,
    })
  }
  handleContractCancel = e => {
    console.log(e)
    this.setState({
      modalContract: false,
    })
  }
  handlePlanCancel = e => {
    console.log(e)
    this.setState({
      modalPlan: false,
    })
  }
  handleClick = e => {
    this.setState({ clickNew: e.key })
    if (e.key === '1') {
      this.setState({ modalContact: true })
    } else if (e.key === '2') {
      this.setState({ modalContract: true })
    } else if (e.key === '3') {
      this.setState({ modalPlan: true })
    }
    console.log('click ', e)
  }
  handleSubmit = () => {
    axios
      .get(
        `http://ams.leaderplanet.co.th/archemyApi/api/Order/GetListSearch?accountId=${this.state.AccountsID}&productTypeId=${this.state.ProductTypeID}&productId=${this.state.ProductID}`
      )
      .then(res => this.setState({ dataList: res.data }))
      .catch(err => this.setState(console.log(err)))
  }
  componentDidMount() {
    axios
      .get(`http://ams.leaderplanet.co.th/archemyApi/api/ProductType/GetList`)
      .then(res => this.setState({ ProductTypeList: res.data }))
      .catch(err => console.log(err))
    axios
      .get(`http://ams.leaderplanet.co.th/archemyApi/api/Product/GetList`)
      .then(res => this.setState({ ProductGetList: res.data }))
      .catch(err => console.log(err))
    axios
      .get(`http://ams.leaderplanet.co.th/archemyApi/api/Account/GetList`)
      .then(res => this.setState({ AccountsList: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <label style={{ fontSize: '30px', color: 'black' }}>
            Order Fillter
          </label>
        </div>
        <div style={{ display: 'flex', marginBottom: 5 }}>
          <div>
            <label>Product Type :</label>
            <Select
              value={this.state.ProductTypeID}
              style={{ width: 200 }}
              onChange={this.handleChangeType}
            >
              <Option value={0}>เลือกประเภทสินค้า</Option>
              {this.state.ProductTypeList.map(items => (
                <Option value={items.id}>{items.productTypeName}</Option>
              ))}
            </Select>
          </div>
          <div>
            <label>Product :</label>
            <Select
              value={this.state.ProductID}
              style={{ width: 400 }}
              onChange={this.handleChangeItem}
            >
              <Option value={0}>เลือกสินค้า</Option>
              {this.state.ProductGetList.map(items => (
                <Option value={items.id}>{items.productName}</Option>
              ))}
            </Select>
          </div>
          <div>
            <label>Accounts :</label>
            <Select
              value={this.state.AccountsID}
              style={{ width: 300 }}
              onChange={this.handleChangeAccount}
            >
              <Option value={0}>เลือกผู้ซื้อ</Option>
              {this.state.AccountsList.map(items => (
                <Option value={items.id}>{items.accountName}</Option>
              ))}
            </Select>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={this.handleSubmit}>Search</Button>
        </div>
        <br />
        <div style={{ backgroundColor: '#fff' }}>
          <Table
            columns={this.state.columns}
            dataSource={this.state.dataList}
          />
        </div>
      </React.Fragment>
    )
  }
}
