import React from 'react'
import { Table, Input, Select, Button, Menu, Modal, Dropdown, Icon } from 'antd'
import axios from 'axios'
import TableList from './component/TableList'
import DetailAccounts from '../Accounts/DetailAccounts'
import EditableTable from '../Accounts/TableEdit'
const { Option } = Select

export default class AccountSearch extends React.PureComponent {
  state = {
    ProductTypeID: 0,
    ProductTypeList: [],
    ProductGetList: [],
    ProductID: 0,
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
        title: 'TypeName',
        dataIndex: 'typeName',
        key: 'typeName',
      },
      {
        title: 'SubTypeName',
        dataIndex: 'subTypeName',
        key: 'subTypeName',
      },
      {
        title: 'Area',
        dataIndex: 'areaName',
        key: 'areaName',
      },
      {
        title: 'Purchase Amount',
        dataIndex: 'purchaseAmount',
        key: 'areaName',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: '',
        dataIndex: 'address',
        key: 'address',
        width: '10%',
        render: (text, record) => (
          <Button onClick={() => this.handleEditClick(record)}>edit</Button>
        ),
      },
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
        `http://ams.leaderplanet.co.th/archemyApi/api/Account/GetListSearch?productTypeId=${this.state.ProductTypeID}&productId=${this.state.ProductID}`
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
  }

  render() {
    const menu = (
      <Menu onClick={this.handleClick} style={{ width: 300 }}>
        {/* <Menu.Item key="1">
          Add Contact
        </Menu.Item> */}
        <Menu.Item key="2">Add Contract</Menu.Item>
        {/* <Menu.Divider /> */}
        {/* <Menu.Item key="3">Add Plan</Menu.Item> */}
      </Menu>
    )
    return (
      <React.Fragment>
        {this.state.pageStatus === 'view' ? (
          <span>
            <div>
              <label style={{ fontSize: '30px', color: 'black' }}>
                Total Amount
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
                <Button onClick={this.handleSubmit}>Click</Button>
              </div>
            </div>
            <div style={{ backgroundColor: '#fff' }}>
              <TableList
                data={this.state.dataList}
                columns={this.state.columns}
              />
            </div>
          </span>
        ) : (
          <span>
            <label style={{ fontSize: '30px' }}>
              Accounts {this.state.rowSelect.accountName}
            </label>
            <Dropdown overlay={menu} trigger={['click']}>
              <span
                style={{
                  marginLeft: 5,
                  border: '1px solid black',
                  height: 40,
                }}
              >
                <Icon type="down" style={{ fontSize: 30, cursor: 'pointer' }} />
              </span>
            </Dropdown>
            <DetailAccounts selected={this.state.rowSelect} />
          </span>
        )}
        <Modal
          title="New Contract"
          visible={this.state.modalContract}
          width="1000px"
          onCancel={this.handleContactCancel}
          footer={[
            <Button
              type="danger"
              key="back"
              onClick={this.handleContractCancel}
            >
              Cancle
            </Button>,
            <Button
              type="primary"
              // loading={loading}
              onClick={this.handleContractOk}
            >
              Save
            </Button>,
            <Button
              key="submit"
              type="primary"
              // loading={loading}
              onClick={this.handleContractOk}
            >
              Submit
            </Button>,
          ]}
        >
          {
            <div>
              <div style={{ display: 'flex', margin: 5 }}>
                <div style={{ width: '40%', textAlign: 'right' }}>
                  AccountName:
                </div>
                <div style={{ widht: '60%' }}>
                  <Input
                    value={this.state.contactName}
                    onChange={e => this.handleContactNameChange(e)}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', margin: 5 }}>
                <div style={{ width: '40%', textAlign: 'right' }}>
                  MainContract:
                </div>
                <div style={{ widht: '60%' }}>
                  <Input
                    value={this.state.position}
                    onChange={e => this.handlePositionChange(e)}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', margin: 5 }}>
                <div style={{ width: '40%', textAlign: 'right' }}>
                  Contract1:
                </div>
                <div style={{ widht: '60%' }}>
                  <Input
                    value={this.state.contactNumber}
                    onChange={e => this.handleContactNumberChange(e)}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', margin: 5 }}>
                <div style={{ width: '40%', textAlign: 'right' }}>
                  StartDateString:
                </div>
                <div style={{ widht: '60%' }}>
                  <Input
                    value={this.state.whoesaleSupplier}
                    onChange={e => this.handleWhoesaleSupplierChange(e)}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', margin: 5 }}>
                <div style={{ width: '40%', textAlign: 'right' }}>
                  EndDateString:
                </div>
                <div style={{ widht: '60%' }}>
                  <Input
                    value={this.state.whoesaleSupplier}
                    onChange={e => this.handleWhoesaleSupplierChange(e)}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', margin: 5 }}>
                <div style={{ width: '40%', textAlign: 'right' }}>Status:</div>
                <div style={{ widht: '60%' }}>
                  <Input
                    value={this.state.whoesaleSupplier}
                    onChange={e => this.handleWhoesaleSupplierChange(e)}
                  />
                </div>
              </div>

              {/* <Table columns={this.state.columns} dataSource={this.state.dataInItem}></Table> */}
              {/* <TestTable data={this.state.dataInItem} /> */}
              <EditableTable />
            </div>
          }
        </Modal>
      </React.Fragment>
    )
  }
}
