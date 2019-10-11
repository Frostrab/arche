import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import { Card, Button, Input } from 'antd'
import TableMain from '../../components/tablemain/index'

const Header = styled.div`
    font-size: 30px
    color: black
    display: flex
`

const productcard = props => {
  const data = []
  for (let i = 0; i < 15; i++)
    data.push({
      Category: props.REC.Category,
      CategoryName: props.REC.CategoryName,
      ProductName: props.REC.ProductName,
    })

  const column = [
    {
      title: 'Category',
      dataIndex: 'Category',
      width: 100,
      key: 'Category',
    },
    {
      title: 'CategoryName',
      dataIndex: 'CategoryName',
      width: 100,
      key: 'CategoryName',
    },
    {
      title: 'ProductName',
      dataIndex: 'ProductName',
      width: 100,
      key: 'ProductName',
    },
  ]

  return (
    <div>
      <Header>
        <label>Product</label>
      </Header>
      <div
        style={{
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 5,
          marginTop: '10px',
        }}
      >
        <TableMain data={data} column={column} />
      </div>
    </div>
  )
}
export default productcard
