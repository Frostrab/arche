import React from 'react';
import styled from 'styled-components';
import {Table, Icon, Menu, Dropdown, Button} from 'antd';
import NewOrder from './NewOrder';
import axios from 'axios';
const Header = styled.div`
    font-size: 30px
    color: black
    display: flex
`;

export default class Order extends React.PureComponent {
  state = {
    mediaSize: '',
    pageStatus: 'view',
    columns: [
      {
        title: 'Account ID',
        dataIndex: 'accountId',
        key: 'accountName',
      },
      {
        title: 'Account Name',
        dataIndex: 'accountName',
        key: 'accountName',
      },
      {
        title: 'Order Date',
        dataIndex: 'orderDate',
        key: 'subTypeName',
        render: (text, rec) => {
          return (
            text.split ('T')[0].split ('-')[2] +
            '/' +
            text.split ('T')[0].split ('-')[1] +
            '/' +
            text.split ('T')[0].split ('-')[0]
          );
        },
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
      .get ('http://ams.leaderplanet.co.th/archemyApi/api/Order/GetList')
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
                  Order {pageStatus}
                </label>
              : pageStatus === 'create'
                  ? <div style={{display: 'flex'}}>
                      <label>
                        Order
                      </label>
                    </div>
                  : <div style={{display: 'flex'}}>
                      <label>
                        Order{' '}
                      </label>
                    </div>}
          </div>
        </Header>
        {pageStatus === 'view'
          ? <div style={{marginBottom: 10}}>
              <Button onClick={() => this.setState ({pageStatus: 'create'})}>
                New Order
              </Button>
            </div>
          : null}

        {pageStatus === 'view'
          ? <div
              style={{backgroundColor: '#fff', padding: 10, borderRadius: 5}}
            >
              <Table dataSource={data} columns={columns} />{' '}
            </div>
          : pageStatus === 'create'
              ? <NewOrder
                  mediaSize={mediaSize}
                  selected={rowSelect}
                  status={'new'}
                />
              : null}

      </React.Fragment>
    );
  }
}
