import React, { useState } from 'react'
import { Form, Input, Select, Card, Row, Col } from 'antd'
import { Button } from '../../components'

const { Option } = Select

export const WrappedGradeForm = props => {
  const [descList, setDescList] = useState([
    {
      gradeStart: '90',
      gradeEnd: '100',
      textTH: 'ดีมาก',
      textEN: 'Execellent',
    },
    { gradeStart: '80', gradeEnd: '79', textTH: 'ดี', textEN: 'Good' },
  ])
  const [listArray, setList] = useState([{ id: 1 }, { id: 2 }])
  const handlePush = () => {
    console.log(listArray)
    listArray.push({ id: 4 })
  }
  return (
    <React.Fragment>
      <div style={{ color: '#000000' }}>
        {' '}
        <Row gutter={24}>
          <Col className="gutter-row" span={8} style={{ textAlign: 'right' }}>
            <div className="gutter-box">
              <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>*</i>
              <label>ชื่อ เกณฑ์การประเมิน(Grade) :</label>
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
          <Button
            type="submit"
            width="200px"
            height="30px"
            onClick={() => handlePush()}
          >
            เพิ่มหลักเกณฑ์การประเมิน
          </Button>
        </div>
        <hr />
        {console.log(listArray)}
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
                  <label>คะแนนเริ่มต้น :</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={3}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Select defaultValue="0" style={{ width: 70 }}>
                    <Option value="100">100</Option>
                    <Option value="90">90</Option>
                    <Option value="80">80</Option>
                  </Select>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={5}
                style={{ marginTop: 5, textAlign: 'right' }}
              >
                <div className="gutter-box">
                  <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>
                    *
                  </i>
                  <label>คะแนนสิ้นสุด :</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={3}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Select defaultValue="0" style={{ width: 70 }}>
                    <Option value="100">100</Option>
                    <Option value="90">90</Option>
                    <Option value="80">80</Option>
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
                  <label>ระดับหลักเกณฑ์ :</label>
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
                  <label>Grade :</label>
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
