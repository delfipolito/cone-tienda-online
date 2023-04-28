import React, { useRef, useEffect, useCallback } from 'react'
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
import CryptoCheckout from './Crypto-checkout'
import TransactionalCore from './Transactional-core'
import { animateScroll } from 'react-scroll'

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

  return (
    <AppDiv className="App">
      <Navbar/>
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
export default App
