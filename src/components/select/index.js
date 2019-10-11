import React from 'react'
import { Select } from 'antd'

const { Option } = Select
export const SelectTemplate = props => {
  return (
    <Select
      labelInValue={true}
      name={props.name}
      defaultValue={props.defaultValue}
      style={{ width: props.width }}
      onChange={props.onChange}
    >
      {props.data.map(item => (
        <Option value={item.id}>{item.name}</Option>
      ))}
    </Select>
  )
}
