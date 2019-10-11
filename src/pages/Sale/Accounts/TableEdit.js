import React from 'react'
import { Table, Input, Button, Popconfirm, Form, Select, Modal } from 'antd'
import { DatePicker } from 'antd'
import axios from 'axios'
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

export default class EditableTable extends React.Component {
  constructor(props) {
    super(props)
    this.columns = [
      {
        title: 'Product ID',
        dataIndex: 'productId',
        width: '10%',
        editable: true,
      },
      {
        title: 'Product Name',
        dataIndex: 'productName',
        width: '30%',
        editable: true,
      },
      {
        title: 'Contract Price',
        dataIndex: 'contractPrince',
        editable: true,
      },
      {
        title: '',
        dataIndex: 'operation',
        width: '10%',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <Button type="danger">Delete</Button>
            </Popconfirm>
          ) : null,
      },
    ]

    this.state = {
      dataSource: [],
      productName: '',
      contractPrince: 0,

      ProductList: [],
      Producid: 0,

      MainContract: '',
      Contract1: '',
      StartDate: '',
      EndDate: '',
      StartDateText: '',
      EndDateText: '',
      productStatus: 'UnActive',

      btnSubmitloading: false,
      btnSaveloading: false,
    }
  }
  onChange = value => {
    this.setState({ Producid: value })
    console.log(`selected ${value}`)
  }

  onBlur = () => {
    console.log('blur')
  }

  onFocus = () => {
    console.log('focus')
  }

  onSearch = val => {
    console.log('search:', val)
  }
  handleProductNameChange = e => {
    e.preventDefault()
    this.setState({ productName: e.target.value })
  }
  handleContractPrinceChange = e => {
    e.preventDefault()
    this.setState({ contractPrince: e.target.value })
  }
  handleDelete = key => {
    const dataSource = [...this.state.dataSource]
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) })
  }

  handleAdd = async () => {
    const { count, dataSource } = this.state
    const res = await axios.get(
      `http://ams.leaderplanet.co.th/archemyApi/api/Product/GetDetail?id=${this.state.Producid}`
    )
    await this.setState({ productName: res.data.productName })
    const newData = await {
      productId: this.state.Producid,
      productName: this.state.productName,
      contractPrince: parseInt(this.state.contractPrince),
    }
    await this.setState({
      dataSource: [...dataSource, newData],
      productName: '',
      contractPrince: 0,
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
  async componentDidMount() {
    await console.log(this.state)
    const res = await axios.get(
      `http://ams.leaderplanet.co.th/archemyApi/api/Product/GetList`
    )
    await this.setState({ ProductList: res.data })
  }
  onStartDateChange = (date, dateString) => {
    this.setState({ StartDate: date, StartDateText: dateString })
  }
  onEndDateChange = (date, dateString) => {
    this.setState({ EndDate: date, EndDateText: dateString })
  }
  handleMainContractChange = e => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({ MainContract: e.target.value })
  }
  handleContract1Change = e => {
    e.preventDefault()
    this.setState({ Contract1: e.target.value })
  }
  handleSetValue = e => {
    this.setState({
      MainContract: '',
      Contract1: '',
      StartDate: '',
      EndDate: '',
      StartDateText: '',
      EndDateText: '',
      productStatus: 'UnActive',
      dataSource: [],
      Producid: 0,
    })
  }
  handleContractSubmit = e => {
    this.setState({ btnSubmitloading: true })
    e.preventDefault()
    const dataSend = {
      id: 0,
      accountId: this.props.selected.id,
      accountName: this.props.selected.accountName,
      mainContract: this.state.MainContract,
      contract1: this.state.Contract1,
      startDateString: this.state.StartDateText,
      endDateString: this.state.EndDateText,
      status: this.state.productStatus,
      contractItems: this.state.dataSource,
    }
    axios
      .post(
        `http://ams.leaderplanet.co.th/archemyApi/api/Contract/Submit`,
        dataSend
      )
      .then(res => {
        this.setState({ btnSubmitloading: false })
        this.props.handleModal()
        this.handleSetValue()
      })
  }

  handleContractSave = e => {
    this.setState({ btnSaveloading: true })
    e.preventDefault()
    const dataSend = {
      id: 0,
      accountId: this.props.selected.id,
      accountName: this.props.selected.accountName,
      mainContract: this.state.MainContract,
      contract1: this.state.Contract1,
      startDateString: this.state.StartDateText,
      endDateString: this.state.EndDateText,
      status: this.state.productStatus,
      contractItems: this.state.dataSource,
    }
    axios
      .post(
        `http://ams.leaderplanet.co.th/archemyApi/api/Contract/SaveDraft`,
        dataSend
      )
      .then(res => {
        this.setState({ btnSaveloading: false })
        this.props.handleModal()
        this.handleSetValue()
      })
  }

  statushandleChange = val => {
    this.setState({ productStatus: 'Active' })
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
        <Modal
          title="New Contract"
          visible={this.props.modalContract}
          width="1000px"
          style={{ top: 20 }}
          onCancel={() => {
            this.props.handleModal()
            this.setState({
              btnSubmitloading: false,
              btnSaveloading: false,
            })
            this.handleSetValue()
          }}
          footer={[
            <Button
              type="danger"
              key="back"
              onClick={() => {
                this.props.handleModal()
                this.setState({
                  btnSubmitloading: false,
                  btnSaveloading: false,
                })
                this.handleSetValue()
              }}
            >
              Cancle
            </Button>,
            <Button
              type="primary"
              loading={this.state.btnSaveloading}
              onClick={e => this.handleContractSave(e)}
            >
              Save
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={this.state.btnSubmitloading}
              onClick={e => this.handleContractSubmit(e)}
            >
              Submit
            </Button>,
          ]}
        >
          {
            <div>
              <div style={{ display: 'flex', margin: 5 }}>
                <div
                  style={{ width: '40%', textAlign: 'right', marginRight: 5 }}
                >
                  AccountName:
                </div>
                <div style={{ width: '60%' }}>
                  <Input
                    value={this.props.selected.accountName}
                    // onChange={e => this.handleContactNameChange(e)}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', margin: 5 }}>
                <div
                  style={{ width: '40%', textAlign: 'right', marginRight: 5 }}
                >
                  MainContract:
                </div>
                <div style={{ width: '60%' }}>
                  <Input
                    value={this.state.MainContract}
                    onChange={e => this.handleMainContractChange(e)}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', margin: 5 }}>
                <div
                  style={{ width: '40%', textAlign: 'right', marginRight: 5 }}
                >
                  Contract1:
                </div>
                <div style={{ width: '60%' }}>
                  <Input
                    value={this.state.Contract1}
                    onChange={e => this.handleContract1Change(e)}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', margin: 5 }}>
                <div
                  style={{ width: '40%', textAlign: 'right', marginRight: 5 }}
                >
                  StartDate:
                </div>
                <div style={{ width: '60%' }}>
                  <DatePicker
                    onChange={this.onStartDateChange}
                    value={this.state.StartDate}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', margin: 5 }}>
                <div
                  style={{ width: '40%', textAlign: 'right', marginRight: 5 }}
                >
                  EndDate:
                </div>
                <div style={{ width: '60%' }}>
                  <DatePicker
                    onChange={this.onEndDateChange}
                    value={this.state.EndDate}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', margin: 5 }}>
                <div
                  style={{ width: '40%', textAlign: 'right', marginRight: 5 }}
                >
                  Status:
                </div>
                <div style={{ width: '60%' }}>
                  <Select
                    defaultValue={'UnActive'}
                    style={{ width: 120 }}
                    onChange={this.statushandleChange}
                  >
                    <Option value={'Active'}>Active</Option>
                    <Option value={'UnActive'}>UnActive</Option>
                  </Select>
                </div>
              </div>
              <hr />
              <div style={{ display: 'flex', margin: 5 }}>
                <div style={{ width: '40%', textAlign: 'right' }}>
                  Product Name:
                </div>
                <div style={{ widht: '60%' }}>
                  <Select
                    value={this.state.Producid}
                    showSearch
                    style={{ width: 400 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSearch={this.onSearch}
                  >
                    <Option value={0}>เลือก สินค้า</Option>
                    {this.state.ProductList.map(items => (
                      <Option value={items.id}>{items.productName}</Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div style={{ display: 'flex', margin: 5 }}>
                <div style={{ width: '40%', textAlign: 'right' }}>Price:</div>
                <div style={{ widht: '60%' }}>
                  <Input
                    value={this.state.contractPrince}
                    onChange={e => this.handleContractPrinceChange(e)}
                    type="number"
                  />
                </div>
              </div>
              <hr />
              <Button
                onClick={this.handleAdd}
                type="primary"
                style={{ marginBottom: 16 }}
              >
                Add a row
              </Button>
              <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
              />
            </div>
          }
        </Modal>
      </div>
    )
  }
}
