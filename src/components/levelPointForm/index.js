import React, { useState } from 'react'
import { Input, Select, Col, Row, Card } from 'antd'
import { Button } from '../../components'

const { Option } = Select

export const WrappedLevelPointForm = props => {
  const [descList, setDescList] = useState([
    { levelpoint: '5', textTH: 'ดีมาก', textEN: 'Execellent' },
    { levelpoint: '4', textTH: 'ดี', textEN: 'good' },
  ])
  return (
    <React.Fragment>
      <div style={{ color: '#000000' }}>
        {' '}
        <Row gutter={24}>
          <Col className="gutter-row" span={8} style={{ textAlign: 'right' }}>
            <div className="gutter-box">
              <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>*</i>
              <label>ชื่อระดับคะแนน :</label>
            </div>
          </Col>
          <Col className="gutter-row" span={16} style={{ textAlign: 'left' }}>
            <div className="gutter-box">
              <Input />
            </div>
          </Col>
        </Row>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
        >
          <Button type="submit" width="200px" height="30px">
            เพิ่มระดับคะแนน
          </Button>
        </div>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card hoverable style={{ width: 650 }}>
            <Row gutter={24} style={{ marginTop: 5 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ textAlign: 'right' }}
              >
                <div className="gutter-box">
                  <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>
                    *
                  </i>
                  <label>อัตราส่วนของระดับคะแนน :</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={3}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Select defaultValue="0" style={{ width: 70 }}>
                    <Option value="100">3</Option>
                    <Option value="90">4</Option>
                    <Option value="80">5</Option>
                  </Select>
                </div>
              </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: 5 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ textAlign: 'right' }}
              >
                <div className="gutter-box">
                  <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>
                    *
                  </i>
                  <label>ชื่อระดับคะแนนภาษาไทย :</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={16}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Input style={{ width: '100%' }} />
                </div>
              </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: 5 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ textAlign: 'right' }}
              >
                <div className="gutter-box">
                  <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>
                    *
                  </i>
                  <label>ชื่อระดับคะแนนภาษาอังกฤษ :</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={16}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Input style={{ width: '100%' }} />
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </React.Fragment>
  )
}
