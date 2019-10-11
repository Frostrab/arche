import React from 'react'
import { Col, Row, Select, Input } from 'antd'
const { Option } = Select
export const EVACreateForm = () => {
  return (
    <div>
      <Row gutter={24} style={{ padding: 5 }}>
        <Col className="gutter-row" span={8} style={{ textAlign: 'right' }}>
          <div className="gutter-box">
            <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>*</i>
            <label>Template แบบประเมิน:</label>
          </div>
        </Col>
        <Col className="gutter-row" span={8} style={{ textAlign: 'left' }}>
          <div className="gutter-box">
            <Select
              placeholder={'Templateแบบประเมิน'}
              style={{ width: '100%' }}
            >
              <Option value="jack">Template1</Option>
              <Option value="lucy">Template2</Option>
              <Option value="Yiminghe">Template 3</Option>
            </Select>
          </div>
        </Col>
      </Row>
      <Row gutter={24} style={{ padding: 5 }}>
        <Col className="gutter-row" span={8} style={{ textAlign: 'right' }}>
          <div className="gutter-box">
            <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>*</i>
            <label>รอบการประเมิน :</label>
          </div>
        </Col>
        <Col className="gutter-row" span={8} style={{ textAlign: 'left' }}>
          <div className="gutter-box">
            <Select placeholder={'รอบการประเมิน'} style={{ width: '100%' }}>
              <Option value="jack">2562/1</Option>
              <Option value="lucy">2562/2</Option>
              <Option value="Yiminghe">2562/3</Option>
            </Select>
          </div>
        </Col>
      </Row>
      <Row gutter={24} style={{ padding: 5 }}>
        <Col className="gutter-row" span={8} style={{ textAlign: 'right' }}>
          <div className="gutter-box">
            <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>*</i>
            <label>ประเภทผู้ขาย :</label>
          </div>
        </Col>
        <Col className="gutter-row" span={8} style={{ textAlign: 'left' }}>
          <div className="gutter-box">
            <Select placeholder={'ประเภทผู้ขาย'} style={{ width: '100%' }}>
              <Option value="jack">A1</Option>
              <Option value="lucy">A2</Option>
              <Option value="Yiminghe">A3</Option>
            </Select>
          </div>
        </Col>
      </Row>
      <Row gutter={24} style={{ padding: 5 }}>
        <Col className="gutter-row" span={8} style={{ textAlign: 'right' }}>
          <div className="gutter-box">
            <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>*</i>
            <label>เลือกกลุ่มจัดซื้อ :</label>
          </div>
        </Col>
        <Col className="gutter-row" span={8} style={{ textAlign: 'left' }}>
          <div className="gutter-box">
            <Select placeholder={'เลือกกลุ่มจัดซื้อ'} style={{ width: '100%' }}>
              <Option value="jack">นาย ทดสอบ 1</Option>
              <Option value="lucy">นาย ทดสอบ 2</Option>
              <Option value="Yiminghe">นาย ทดสอบ 3</Option>
            </Select>
          </div>
        </Col>
      </Row>
      <Row gutter={24} style={{ padding: 5 }}>
        <Col className="gutter-row" span={8} style={{ textAlign: 'right' }}>
          <div className="gutter-box">
            <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>*</i>
            <label>เลือกผู้ประเมิน :</label>
          </div>
        </Col>
        <Col className="gutter-row" span={8} style={{ textAlign: 'left' }}>
          <div className="gutter-box">
            <Select placeholder={'เลือกผู้ประเมิน'} style={{ width: '100%' }}>
              <Option value="jack">นาย ทดสอบ 1</Option>
              <Option value="lucy">นาย ทดสอบ 2</Option>
              <Option value="Yiminghe">นาย ทดสอบ 3</Option>
            </Select>
          </div>
        </Col>
      </Row>
    </div>
  )
}
