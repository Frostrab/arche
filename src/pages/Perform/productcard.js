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

    const Pag ={
        pageSize:20
    }

    const data = []
    for (let i = 0; i < 100; i++) {
        if (props.REC.Product[i] !== undefined) {
            data.push(

                props.REC.Product[i]

            )
        }
    }

    const column = [
        {
            title: 'Contrat Target/Year',
            width: 100,
            children: [
                {
                    title: 'Vol(cs)',
                    dataIndex: 'CategoryName',
                    width: 100,
                    key: 'CategoryName',
                },
                {
                    title: 'Vol(btls)',
                    dataIndex: 'ProductName',
                    width: 100,
                    key: 'ProductName',
                },
                {
                    title: 'Status',
                    dataIndex: 'ProductName',
                    width: 100,
                    key: 'ProductName',
                },
            ]
        },
        {
            title: 'Total FY 1920(YTD)',
            width: 100,
            children: [
                {
                    title: 'Target Vol(blts)',
                    dataIndex: 'CategoryName',
                    width: 100,
                    key: 'CategoryName',
                },
                {
                    title: 'Actual Vol(blts)',
                    dataIndex: 'ProductName',
                    width: 100,
                    key: 'ProductName',
                },
                {
                    title: '%',
                    dataIndex: 'ProductName',
                    width: 100,
                    key: 'ProductName',
                },
                {
                    title: 'Diff(vol)',
                    dataIndex: 'ProductName',
                    width: 100,
                    key: 'ProductName',
                },
                {
                    title: 'Actual Value',
                    dataIndex: 'ProductName',
                    width: 100,
                    key: 'ProductName',
                },
            ]
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
                <TableMain data={data} column={column} Pag={Pag} />
            </div>
        </div>
    )
}
export default productcard
