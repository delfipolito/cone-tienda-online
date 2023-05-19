import React, { useState, useEffect } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { FormattedMessage } from "react-intl";
import { Ring } from "@uiball/loaders";
import check from "../assets/modal/tick.svg";
import close from "../assets/modal/close.png";

const JobsForm = () => {
  const [contact, setContact] = useState("");
  // const [selectedFile, setSelectedFile] = useState(null);
  const [language, setLanguage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);

  const frmContact = {
    nameLastname: "",
    email: "",
    phoneNumber: "",
    jopPosition: "",
  };

  useEffect(() => {
    setLanguage(localStorage.getItem("locale"));
  }, []);

  // const handleFileSelect = (event) => {
  //   setSelectedFile(event.target.files[0]);
  //   console.log("selected file", selectedFile);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true);

    // if (selectedFile) {
    //   const fileData = new FormData();
    //   fileData.append("file", selectedFile);
    //   contact["file"] = fileData;
    // }

    try {
      emailjs
        .send(
          `service_yshmxgg`,
          `template_4srxrsh`,
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
            setMessageError(true);
          }
        );
    } catch {
      setSending(false);
      setMessageError(true);
    }

    event.target.reset();
  };

  const enPlaceholder = [
    "Name & Last Name",
    "E-mail",
    "Phone Number",
    "Position",
  ];
  const esPlaceholder = [
    "Nombre & Apellido",
    "E-mail",
    "Teléfono",
    "Posición de trabajo",
  ];

  return (
    <>
      <JobsFormSection>
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
                    <Ring color="#ff5000" size={30} />{" "}
                  </RingContainer>
                </MessageContainer>
              </>
            ) : (
              <>
                <JobsFormContainer>
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

                    <Input
                      className="form-item"
                      placeholder={
                        language === "es" ? esPlaceholder[2] : enPlaceholder[2]
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
                        language === "es" ? esPlaceholder[3] : enPlaceholder[3]
                      }
                      value={contact.jopPosition}
                      onChange={handleChange}
                      name="jopPosition"
                      type="text"
                      required
                    />

                    {/* <input type="file" onChange={handleFileSelect} />
            {selectedFile ? (
              <>
                <p style={{ color: "red" }}>{selectedFile.name}</p>
              </>
            ) : (
              <></>
            )} */}

                    <button type="submit" className="bottom-form">
                      <p>
                        {" "}
                        <FormattedMessage id="jobsform.button" />
                      </p>
                    </button>
                  </Form>
                </JobsFormContainer>
              </>
            )}
          </>
        )}
      </JobsFormSection>
    </>
  );
};

const JobsFormSection = styled.div`
  position: fixed;
  right: 100px;
  z-index: 100;

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background-color: #1b1b1b;
    width: 100%;
    bottom: 0;
    right: 0;
  }
`;
const JobsFormContainer = styled.div`
  width: 409px;

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0px;
    width: 70%;
  }
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 80px;
    bottom: 0px;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    padding-left: 30px;
  }
`;

const Form = styled.form`
  list-style: none;
  text-decoration: none !important;
  text-align: center;
  align-items: flex-start;
  vertical-align: middle !important;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1200px) {
    max-width: 600px;
    min-width: 500px;
  }

  @media only screen and (max-width: 600px) {
    padding-left: 0px;

    min-width: 500px;
  }

  @media only screen and (max-width: 430px) {
    padding-left: 0px;

    min-width: 400px;
  }

  button {
    margin-top: 15px;
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

    @media only screen and (max-width: 1200px) {
      width: 120px;
      height: 32px;
      margin-top: 10px;
      margin-bottom: 10px;

      p {
        font-size: 12px;
      }
    }
  }
`;

const Input = styled.input`
  width: 90%;
  height: 40px;
  margin: 7px 0;
  background-color: #282828;
  border-radius: 20px;
  border: 1px solid #282828;
  color: #ffffff;
  padding-left: 15px;
  font-size: 14px !important;

  @media only screen and (max-width: 1200px) {
    width: 70%;
    height: 35px;
    margin: 5px 0;
  }
`;

const InputFile = styled.input`
  width: 80%;
  height: 40px;
  margin: 7px 0;

  color: white;
  padding-left: 15px;
  font-size: 14px !important;

  button {
    background-color: yellow;
  }
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

  @media only screen and (max-width: 1200px) {
    justify-self: center !important;
    align-self: center;
  }
`;

const RingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  margin-top: -80px;
`;

export default JobsForm;
