import React from 'react'
import { Select, Table, Input, DatePicker, Form } from 'antd'
import { Button } from '../../components'
const { Option } = Select

const { MonthPicker, RangePicker, WeekPicker } = DatePicker
const EditableContext = React.createContext()

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
)

const EditableFormRow = Form.create()(EditableRow)
class EditableCell extends React.Component {
  state = {
    editing: false,
  }

  toggleEdit = () => {
    const editing = !this.state.editing
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus()
      }
    })
  }

  save = e => {
    const { record, handleSave } = this.props
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return
      }
      this.toggleEdit()
      handleSave({ ...record, ...values })
    })
  }

  renderCell = form => {
    this.form = form
    const { children, dataIndex, record, title } = this.props
    const { editing } = this.state
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(
          <Input
            ref={node => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
          />
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    )
  }

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    )
  }
}

export class EditableTablePerformanceGroup extends React.Component {
  constructor(props) {
    super(props)
    this.columns = [
      {
        title: 'ตัวชี้วัด',
        dataIndex: 'name',
        width: '90%',
        render: (text, record) => (
          <Select defaultValue="1" style={{ width: '100%' }}>
            <Option value="1">
              งานออกแบบมีความชัดเจนเหมาะสมต่อการใช้งานและspec ตรงตามความต้องการ
            </Option>
            <Option value="2">
              แผนการดำเนินงานสอดคล้อง และตรงตามความต้องการ
            </Option>
            <Option value="3">งานแล้วเสร็จตามระยะเวลาที่กำหนด</Option>
            <Option value="4">มีความชำนาญในการออกแบบในโครงการนั้นๆ</Option>
            <Option value="5">
              สามารถให้คำปรึกษางานออกแบบ
              และแนวทางในการแก้ไขที่ถูกต้องในกรณีมีปัญหาเกิดขึ้น{' '}
            </Option>
          </Select>
        ),
      },
      {
        title: '',
        dataIndex: '',
        width: '10%',
        render: (text, record) => <Button type="delete">ลบ</Button>,
        // this.state.dataSource.length >= 1
        //   ? <Popconfirm
        //       title="Sure to delete?"
        //       onConfirm={() => this.handleDelete (record.key)}
        //     >
        //       <a>Delete</a>
        //     </Popconfirm>
        //   : null,
      },
    ]

    this.state = {
      dataSource: [
        {
          key: '1',
          name: 'ครั้งที่1',
          start: '2019-01-01',
          finish: '2019-06-30',
          age: '32',
          address: 'London, Park Lane no. 0',
        },
      ],
      count: 2,
    }
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource]
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) })
  }

  handleAdd = () => {
    const { count, dataSource } = this.state
    const newData = {
      key: count,
      name: `ครั้งที่ ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    }
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    })
  }

  handleSave = row => {
    const newData = [...this.state.dataSource]
    const index = newData.findIndex(item => row.key === item.key)
    const item = newData[index]
    newData.splice(index, 1, {
      ...item,
      ...row,
    })
    this.setState({ dataSource: newData })
  }

  render() {
    const { dataSource } = this.state
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    }
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      }
    })
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="submit"
          style={{ marginBottom: 16 }}
        >
          เพิ่มตัวชี้วัด
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={true}
        />
      </div>
    )
  }
}
