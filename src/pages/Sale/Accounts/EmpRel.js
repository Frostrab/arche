import React from 'react';
import {Icon, Input} from 'antd';
import styled from 'styled-components';
import axios from 'axios';
const Row = styled.div`
    width: 100%
    display: flex
`;
const LabelLeft = styled.div`
    width: 30%
    text-align: right
    margin: 3px
`;
const InputRight = styled.div`
    width: 70%
    margin: 3px
`;
const Header = styled.div`
    height: 40px
    border-bottom: 1px solid black
    display: flex
    justify-content: space-between
`;
const Card = styled.div`
    border: 1px solid black
    background-color: #fff
    margin-bottom: 5px
    border-radius: 6px
    padding: 6px
    height: 200px
    overflow-y: auto
`;
export default class EmpRel extends React.PureComponent {
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

    empRel: [],
  };
  componentDidMount () {
    this.setState ({
      id: this.props.dataDetail.id,
      accountName: this.props.dataDetail.accountName,
      phoneNo: this.props.dataDetail.phoneNo,
      website: this.props.dataDetail.website,
      typeId: this.props.dataDetail.typeId,
      typeName: this.props.dataDetail.typeName,
      subTypeId: this.props.dataDetail.subTypeId,
      areaName: this.props.dataDetail.areaName,
      status: this.props.dataDetail.status,
    });
    axios
      .get (
        `http://ams.leaderplanet.co.th/archemyApi/api/AccountRelation/GetList?accountId=${this.props.dataDetail.id}`
      )
      .then (res => this.setState ({empRel: res.data}))
      .catch (err => console.log (err.data));
  }
  //todo
  // set state = value in service
  render () {
    const handleSubmitCard1 = async () => {
      await this.setState ({statusEditCard1: false});
    };
    const {statusEditCard1, value1, accountName} = this.state;
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
            Employee Relational
          </label>
          {/* <Icon
            type="setting"
            style={{cursor: 'pointer'}}
            onClick={() =>
              this.setState ({
                statusEditCard1: true,
              })}
          /> */}
        </Header>
        <div body style={{padding: 5}}>
          {this.state.empRel.map (items => (
            <span>
              <Row>
                <LabelLeft>
                  <label>Empyoyee :</label>
                </LabelLeft>
                <InputRight>
                  <label>{items.empName}</label>
                </InputRight>
              </Row>
              <Row>
                <LabelLeft>
                  <label>Start Date :</label>
                </LabelLeft>
                <InputRight>
                  <label>
                    {items.startDateString.split ('-')[2] +
                      '/' +
                      items.startDateString.split ('-')[1] +'/'+
                      items.startDateString.split ('-')[0]}
                  </label>
                </InputRight>
              </Row>
              <Row>
                <LabelLeft>
                  <label>Finish Date :</label>
                </LabelLeft>
                <InputRight>
                  <label>{items.endDateString}</label>
                </InputRight>
              </Row>
            </span>
          ))}

          {statusEditCard1 === true
            ? <div footer>
                <button style={{cursor: 'pointer'}} onClick={handleSubmitCard1}>
                  submit
                </button>
              </div>
            : null}
        </div>
      </Card>
    );
  }
}
