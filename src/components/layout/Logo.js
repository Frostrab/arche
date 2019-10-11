import React from 'react'
import styled from 'styled-components'
const Logo = styled.div`
  height: 58px;
  background: #000b38;
  margin: 2px;
  display: flex;
  justify-content: center;
`
const InLogo = styled.span`
display: flex
align-items: center;
font-size: 30px
color:#fdbc00
`
const LogoTab = props => (
  <Logo>
    <InLogo>{props.logoText}</InLogo>
  </Logo>
)
export default LogoTab
