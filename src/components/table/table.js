import React from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'

export const TableTemplate = props => {
  return (
    <Table
      columns={props.columns}
      dataSource={props.dataSource}
      bordered
      rowClassName={() => 'responsive-row'}
      pagination={false}
      expandedRowRender={props.expandedRowRender}
      size="small"
    />
  )
}
