import React, { useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import Sequence from './Cubo/Sequence'
import Absolute from './main/Absolute'
import Build from './main/Build'
import Solutions from './main/Solutions'
import Customers from './main/Customers'
import Press from './main/Press'
import Investors from './main/Investors'
import Footer from './Footer'
import Navbar from './Navbar'
import { animateScroll } from 'react-scroll'

function App() {
  animateScroll.duration = 1000
  const ref = useRef()
  useEffect(() => {
    const handleScroll = event => {
      if (event.deltaY > 0) {
        animateScroll.scrollMore(1)
      } else {
        animateScroll.scrollMore(-1)
      }
    }

    document.addEventListener('wheel', handleScroll)
    return () => {
      document.removeEventListener('wheel', handleScroll)
    }
  }, [])

  return (
    <AppDiv className="App">
          <Navbar />
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
          <Solutions />
          <Press />
          <Investors />
          <Build />
          <Footer />
    </AppDiv>
  )
}

const AppDiv = styled.div`

`
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
