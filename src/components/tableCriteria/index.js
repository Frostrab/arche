import React from 'react'
import { Table, Input, Popconfirm, Form } from 'antd'
import { Select } from 'antd'
import { Button } from '../../components'
const { Option } = Select
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

export class EditableTableCriteria extends React.Component {
  constructor(props) {
    super(props)
    this.columns = [
      {
        title: 'ชื่อกลุ่มตัวชี้วัด',
        dataIndex: 'name',
        width: '70%',
        // editable: true,
        render: (text, record) => (
          <Select
            // defaultValue="lucy"
            style={{ width: '100%' }}
            placeholder="เลือกกลุ่มตัวชี้วัด"
          >
            <Option value="คุณภาพของงาน">คุณภาพของงาน</Option>
            <Option value="ระยะเวลาดำเนินงาน">ระยะเวลาดำเนินงาน</Option>
            <Option value="บุคลากร">บุคลากร</Option>
            <Option value="การประสานงาน">การประสานงาน</Option>
            <Option value="การจัดทำรายงาน">การจัดทำรายงาน</Option>
          </Select>
        ),
      },
      {
        title: 'คะแนน',
        dataIndex: 'operation',
        render: (text, record) => (
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="jack">10</Option>
            <Option value="lucy">20</Option>
            <Option value="Yiminghe">30</Option>
          </Select>
        ),
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
          key: '0',
          name: 'Edward King 0',
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
      name: `Edward King ${count}`,
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
          เพิ่มหลักเกณฑ์
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          footer={() => <div style={{ textAlign: 'end' }}>คะแนนรวม : 0</div>}
        />
      </div>
    )
  }
}
