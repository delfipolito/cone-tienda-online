import React from 'react'
import styled from 'styled-components'
import Dropdown from '../components/Dropdown'

const Tabs = ({ mode }) => {
  return (
    <TabsBox mode={mode}>
      <a href="https://koibanx.com/#products" target="_blank" rel="noreferrer">
        Product
      </a>
      <a href="https://koibanx.com/" target="_blank" rel="noreferrer">
        About us
      </a>
      <a href="https://contact.koibanx.com/en" target="_blank" rel="noreferrer">
        Demo
      </a>
      <Dropdown/>
    </TabsBox>
  )
}

const TabsBox = styled.div`
  display: ${props => (props.mode === 'large' ? 'flex' : 'block')};
  align-items: center;
  text-align: center;
  a {
    padding: ${props => (props.mode === 'large' ? '0 20px' : '20px 0')};
    display: flex;
    align-items: center;
    font-family: 'Poppins-Light';
    font-size: 11px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #fffbf2;
    text-transform: uppercase;
    &.language {
      font-family: 'Poppins-Bold';
    }
  }
`

export default Tabs
