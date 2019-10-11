import React from 'react'
import { Popover, Icon, Table } from 'antd'
const columns = [
  {
    title: 'คะแนน',
    dataIndex: 'name',
  },
  {
    title: 'เกรด',
    dataIndex: 'age',
  },
  {
    title: 'ระดับ',
    dataIndex: 'address',
  },
]
const data = [
  {
    key: '1',
    name: '80 - 100	',
    age: 'A',
    address: 'ดีกว่ามาตราฐาน	',
  },
  {
    key: '2',
    name: '60 - 79	',
    age: 'B',
    address: 'ตามมาตราฐาน	',
  },
  {
    key: '3',
    name: '< 60	',
    age: 'C',
    address: 'ต่ำกว่ามาตราฐาน	',
  },
]
const content = <Table columns={columns} dataSource={data} pagination={false} />
export const PopoverIcon = props => {
  const [visible, setVisible] = React.useState(false)

  return (
    <Popover
      placement="top"
      content={content}
      title="เกณฑ์การประเมิน"
      trigger="click"
      visible={visible}
      onVisibleChange={setVisible}
    >
      <Icon type="info-circle" />
    </Popover>
  )
}
