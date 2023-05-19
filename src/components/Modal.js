import React, { useState, useEffect } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import close from "../assets/modal/close.png";
import Navbar from "../Navbar";
import check from "../assets/modal/tick.svg";
import { Ring } from "@uiball/loaders";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const Modal = ({ open, onClose }) => {
  const [contact, setContact] = useState("");
  const [sending, setSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [language, setLanguage] = useState("");
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    setLanguage(localStorage.getItem("locale"));
    if (inView || open) {
      controls.start("visible");
    }
    if (!open) {
      controls.start("hidden");
    }
  }, [controls, inView, open]);

  if (!open) return null;

  const handleRefresh = () => {
    setRefresh(true);
  };

  if (refresh) {
    window.location.reload();
  }

  const frmContact = {
    nameLastname: "",
    email: "",
    phoneNumber: "",
    country: "",
    jopPosition: "",
    industry: "",
    comments: "",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      emailjs
        .send(
          `service_yshmxgg`,
          `template_zwzz4ds`,
          contact,
          `m3Y00BZOBHKvMvcqx`
        )
        .then(
          (response) => {
            console.log(`SUCCESS!`, response.status, response.text);
            setContact(frmContact);
            setSending(false);
            setMessageSent(true);
          },
          (err) => {
            console.log(`FAILED...`, err);
            setSending(false);
            setMessageError(true);
          }
        );
    } catch {
      setSending(false);
      setMessageError(true);
    }
  };

  const enPlaceholder = [
    "Name & Last Name",
    "E-mail",
    "Phone Number",
    "Country",
    "Job Position",
    "Industry",
    "Comments",
  ];
  const esPlaceholder = [
    "Nombre & Apellido",
    "E-mail",
    "Teléfono",
    "País",
    "Posición de trabajo",
    "Industria",
    "Comentarios",
  ];

  return (
    <>
      <Overlay onClick={onClose}>
        <Navbar />
        <div ref={ref}>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={{
              visible: { width: "455px", height: "625px" },
              hidden: { width: "0", height: "0" },
            }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: "black",
              border: "2px solid rgb(255, 80, 0)",
              borderRadius: "44px",
              position: "absolute",
              top: "0",
              right: "0",
              marginTop: "75px",
              marginLeft: "auto",
              marginRight: "80px",
              overflow: "hidden",
            }}
          >
            <ModalContainer
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {messageSent ? (
                <>
                  <MessageContainer>
                    <Message>
                      <img src={check} alt="check" />
                      <h2>
                        <FormattedMessage id="getintouch.thanks.title" />
                      </h2>
                      <h6>
                        <FormattedMessage id="getintouch.thanks.subtitle" />
                      </h6>
                      <button onClick={onClose} className="sent">
                        <p>
                          <FormattedMessage id="getintouch.close.button" />
                        </p>
                      </button>
                    </Message>
                  </MessageContainer>
                </>
              ) : messageError ? (
                <>
                  <MessageContainer>
                    <Message>
                      <img src={check} alt="check" />
                      <h2>
                        <FormattedMessage id="getintouch.wrong.title" />
                      </h2>
                      <h6>
                        <FormattedMessage id="getintouch.wrong.subtitle" />
                      </h6>
                      <button className="error" onClick={() => handleRefresh()}>
                        <p>
                          <FormattedMessage id="getintouch.refresh.button" />
                        </p>
                      </button>
                    </Message>
                  </MessageContainer>
                </>
              ) : (
                <>
                  {sending ? (
                    <>
                      <MessageContainer>
                        <RingContainer>
                          {" "}
                          <Ring color="#ff5000" size={35} />{" "}
                        </RingContainer>
                      </MessageContainer>
                    </>
                  ) : (
                    <>
                      <CloseButton onClick={onClose}>
                        <img src={close} alt="close" />
                      </CloseButton>
                      <TitleContainer>
                        <h2>
                          {" "}
                          <FormattedMessage id="getintouch.title" />
                        </h2>
                        <p>
                          <FormattedMessage id="getintouch.subtitle" />{" "}
                        </p>
                      </TitleContainer>
                      <Form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <Input
                          className="form-item"
                          placeholder={
                            language === "es"
                              ? esPlaceholder[0]
                              : enPlaceholder[0]
                          }
                          type="text"
                          required
                          value={contact.nameLastname}
                          name="nameLastname"
                          onChange={handleChange}
                        />

                        <Input
                          className="form-item"
                          placeholder={
                            language === "es"
                              ? esPlaceholder[1]
                              : enPlaceholder[1]
                          }
                          value={contact.email}
                          onChange={handleChange}
                          name="email"
                          type="text"
                          required
                        />

                        <Input
                          className="form-item"
                          placeholder={
                            language === "es"
                              ? esPlaceholder[2]
                              : enPlaceholder[2]
                          }
                          value={contact.phoneNumber}
                          onChange={handleChange}
                          name="phoneNumber"
                          type="text"
                          required
                        />

                        <Input
                          className="form-item"
                          placeholder={
                            language === "es"
                              ? esPlaceholder[3]
                              : enPlaceholder[3]
                          }
                          value={contact.country}
                          onChange={handleChange}
                          name="country"
                          type="text"
                          required
                        />

                        <Input
                          className="form-item"
                          placeholder={
                            language === "es"
                              ? esPlaceholder[4]
                              : enPlaceholder[4]
                          }
                          value={contact.jopPosition}
                          onChange={handleChange}
                          name="jopPosition"
                          type="text"
                          required
                        />
                        <Input
                          className="form-item"
                          placeholder={
                            language === "es"
                              ? esPlaceholder[5]
                              : enPlaceholder[5]
                          }
                          value={contact.industry}
                          onChange={handleChange}
                          name="industry"
                          type="text"
                          required
                        />
                        <InputText
                          className="form-item"
                          placeholder={
                            language === "es"
                              ? esPlaceholder[6]
                              : enPlaceholder[6]
                          }
                          value={contact.comments}
                          onChange={handleChange}
                          name="comments"
                          type="text"
                          required
                        />

                        <button type="submit" className="bottom-form">
                          <p>
                            {" "}
                            <FormattedMessage id="getintouch.button" />
                          </p>
                        </button>
                      </Form>
                    </>
                  )}
                </>
              )}
            </ModalContainer>
          </motion.div>
        </div>
      </Overlay>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 10px;
  right: 0 !important;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  z-index: 200;

  h2 {
    color: #ffffff;
    font-size: 18px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
  }

  p {
    color: #ffffff;
    font-size: 13px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    margin-top: -10px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 45px;
`;

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
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
    }
  }
`;

const Input = styled.input`
  width: 82%;
  height: 33px;
  margin: 7px 0;
  background-color: black;
  border-radius: 20px;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding-left: 15px;
`;

const InputText = styled.input`
  width: 82%;
  height: 80px;
  margin: 7px 0;
  background-color: black;
  border-radius: 20px;
  border: 1px solid #ffffff;
  padding-left: 15px;
`;

const CloseButton = styled.p`
  position: relative;
  top: 61px;
  left: 391px;
  width: 30px;

  img {
    height: 30px;
    width: 30px;
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center !important;
  margin: auto;

  img {
    height: 30px;
    width: 30px;
  }

  h6 {
    font-size: 13px;
    font-family: "Poppins";
    font-style: normal;
    width: 170px;
    color: #ffffff;
    font-weight: 300;
    margin-top: 10px;
  }

  .sent {
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
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
    }
  }

  .error {
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
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
    }
  }
`;

const RingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  margin-top: -80px;
  /* align-items: center !important; */
`;

const MessageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center;
`;
export default Modal;
