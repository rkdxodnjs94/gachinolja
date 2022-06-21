import React, { useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import InquiryModal from '../../elements/InquiryModal';
import { useState } from "react";
import { animations } from 'react-animation';

function Inquiry(){

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  useEffect(()=>{
    document.getElementById('fade').style.animation = `${animations.fadeIn}`;
  },[]);

  return (
    <>
      <Header />
      <Container id='fade'>
        <h1 className='p-5'>1:1문의</h1>
        <div className='px-5'>
          <Form.Floating className="mb-3 w-75">
            <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
            />
            <label htmlFor="floatingInputCustom">제목</label>
          </Form.Floating>
          <FloatingLabel controlId="floatingTextarea2" label="내용" className="w-75">
            <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            value={content}
            onChange={(e) => { setContent(e.target.value) }}
            style={{ height: '200px', resize: 'none' }}
            />
          </FloatingLabel>
          <InquiryModal title={title} content={content} />
        </div>
      </Container>
      <Footer />
    </>  
  )
}

export default Inquiry;