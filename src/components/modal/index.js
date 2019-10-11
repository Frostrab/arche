import React from 'react'
import { Modal } from 'antd'
import { Button } from '../../components'

export const ModalTemplate = props => {
  return (
    <React.Fragment>
      <Modal
        title={props.title ? props.title : 'title modal'}
        width={props.width}
        style={{ top: 20 }}
        visible={props.visible}
        onCancel={props.handleClose}
        footer={[
          <Button type="submit" onClick={props.handleClose}>
            ปิด
          </Button>,
        ]}
      >
        {props.children}
      </Modal>
    </React.Fragment>
  )
}
