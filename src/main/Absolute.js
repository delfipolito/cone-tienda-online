import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'

const Absolute = () => {
  return (
    <Relative>
    <AbsoluteSection>
      <Hero />
    </AbsoluteSection>
    </Relative>
  )
}

const Relative = styled.div`
  position: relative;
`

const AbsoluteSection = styled.div`
  position: absolute;
  top: -800px;
  left: 0;
  z-index: 3;
  box-sizing: border-box;
  left: 50%;
  bottom: 15px;
  width: 100%;
  transform: translateX(-50%);
  height: 800px;
`

export default Absolute
