import React from 'react'
import { Icon, Table, Button } from 'antd'
import styled from 'styled-components'
import axios from 'axios'
import TableForContact from './TableForContract'
const Row = styled.div`
    width: 100%
    display: flex
`
const LabelLeft = styled.div`
    width: 30%
    text-align: right
    margin: 3px
`
const InputRight = styled.div`
    width: 70%
    margin: 3px
`
const Header = styled.div`
    height: 40px
    border-bottom: 1px solid black
    display: flex
    justify-content: space-between
`
const Card = styled.div`
    border: 1px solid black
    background-color: #fff
    margin-bottom: 5px
    border-radius: 6px
    padding: 6px
    height: 350px
    overflow-y: auto
`
export default class Contract extends React.PureComponent {
  state = {
    statusEditCard1: false,
    value1: 'value1',
    accountName: '',
    phoneNo: '',
    website: '',
    typeId: 0,
    typeName: '',
    subTypeId: 0,
    subTypeName: '',
    areaId: 0,
    areaName: '',
    status: '',
    loading: false,
    ClickView: '',
    recordSelect: {},
    modalContract: false,

    contractList: [],
    columns: [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'mainContract',
        dataIndex: 'mainContract',
        key: 'mainContract',
      },
      {
        title: 'contract1',
        dataIndex: 'contract1',
        key: 'contract1',
      },
      {
        title: 'status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: '',
        key: 'tags',
        dataIndex: 'tags',
        width: '30%',
        render: (text, record) => (
          <span>
            <Button onClick={() => this.handleEdit(record)}>Edit</Button>
            {/* <Button type="danger" onClick={() => this.handleDelete (record)}>Delete</Button> */}
          </span>
        ),
      },
    ],
  }
  async handleView(record) {
    await this.setState({ recordSelect: record })
    await this.setState({ ClickView: 'view' })
    await this.setState({ modalContract: true })
  }
  async handleEdit(record) {
    await this.setState({ recordSelect: record })
    await this.setState({ ClickView: 'edit' })
    await this.setState({ modalContract: true })
  }
  handleDelete(record) {
    this.setState({ modalContract: true })
  }
  componentDidMount() {
    this.setState({
      id: this.props.dataDetail.id,
      accountName: this.props.dataDetail.accountName,
      phoneNo: this.props.dataDetail.phoneNo,
      website: this.props.dataDetail.website,
      typeId: this.props.dataDetail.typeId,
      typeName: this.props.dataDetail.typeName,
      subTypeId: this.props.dataDetail.subTypeId,
      areaName: this.props.dataDetail.areaName,
      status: this.props.dataDetail.status,
    })
    axios
      .get(
        `http://ams.leaderplanet.co.th/archemyApi/api/Contract/GetList?accountId=${this.props.dataDetail.id}`
      )
      .then(res => this.setState({ contractList: res.data }))
      .catch(err => console.log(err))
  }
  //todo
  // set state = value in service
  handleTableReload = () => {
    this.setState({ loading: true })
    axios
      .get(
        `http://ams.leaderplanet.co.th/archemyApi/api/Contract/GetList?accountId=${this.props.dataDetail.id}`
      )
      .then(res => this.setState({ contractList: res.data, loading: false }))
      .catch(err => console.log(err))
  }
  handleModal = () => {
    this.setState({ modalContract: false })
  }
  render() {
    const handleSubmitCard1 = async () => {
      await this.setState({ statusEditCard1: false })
    }
    const { statusEditCard1, value1 } = this.state
    return (
      <React.Fragment>
        <Card>
          <Header>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 20,
              }}
            >
              Contract
            </label>
            <div>
              <Icon
                type="reload"
                style={{ fontSize: '20px', marginRight: 5, cursor: 'pointer' }}
                onClick={() => this.handleTableReload()}
              />
            </div>
          </Header>
          <div body style={{ padding: 5 }}>
            <Table
              columns={this.state.columns}
              dataSource={this.state.contractList}
              loading={this.state.loading}
            />
            {statusEditCard1 === true ? (
              <div footer>
                <button
                  style={{ cursor: 'pointer' }}
                  onClick={handleSubmitCard1}
                >
                  submit
                </button>
              </div>
            ) : null}
          </div>
        </Card>
        {this.state.ClickView === 'view' ? null : (
          <TableForContact
            modalContract={this.state.modalContract}
            handleModal={this.handleModal}
            recordSelect={this.state.recordSelect}
          />
        )}
      </React.Fragment>
    )
  }
}
