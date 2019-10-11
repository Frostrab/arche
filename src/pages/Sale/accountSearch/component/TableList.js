import React from 'react';
import {Table, Input, Select, Button} from 'antd';

export default class TableList extends React.PureComponent {
  render () {
    return <Table columns={this.props.columns} dataSource={this.props.data} />;
  }
}
