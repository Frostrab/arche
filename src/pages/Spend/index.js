import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import { Table, Icon, Menu, Dropdown, Button, Modal, Input, Card } from 'antd'
import Layout from '../../components/layout/'
import axios from 'axios'
import Maincard from './main'
import TableMain from '../../components/tablemain/index'
const Header = styled.div`
    font-size: 30px
    color: black
    display: flex
`

const column = [
  {
    title: 'Period',
    dataIndex: 'Period',
    width: 100,
    key: 'Period',
    fixed: 'left',
  },
  {
    title: 'Actual Performance vs Actual Spending',

    children: [
      {
        title: 'Purchasing Value',
        dataIndex: 'purchaseVal',
        width: 100,
        key: 'purchaseVal',
      },
      {
        title: 'Total Support',
        dataIndex: 'TotalSup',
        width: 100,
        key: 'TotalSup',
      },
      {
        title: 'Ratio',
        dataIndex: 'Ratio',
        width: 100,
        key: 'Ratio',
      },
      {
        title: 'OP Support',
        dataIndex: 'OpSup',
        width: 100,
        key: 'OpSup',
      },
      {
        title: 'OP Ratio',
        dataIndex: 'OPRatio',
        width: 100,
        key: 'OPRatio',
      },
      {
        title: 'MKT Support',
        dataIndex: 'MKT Support',
        width: 100,
        key: '',
      },
      {
        title: 'MKT Ratio',
        dataIndex: '',
        width: 100,
        key: '',
      },
    ],
  },
  {
    title: 'Trade A& P (OP Support)',

    children: [
      {
        title: 'Rebate',
        dataIndex: 'age',
        width: 200,
        key: '',
        children: [
          {
            title: 'FOC',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
          {
            title: 'Cash',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
        ],
      },
      {
        title: 'Promotion',
        dataIndex: 'building',
        width: 200,
        key: '',
        children: [
          {
            title: 'FOC',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
          {
            title: 'Cash',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
        ],
      },
      {
        title: 'Advance',
        dataIndex: 'companyAddress',
        width: 200,
        key: '',
        children: [
          {
            title: 'FOC',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
          {
            title: 'Cash',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
        ],
      },
      {
        title: 'Bonus',
        dataIndex: '',
        width: 200,
        key: '',
        children: [
          {
            title: 'FOC',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
          {
            title: 'Cash',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
        ],
      },
      {
        title: 'MISC',
        dataIndex: '',
        width: 200,
        key: '',
        children: [
          {
            title: 'FOC',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
          {
            title: 'Cash',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
        ],
      },
    ],
  },
  {
    title: 'Trade A& P (OP Support)',

    children: [
      {
        title: 'Visibilities',
        dataIndex: 'age',
        width: 200,
        key: '',
        children: [
          {
            title: 'FOC',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
          {
            title: 'Cash',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
        ],
      },
      {
        title: 'Training',
        dataIndex: 'building',
        width: 200,
        key: '',
        children: [
          {
            title: 'FOC',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
          {
            title: 'Cash',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
        ],
      },
      {
        title: 'GuestShift',
        dataIndex: 'companyAddress',
        width: 200,
        key: '',
        children: [
          {
            title: 'FOC',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
          {
            title: 'Cash',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
        ],
      },
      {
        title: 'Brand Events',
        dataIndex: '',
        width: 200,
        key: '',
        children: [
          {
            title: 'FOC',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
          {
            title: 'Cash',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
        ],
      },
      {
        title: 'MISC',
        dataIndex: '',
        width: 200,
        key: '',
        children: [
          {
            title: 'FOC',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
          {
            title: 'Cash',
            dataIndex: 'street',
            width: 100,
            key: 'street',
          },
        ],
      },
    ],
  },
]

const scroll = {
  x: '280%',
  // y: 240
}
const Pag = {
    pageSize: 5
}
const SpendPage = props => {
  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      Period: `Month${i}`,
      purchaseVal: props.REC.PurchaseVal,
      TotalSup: props.REC.TotalASup,
      OpSup: props.REC.OPsup,
    })
  }
  const [purchaseVal, setPV] = useState()
  const [totalSupport, setTotalsup] = useState()
  const [Ratio, setRatio] = useState()

  const [CurrentRecord, setCurRec] = useState()

  return (
    <div>
      <Header>
        <label>Outlet Spending</label>
      </Header>

      <div
        style={{
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <TableMain scroll={scroll} column={column} data={data} />
      </div>
    </div>
  )
}
export default SpendPage
