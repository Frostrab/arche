import React from 'react'
import { Layout, Icon } from 'antd'
import Styled from 'styled-components'
const { Header } = Layout
const UserLogin = Styled.div`
  margin-right:5px
`
const styleForAnt = {
  header: {
    background: '#000b38',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    color: '#fff',
  },
  icon: {
    marginTop: 20,
    marginLeft: 5,
    fontSize: '20px',
    pointer: 'cursor',
    right: {
      fontSize: '20px',
      pointer: 'cursor',
    },
  },
}
const HeaderTab = props => (
  <Header style={styleForAnt.header}>
    <Icon
      className="trigger"
      type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={props.toggle}
      style={styleForAnt.icon}
    />
    {/* <UserLogin>
      คุณ {props.user.firstNameTH} {props.user.lastNameTH}{' '}
      <Icon
        type="logout"
        style={styleForAnt.icon.right}
        onClick={() => console.log('test')}
      />
    </UserLogin> */}
  </Header>
)
export default HeaderTab
