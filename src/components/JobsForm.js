import React, { useState, useEffect } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const JobsForm = () => {
  const [contact, setContact] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [language, setLanguage] = useState("");

  const frmContact = {
    nameLastname: "",
    email: "",
    phoneNumber: "",
    jopPosition: "",
  };

  useEffect(() => {
    setLanguage(localStorage.getItem("locale"));
  }, []);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log("selected file", selectedFile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFile) {
      const fileData = new FormData();
      fileData.append("file", selectedFile);
      contact["file"] = fileData;
    }

    emailjs
      .send(`service_lsilwkf`, `template_zefnjzw`, contact, `F-wmz4d9VI_6zEds5`)

      .then((response) => {
        console.log("Correo electrónico enviado con éxito", response);
        setContact(frmContact);
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico", error);
      });

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
              name="userName"
              onChange={handleChange}
            />

            <Input
              className="form-item"
              placeholder={
                language === "es" ? esPlaceholder[1] : enPlaceholder[1]
              }
              value={contact.email}
              onChange={handleChange}
              name="userEmail"
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
              name="message"
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
              name="userEmail"
              type="text"
              required
            />

            <input type="file" onChange={handleFileSelect} />
            {selectedFile ? (
              <>
                <p style={{ color: "red" }}>{selectedFile.name}</p>
              </>
            ) : (
              <></>
            )}

            <button type="submit" className="bottom-form">
              <p> {/* <FormattedMessage id="getintouch.button" /> */}Apply</p>
            </button>
          </Form>
        </JobsFormContainer>
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
    background-color: black;
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
  color: red;
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

export default JobsForm;
