import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Row, Col, FloatingLabel, Form } from 'react-bootstrap';
import PtModal from "../../elements/PtModal";
import { useState } from "react";

function RecruitParty(){

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [person, setPerson] = useState(2);
  const people = new Array(7).fill(2);
  const handleSelect = (e) => {
    setPerson(e.target.value);
  }
  return (
    <>
      <Header />
      <Container>
        <h1 className='p-5'>모집하기</h1>
        <div className='px-5'>
          <Container>
            <Row>
              <Col md={1}>
                <Form.Label htmlFor="cruit" className='align-bottom'>모집인원</Form.Label>
              </Col>
              <Col md={6}>
                <Form.Select aria-label="partypeople" className='mb-3 w-25' onChange={handleSelect} value={person}>
                  {
                    people.map((a,i) => {
                      return <option key={i} value={i+2}>{i+2}</option>
                    })
                  }
                </Form.Select>
              </Col>
            </Row>
          </Container>
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
          <PtModal title={title} content={content} person={person}/>
        </div>
      </Container>
      <Footer />
    </>  
  )
}

export default RecruitParty;