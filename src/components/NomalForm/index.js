import React from 'react'
import { Form, Input, Row, Col, Avatar } from 'antd'
import {
  Button,
  SelectTemplate,
  ModalTemplate,
  EveForm,
} from '../../components'

const RegistrationForm = props => {
  const [viewSelect, setViewSelect] = React.useState()
  const [openModal, setOpenModal] = React.useState(false)
  const [levelPoint, setLevelPoint] = React.useState({
    key: 1,
    label: '3 ระดับคะแนน',
  })
  const [grade, setGrade] = React.useState({
    key: 1,
    label: 'หลักเกณฑ์การประเมินสำหรับ กลางปี',
  })
  const [criteria, setCriteria] = React.useState({
    key: 1,
    label: 'หลักเกณฑ์ประจำ weighting key A2',
  })
  const openPreview = selected => {
    setOpenModal(true)
    setViewSelect(selected)
  }
  const handleModalClose = () => {
    setOpenModal(false)
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  }
  return (
    <React.Fragment>
      <ModalTemplate
        title={viewSelect}
        visible={openModal}
        handleClose={handleModalClose}
        width={'80%'}
      >
        <EveForm />
      </ModalTemplate>
      <Form {...formItemLayout}>
        <Form.Item label="ชื่อ Template">
          <Input />
        </Form.Item>
        <Form.Item label="หลักเกณฑ์(Criteria)">
          <Row gutter={8}>
            <Col span={20}>
              <SelectTemplate
                name={'Criteria'}
                data={[
                  { id: 1, name: 'หลักเกณฑ์ประจำ weighting key A2' },
                  { id: 2, name: 'หลักเกณฑ์ประจำ weighting key A1' },
                ]}
                defaultValue={criteria}
                onChange={e => setCriteria(e)}
                width={'100%'}
              />
            </Col>
            <Col span={4}>
              <Avatar
                size={30}
                icon="search"
                style={{
                  backgroundColor: '#fff',
                  color: '#262626',
                  borderColor: '#000000',
                  border: '2px solid #1890ff',
                  cursor: 'pointer',
                }}
                onClick={() => openPreview(criteria.label)}
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label="เกณฑ์การประเมิณ">
          <Row gutter={8}>
            <Col span={20}>
              <SelectTemplate
                name={'grade'}
                data={[
                  { id: 1, name: 'หลักเกณฑ์การประเมินสำหรับ กลางปี' },
                  { id: 2, name: 'หลักเกณฑ์การประเมินสำหรับ ปลายปี' },
                ]}
                defaultValue={grade}
                onChange={e => setGrade(e)}
                width={'100%'}
              />
            </Col>
            <Col span={4}>
              <Avatar
                size={30}
                icon="search"
                style={{
                  backgroundColor: '#fff',
                  color: '#262626',
                  borderColor: '#000000',
                  border: '2px solid #1890ff',
                  cursor: 'pointer',
                }}
                onClick={() => openPreview(grade.label)}
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label="ระดับคะแนน(Level Point)">
          <Row gutter={8}>
            <Col span={20}>
              <SelectTemplate
                name={'levelpoint'}
                data={[
                  { id: 1, name: '3 ระดับคะแนน' },
                  { id: 2, name: '5 ระดับคะแนน' },
                ]}
                defaultValue={levelPoint}
                onChange={e => setLevelPoint(e)}
                width={'100%'}
              />
            </Col>
            <Col span={4}>
              <Avatar
                size={30}
                icon="search"
                style={{
                  backgroundColor: '#fff',
                  color: '#262626',
                  borderColor: '#000000',
                  border: '2px solid #1890ff',
                  cursor: 'pointer',
                }}
                onClick={() => openPreview(levelPoint.label)}
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item {...tailFormItemLayout} />
      </Form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          type="view"
          width="100px"
          height="30px"
          onClick={() => openPreview('preview')}
        >
          ตัวอย่าง
        </Button>
      </div>
    </React.Fragment>
  )
}

export const WrappedNomalForm = Form.create({ name: 'register' })(
  RegistrationForm
)
