import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import { Card, Button, Input, Icon } from 'antd'
import TableMain from '../../components/tablemain/index'

const Header = styled.div`
    font-size: 30px
    color: black
    display: flex
`

const productcard = props => {

    console.log('PropDat', props.data1)


    const Pag = {
        pageSize: 20
    }

    const data = []
    for (let i = 0; i < 150; i++) {
        if (props.REC.Product[i] !== undefined) {
            data.push(
                {
                    ProductName: props.REC.Product[i].ProductName,
                    Category: props.REC.Product[i].Category,
                    CategoryName: props.REC.Product[i].CategoryName,
                    Volblts: props.REC.Volblts,
                    Packing: props.REC.Packing,
                    Approx: props.REC.Approx,
                }
            )
        }
    }

    const column = [
        {
            title: 'Product',
            dataIndex: 'ProductName',
            width: 200,
            key: 'ProductName',

        },
        {
            title: 'Contrat Target/Year',
            width: 100,
            children: [
                {
                    title: 'Vol(cs)',

                    width: 100,
                    render: (text, record) => {

                        var result = record.Volblts / record.Packing
                        var ResString = result.toString()
                        var newRes = ResString.substring(0, 4)
                        return (
                            <p> {newRes}</p>
                        )
                    }
                },
                {
                    title: 'Vol(btls)',
                    dataIndex: 'Volblts',
                    width: 100,
                    key: 'Volblts',
                },
                {
                    title: 'Value',
                    width: 100,
                    render: (text, record) => {
                        var val = record.Volblts * record.Approx
                        return (
                            <p>{val}</p>
                        )
                    }
                },
            ]
        },
        {
            title: 'Total FY 1920(YTD)',
            width: 100,
            children: [
                {
                    title: 'Target Vol(blts)',
                    dataIndex: 'Volblts',
                    width: 100,
                   
                },
                {
                    title: 'Actual Vol(blts)',
                    width: 100,
                    render: (text, record) => {
                        return (<p>3</p>)
                    }
                },
                {
                    title: '%',
                    width: 100,
                    render: (text, record) => {
                        return (<p>300%</p>)
                    }
                },
                {
                    title: 'Diff(vol)',
                    width: 100,
                    render: (text, record) => {
                        return (<p>-2</p>)
                    }
                },
                {
                    title: 'Actual Value',
                    width: 100,
                    render: (text, record) => {
                        var ActVal = record.Approx * 3
                        return (
                            <p>{ActVal}</p>
                        )
                    }
                },
            ]
        },


    ]

    return (
        <div>
            <Header>
                <label>Target</label>
            </Header>
            <div
                style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    borderRadius: 5,
                    marginTop: '10px',
                }}
            >
                <TableMain data={data} column={column} Pag={Pag} />
            </div>
        </div>
    )
}
export default productcard
