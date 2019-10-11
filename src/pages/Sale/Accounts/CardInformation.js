import React from 'react'
import { Icon, Input, Button } from 'antd'
import styled from 'styled-components'
import AccountTypeSelect from './component/AccountType'
import AccountSubType from './component/AccountSubType'
import AreaSelect from './component/Area'
import AcccountStatus from './component/AccountStatus'
import axios from 'axios'
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
    height: 380px
    overflow-y: auto
`
export default class CardInformation extends React.PureComponent {
  state = {
    statusEditCard1: false,
    accountName: '',
    phoneNo: '',
    website: '',
    id: 0,
    typeId: 0,
    typeName: '',
    subTypeId: 0,
    subTypeName: '',
    areaId: 0,
    areaName: '',
    status: '',
  }
  handleChangeType(value) {
    this.setState({ typeId: value })
    console.log(value)
  }
  handleChangeSubType(value) {
    this.setState({ subTypeId: value })
    console.log(value)
  }
  handleChangeArea(value) {
    this.setState({ areaId: value })
    console.log(value)
  }
  handleChangeStatus(value) {
    this.setState({ status: value })
    console.log(value)
  }
  handleNameChange = e => {
    e.preventDefault()
    this.setState({ accountName: e.target.value })
    console.log(e.target.value)
  }
  handlePhoneChange = e => {
    e.preventDefault()
    this.setState({ phoneNo: e.target.value })
    console.log(e.target.value)
  }
  handleWebChange = e => {
    e.preventDefault()
    this.setState({ website: e.target.value })
    console.log(e.target.value)
  }
  componentDidMount() {
    this.setState({
      id: this.props.status === 'new' ? 0 : this.props.dataDetail.id,
      accountName:
        this.props.status === 'new' ? '' : this.props.dataDetail.accountName,
      phoneNo: this.props.status === 'new' ? '' : this.props.dataDetail.phoneNo,
      website: this.props.status === 'new' ? '' : this.props.dataDetail.website,
      typeId: this.props.status === 'new' ? 1 : this.props.dataDetail.typeId,
      areaId: this.props.status === 'new' ? 1 : this.props.dataDetail.areaId,
      typeName:
        this.props.status === 'new' ? '' : this.props.dataDetail.typeName,
      subTypeId:
        this.props.status === 'new' ? 1 : this.props.dataDetail.subTypeId,
      subTypeName:
        this.props.status === 'new' ? '' : this.props.dataDetail.subTypeName,
      areaName:
        this.props.status === 'new' ? '' : this.props.dataDetail.areaName,
      status:
        this.props.status === 'new' ? 'UnActive' : this.props.dataDetail.status,

      statusEditCard1: this.props.status === 'new' ? true : false,
    })
  }
  //todo
  // set state = value in service
  render() {
    const handleSubmitCard1 = async () => {
      const url = 'http://ams.leaderplanet.co.th/archemyApi/api'
      if (this.props.status === 'new') {
        const res = await axios.post(url + '/Account/Save', {
          id: 0,
          accountName: this.state.accountName,
          phoneNo: this.state.phoneNo,
          website: this.state.website,
          typeId: this.state.typeId,
          subTypeId: this.state.subTypeId,
          areaId: this.state.areaId,
          status: this.state.status,
        })
        await window.location.reload()
      } else {
        const res = await axios.post(url + '/Account/Edit', {
          id: this.state.id,
          accountName: this.state.accountName,
          phoneNo: this.state.phoneNo,
          website: this.state.website,
          typeId: this.state.typeId,
          subTypeId: this.state.subTypeId,
          areaId: this.state.areaId,
          status: this.state.status,
        })
        await window.location.reload()
        await this.setState({ statusEditCard1: false })
      }
    }
    const {
      statusEditCard1,
      accountName,
      phoneNo,
      website,
      typeId,
      typeName,
      subTypeName,
      subTypeId,
      areaName,
      status,
      areaId,
    } = this.state
    return (
      <Card>
        <Header>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 20,
            }}
          >
            Information
          </label>
          {this.props.status === 'new' ? null : (
            <Icon
              type="setting"
              style={{ cursor: 'pointer' }}
              onClick={() =>
                this.setState({
                  statusEditCard1: true,
                })
              }
            />
          )}
        </Header>
        <div body style={{ padding: 5 }}>
          <Row>
            <LabelLeft>
              <label>AccountName :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true ? (
                <Input
                  value={accountName}
                  style={{ height: '26px' }}
                  onChange={e => this.handleNameChange(e)}
                />
              ) : (
                <label>{accountName}</label>
              )}
            </InputRight>
          </Row>
          <Row>
            <LabelLeft>
              <label>PhoneNo :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true ? (
                <Input
                  value={phoneNo}
                  style={{ height: '26px' }}
                  onChange={e => this.handlePhoneChange(e)}
                />
              ) : (
                <label>{phoneNo}</label>
              )}
            </InputRight>
          </Row>
          <Row>
            <LabelLeft>
              <label>Website :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true ? (
                <Input
                  value={website}
                  style={{ height: '26px' }}
                  onChange={e => this.handleWebChange(e)}
                />
              ) : (
                <label>{website}</label>
              )}
            </InputRight>
          </Row>
          <Row>
            <LabelLeft>
              <label>TypeName :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true ? (
                <AccountTypeSelect
                  handleChange={value => this.handleChangeType(value)}
                  typeId={typeId}
                />
              ) : (
                // ? <Input value={typeName} style={{height: '26px'}} />
                <label>{typeName}</label>
              )}
            </InputRight>
          </Row>
          <Row>
            <LabelLeft>
              <label>SubTypeName :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true ? (
                <AccountSubType
                  handleChange={value => this.handleChangeSubType(value)}
                  subTypeId={subTypeId}
                />
              ) : (
                // {/* ? <Input value={subTypeName} style={{height: '26px'}} /> */}
                <label>{subTypeName}</label>
              )}
            </InputRight>
          </Row>
          <Row>
            <LabelLeft>
              <label>areaName :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true ? (
                <AreaSelect
                  handleChange={value => this.handleChangeArea(value)}
                  areaId={areaId}
                />
              ) : (
                // ? <Input value={areaName} style={{height: '26px'}} />
                <label>{areaName}</label>
              )}
            </InputRight>
          </Row>
          <Row>
            <LabelLeft>
              <label>status :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true ? (
                <AcccountStatus
                  handleChange={value => this.handleChangeStatus(value)}
                  status={status}
                />
              ) : (
                // ? <Input value={status} style={{height: '26px'}} />
                <label>{status}</label>
              )}
            </InputRight>
          </Row>

          {statusEditCard1 === true ? (
            <div footer style={{ display: 'flex', justifyContent: 'center' }}>
              <Button style={{ cursor: 'pointer' }} onClick={handleSubmitCard1}>
                submit
              </Button>
            </div>
          ) : null}
        </div>
      </Card>
    )
  }
}
