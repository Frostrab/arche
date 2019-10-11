import React from 'react'
import { RateScore } from '../../components/Rate'
import { TableTemplate } from './table'
import { Comment } from '../../components/textarea'
import 'antd/dist/antd.css'

const columnsDefinition = [
  {
    title: 'รายละเอียดการประเมิน (Performance Item)',
    dataIndex: 'topic',
    rowKey: 'topic',
    width: '50%',
    render: (text, record) => {
      if (record.topicType === null) {
        return {
          props: {
            style: { background: record.color },
          },
          children: (
            <span style={{ marginLeft: 10 }}>
              <label style={{ marginRight: 5 }}>{record.no}</label>
              {record.topic}
            </span>
          ),
        }
      } else {
        return {
          props: {
            style: { background: record.color },
          },
          children: (
            <span style={{ fontWeight: 600 }}>
              <label style={{ marginRight: 5 }}>{record.no}</label>
              {record.topic}
            </span>
          ),
        }
      }
    },
  },
  {
    title: `หลักเกณฑ์`,
    dataIndex: 'weight',
    width: '10%',
    render(text, record) {
      return {
        props: {
          style: { background: record.color },
        },
        children: <div>{text}</div>,
      }
    },
  },
  {
    title: 'คะแนน',
    dataIndex: 'point',
    width: '12%',
    render: (text, record) => {
      if (record.topicType === null) {
        return {
          props: {
            style: { background: record.color },
          },
          children: <RateScore />,
        }
      } else {
        return {
          props: {
            style: { background: record.color },
          },
          children: false,
        }
      }
    },
  },
  {
    title: `หมายเหตุ(Commnet) (ความคิดเห็นประกอบการให้คะแนน)`,
    dataIndex: 'comment',
    render: (text, record) => {
      if (record.topicType === null) {
        return {
          props: {
            style: { background: record.color },
          },
          children: <Comment />,
        }
      } else {
        return {
          props: {
            style: { background: record.color },
          },
          children: false,
        }
      }
    },
    width: '20%',
  },
]

const data = [
  {
    no: 1,
    topic: `คุณภาพของงาน`,
    topicType: 'major',
    weight: 40,
    comment: '',
    color: '#c8cecf',
  },
  {
    no: 1.1,
    topic: `งานออกแบบมีความชัดเจนเหมาะสมต่อการใช้งานและspec ตรงตามความต้องการ`,
    topicType: null,
    weight: 20,
    comment: '',
    color: '#fff',
  },
  {
    no: 1.2,
    topic: `แผนการดำเนินงานสอดคล้อง และตรงตามความต้องการ`,
    topicType: null,
    weight: 20,
    comment: '',
    color: '#fff',
  },
  {
    no: 2,
    topic: `ระยะเวลาดำเนินงาน`,
    topicType: 'major',
    weight: 20,
    comment: '',
    color: '#c8cecf',
  },
  {
    no: 2.1,
    topic: `งานแล้วเสร็จตามระยะเวลาที่กำหนด`,
    topicType: null,
    weight: 20,
    comment: '',
    color: '#fff',
  },
  {
    no: 3,
    topic: `บุคลากร`,
    topicType: `major`,
    weight: 20,
    comment: '',
    color: '#c8cecf',
  },
  {
    no: 3.1,
    topic: `มีความชำนาญในการออกแบบในโครงการนั้นๆ`,
    topicType: null,
    weight: 10,
    comment: '',
    color: '#fff',
  },
  {
    no: 3.2,
    topic: `สามารถให้คำปรึกษางานออกแบบ และแนวทางในการแก้ไขที่ถูกต้องในกรณีมีปัญหาเกิดขึ้น	`,
    topicType: null,
    weight: 10,
    comment: '',
    color: '#fff',
  },
  {
    no: 4,
    topic: `การประสานงาน`,
    topicType: 'major',
    weight: 10,
    comment: '',
    color: '#c8cecf',
  },
  {
    no: 4.1,
    topic: `ความสามารถของทีมงานในการประสานงาน`,
    topicType: null,
    weight: 5,
    comment: '',
    color: '#fff',
  },
  {
    no: 4.2,
    topic: `สามารถติดต่อประสานงาน สะดวก รวดเร็วและพร้อมให้บริการทั้งในกรณีเร่งด่วน	`,
    topicType: null,
    weight: 5,
    comment: '',
    color: '#fff',
  },
  {
    no: 5,
    topic: `การจัดทำรายงาน`,
    topicType: `major`,
    weight: 10,
    comment: '',
    color: '#c8cecf',
  },
  {
    no: 5.1,
    topic: `มีการจัดทำรายงานความคืบหน้าของงานและFinal report เพื่อสรุปงาน`,
    topicType: null,
    weight: 10,
    comment: '',
    color: '#fff',
  },
]

class index extends React.Component {
  state = {
    columns: columnsDefinition,
    hiddenColumns: [],
    value: 3,
  }
  handleChange = value => {
    this.setState({ value })
  }
  componentWillMount() {
    const w = window.innerWidth
    if (window.innerWidth <= 320) {
      this.setState({
        columns: [this.state.columns[0]],
        hiddenColumns: [
          this.state.columns[1],
          this.state.columns[2],
          this.state.columns[3],
        ],
      })
      console.log('didmount', 320, `value :${window.innerWidth}`)
    } else if (window.innerWidth <= 480) {
      this.setState({
        columns: [this.state.columns[0]],
        hiddenColumns: [
          this.state.columns[1],
          this.state.columns[2],
          this.state.columns[3],
        ],
      })
      console.log('didmount', 480, `value :${window.innerWidth}`)
    } else if (window.innerWidth <= 768) {
      this.setState({
        columns: [
          this.state.columns[0],
          this.state.columns[1],
          this.state.columns[3],
        ],
        hiddenColumns: [this.state.columns[2], this.state.columns[5]],
      })
      console.log('didmount', 768, `value :${window.innerWidth}`)
    } else if (w <= 1024) {
      console.log('didmount', 1024, `value :${window.innerWidth}`)
    } else {
      console.log('didmount >', 1024, `value :${window.innerWidth}`)
    }
  }
  render() {
    let expandedRowRender = undefined
    if (this.state.hiddenColumns.length > 0) {
      expandedRowRender = this.renderExpandRow
    }
    console.log(`state`, this.state)
    return (
      <div>
        <div style={{ margin: '10px 10px 10px 10px' }}>
          <TableTemplate
            columns={this.state.columns}
            dataSource={data}
            pagination={{ defaultPageSize: 5 }}
            expandedRowRender={expandedRowRender}
          />
        </div>
      </div>
    )
  }
  renderExpandRow = (record, index, indent, expanded) => {
    console.log(`rec 2`, this.state.hiddenColumns[1], `state`, this.state)
    const line1 = this.state.hiddenColumns[1].title
    const line2 = this.state.hiddenColumns[2].title
    const line0 = this.state.hiddenColumns[0].title
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <span>
            <b>{line1} :</b>
          </span>
        </div>
        <div style={{ display: 'flex' }}>
          <span>
            <b>{line0} :</b>
          </span>
        </div>
        <div style={{ display: 'flex' }}>
          <span>
            <b>{line2} :</b>
          </span>
        </div>
      </div>
    )
  }
}

export default index
