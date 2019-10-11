import React from 'react'
import { Table, Divider } from 'antd'
import { Button } from '..'
export const TableEve = props => {
  const [columns] = React.useState([
    {
      title: 'เลขที่ใบประเมิน',
      dataIndex: 'key',
      key: 'age',
      width: '20%',
    },
    {
      title: 'ผู้สั่งซื้อ',
      dataIndex: 'buyer',
      key: 'age',
      width: '20%',
    },
    {
      title: 'ผู้ขาย',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
    },
    {
      title: 'ประเภทผู้ขาย',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
    },
    {
      title: '',
      key: 'tags',
      dataIndex: 'tags',
      width: '30%',
      render: tags => (
        <span>
          <Button type="view" onClick={() => props.openPreview('ประเมิน')}>
            แสดง
          </Button>
          <Button type="submit" onClick={() => props.openPreview('ประเมิน')}>
            ประเมิน
          </Button>
          <Button type="reject">ไม่ประเมิน</Button>
        </span>
      ),
    },
  ])
  const [data] = React.useState([
    {
      key: '000000',
      name: 'leaderplanet',
      age: 'A2',
      address: 'New York No. 1 Lake Park',
      buyer: 'BRB',
      tags: ['nice', 'developer'],
    },
    {
      key: '000001',
      name: 'leaderplanet',
      age: 'A2',
      buyer: 'BRB',
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '0000002',
      name: 'leaderplanet',
      age: 'A2',
      buyer: 'BRB',
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ])
  return <Table columns={columns} dataSource={data} size={'medium'} />
}
