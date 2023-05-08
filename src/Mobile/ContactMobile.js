import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'

import Navbar from '../Navbar'

const ContactMobile = () => {
  const [contact, setContact] = useState('')
  const [sending, setSending] = useState(false)
  const [messageSent, setMessageSent] = useState(false)


  const frmContact = {
    nameLastname: '',
    email: '',
    phoneNumber: '',
    country: '',
    jopPosition: '',
    industry: '',
    comments: '',
  }

  const handleChange = e => {
    const { name, value } = e.target
    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSending(true)

    emailjs
      .send(`service_lsilwkf`, `template_zefnjzw`, contact, `F-wmz4d9VI_6zEds5`)
      .then(
        response => {
          console.log(`SUCCESS!`, response.status, response.text)
          setContact(frmContact)
          setSending(false)
          setMessageSent(true)
        },
        err => {
          console.log(`FAILED...`, err)
        }
      )
  }

  return (
    <>
      <Navbar />
      <ContactSection>
        <ContactContainer>
          <TitleContainer>
            <h1>Contact Us</h1>
            <h2>get in touch with us!</h2>
            <p>We will contact you shortly.</p>
          </TitleContainer>
          <Form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Input
              className="form-item"
              placeholder="Name & Last Name"
              type="text"
              required
              value={contact.nameLastname}
              name="userName"
              onChange={handleChange}
            />

            <Input
              className="form-item"
              placeholder="E-Mail"
              value={contact.email}
              onChange={handleChange}
              name="userEmail"
              type="text"
              required
            />

            <InputText
              className="form-item"
              placeholder="Comments"
              value={contact.comments}
              onChange={handleChange}
              name="message"
              type="text"
              required
            />

            <button type="submit" className="bottom-form">
              <p> Send</p>
            </button>
          </Form>
        </ContactContainer>
      </ContactSection>
    </>
  )
}

const ContactSection = styled.div`
  width: 100%;
  height: 100vh;
`
const ContactContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 150px;
  justify-content: center !important;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 45px;
  color: white;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 18px;
  }
  p {
    font-size: 11px;
    margin-top: -10px;
    margin-bottom: 40px;
  }
`

const Form = styled.form`
  list-style: none;
  text-decoration: none !important;
  font-size: 20px !important;
  text-align: center;
  align-items: flex-start;
  padding-left: 35px;
  font-weight: 300;
  letter-spacing: 2px;
  vertical-align: middle !important;
  display: flex;
  flex-direction: column;

  button {
    margin-top: 15px;
    margin-bottom: 50px;
    width: 150px;
    height: 38px;
    background-color: black;
    border-radius: 20px;
    border: 2px solid #ff5000;

    p {
      color: #ff5000;
      margin: auto;
      font-size: 14px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
    }
  }
`

const Input = styled.input`
  width: 82%;
  height: 33px;
  margin: 7px 0;
  background-color: black;
  border-radius: 20px;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding-left: 15px;
`

const InputText = styled.input`
  width: 82%;
  height: 80px;
  margin: 7px 0;
  background-color: black;
  border-radius: 20px;
  border: 1px solid #ffffff;
  padding-left: 15px;
`

export default ContactMobile
