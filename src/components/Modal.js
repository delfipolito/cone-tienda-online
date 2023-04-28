import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import close from '../assets/modal/close.png'
import Navbar from '../Navbar'
import check from '../assets/modal/tick.svg'
import { Ring } from '@uiball/loaders'

const Modal = ({ open, onClose }) => {
  const [contact, setContact] = useState('')
  const [sending, setSending] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  if (!open) return null

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
      <Overlay onClick={onClose}>
        <Navbar />
        <ModalContainer
          onClick={e => {
            e.stopPropagation()
          }}
        >
          {messageSent ? (
            <>
              <Sent>
                <img src={check} />
                <h2>Thanks!</h2>
                <h6>Your information was sent successfully.</h6>
                <button onClick={onClose}>
                  <p>Close</p>
                </button>
              </Sent>
            </>
          ) : (
            <>
              {sending ? (
                <>
                  <RingContainer>
                    {' '}
                    <Ring color="#ff5000" size={35} />{' '}
                  </RingContainer>
                </>
              ) : (
                <>
                  <CloseButton onClick={onClose}>
                    <img src={close} alt="close" />
                  </CloseButton>
                  <TitleContainer>
                    <h2>Get in touch!</h2>
                    <p>We will contact you as soon as possible.</p>
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

                    <Input
                      className="form-item"
                      placeholder="Phone Number"
                      value={contact.phoneNumber}
                      onChange={handleChange}
                      name="message"
                      type="text"
                      required
                    />

                    <Input
                      className="form-item"
                      placeholder="Country"
                      value={contact.country}
                      onChange={handleChange}
                      name="userEmail"
                      type="text"
                      required
                    />

                    <Input
                      className="form-item"
                      placeholder="Job Position"
                      value={contact.jopPosition}
                      onChange={handleChange}
                      name="message"
                      type="text"
                      required
                    />
                    <Input
                      className="form-item"
                      placeholder="Industry"
                      value={contact.industry}
                      onChange={handleChange}
                      name="message"
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
                </>
              )}
            </>
          )}
        </ModalContainer>
      </Overlay>
    </>
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 10px;
  right: 0 !important;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`
const ModalContainer = styled.div`
  height: 625px;
  width: 455px;
  background-color: black;
  border: 2px solid #ff5000;
  border-radius: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 75px;
  margin-left: auto;
  margin-right: 80px;
  z-index: 200;

  h2 {
    color: #ffffff;
    font-size: 18px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
  }

  p {
    color: #ffffff;
    font-size: 13px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    margin-top: -10px;
  }
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 45px;
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

const CloseButton = styled.p`
  position: relative;
  top: 61px;
  left: 391px;
  width: 30px;

  img {
    height: 30px;
    width: 30px;
  }
`

const Sent = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  img {
    height: 30px;
    width: 30px;
  }

  h6 {
    font-size: 13px;
    font-family: 'Poppins';
    font-style: normal;
    width: 170px;
    color: #ffffff;
    font-weight: 300;
    margin-top: 10px;
  }

  button {
    margin-top: 15px;
    margin-bottom: 50px;
    width: 100px;
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

const RingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default Modal
