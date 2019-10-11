import React from 'react'
import { List, Avatar, Table } from 'antd'
import styled from 'styled-components'
import { Button } from '../../components/button/button'
const ListControl = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5px;
`
export const ListData = props => {
  const handleApprove = () => {
    props.openDrawer(true)
  }
  const handleDelete = () => {
    props.openDrawer(true)
  }
  const handleEdit = () => {
    props.openDrawer(true)
  }
  const handleCopy = () => {
    props.openDrawer(true)
  }
  const handleView = () => {
    props.openDrawer(true)
  }
  const handlePreview = () => {
    props.openDrawer(true)
  }
  const handleReject = () => {
    props.openDrawer(true)
  }
  return (
    <React.Fragment>
      <ListControl>
        <List
          size={props.size}
          header={<h2>{props.header}</h2>}
          itemLayout={props.itemLayout || 'horizontal'}
          dataSource={props.data || []}
          bordered={props.bordered}
          style={{
            backgroundColor: '#fff',
            width: props.width,
          }}
          renderItem={(item, key) => (
            <List.Item
              actions={[
                <div>
                  {props.view ? (
                    <span style={{ marginRight: 5 }}>
                      <Button onClick={handleView} type={'view'}>
                        แสดง
                      </Button>
                    </span>
                  ) : (
                    ''
                  )}
                  {props.edit ? (
                    <span style={{ marginRight: 5 }}>
                      <Button onClick={handleEdit} type={'edit'}>
                        แก้ไข
                      </Button>
                    </span>
                  ) : (
                    ''
                  )}
                  {props.delete ? (
                    <span style={{ marginRight: 5 }}>
                      <Button onClick={handleDelete} type={'delete'}>
                        ลบ
                      </Button>
                    </span>
                  ) : (
                    ''
                  )}
                  {props.preview ? (
                    <span style={{ marginRight: 5 }}>
                      <Button onClick={handlePreview} type={'preview'}>
                        ภาพตัวอย่าง
                      </Button>
                    </span>
                  ) : (
                    ''
                  )}
                  {props.approve ? (
                    <span style={{ marginRight: 5 }}>
                      <Button onClick={handleApprove} type={'approve'}>
                        อนุมัติ
                      </Button>
                    </span>
                  ) : (
                    ''
                  )}
                  {props.reject ? (
                    <span style={{ marginRight: 5 }}>
                      <Button type={'reject'} onClick={handleReject}>
                        ไม่อนุมัติ
                      </Button>
                    </span>
                  ) : (
                    ''
                  )}
                  {props.copy ? (
                    <span style={{ marginRight: 5 }}>
                      <Button type={'copy'} onClick={handleCopy}>
                        คัดลอก
                      </Button>
                    </span>
                  ) : (
                    ''
                  )}
                </div>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    size={48}
                    icon={props.icon}
                    style={{
                      color: '#000000',
                      backgroundColor: '#fff',
                    }}
                  />
                }
                title={
                  <div style={{ fontSize: '16px' }}>{item.title || ''}</div>
                }
                description={item.description || ''}
              />
            </List.Item>
          )}
        />
      </ListControl>
    </React.Fragment>
  )
}
