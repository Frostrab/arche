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
        {
            title: 'Status',
            dataIndex: 'Status',
            width: '10%',
            align:'center',
            key: 'Status',
            render: Status => {
                switch (Status) {
                    case 'Yes':
                        return (
                            <Icon type="check" />
                        );
                        break;
                    case 'No':
                        return (
                            <Icon type="close" />
                        );
                        break;
                }
            }
        },
        {
            title: 'Operation',
            width: '10%',
            align:'center',
            render: (text, record) => {

                return (
                    <Button type='ghost'>
                        Edit
                    </Button>
                )
            },
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
