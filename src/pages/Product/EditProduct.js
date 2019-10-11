import React from 'react';
import {Icon, Input, Button} from 'antd';
import styled from 'styled-components';
import ProductType from './ProductType';
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
    height: 420px
    overflow-y: auto
`;
export default class EditProduct extends React.PureComponent {
  state = {
    statusEditCard1: false,
    productName: '',
    productTypeId: '',
    productTypeName: '',
    prince1: 0,
    prince2: 0,
    prince3: 0,
    unit: '',
  };
  handleChangeType (value) {
    this.setState ({productTypeName: value});
    console.log (value);
  }
  handleChangeSubType (value) {
    this.setState ({subTypeId: value});
    console.log (value);
  }
  handleChangeArea (value) {
    this.setState ({areaId: value});
    console.log (value);
  }
  handleChangeStatus (value) {
    this.setState ({status: value});
    console.log (value);
  }
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
  componentDidMount () {
    this.setState ({
      productName: this.props.status === 'new'
        ? ''
        : this.props.selected.productName,
      productTypeId: this.props.status === 'new'
        ? ''
        : this.props.selected.productTypeId,
      productTypeName: this.props.status === 'new'
        ? 'SINGLE MALT'
        : this.props.selected.productTypeName,
      prince1: this.props.status === 'new' ? 0 : this.props.selected.prince1,
      prince2: this.props.status === 'new' ? 0 : this.props.selected.prince2,
      prince3: this.props.status === 'new' ? 0 : this.props.selected.prince3,
      unit: this.props.status === 'new' ? '' : this.props.selected.unit,

      statusEditCard1: this.props.status === 'new' ? true : false,
    });
  }
  //todo
  // set state = value in service
  render () {
    const handleSubmitCard1 = async () => {
      const res = axios.post (
        'http://ams.leaderplanet.co.th/archemyApi/api/Product/Edit',
        {
          id: this.props.selected.id,
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
    const {
      statusEditCard1,
      prince1,
      prince2,
      prince3,
      unit,
      productName,
      productTypeId,
      productTypeName,
    } = this.state;
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
            New Product
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
              <label>ProductName :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true
                ? <Input
                    value={productName}
                    style={{height: '26px', width: 300}}
                    onChange={e => this.handleNameChange (e)}
                  />
                : <label>{productName}</label>}

            </InputRight>
          </Row>
          <Row>
            <LabelLeft>
              <label>Product Type :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true
                ? <ProductType
                    handleChangeType={value => this.handleChangeType (value)}
                    productTypeName={this.state.productTypeName}
                  />
                : <label>{productTypeName}</label>}

            </InputRight>
          </Row>
          <Row>
            <LabelLeft>
              <label>ราคาต้นทุน :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true
                ? <span>
                    <Input
                      value={prince1}
                      style={{height: '26px', width: 200}}
                      onChange={e => this.handlePrince1 (e)}
                    />
                    <label> บาท</label>
                  </span>
                : <span>
                    <Input
                      value={prince1}
                      style={{height: '26px', width: 200}}
                      onChange={e => this.handlePrince1 (e)}
                    />
                    <label> บาท</label>
                  </span>}
            </InputRight>
          </Row>
          <Row>
            <LabelLeft>
              <label>ราคาขายปลีก :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true
                ? <span>
                    <Input
                      value={prince2}
                      style={{height: '26px', width: 200}}
                      onChange={e => this.handlePrince2 (e)}
                    />
                    <label> บาท</label>
                  </span>
                : <span>
                    <Input
                      value={prince2}
                      style={{height: '26px', width: 200}}
                      onChange={e => this.handlePrince2 (e)}
                    />
                    <label> บาท</label>
                  </span>}
            </InputRight>
          </Row>
          <Row>
            <LabelLeft>
              <label>ราคาขายส่ง :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true
                ? <span>
                    <Input
                      value={prince3}
                      style={{height: '26px', width: 200}}
                      onChange={e => this.handlePrince3 (e)}
                    />
                    <label> บาท</label>
                  </span>
                : <span>
                    <Input
                      value={prince3}
                      style={{height: '26px', width: 200}}
                      onChange={e => this.handlePrince3 (e)}
                    />
                    <label> บาท</label>
                  </span>}
            </InputRight>
          </Row>
          <Row>
            <LabelLeft>
              <label>unit :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true
                ? <Input
                    value={unit}
                    style={{height: '26px', width: 200}}
                    onChange={e => this.handleWebChange (e)}
                  />
                : <label>{unit}</label>}
            </InputRight>
          </Row>

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
