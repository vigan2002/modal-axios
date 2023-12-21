import React from 'react';
import logo from "../../logo.svg";
import Input from './Input';
import "./style.scss";


const Contact = () => {

  

  return (
    <div className="contact">
      <img src={logo} alt='' />
      <form>
        <Input
          label="Emri"
          name="emri"
        />
        <Input
          label="Mbiemri"
          name="mbiemri"
        />
        <Input
          label="Email"
          name="email"
        />
        <Input
          label="Telefoni"
          name="tel"
        />
          
      </form>
    </div>
  )
}

export default Contact;
