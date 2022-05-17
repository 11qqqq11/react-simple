import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ctp from "../images/contact.PNG";
import "../styles/Contact.css";


const Contact = () => {
  const [name, setName] = useState("");
  const [sdt, setSdt] = useState("");
  const [mes, setMes] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0dx970l', 'template_pby94dg', form.current, 'NFmWF1VdDl565AcOi')
      .then((result) => {
        console.log(result.text);
        alert("Xin cảm ơn!")
      }, (error) => {
        console.log(error.text);
      });
    setName("");
    setSdt("");
    setMes("");
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ctp})` }}
      ></div>
      <div className="rightSide">
        <h2>Hotline: <span>02923737818</span></h2>
        <h2>Hotline: <span>0907757616</span></h2>
        <h1> Form Liên Hệ Đặt Chỗ</h1>

        <form ref={form} onSubmit={sendEmail}>
          <label>Họ và Tên</label>
          <input type="text" name="name" value={name} required onChange={(e) => setName(e.target.value)} />
          <label>Số Điện Thoại</label>
          <input type="text" name="sdt" value={sdt} required onChange={(e) => setSdt(e.target.value)} />
          <label>Tin Nhắn</label>
          <textarea name="message" value={mes} required onChange={(e) => setMes(e.target.value)} />
          <input className='s' type="submit" value="Gửi" />
        </form>
      </div>
    </div>
  );
}


export default Contact;