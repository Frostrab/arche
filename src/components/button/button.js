import React from 'react'
import Styled from 'styled-components'
import { Icon } from 'antd'
const ButtonCustom = Styled.button`
  cursor: pointer;
  font-size: 14px;
  border-radius: 3px;
  background: #ffffff
  margin-bottom: ${props => props.marginBottom || '0'}
  width: ${props => props.width}
  height: ${props => props.height}
  &:hover{
    border-color:black
  }
  ${props => {
    if (props.type === 'approve') {
      return `
      &:hover {
        background-color: #52c41a;
        color: white;
      }
      border-color:#52c41a
      color: #52c41a
    `
    } else if (props.type === 'submit') {
      return `
    &:hover {
      background-color: #a9690f;
      color: white;
      border-color:black
    }
    border-color: #a9690f
    color: #a9690f
  `
    } else if (props.type === 'reject') {
      return `
      &:hover {
        background-color: #fa541c;
        color: white;
        border-color:black
      }
      border-color: #fa541c
      color: #fa541c
    `
    } else if (props.type === 'preview') {
      return `
      &:hover {
        background-color: #13c2c2;
        color: white;
        border-color:black
      }
      border-color: #13c2c2
      color: #13c2c2
    `
    } else if (props.type === 'view') {
      return `
      &:hover {
        background-color: #13c2c2;
        color: white;
        border-color:black
      }
      border-color:#13c2c2
      color: #13c2c2
    `
    } else if (props.type === 'edit') {
      return `
      &:hover {
        background-color: #fa8c16;
        color: white;
        border-color:black
      }
      border-color:#fa8c16
      color: #fa8c16
    `
    } else if (props.type === 'login') {
      return `
    &:hover {
      background-color: #ffffff;
      color: #000000;
      border-color:#95de64
    }
    background-color:#95de64
    border-color:#e8e8e8
    color: #000000
  `
    } else if (props.type === 'add') {
      return `
    &:hover {
      background-color: #adc6ff;
      color: #fff;
      border-color:black
    }
    border-color:#adc6ff
    color: #000000
  `
    } else if (props.type === 'copy') {
      return `
      &:hover {
        background-color: #0050b3;
        color: white;
        border-color:black
      }
      border-color:#0050b3
      color: #0050b3
  `
    } else if (props.type === 'delete') {
      return `
      &:hover {
        background-color: #f5222d;
        color: white;
      }
      border-color:#f5222d
      color: #f5222d
  `
    } else {
      return `
      border-color:#000000
      color: #000000`
    }
  }};
  border: 1px solid ;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
`
const _checkForIcon = i => {
  switch (i) {
    case 'approve':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="check-circle" />
        </span>
      )
    case 'submit':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="check-circle" />
        </span>
      )
    case 'reject':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="close-circle" />
        </span>
      )
    case 'preview':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="zoom-in" />
        </span>
      )
    case 'view':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="zoom-in" />
        </span>
      )
    case 'edit':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="edit" />
        </span>
      )
    case 'login':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="login" />
        </span>
      )
    case 'copy':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="copy" />
        </span>
      )
    case 'add':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="plus-circle" />
        </span>
      )
    case 'delete':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="delete" />
        </span>
      )

    default:
      return false
  }
}
export const Button = props => (
  <ButtonCustom
    type={props.type}
    onClick={props.onClick}
    height={props.height}
    width={props.width}
    marginBottom={props.marginBottom}
  >
    {_checkForIcon(props.type)}
    {props.children}
  </ButtonCustom>
)
