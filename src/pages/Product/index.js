import React from 'react';
import styled from 'styled-components';
import NewProduct from './NewProduct';
import EditProcuct from './EditProduct';
import {Table, Icon, Menu, Button} from 'antd';
import axios from 'axios';
const Header = styled.div`
    font-size: 30px
    color: black
    display: flex
`;


export default class Product extends React.PureComponent {
  state = {
    mediaSize: '',
    pageStatus: 'view',
    columns: [
      {
        title: 'productName',
        dataIndex: 'productName',
        key: 'accountName',
      },
      {
        title: 'productTypeName',
        dataIndex: 'productTypeName',
        key: 'typeName',
      },
      {
        title: 'Price1',
        dataIndex: 'prince1',
        key: 'subTypeName',
        sorter: (a, b) => a.prince1 - b.prince1,
      },
      {
        title: 'Price2',
        dataIndex: 'prince2',
        key: 'areaName',
        sorter: (a, b) => a.prince2 - b.prince2,
      },
      {
        title: 'Price3',
        dataIndex: 'prince3',
        key: 'status',
        sorter: (a, b) => a.prince3 - b.prince3,
      },
      {
        title: 'unit',
        dataIndex: 'unit',
        key: 'status',
      },
      {
        title: '',
        dataIndex: 'address',
        key: 'address',
        width: '10%',
        render: (text, record) => (
          <Button onClick={() => this.handleEditClick (record)}>
            edit
          </Button>
        ),
      },
    ],
    data: [],
    rowSelect: {},
    clickNew: '',
  };
  handleClick = e => {
    this.setState ({clickNew: e.key});
    console.log ('click ', e);
  };
  handleEditClick (row) {
    this.setState ({pageStatus: 'edit'});
    this.setState ({rowSelect: row});
  }
  componentDidMount () {
    if (window.innerWidth > 1024) {
      this.setState ({mediaSize: 'pc'});
    } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      this.setState ({mediaSize: 'tablat'});
    } else if (window.innerWidth >= 480 && window.innerWidth <= 768) {
      this.setState ({mediaSize: 'medium'});
    } else {
      this.setState ({mediaSize: 'mobile'});
    }
    axios
      .get ('http://ams.leaderplanet.co.th/archemyApi/api/Product/GetList')
      .then (res => this.setState ({data: res.data}))
      .catch (e => alert (e.response));
  }
  render () {
    const menu = (
      <Menu onClick={this.handleClick} style={{width: 300}}>
        <Menu.Item key="0">
          Contact
        </Menu.Item>
        <Menu.Item key="1">
          Contract
        </Menu.Item>
        {/* <Menu.Divider /> */}
        <Menu.Item key="3">Plan</Menu.Item>
      </Menu>
    );
    const {mediaSize, data, columns, pageStatus, rowSelect} = this.state;
    return (
      <React.Fragment>
        <Header>
          {pageStatus != 'view'
            ? <div>
                <Icon
                  type="left-square"
                  style={{cursor: 'pointer', marginRight: 10}}
                  onClick={() => this.setState ({pageStatus: 'view'})}
                />
              </div>
            : null}

          <div>
            {pageStatus === 'view'
              ? <label>
                  Product {pageStatus}
                </label>
              : pageStatus === 'create'
                  ? <div style={{display: 'flex'}}>
                      <label>
                        New Product
                      </label>
                    </div>
                  : <div style={{display: 'flex'}}>
                      <label>
                        Product {rowSelect.accountName}

                      </label>
                    </div>}
          </div>
        </Header>
        {pageStatus === 'view'
          ? <div style={{marginBottom: 10}}>
              <Button onClick={() => this.setState ({pageStatus: 'create'})}>
                New Product
              </Button>
            </div>
          : null}

        {pageStatus === 'view'
          ? <div
              style={{backgroundColor: '#fff', padding: 10, borderRadius: 5}}
            >
              <Table dataSource={data} columns={columns} />
            </div>
          : pageStatus === 'edit'
              ? <EditProcuct mediaSize={mediaSize} selected={rowSelect} />
              : <NewProduct mediaSize={mediaSize} status={'new'} />}
      </React.Fragment>
    );
  }
}
