import React, { useState, useEffect } from "react";
import { HiddenLeft, InputContainer, CloseButton, SubmitButton } from "../../animations";
import axios from "axios";
import "./contact.css";

function Contact(props) {
  let { toggle, open } = props;

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    console.log(subject);
  }, [subject]);

  useEffect(() => {
    console.log(message);
  }, [message]);

  const handleChange = e => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "subject":
        setSubject(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
    return;
  };

  const resetState = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const submitContact = event => {
    let ename = name;
    let eaddress = email;
    let esubject = subject;
    let emessage = message;
    event.preventDefault();

    if (ename !== null && eaddress !== null && emessage != null) {
      console.log({
        name: ename,
        address: eaddress,
        subject: esubject,
        message: emessage
      });
      // axios
      //   .post("/email", {
      //     name: ename,
      //     address: eaddress,
      //     subject: esubject,
      //     message: emessage
      //   })
      //   .then(response => {
      //     resetState();
      //   })
      //   .catch(error => console.log(error.message));
      resetState();
    } else {
      this.setState({ submitAlert: true });
    }
  };

  return (
    <HiddenLeft className="hidden-left" pose={open ? "open" : "closed"}>
      <div className="contact-container">
        <CloseButton className="back-button-left close" onClick={toggle}>
          <i className="fa fa-times" />
        </CloseButton>
        <form id="contact-form" action="" onSubmit={submitContact}>
          <InputContainer>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            <textarea name="message" id="message" onChange={handleChange} />
          </InputContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </div>
    </HiddenLeft>
  );
}

export default Contact;
