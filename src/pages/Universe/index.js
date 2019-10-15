import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    Select,
    Form,
    Row,
    Col,
    Alert,
} from 'antd'
import Layout from '../../components/layout/'
import axios from 'axios'
import Maincard from '../Spend/main'
import TableMain from '../../components/tablemain/index'
import PerformPage from '../Perform'

const UniversePage = props => {
    const [datasource, setDatasource] = useState([])
    const [recordList, setRecord] = useState({})

    const [filterDropdownVisible, setFDDV] = useState(false)
    const [SearchText, setSearchText] = useState('')

    const Header = styled.div`
    font-size: 30px
    color: black
    display: flex
`

    const column = [
        {
            title: 'Sale Name',
            dataIndex: 'SaleName',
            width: 100,
            key: 'SaleName',
            fixed: 'left',
            filters: [
                {
                    text: 'A',
                    value: 'A',
                },
            ],
            filterDropdown: () => (
                <div className="custom-filter-dropdown" style={{ padding: 8 }}>
                    <Input
                        placeholder="Search name"
                        // value={searchText}
                        // onChange={e => setSearchText(e.target.value)}
                        // onPressEnter={this.onSearch}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <Button
                        type="primary"
                        style={{ width: 90, marginRight: 8 }}
                    // onClick={onSearch()}
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
            sorter: (a, b) => a.SaleName.length - b.SaleName.length,
            sorterDirections: ['ascend', 'descend'],
        },
        {
            title: 'Customer Number',
            dataIndex: 'CustomerNo',
            width: 100,
            key: 'CustomerNo',
            fixed: 'left',
            filters: [
                {
                    text: 'A',
                    value: 'A',
                },
            ],
            filterDropdown: () => (
                <div className="custom-filter-dropdown" style={{ padding: 8 }}>
                    <Input
                        placeholder="Search name"
                        // value={searchText}
                        // onChange={e => setSearchText(e.target.value)}
                        // onPressEnter={this.onSearch}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <Button
                        type="primary"
                        style={{ width: 90, marginRight: 8 }}
                    // onClick={onSearch()}
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
            sorter: (a, b) => a.CustomerNo - b.CustomerNo,
            sorterDirections: ['ascend', 'descend'],
        },
        {
            title: 'Outlet',
            dataIndex: 'Outlet',
            width: 100,
            key: 'Outlet',
            fixed: 'left',
            filters: [
                {
                    text: 'A',
                    value: 'A',
                },
            ],
            sorter: true,
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            width: 100,
            key: 'Status',
            filters: [
                {
                    text: 'Active',
                    value: 'Active',
                },
                {
                    text: 'Inactive',
                    value: 'Inactive',
                },
            ],
            filterMultiple: false,
            onFilter: (value, record) => record.Status.indexOf(value) === 0,
            // sorter: (a,b)=> a.Status - b.Status,
            // sorterDirections:['ascend','descend'],
        },
        {
            title: 'Soi',
            dataIndex: 'Soi',
            width: 100,
            key: 'Soi',
        },
        {
            title: 'Road',
            dataIndex: 'Road',
            width: 100,
            key: 'Road',
        },
        {
            title: 'District',
            dataIndex: 'District',
            width: 100,
            key: 'Packing',
        },
        {
            title: 'Province',
            dataIndex: 'Province',
            width: 100,
            key: 'Province',
        },
        {
            title: 'Region',
            dataIndex: 'Region',
            width: 100,
            key: 'Region',
        },
        {
            title: 'Category',
            width: 500,
            children: [
                {
                    title: 'Segmentation',
                    dataIndex: 'Segmentation',
                    width: 100,
                    key: 'Segmentation',
                    editable: true,
                },
                {
                    title: 'Outlet Type',
                    dataIndex: 'OutletType',
                    width: 100,
                    key: 'OutletType',
                    editable: true,
                },
                {
                    title: 'Sub Type',
                    dataIndex: 'SubType',
                    width: 100,
                    key: 'SubType',
                    editable: true,
                },
                {
                    title: 'Image',
                    dataIndex: 'Image',
                    width: 100,
                    key: 'Image',
                    editable: true,
                },
                {
                    title: 'Volume',
                    dataIndex: 'Volume',
                    width: 100,
                    key: 'Volume',
                    editable: true,
                },
            ],
        },
        {
            title: 'Contract',
            width: 400,
            children: [
                {
                    title: 'Exclusive Contract',
                    dataIndex: 'ExCon',
                    width: 100,
                    key: 'ExCon',
                    editable: true,
                },
                {
                    title: 'Secondary Contract',
                    dataIndex: 'SecCon',
                    width: 100,
                    key: 'SecCon',
                    editable: true,
                },
                {
                    title: 'Start',
                    dataIndex: 'Start',
                    width: 100,
                    key: 'Start',
                    editable: true,
                },
                {
                    title: 'End',
                    dataIndex: 'End',
                    width: 100,
                    key: 'End',
                    editable: true,
                },
            ],
        },
        {
            title: 'Sponsor Budget',
            dataIndex: 'SponsorBudget',
            width: 100,
            key: 'SponsorBudget',
        },
        {
            title: 'Contract Person',
            dataIndex: 'ConPer',
            width: 100,
            key: 'ConPer',
        },
        {
            title: 'Position',
            dataIndex: 'Position',
            width: 100,
            key: 'Position',
        },
        {
            title: 'Contract Number',
            dataIndex: 'ConNo',
            width: 100,
            key: 'ConNo',
        },
        {
            title: 'Whoesale Supplier',
            dataIndex: 'WhoSup',
            width: 100,
            key: 'WhoSup',
        },
        {
            title: 'Select',

            fixed: 'right',
            render: (text, record) => {
                return (
                    <Link
                        to={{
                            pathname: `/perform`,
                            state: {
                                REC: record,
                            },
                        }}
                    >
                        <Button
                            type="ghost"
                        // onClick={OnPick()}
                        >
                            Pick
            </Button>
                    </Link>
                )
            },
        },
    ]

    const data = []
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            SaleName: `Arada${i}`,
            CustomerNo: i,
            Outlet: `Bangkok Hotel${i}`,
            Status: 'Inactive',
            Soi: `sukhumvit${i}`,
            Road: `Ploenchit${i}`,
            District: `Ploenchit${i}`,
            Province: `BKK${i}`,
            Region: 'Bangkok',
            Segmentation: 'Low-energy',
            OutletType: 'HRC',
            SubType: 'Cocktail Bar',
            Image: 'Premium',
            Volume: 'Medium',
            ExCon: `Nuetral`,
            SecCon: `Alchemy`,
            Start: '',
            End: '',
            SponsorBudget: 10000,
            ConPer: `Mr.${i}`,
            Position: `Manager`,
            ConNo: '09009090909',
            WhoSup: 'AAA',
            ETC: 'data ETC',
            AccNo: `Acc${i}`,
            PurchaseVal: 2000000,
            LightBox: 'LB',
            // Province: 'BKK',
            OPsup: 160000,
            TrentCard: 'TCard1',
            Type: `Type1`,
            MarketSup: 40000,
            PeriodCon: 6,
            TotalASup: 200000,
            OPSupRatio: 8,
            TotalAlRatio: 10,
            Consume: 40000,
            Supvisor: 'Mr.Krai',
            BDEName:'BDEN',
            Product: [
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'TM 12 Shery Oak (70 cl/12)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'TM 12 Double Cask (70 cl/12)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'TM 12 Tripples Cask (70 cl/12)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'TM 12 Tripples Cask (70 cl/6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'TM 18 Shery Oak (70 cl/12)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'TM 18 Rare Cask (70 cl/6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'TM Reflexion (70 cl/3)',
                    Status: 'No',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'HP 12 Y.O. (70 Ccl/6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'HP 18 Y.O. (70 cl/6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'HP 21 Y.O. (70 cl/6)',
                    Status: 'No',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'HP 25 Y.O. (70 cl/6)',
                    Status: 'No',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'HP 30 Y.O. (70 cl/6)',
                    Status: 'No',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'TGR 12 Vintage Reserve (70 cl/6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'TGR 2001 (70 cl/6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'TGR 1998 (70 cl/6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'TGR 1995 (70 cl/6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'The Glenrothes 12Y.O. New Soleo',
                    Status: 'No',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: `The Glenrothes Whisky Maker's Cut New Soleo`,
                    Status: 'No',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'The Glenrothes 18Y.O. New Soleo',
                    Status: 'No',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'SingleMalt',
                    ProductName: 'The Glenrothes 25Y.O. New Soleo',
                    Status: 'No',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'Blended Scoth Whisky',
                    ProductName: 'Naked Grouse (70cl /6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'Blended Scoth Whisky',
                    ProductName: 'FMG (70cl /6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'Blended Scoth Whisky',
                    ProductName: 'FMG (1ML /12)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: `RUM`,
                    ProductName: 'Brugal Ex.Dry (70cl /6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'RUM',
                    ProductName: 'Brugal Anejo (70cl /6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'RUM',
                    ProductName: 'Brugal 1888 (70cl /6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'VODKA',
                    ProductName: 'Snow Leopard (70cl /6)',
                    Status: 'Yes',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'Blended Scoth Whisky',
                    ProductName: 'Cutty Sark (70cl /6)',
                    Status: 'No',
                },
                {
                    Category: 'TEG',
                    CategoryName: 'Blended Scoth Whisky',
                    ProductName: 'Cutty Sark Storm(70cl /6)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'SingleMalt',
                    ProductName: 'BLD Octomore(70cl /6)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'SingleMalt',
                    ProductName: 'BLD Port Charlotte(70cl /6)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'SingleMalt',
                    ProductName: 'BLD Classic Laddie(70cl /6)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'CONGNAC&BRANDY',
                    ProductName: 'LOUISE XIII(70cl /6)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'CONGNAC&BRANDY',
                    ProductName: 'RM XO(70cl /12)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'CONGNAC&BRANDY',
                    ProductName: 'RM Club(70cl /12)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'CONGNAC&BRANDY',
                    ProductName: 'RM VSOP(375cl /12)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'CONGNAC&BRANDY',
                    ProductName: 'RM VSOP(70cl /6)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'CONGNAC&BRANDY',
                    ProductName: 'ST. Remy XO(70cl /6)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'CONGNAC&BRANDY',
                    ProductName: 'ST. Remy VSOP(70cl /6)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'GIN',
                    ProductName: 'Botanist(70cl /6)',
                    Status: 'Yes',
                },
                {
                    Category: 'RC',
                    CategoryName: 'RUM',
                    ProductName: 'MG XO(70cl /6)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'RUM',
                    ProductName: 'MG Black Barrel(70cl /6)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'RUM',
                    ProductName: 'MG Eclipse(70cl /6)',
                    Status: 'No',
                },
                {
                    Category: 'RC',
                    CategoryName: 'PREMIUM LIQUERER',
                    ProductName: 'Cointreau(70cl /12)',
                    Status: 'Yes',
                },
                {
                    Category: 'RC',
                    CategoryName: 'PREMIUM LIQUERER',
                    ProductName: 'Cointreau(70cl /12)',
                    Status: 'No',
                },
            ]
        })
    }

    useEffect(() => {
        console.log(data)
        return () => { }
    }, [])

    const scroll = {
        // x: '280%',
        x: true,
    }

    const OnPick = record => {
        setRecord(record)
    }
    const OnSearch = e => {
        setSearchText(e.target.va)
    }

    return (
        <div>
            <Header>
                <label>Universe</label>
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
export default UniversePage
