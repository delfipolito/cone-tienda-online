import React from 'react'
import styled from 'styled-components'
import Dropdown from '../components/Dropdown'
import { Link } from "react-router-dom";

const Tabs = ({ mode }) => {
  return (
    <TabsBox mode={mode}>
      <a href="https://koibanx.com/#products" target="_blank" rel="noreferrer">
        platform
      </a>
      <a href="https://koibanx.com/" target="_blank" rel="noreferrer">
        Solutions
      </a>
      <Link to={'about'}>
        About us
      </Link>
      <Dropdown />
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
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #fffbf2;
    text-transform: uppercase;
    text-decoration: none;
    &.language {
      font-family: Poppins;
      font-weight: 700;
    }
  }
`

export default Tabs
