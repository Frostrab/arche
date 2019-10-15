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
  Descriptions,
  
} from 'antd'

import axios from 'axios'

const MainCard = props => {
 

  return (
    <div>
      <Descriptions
       bordered
       column={{ xxl: 4, xl: 3, lg: 3, md: 2, sm: 2, xs: 1 }}
      >
          <Descriptions.Item label='outlet'>{props.REC.Outlet}</Descriptions.Item>
          <Descriptions.Item label='Account Number'>{props.REC.AccNo}</Descriptions.Item>
          <Descriptions.Item label='Purchase Value'>{props.REC.PurchaseVal}</Descriptions.Item>
          <Descriptions.Item label='LightBox'>{props.REC.LightBox}</Descriptions.Item>

          <Descriptions.Item label='Area/Province'>{props.REC.Province}</Descriptions.Item>
          <Descriptions.Item label='Address'>{props.REC.Road} {props.REC.Soi}</Descriptions.Item>
          <Descriptions.Item label='Trade A&P(OP Support)'>{props.REC.OPsup}</Descriptions.Item>
          <Descriptions.Item label='Tent Card'>{props.REC.TrentCard}</Descriptions.Item>
    
          <Descriptions.Item label='Type/Subtype'>{props.REC.Type}</Descriptions.Item>
          {/* <Descriptions.Item label=''></Descriptions.Item> */}
          <Descriptions.Item label='Consumer A&P(Market Support)'>{props.REC.Consume}</Descriptions.Item>
          <Descriptions.Item label='Menu'></Descriptions.Item>

          <Descriptions.Item label='Period Contract'>{props.REC.PeriodCon} Month</Descriptions.Item>
          {/* <Descriptions.Item label=''></Descriptions.Item> */}
          <Descriptions.Item label='Total Alchemy Support '>{props.REC.OPsup + props.REC.Consume}</Descriptions.Item>
          <Descriptions.Item label='Jose shot machine'></Descriptions.Item>

          <Descriptions.Item label='BDE Name'>{props.REC.BDEName}</Descriptions.Item>
          <Descriptions.Item label='Contact person'>{props.REC.ConPer}</Descriptions.Item>
          <Descriptions.Item label='%OP Support Ratio'>{props.REC.OPSupRatio} %</Descriptions.Item>
          <Descriptions.Item label='Refidgerator'></Descriptions.Item>

          <Descriptions.Item label='Supervisor Name'>{props.REC.Supvisor}</Descriptions.Item>
          <Descriptions.Item label='Position'>{props.REC.Position}</Descriptions.Item>
          <Descriptions.Item label='%Market Support Ratio'>{props.REC.MarketSup}</Descriptions.Item>
          <Descriptions.Item label='Glasses'></Descriptions.Item>

          <Descriptions.Item label='Type of Contract'>{props.REC.Type}</Descriptions.Item>
          <Descriptions.Item label='Contract Number'>{props.REC.AccNo}</Descriptions.Item>
          <Descriptions.Item label='%Total Alchemy Ratio'>{props.REC.TotalAlRatio} %</Descriptions.Item>
          <Descriptions.Item label='ETC'>{props.REC.ETC}</Descriptions.Item>

      </Descriptions>
    </div>
  )
}
export default MainCard
