import React, { useState, useEffect } from 'react'
import {
  Table,
  Icon,
  Menu,
  Dropdown,
  Button,
  Modal,
  Input,
  Card,
  Row,
  Col,
  Form,
  Select,
} from 'antd'

import axios from 'axios'

const MainCard = props => {
  useEffect(() => {
    console.log('Main Card', props.REC)
  })

  const [Rowstyle] = useState({
    gutter: 16,
  })

  return (
    <div>
      <Row style={{ Rowstyle, marginTop: '15px' }}>
        <Col span={3}>
          <span>Outlet</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.Outlet}</span>
        </Col>
        <Col span={3}>
          <span>Account Number</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.AccNo}</span>
        </Col>
        <Col span={3}>
          <span>Puchasing Value</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.PurchaseVal}</span>
        </Col>
        <Col span={3}>
          <span>Light Box</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.LightBox}</span>
        </Col>
      </Row>
      {/* Row 2 */}
      <Row style={{ Rowstyle }}>
        <Col span={3}>
          <span>Area/Province</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.Province}</span>
        </Col>
        <Col span={3}>
          <span>Address</span>
        </Col>
        <Col span={3}>
          <span>
            {props.REC.Road} {props.REC.Soi}
          </span>
        </Col>
        <Col span={3}>
          <span>Trade A&P (OP Supoort)</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.OPsup}</span>
        </Col>
        <Col span={3}>
          <span>Trent Card</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.TreantCard}</span>
        </Col>
      </Row>
      {/* Row 3 */}
      <Row style={{ Rowstyle }}>
        <Col span={3}>
          <span>Type/Subtype</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.Type}</span>
        </Col>
        <Col span={3}>
          <span></span>
        </Col>
        <Col span={3}>
          <span></span>
        </Col>
        <Col span={3}>
          <span>Consumer A&P (Marketing Support)</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.MarketSup}</span>
        </Col>
        <Col span={3}>
          <span>Menu</span>
        </Col>
        <Col span={3}>
          <span>Result 4</span>
        </Col>
      </Row>
      {/* Row 4 */}
      <Row style={{ Rowstyle }}>
        <Col span={3}>
          <span>Period of Contract</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.PeriodCon} Month</span>
        </Col>
        <Col span={3}>
          <span></span>
        </Col>
        <Col span={3}>
          <span></span>
        </Col>
        <Col span={3}>
          <span>Total Alchemy's Support</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.TotalASUP}</span>
        </Col>
        <Col span={3}>
          <span>Jose Shot Machine</span>
        </Col>
        <Col span={3}>
          <span>Result 4</span>
        </Col>
      </Row>
      {/* Row 5 */}
      <Row style={{ Rowstyle }}>
        <Col span={3}>
          <span>BDE Name</span>
        </Col>
        <Col span={3}>
          <span></span>
        </Col>
        <Col span={3}>
          <span>Contract Person</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.ConPer}</span>
        </Col>
        <Col span={3}>
          <span>% OP Support Ratio</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.OPSupRatio} %</span>
        </Col>
        <Col span={3}>
          <span>Refrigerator</span>
        </Col>
        <Col span={3}>
          <span>Result 4</span>
        </Col>
      </Row>
      {/* Row 6 */}
      <Row style={{ Rowstyle }}>
        <Col span={3}>
          <span>Supervisor Name</span>
        </Col>
        <Col span={3}>
          <span></span>
        </Col>
        <Col span={3}>
          <span>Position</span>
        </Col>
        <Col span={3}>
          <span></span>
        </Col>
        <Col span={3}>
          <span>%Marketing Support Ratio</span>
        </Col>
        <Col span={3}>
          <span>2%</span>
        </Col>
        <Col span={3}>
          <span>Glasses</span>
        </Col>
        <Col span={3}>
          <span>Result 4</span>
        </Col>
      </Row>
      {/* Row 7 */}
      <Row style={{ Rowstyle }}>
        <Col span={3}>
          <span>Type of Contract</span>
        </Col>
        <Col span={3}>
          <span></span>
        </Col>
        <Col span={3}>
          <span>Contract Number</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.ConNo}</span>
        </Col>
        <Col span={3}>
          <span>%Total Alchemy Ratio</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.TotalAlRatio} %</span>
        </Col>
        <Col span={3}>
          <span>ETC</span>
        </Col>
        <Col span={3}>
          <span>{props.REC.ETC}</span>
        </Col>
      </Row>
    </div>
  )
}
export default MainCard
