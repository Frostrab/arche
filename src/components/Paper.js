import React from 'react'
import Styled from 'styled-components'
const Title = Styled.h2`
    font-size: ${props => props.size}
    padding: 10px
    color: ${props => props.color || '#000000'}
`
const TitleTab = Styled.div`
    width: 50%
    background-color:#fff
    border-radius: 10px;
    border: 1px solid  #27b6ba
    margin-bottom: 3px
`
const BodyCard = Styled.div`
    background-color: ${props => props.color || '#FFFFFF'}
    width: ${props => props.width || '100%'}
    height: '100hv';
    border:  ${props => props.color || '#000000'}
    padding: 10px;
    border-radius: 6px;
    
`
export const Paper = props => (
  <React.Fragment>
    {props.title ? (
      <TitleTab>
        <Title size="30px">{props.title}</Title>
      </TitleTab>
    ) : (
      false
    )}
    {props.children ? (
      // <span>{props.children}</span>
      <BodyCard color={props.color}>{props.children}</BodyCard>
    ) : (
      false
    )}
  </React.Fragment>
)
