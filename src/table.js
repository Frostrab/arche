import React from 'react'
import styled from 'styled-components'
const Table = styled.table`
  text-align: center;
  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 3px solid #ddd;
  width: 100%;
`
const DisplayTable = props => {
  const { list } = props
  return (
    <table
      border="1"
      width="70%"
      cellpadding="0"
      cellspacing="1"
      align="center"
    >
      <tr>
        <th rowspan="2">#</th>
        <th rowspan="2">เกณฑ์การประเมิน (Description)</th>
        <th colspan="5" align="center">
          ระดับคะแนน (Rating Scale)
        </th>
      </tr>
      <tr>
        <th>5</th>
        <th>4</th>
        <th>3</th>
        <th>2</th>
        <th>1</th>
      </tr>
      {list.map((item, id) => (
        <tr key={id}>
          <td>{item.id}</td>
          <td>{item.TitleName}</td>
          <td>
            <input type="radio" />
          </td>
          <td>
            <input type="radio" />
          </td>
          <td>
            <input type="radio" />
          </td>
          <td>
            <input type="radio" />
          </td>
          <td>
            <input type="radio" />
          </td>
        </tr>
      ))}
    </table>
  )
}
export default DisplayTable
