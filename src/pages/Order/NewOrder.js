import React from 'react';
import {Icon, Input, Button, Select} from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import AccountList from './AccountList';
import TableEdit from './TableEdit';
const {Option} = Select;
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
    height: 420px
    overflow-y: auto
`;
export default class NewProduct extends React.PureComponent {
  state = {
    statusEditCard1: false,
    SelectAccList: [],
    SelectAcc: 1,
    accountId: 'เลือก Account ',
    ProductContact: [],
    displayTable: false,
  };
  handleChange (e) {
    this.setState ({SelectAcc: e});
  }
  handleAccount = async value => {
    await this.setState ({accountId: value});
    console.log (value);
    const res = await axios.get (
      `http://ams.leaderplanet.co.th/archemyApi/api/Order/GetProductContract?accountId=${this.state.accountId}`
    );
    await this.setState ({ProductContact: res.data, displayTable: true});
  };

  handleNameChange = e => {
    e.preventDefault ();
    this.setState ({productName: e.target.value});
    console.log (e.target.value);
  };
  handlePrince1 = e => {
    e.preventDefault ();
    this.setState ({prince1: e.target.value});
    console.log (e.target.value);
  };
  handlePrince2 = e => {
    e.preventDefault ();
    this.setState ({prince2: e.target.value});
    console.log (e.target.value);
  };
  handlePrince3 = e => {
    e.preventDefault ();
    this.setState ({prince3: e.target.value});
    console.log (e.target.value);
  };
  handleUnit = e => {
    e.preventDefault ();
    this.setState ({unit: e.target.value});
    console.log (e.target.value);
  };
  componentDidMount () {
    this.setState ({
      statusEditCard1: this.props.status === 'new' ? true : false,
    });
  }
  //todo
  // set state = value in service
  render () {
    const handleSubmitCard1 = async () => {
      const res = axios.post (
        'http://ams.leaderplanet.co.th/archemyApi/api/Product/Save',
        {
          id: 0,
          productName: this.state.productName,
          productTypeId: this.state.productTypeId,
          productTypeName: 'string',
          prince1: parseInt (this.state.prince1),
          prince2: parseInt (this.state.prince2),
          prince3: parseInt (this.state.prince3),
          unit: this.state.unit,
        }
      );
      await this.setState ({statusEditCard1: false});
    };
    const {statusEditCard1, productName} = this.state;
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
            New Order
          </label>
          <Icon
            type="setting"
            style={{cursor: 'pointer'}}
            onClick={() =>
              this.setState ({
                statusEditCard1: true,
              })}
          />
        </Header>
        <div body style={{padding: 5}}>
          <Row>
            <LabelLeft>
              <label>Account :</label>
            </LabelLeft>
            <InputRight>
              <AccountList
                handleChange={value => this.handleAccount (value)}
                accountId={this.state.accountId}
              />
            </InputRight>
          </Row>
          {this.state.displayTable === true
            ? [
                <TableEdit data={this.state.ProductContact} />,
                console.log (this.state.ProductContact),
              ]
            : null}
          <div footer style={{display: 'flex', justifyContent: 'center'}}>
            <Button style={{cursor: 'pointer'}} onClick={handleSubmitCard1}>
              submit
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}
