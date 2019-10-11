import React from 'react'
import styled from 'styled-components'
import DetailAccounts from './DetailAccounts'
import NewAccounts from './NewAccounts'
import { DatePicker } from 'antd'
import { Table, Icon, Menu, Dropdown, Button, Modal, Input } from 'antd'
import axios from 'axios'
import EditableTable from './TableEdit'
import TestTable from './TableForTest'
const Header = styled.div`
    font-size: 30px
    color: black
    display: flex
`

const { MonthPicker, RangePicker, WeekPicker } = DatePicker
export default class Accounts extends React.PureComponent {
  state = {
    mediaSize: '',
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
    data: [],
    rowSelect: {},
    clickNew: '',
    modalContact: false,
    modalContract: false,
    modalPlan: false,

    contactName: '',
    position: '',
    contactNumber: '',
    whoesaleSupplier: '',
    dataInItem: [],

    MainContract: '',
    Contract1: '',
    StartDate: '',
    EndDate: '',
  }
  onStartDateChange = (date, dateString) => {
    this.setState({ StartDate: date })
    console.log(date, dateString)
  }
  onEndDateChange = (date, dateString) => {
    this.setState({ EndDate: date })
    console.log(date, dateString)
  }
  handleContactNameChange = e => {
    e.preventDefault()
    this.setState({ contactName: e.target.value })
  }
  handlePositionChange = e => {
    e.preventDefault()
    this.setState({ position: e.target.value })
  }
  handleContactNumberChange = e => {
    e.preventDefault()
    this.setState({ contactName: e.target.value })
  }
  handleWhoesaleSupplierChange = e => {
    e.preventDefault()
    this.setState({ whoesaleSupplier: e.target.value })
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
  handleChangeStatus(value) {
    this.setState({ status: value })
    console.log(value)
  }
  handleChangeStatus(value) {
    this.setState({ status: value })
    console.log(value)
  }
  handleEditClick(row) {
    this.setState({ pageStatus: 'edit' })
    this.setState({ rowSelect: row })
  }
  handleModal = () => {
    this.setState({ modalContract: false })
  }
  componentDidMount() {
    if (window.innerWidth > 1024) {
      this.setState({ mediaSize: 'pc' })
    } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      this.setState({ mediaSize: 'tablat' })
    } else if (window.innerWidth >= 480 && window.innerWidth <= 768) {
      this.setState({ mediaSize: 'medium' })
    } else {
      this.setState({ mediaSize: 'mobile' })
    }
    axios
      .get('http://ams.leaderplanet.co.th/archemyApi/api/Account/GetList')
      .then(res => this.setState({ data: res.data }))
      .catch(e => alert(e.response))
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
    const { mediaSize, data, columns, pageStatus, rowSelect } = this.state
    return (
      <React.Fragment>
        <Header>
          {pageStatus != 'view' ? (
            <div>
              <Icon
                type="left-square"
                style={{ cursor: 'pointer', marginRight: 10 }}
                onClick={() => this.setState({ pageStatus: 'view' })}
              />
            </div>
          ) : null}

          <div>
            {pageStatus === 'view' ? (
              <label>Accounts {pageStatus}</label>
            ) : pageStatus === 'create' ? (
              <div style={{ display: 'flex' }}>
                <label>New Accounts</label>
              </div>
            ) : (
              <div style={{ display: 'flex' }}>
                <label>
                  Accounts {rowSelect.accountName}
                  <Dropdown overlay={menu} trigger={['click']}>
                    <span
                      style={{
                        marginLeft: 5,
                        border: '1px solid black',
                        height: 40,
                      }}
                    >
                      <Icon
                        type="down"
                        style={{ fontSize: 30, cursor: 'pointer' }}
                      />
                    </span>
                  </Dropdown>
                </label>
              </div>
            )}
          </div>
        </Header>
        {pageStatus === 'view' ? (
          <div style={{ marginBottom: 10 }}>
            <Button onClick={() => this.setState({ pageStatus: 'create' })}>
              New Accounts
            </Button>
          </div>
        ) : null}

        {pageStatus === 'view' ? (
          <div
            style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5 }}
          >
            <Table dataSource={data} columns={columns} />{' '}
          </div>
        ) : pageStatus === 'edit' ? (
          <DetailAccounts mediaSize={mediaSize} selected={rowSelect} />
        ) : (
          <NewAccounts mediaSize={mediaSize} />
        )}

        <Modal
          title="New Contact"
          visible={this.state.modalContact}
          onOk={this.handleContactOk}
          onCancel={this.handleContactCancel}
        >
          <div>
            <div style={{ display: 'flex', margin: 5 }}>
              <div style={{ width: '40%', textAlign: 'right' }}>
                ContactName:
              </div>
              <div style={{ widht: '60%' }}>
                <Input
                  value={this.state.contactName}
                  onChange={e => this.handleContactNameChange(e)}
                />
              </div>
            </div>
            <div style={{ display: 'flex', margin: 5 }}>
              <div style={{ width: '40%', textAlign: 'right' }}>Position:</div>
              <div style={{ widht: '60%' }}>
                <Input
                  value={this.state.position}
                  onChange={e => this.handlePositionChange(e)}
                />
              </div>
            </div>
            <div style={{ display: 'flex', margin: 5 }}>
              <div style={{ width: '40%', textAlign: 'right' }}>
                ContactNumber:
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
                WhoesaleSupplier:
              </div>
              <div style={{ widht: '60%' }}>
                <Input
                  value={this.state.whoesaleSupplier}
                  onChange={e => this.handleWhoesaleSupplierChange(e)}
                />
              </div>
            </div>
          </div>
        </Modal>
        <EditableTable
          modalContract={this.state.modalContract}
          handleModal={this.handleModal}
          selected={rowSelect}
        />
        <Modal
          title="New Plan"
          visible={this.state.modalPlan}
          onOk={this.handlePlnnOk}
          onCancel={this.handlePlanCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </React.Fragment>
    )
  }
}
