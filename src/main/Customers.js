import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loop from './Loop'
import davivienda from '../assets/clients-koi/davivienda.svg'
import bancoDeValores from '../assets/clients-koi/banco-de-valores.svg'
import macro from '../assets/clients-koi/macro.svg'
import abank from '../assets/clients-koi/abank.svg'
import rus from '../assets/clients-koi/rus.svg'
import { FormattedMessage } from 'react-intl'

function useDeviceSize() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return [width, height]
}


const Customers = () => {
  const [width] = useDeviceSize()
  const medium = 700
  return (
    <CustomersSection>
      <CustomersContainer>
        {width >= medium && <CustomersTitle>  <FormattedMessage id="customers.text" /></CustomersTitle>}
        <Loop
          reverse={true}
          content={
            <>
              <img
                src={davivienda}
                alt="Davivienda"
                width={150}
                height={50}
              />
              <img
                src={macro}
                alt="macro"
                width={150}
                height={50}
              />
              <img
                src={abank}
                alt="abank"
                width={150}
                height={50}
              />
              <img
                src={bancoDeValores}
                alt="banco de valores"
                width={150}
                height={50}
              />
              <img
                src={rus}
                alt="rus"
                width={150}
                height={50}
              />
              <img
                src={davivienda}
                alt="Davivienda"
                width={150}
                height={50}
              />
              <img
                src={macro}
                alt="macro"
                width={150}
                height={50}
              />
              <img
                src={abank}
                alt="abank"
                width={150}
                height={50}
              />
              <img
                src={bancoDeValores}
                alt="banco de valores"
                width={150}
                height={50}
              />
              <img
                src={rus}
                alt="rus"
                width={150}
                height={50}
              />
            </>
          }
        />
      </CustomersContainer>
    </CustomersSection>
  )
}

const CustomersSection = styled.div`
  height: auto;
  position: relative;
  width: 100%;
  margin: auto;
  margin-top: -500px;
  background: transparent;
  padding: 20px 80px;
  overflow: hidden;
  z-index: 30;
  box-sizing: border-box;
`

const CustomersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
  img {
    padding: 0 20px;
  }
`

const CustomersTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #ffffff;
  min-width: 270px;
  margin: 0;
  text-align: left;
  color: #FF5900;
`

export default Customers
