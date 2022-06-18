import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import NtModal from '../../elements/NtModal';
import { useState } from "react";

function NoticePost(){

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <>
      <Header />
      <Container>
        <h1 className='p-5'>공지사항</h1>
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
          <NtModal title={title} content={content} />
        </div>
      </Container>
      <Footer />
    </>  
  )
}

export default NoticePost;