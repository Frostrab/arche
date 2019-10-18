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
    Popover,

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

    const [year, setYear] = useState([
        { name: '2018', value: 1 },
        { name: '2019', value: 2 },
        { name: '2020', value: 3 },
        { name: '2021', value: 4 },
        { name: '2022', value: 5 },
        { name: '2023', value: 6 },

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
        data.push(
            REC

        )
    }
    const scroll = {
        // x: '100%',
        y: 240
    }


    const [editable, setEditable] = useState(false)

    const [filterDropdownVisible, setFDDV] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [editingKey, setEditKey] = useState('')


    const column = [
        {
            title: 'Code',
            dataIndex: 'Code',
            width: 90,
            key: 'Code',
            // fixed: 'left',
            editable: true,
            render: (text, record) => {

                return (
                    <Popover content={
                        <div>
                            <p>Singlemalt : {record.Singlemalt}</p>
                            <p>Size : {record.Size}</p>
                            <p>Packin: {record.Packing}</p>
                            
                        </div>
                    }>
                        <p>{text}</p>
                    </Popover>
                )
            }

        },
        {
            title: 'Principle',
            dataIndex: 'Principle',
            width: 90,
            key: 'Principle',

            editable: true,
        },
        {
            title: 'Category',
            dataIndex: 'Category',
            width: 90,
            key: 'Category',

            editable: true,
        },
        {
            title: 'Brand',
            dataIndex: 'Brand',
            width: 90,
            key: 'Brand',

            editable: true,
        },

        {
            title: 'Approx WS Price to Outlets',
            dataIndex: 'Approx',
            width: 90,
            key: 'Approx',

            editable: true,
        },
        {
            title: 'Target Vol(blts)',
            width: 90,
            render: (text, record) => {
                var result = record.Volblts / 12
                var ResString = result.toString()
                var newRes = ResString.substring(0, 4)
                return (
                    <p> {newRes}</p>
                )
            }
        },
        {
            title: 'Actual(btls)',
            dataIndex: 'ActualB',
            width: 90,
            key: 'ActualB',
        },
        {
            title: '%',
            width: 90,
            render: (text, record) => {
                var target = record.Volblts / 12
                var result = record.ActualB / target
                var ResString = result.toString()
                var newRes = ResString.substring(0, 4)
                return (
                    <p> {newRes}</p>
                )
            }
        },
        {
            title: 'Diff(Vol)',
            width: 90,
            render: (text, record) => {
                var target = record.Volblts / 12
                var result = target - record.ActualB
                var ResString = result.toString()
                var newRes = ResString.substring(0, 6)
                return (
                    <p> {newRes}</p>
                )
            }
        },
        {
            title: 'Actual Value',
            width: 90,
            render: (text, record) => {
                var result = record.Approx * record.ActualB
                var ResString = result.toString()
                var newRes = ResString.substring(0, 4)
                return (
                    <p> {newRes}</p>
                )
            }
        },

        {
            title: 'Operation',
            width: 90,
            // fixed: 'right',
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
    const options = mon.map((monmap) => (
        <Option value={monmap.value}>{monmap.name}</Option>
    ))

    const Yoptions = year.map((yearmap) => (
        <Option value={yearmap.value}>{yearmap.name}</Option>
    ))

    const Pag = {
        pageSize: 20
    }

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
                    {' '}
                    <Select style={{ width: '140px' }} defaultValue={1}>
                        {Yoptions}
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
                    <TableMain scroll={scroll} column={column} data={data} Pag={Pag} />
                </div>
                <Productcard REC={REC} data1={data} />
                {/* <Spend REC={REC} /> */}
            </EditableContext.Provider>
        </div>
    )
}
export default PerformPage
