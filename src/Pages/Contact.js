import React, { useState } from "react";
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';


const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/./Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div>
      <Header
          header="REACH OUT"
        />
    <Wrapper>
    <form className='contactForm' onSubmit={handleSubmit}>
      <div>
        <h3>Please feel free to reach out with and requests, recommendations, or inqueries.</h3>
        <label htmlFor="name"></label>
        <input className='name-input' type="text" placeholder='name' id="name" required />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input className='email-input' type="email" placeholder='email' id="email" required />
      </div>
      <div>
        <label htmlFor="message"></label>
        <textarea className='massage-input' placeholder='message' id="message" required />
      </div>
      <div className="buttonWrapper">
        <button id='contact-button' type="submit">{status}</button>
      </div>
      <h2>Thanks for visiting.</h2>
    </form>
    </Wrapper>

    </div>
  );
};

export default ContactForm;