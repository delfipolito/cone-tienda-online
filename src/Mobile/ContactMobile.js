import React, { useState, useEffect } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Navbar from "../Navbar";
import { FormattedMessage } from "react-intl";
import { Ring } from "@uiball/loaders";
import check from "../assets/modal/tick.svg";
import close from "../assets/modal/close.png";


const ContactMobile = () => {
  const [contact, setContact] = useState("");
  const [language, setLanguage] = useState("");
  const [sending, setSending] = useState(false);

  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    setLanguage(localStorage.getItem("locale"));
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    try {
      emailjs
        .send(
          `service_mgl9rwi`,
          `template_h1xkft1`,
          contact,
          `unlrlZtJhRdSyvGxq`
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
            setMessageError(true);
          }
        );
    } catch {
      setSending(false);
      setMessageError(true);
    }
  };

  const enPlaceholder = ["Name & Last Name", "E-mail", "Comments"];
  const esPlaceholder = ["Nombre & Apellido", "E-mail", "Comentarios"];

  return (
    <>
      <Navbar />
      <ContactSection>
        <ContactContainer>
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
                </Message>
              </MessageContainer>
            </>
          ) : messageError ? (
            <>
              <MessageContainer>
                <Message>
                  <img src={close} alt="check" />
                  <h2>
                    <FormattedMessage id="getintouch.wrong.title" />
                  </h2>
                  <h6>
                    <FormattedMessage id="getintouch.wrong.subtitle" />
                  </h6>
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
                  <TitleContainer>
                    <h1>
                      {" "}
                      <FormattedMessage id="contactmobile.title" />
                    </h1>
                    <h2>
                      {" "}
                      <FormattedMessage id="contactmobile.subtitle1" />
                    </h2>
                    <p>
                      <FormattedMessage id="contactmobile.subtitle2" />
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
                        language === "es" ? esPlaceholder[0] : enPlaceholder[0]
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
                        language === "es" ? esPlaceholder[1] : enPlaceholder[1]
                      }
                      value={contact.email}
                      onChange={handleChange}
                      name="email"
                      type="text"
                      required
                    />

                    <InputText
                      className="form-item"
                      placeholder={
                        language === "es" ? esPlaceholder[2] : enPlaceholder[2]
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
                        <FormattedMessage id="contactmobile.button" />
                      </p>
                    </button>
                  </Form>
                </>
              )}
            </>
          )}
        </ContactContainer>
      </ContactSection>
    </>
  );
};

const ContactSection = styled.div`
  width: 100%;
  height: 100vh;
`;
const ContactContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 150px;
  justify-content: center !important;
`;

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

const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center !important;
  margin: auto;

  h2 {
    color: #ffffff;
    font-size: 18px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
  }

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
    text-align: center;
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

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center;
  padding-top: 150px;
`;

const RingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  margin-top: -80px;
`;

export default ContactMobile;
