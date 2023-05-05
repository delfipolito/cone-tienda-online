import React, { useRef, useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from 'react-router-dom'
import { Controller, Scene } from 'react-scrollmagic'
import Sequence from './Cubo/Sequence'
import Absolute from './main/Absolute'
import Build from './main/Build'
import Solutions from './main/Solutions'
import Customers from './main/Customers'
import Press from './main/Press'
import Investors from './main/Investors'
import Platform from './main/Platform'
import Footer from './Footer'
import Navbar from './Navbar'
import About from './About'
import Jobs from './Jobs'
import Modal from './components/Modal'
import CryptoCheckout from './Crypto-checkout'
import TransactionalCore from './Transactional-core'
import { animateScroll } from 'react-scroll'
import { FormattedMessage } from 'react-intl'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/transactional-core" element={<TransactionalCore />} />
        <Route path="/crypto-checkout" element={<CryptoCheckout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  const ref = useRef()

  const [openModal, setOpenModal] = useState(false)

  const closing = () => {
    setOpenModal(false)
    document.body.style.overflow = 'auto'
  }

  const opening = () => {
    setOpenModal(true)
    document.body.style.overflow = 'hidden'
  }

  return (
    <AppDiv className="App">
      <Navbar />
      <Button onClick={() => opening()}>
        <p> <FormattedMessage id="hero.button" /></p>
      </Button>
      <Modal open={openModal} onClose={() => closing()} />
      <Cubo>
        <Controller>
          <Scene duration="70%" triggerHook="onLeave" pin>
            {progress => (
              <div style={{ height: '100vh', position: 'relative' }}>
                <Sequence ref={ref} progress={progress} />

                <Absolute />
              </div>
            )}
          </Scene>
        </Controller>
      </Cubo>
      <Customers />
      <Platform />
      <Solutions />
      <Press />
      <Investors />

      <Footer />
    </AppDiv>
  )
}

const AppDiv = styled.div``
const RelativeSection = styled.div`
  position: relative;
  height: 20px;
  background: red;
`

const Cubo = styled.div`
  top: 0;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`

const Button = styled.button`
  position: fixed;
  top: 100px;
  right: 80px;
  background-color: black;
  border: 1.5px solid #ff5000;
  height: 40px;
  width: 150px;
  border-radius: 20px;
  z-index: 100;

  p {
    color: #ffffff;
    font-size: 14px;
    margin: auto;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
  }
`
export default App
