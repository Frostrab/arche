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
    display: flex`

    



    const column = [
        {
            title: 'Sale Name',
            dataIndex: 'SaleName',
            width: 100,
            key: 'SaleName',
            fixed: 'left',
            
        //     filters: [
        //         {
        //             text: 'A',
        //             value: 'A',
        //         },
        //     ],
        //     filterDropdown: () => (
        //         <div className="custom-filter-dropdown" style={{ padding: 8 }}>
        //             <Input
        //                 placeholder="Search name"
        //                 // value={searchText}
        //                 // onChange={e => setSearchText(e.target.value)}
        //                 // onPressEnter={this.onSearch}
        //                 style={{ width: 188, marginBottom: 8, display: 'block' }}
        //             />
        //             <Button
        //                 type="primary"
        //                 style={{ width: 90, marginRight: 8 }}
        //             // onClick={onSearch()}
        //             >
        //                 Search
        //   </Button>
        //         </div>
        //     ),
        //     filterIcon: filtered => (
        //         <Icon
        //             type="search"
        //             style={{ color: filtered ? '#1890ff' : undefined }}
        //         />
        //     ),

        //     onFilterDropdownVisibleChange: visible => setFDDV({ visible }),
        //     sorter: (a, b) => a.SaleName.length - b.SaleName.length,
        //     sorterDirections: ['ascend', 'descend'],
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
            align:'center',
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

    const data = [{
        SaleName: `Arada`,
        CustomerNo: `A1`,
        Outlet: `Roswood Bangkok Hotel`,
        Status: 'Inactive',
        Soi: `sukhumvit`,
        Road: `Ploenchit`,
        District: `Ploenchit`,
        Province: `BKK`,
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
        ConPer: `Mr.`,
        Position: `Manager`,
        ConNo: '09009090909',
        WhoSup: 'AAA',
        ETC: 'data ETC',
        AccNo: `Acc`,
        PurchaseVal: 2000000,
        LightBox: 'LB',
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
        BDEName: 'BDEN',
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
            {
                Category: 'Proximo',
                CategoryName: 'Irish Whiskey',
                ProductName: 'BM Original(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Irish Whiskey',
                ProductName: 'BM Black(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Irish Whiskey',
                ProductName: 'BM 10 Y.O.(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Irish Whiskey',
                ProductName: 'BM 16 Y.O.(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Irish Whiskey',
                ProductName: 'BM 21 Y.O.(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'JS ES Silver(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'JS ES Repo(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'JS Tr. Silver(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'JS Tr. Repo(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'JS Platino(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'JS Reserva De La Familia(75cl /3)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: '1800 Silver(75cl /12)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: '1800 Repo(75cl /12)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: '1800 Coconut(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: '1800 Anejo(75cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'Boodles(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'Kraken(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'WT 81(75cl /12)',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'WT American Honey(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'WT 101(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'Wild Turky Rye(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'WT Rare Breed(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'Russel Reserve(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'Russel Reserve 10 Y.O.(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'WT Forgiven(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'WT Master 17 Y.O.(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'Vodka',
                ProductName: 'Sky Vodka(70cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'Vodka',
                ProductName: 'Skyy Citrus(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'Vodka',
                ProductName: 'Skyy Raspberry(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'Vodka',
                ProductName: 'Skyy Passion Fruit(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'Vodka',
                ProductName: 'Skyy 90 Luxury(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'GIN',
                ProductName: 'BullDog(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'RUM',
                ProductName: 'APT Whit Jamica(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'RUM',
                ProductName: 'APT Special Jamica(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'RUM',
                ProductName: 'APT Estate Signature(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'RUM',
                ProductName: 'APT Estate Reserve 12 Y.O.(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'RUM',
                ProductName: 'APT Estate 21 Y.O. Jamica(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'RUM',
                ProductName: 'Waray & Nephew OP Jamica(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Grand Manier(70cl /12)',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Grand Manier Centenaire(70cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'OTHER LIQUEUR',
                ProductName: 'Frangelico(70cl /6',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'APERITIVE & BITTER',
                ProductName: 'Aperol(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'APERITIVE & BITTER',
                ProductName: 'Campri(75cl /12)',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'Cynar',
                ProductName: 'Aperol(70cl /12)',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'VERMOUTH',
                ProductName: 'CIN Rosso(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'VERMOUTH',
                ProductName: 'Cin Extra Dry(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'VERMOUTH',
                ProductName: 'Cin Bianco(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'VERMOUTH',
                ProductName: 'Cin 1757 Rosso(1Lte /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'VERMOUTH',
                ProductName: 'Cin 1757 Extra Dry(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'VERMOUTH',
                ProductName: 'Cinzano 1757 Vermouth Bianco',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'SPARKLING WINE',
                ProductName: 'Gran Cin Dolce(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'SPARKLING WINE',
                ProductName: 'Cin Pino Char Brut(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'SPARKLING WINE',
                ProductName: 'Cin Prosecco(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'SPARKLING WINE',
                ProductName: 'Sagatiba(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'TEQUILA',
                ProductName: 'Expolon Reposado(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'TEQUILA',
                ProductName: 'Expolon Blanco(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'APPERITIVE & BITTER',
                ProductName: 'Amaro Averna29%(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'TEQUILA',
                ProductName: 'Braulio Bormio Amaro Alpino 21%(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'VODKA',
                ProductName: 'Bols Vodka(70ML /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'VODKA',
                ProductName: 'Bols Vodka(1Ltr /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'GIN',
                ProductName: 'Bols GNV(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'GIN',
                ProductName: 'Damrak(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'GIN',
                ProductName: 'Silver Top(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Tripplesec(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Elder Flower(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Amaretto(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Appricot Brandy(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Blue Curacao(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Cherry Brandy(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Banana(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Bols Crème de cassis(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Cacao Brown(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Dry Orange(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Lychee(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Melon(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Peach(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Stawberry(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Sour Apple(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Pepermint Green(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'OTHER LIQUEUR',
                ProductName: 'Galliano(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'OTHER LIQUEUR',
                ProductName: 'Vaccari Sambuca(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'Fourpillar Rare Dry(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'Fourpillar Bloody Shiraz(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'Fourpillar Spiced Negroni(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'Fourpillar Barrel Aged(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'London No.3(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'Fer. Saar Dry(50cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'Fer. Saar Quince(50cl /6)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'OTHER LIQUEURS',
                ProductName: 'Licor 43(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'OTHER LIQUERES',
                ProductName: `King's Ginger(70cl /6)`,
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'Thomas Henry',
                ProductName: 'Tonic(20ml /24)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'Thomas Henry',
                ProductName: 'Spiced ginger(20ml /24)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'Thomas Henry',
                ProductName: 'Cherry Blossom(20ml /24)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'Thomas Henry',
                ProductName: 'Elder Flower(20ml /24)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'REKORDERLING CIDER',
                ProductName: 'Stawberry Lime(33ml /24)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'REKORDERLING CIDER',
                ProductName: 'Mango Raspberry(33ml /24)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'REKORDERLING CIDER',
                ProductName: 'Pasion Fruit(33ml /24)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'REKORDERLING CIDER',
                ProductName: 'Wild Berries(33ml /24)',
                Status: 'No',
            },

        ]
    },
    {
        SaleName: `Arada`,
        CustomerNo: `A1`,
        Outlet: `W Hotel Bangkok`,
        Status: 'Inactive',
        Soi: ``,
        Road: `Sathorn Neu`,
        District: `Sathorn`,
        Province: `BKK`,
        Region: 'Bangkok',
        Segmentation: 'Low-energy',
        OutletType: 'HRC',
        SubType: 'Cocktail Bar',
        Image: 'Premium',
        Volume: 'Medium',
        ExCon: `Pernod Ricard`,
        SecCon: `Alchemy`,
        Start: '01/04/2019',
        End: '31/01/2020',
        SponsorBudget: 214417,
        ConPer: `K.Andy`,
        Position: `F&B Manager`,
        ConNo: '09009090909',
        WhoSup: 'CN Liqour / V',
        ETC: 'data ETC',
        AccNo: `Acc`,
        PurchaseVal: 2000000,
        LightBox: 'LB',
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
        BDEName: 'BDEN',
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
            {
                Category: 'Proximo',
                CategoryName: 'Irish Whiskey',
                ProductName: 'BM Original(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Irish Whiskey',
                ProductName: 'BM Black(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Irish Whiskey',
                ProductName: 'BM 10 Y.O.(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Irish Whiskey',
                ProductName: 'BM 16 Y.O.(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Irish Whiskey',
                ProductName: 'BM 21 Y.O.(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'JS ES Silver(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'JS ES Repo(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'JS Tr. Silver(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'JS Tr. Repo(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'JS Platino(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'JS Reserva De La Familia(75cl /3)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: '1800 Silver(75cl /12)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: '1800 Repo(75cl /12)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: '1800 Coconut(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: '1800 Anejo(75cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'Boodles(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Proximo',
                CategoryName: 'Tequila',
                ProductName: 'Kraken(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'WT 81(75cl /12)',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'WT American Honey(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'WT 101(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'Wild Turky Rye(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'WT Rare Breed(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'Russel Reserve(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'Russel Reserve 10 Y.O.(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'WT Forgiven(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'American Whisky',
                ProductName: 'WT Master 17 Y.O.(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'Vodka',
                ProductName: 'Sky Vodka(70cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'Vodka',
                ProductName: 'Skyy Citrus(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'Vodka',
                ProductName: 'Skyy Raspberry(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'Vodka',
                ProductName: 'Skyy Passion Fruit(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'Vodka',
                ProductName: 'Skyy 90 Luxury(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'GIN',
                ProductName: 'BullDog(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'RUM',
                ProductName: 'APT Whit Jamica(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'RUM',
                ProductName: 'APT Special Jamica(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'RUM',
                ProductName: 'APT Estate Signature(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'RUM',
                ProductName: 'APT Estate Reserve 12 Y.O.(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'RUM',
                ProductName: 'APT Estate 21 Y.O. Jamica(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'RUM',
                ProductName: 'Waray & Nephew OP Jamica(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Grand Manier(70cl /12)',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Grand Manier Centenaire(70cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'OTHER LIQUEUR',
                ProductName: 'Frangelico(70cl /6',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'APERITIVE & BITTER',
                ProductName: 'Aperol(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'APERITIVE & BITTER',
                ProductName: 'Campri(75cl /12)',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'Cynar',
                ProductName: 'Aperol(70cl /12)',
                Status: 'Yes',
            },
            {
                Category: 'Campari',
                CategoryName: 'VERMOUTH',
                ProductName: 'CIN Rosso(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'VERMOUTH',
                ProductName: 'Cin Extra Dry(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'VERMOUTH',
                ProductName: 'Cin Bianco(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'VERMOUTH',
                ProductName: 'Cin 1757 Rosso(1Lte /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'VERMOUTH',
                ProductName: 'Cin 1757 Extra Dry(75cl /12)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'VERMOUTH',
                ProductName: 'Cinzano 1757 Vermouth Bianco',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'SPARKLING WINE',
                ProductName: 'Gran Cin Dolce(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'SPARKLING WINE',
                ProductName: 'Cin Pino Char Brut(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'SPARKLING WINE',
                ProductName: 'Cin Prosecco(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'SPARKLING WINE',
                ProductName: 'Sagatiba(75cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'TEQUILA',
                ProductName: 'Expolon Reposado(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'TEQUILA',
                ProductName: 'Expolon Blanco(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'APPERITIVE & BITTER',
                ProductName: 'Amaro Averna29%(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Campari',
                CategoryName: 'TEQUILA',
                ProductName: 'Braulio Bormio Amaro Alpino 21%(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'VODKA',
                ProductName: 'Bols Vodka(70ML /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'VODKA',
                ProductName: 'Bols Vodka(1Ltr /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'GIN',
                ProductName: 'Bols GNV(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'GIN',
                ProductName: 'Damrak(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'GIN',
                ProductName: 'Silver Top(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Tripplesec(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Elder Flower(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Amaretto(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Appricot Brandy(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Blue Curacao(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Cherry Brandy(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Banana(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Bols Crème de cassis(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Cacao Brown(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Dry Orange(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Lychee(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Melon(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Peach(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Stawberry(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Sour Apple(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'PREMIUM LIQUEUR',
                ProductName: 'Bols Pepermint Green(70cl /6)',
                Status: 'No',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'OTHER LIQUEUR',
                ProductName: 'Galliano(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Lucas bols',
                CategoryName: 'OTHER LIQUEUR',
                ProductName: 'Vaccari Sambuca(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'Fourpillar Rare Dry(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'Fourpillar Bloody Shiraz(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'Fourpillar Spiced Negroni(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'Fourpillar Barrel Aged(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'London No.3(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'Fer. Saar Dry(50cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'GIN',
                ProductName: 'Fer. Saar Quince(50cl /6)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'OTHER LIQUEURS',
                ProductName: 'Licor 43(70cl /6)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'OTHER LIQUERES',
                ProductName: `King's Ginger(70cl /6)`,
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'Thomas Henry',
                ProductName: 'Tonic(20ml /24)',
                Status: 'Yes',
            },
            {
                Category: 'Independent',
                CategoryName: 'Thomas Henry',
                ProductName: 'Spiced ginger(20ml /24)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'Thomas Henry',
                ProductName: 'Cherry Blossom(20ml /24)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'Thomas Henry',
                ProductName: 'Elder Flower(20ml /24)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'REKORDERLING CIDER',
                ProductName: 'Stawberry Lime(33ml /24)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'REKORDERLING CIDER',
                ProductName: 'Mango Raspberry(33ml /24)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'REKORDERLING CIDER',
                ProductName: 'Pasion Fruit(33ml /24)',
                Status: 'No',
            },
            {
                Category: 'Independent',
                CategoryName: 'REKORDERLING CIDER',
                ProductName: 'Wild Berries(33ml /24)',
                Status: 'No',
            },

        ]
    }
    ]


    useEffect(() => {
        console.log(data)
        return () => { }
    }, [])

    const scroll = {
        x: '225%',
        // x: true,
    }
    const Pag = {
        pageSize:4
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
                <TableMain scroll={scroll} column={column} data={data} Pag={Pag}/>
            </div>
        </div>
    )
}
export default UniversePage
