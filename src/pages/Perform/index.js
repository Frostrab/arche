import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import {
  Table,
  Icon,
  Menu,
  Dropdown,
  Button,
  Modal,
  Input,
  Card,
  Form,
  Row,
  Col,
  Select,
} from 'antd'
import Layout from '../../components/layout/'
import axios from 'axios'
import Maincard from '../Spend/main'
import TableMain from '../../components/tablemain/index'
import Spend from '../Spend/index'
import Productcard from '../../pages/Perform/productcard'
const EditableContext = React.createContext()

const { Option } = Select

const PerformPage = props => {
  const [Monthly, setMonthly] = useState([])
  const [mon, setMon] = useState([
    { name: 'Jan', value: 1 },
    { name: 'Feb', value: 2 },
    { name: 'March', value: 3 },
    { name: 'Apr', value: 4 },
    { name: 'May', value: 5 },
    { name: 'Jun', value: 6 },
    { name: 'Jul', value: 7 },
    { name: 'Aug', value: 8 },
    { name: 'Sep', value: 9 },
    { name: 'Oct', value: 10 },
    { name: 'Nov', value: 11 },
    { name: 'Dec', value: 12 },
  ])

  const { REC } = props.location.state

  useEffect(() => {
    console.log('Perfrom :', REC)
  }, [REC])

  const Header = styled.div`
font-size: 30px
color: black
display: flex
`

  const [data] = useState([])
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i.toString(),
      Month: `M${i}`,
      Year: `Y${i}`,
      Code: `SPWHi${1}`,
      Principle: 'TEG',
      Category: 'SingleMal',
      Brand: 'THE',
      Singlemalt: '12YO',
      Size: 'M',
      Packing: '12',
      Approx: i + 1,
    })
  }
  const scroll = {
    x: '300%',
    // y: 240
  }

  const onSearch = () => {}
  const reset = () => {}

  const [editable, setEditable] = useState(false)

  const [filterDropdownVisible, setFDDV] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [editingKey, setEditKey] = useState('')

  const cancel = () => {
    setEditKey('')
  }

  const [selectedKeys, setSelectedKeys] = useState()
  const [confirm, setConfirm] = useState()

  const handleSearch = (selectedKeys, confirm) => () => {}

  const column = [
    {
      title: 'Code',
      dataIndex: 'Code',
      width: 100,
      key: 'Code',
      fixed: 'left',
      editable: true,
      filterDropdown: ({ selectedKeys, confirm }) => (
        <div className="custom-filter-dropdown" style={{ padding: 8 }}>
          <Input
            placeholder="Search name"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            // onPressEnter={this.onSearch}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            style={{ width: 90, marginRight: 8 }}
            onClick={onSearch()}
          >
            Search
          </Button>
        </div>
      ),
      filterIcon: filtered => (
        <Icon
          type="search"
          style={{ color: filtered ? '#1890ff' : undefined }}
        />
      ),

      onFilterDropdownVisibleChange: visible => setFDDV({ visible }),
      sorter: (a, b) => a.Code.length - b.Code.length,
    },
    {
      title: 'Principle',
      dataIndex: 'Principle',
      width: 100,
      key: 'Principle',

      editable: true,
    },
    {
      title: 'Category',
      dataIndex: 'Category',
      width: 100,
      key: 'Category',

      editable: true,
    },
    {
      title: 'Brand',
      dataIndex: 'Brand',
      width: 100,
      key: 'Brand',

      editable: true,
    },
    {
      title: 'Single Malt Scoth',
      dataIndex: 'Singlemalt',
      width: 100,
      key: 'Singlemalt',

      editable: true,
    },
    {
      title: 'Size',
      dataIndex: 'Size',
      width: 100,
      key: 'Size',

      editable: true,
    },
    {
      title: 'Packing',
      dataIndex: 'Packing',
      width: 100,
      key: 'Packing',

      editable: true,
    },
    {
      title: 'Approx WS Price to Outlets',
      dataIndex: 'Approx',
      width: 100,
      key: 'Approx',

      editable: true,
    },
    {
      title: 'Contract Target/Year',
      width: 300,
      children: [
        {
          title: 'Vol(cs)',
          // dataIndex: 'volcs',
          dataIndex: 'Month',
          width: 100,
          key: 'volcs',
          editable: true,
        },
        {
          title: 'Vol(btls)',
          // dataIndex: 'building',
          dataIndex: 'Year',
          width: 100,
          key: 'building',
          editable: true,
        },
        {
          title: 'Value',
          dataIndex: 'Value',
          width: 100,
          key: 'Value',
          editable: true,
        },
      ],
    },
    {
      title: 'May 19',
      width: 500,
      children: [
        {
          title: 'Target',
          dataIndex: 'age',
          width: 100,
          key: 'age',
          editable: true,
        },
        {
          title: 'Actual',
          dataIndex: 'building',
          width: 100,
          key: 'building',
          editable: true,
        },
        {
          title: '%',
          dataIndex: 'companyAddress',
          width: 100,
          key: 'companyAddress',
          editable: true,
        },
        {
          title: 'diff',
          dataIndex: '',
          width: 100,
          key: '',
          editable: true,
        },
        {
          title: 'Value',
          dataIndex: '',
          width: 100,
          key: '',
          editable: true,
        },
      ],
    },
    {
      title: 'Consumer A& P (Marketing Support)',
      width: 1400,
      children: [
        {
          title: 'Purchasing Value',
          dataIndex: 'age',
          width: 200,
          key: 'age',
          children: [
            {
              title: 'FOC',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
            {
              title: 'Cash',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
          ],
        },
        {
          title: 'Purchasing Value',
          dataIndex: 'building',
          width: 200,
          key: 'building',
          children: [
            {
              title: 'FOC',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
            {
              title: 'Cash',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
          ],
        },
        {
          title: 'Purchasing Value',
          dataIndex: 'companyAddress',
          width: 200,
          key: 'companyAddress',
          children: [
            {
              title: 'FOC',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
            {
              title: 'Cash',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
          ],
        },
        {
          title: 'Purchasing Value',
          dataIndex: '',
          width: 200,
          key: '',
          children: [
            {
              title: 'FOC',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
            {
              title: 'Cash',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
          ],
        },
        {
          title: 'Purchasing Value',
          dataIndex: '',
          width: 200,
          key: '',
          children: [
            {
              title: 'FOC',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
            {
              title: 'Cash',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
          ],
        },
        {
          title: 'Purchasing Value',
          dataIndex: '',
          width: 200,
          key: '',
          children: [
            {
              title: 'FOC',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
            {
              title: 'Cash',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
          ],
        },
        {
          title: 'Purchasing Value',
          dataIndex: '',
          width: 200,
          key: '',
          children: [
            {
              title: 'FOC',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
            {
              title: 'Cash',
              dataIndex: 'street',
              width: 100,
              key: 'street',
              editable: true,
            },
          ],
        },
      ],
    },
    {
      title: 'Operation',
      width: 50,
      fixed: 'right',
      render: (text, record) => {
        return editable ? (
          <Button></Button>
        ) : (
          <Button
            type="ghost"
            // disabled={editingKey !== ''} onClick={() => this.edit(record.key)}
          >
            Edit
          </Button>
        )
      },
    },
  ]
  const options = mon.map(monmap => (
    <Option value={monmap.value}>{monmap.name}</Option>
  ))

  return (
    <div>
      <Header>
        <label>Outlet Performance</label>
      </Header>
      <EditableContext.Provider
      // value={this.props.form}
      >
        <div style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5 }}>
          <Maincard REC={REC} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <Select style={{ width: '140px' }} defaultValue={1}>
            {options}
          </Select>
        </div>
        <div
          style={{
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          {searchText}
          <TableMain scroll={scroll} column={column} data={data} />
        </div>
        <Productcard REC={REC} />
        <Spend REC={REC} />
      </EditableContext.Provider>
    </div>
  )
}
export default PerformPage
