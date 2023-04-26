import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { Controller, Scene } from 'react-scrollmagic'
import Sequence from './Sequence'

const Scroll = () => {
  const ref = useRef()
  return (
    <Controller>
      <Scene duration="200%" triggerHook="onLeave" pin>
        {progress => (
          <div style={{ height: '100vh', position: 'relative' }}>
            <Sequence ref={ref} progress={progress} />
          </div>
        )}
      </Scene>
    </Controller>
  )
}

export default Scroll
