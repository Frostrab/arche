import React from 'react'
import { Table } from 'antd'

const TableMain = props => {
  return (
    <div>
      <Table
        columns={props.column}
        dataSource={props.data}
        bordered
        size="middle"
        scroll={props.scroll}
        pagination={{ pageSize: 4 }}
      />
    </div>
  )
}
export default TableMain
