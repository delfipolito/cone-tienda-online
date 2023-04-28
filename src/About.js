import React, { useState, useEffect } from 'react'
import Team from './about/Team'
import General from './about/General'
import Hiring from './about/Hiring'
import { BsChevronDown } from 'react-icons/bs'
import styled from 'styled-components'
import Footer from './Footer'
import Navbar from './Navbar'

export default function About(props) {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const [isOpen, setOpen] = useState(false)
  const medium = 700

  return (
    <>
    <Navbar/>
      <AboutSection>
        {width > medium ? (
          <BackgroundVideo
            src="https://koibanx.com/videos/AboutUs_1440x900_03.mp4"
            autoPlay
            loop
            muted
          />
        ) : (
          <BackgroundVideo
            src="https://koibanx.com/videos/MobileAboutUs1440x900-02.mp4"
            autoPlay
            loop
            muted
          />
        )}
      </AboutSection>
      <General />
      <Team />
      <Hiring />
      <Footer />
    </>
  )
}

const AboutSection = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: auto;
  background: transparent;
  position: relative;
  text-align: left;
  box-sizing: border-box;
`

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`
