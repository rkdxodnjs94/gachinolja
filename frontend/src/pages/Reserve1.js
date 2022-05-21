import Footer from "../components/Footer";
import Header from "../components/Header";
import { InputGroup, FormControl, Button, Card, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import Data from '../data/marketdata.json';
// import axios from "axios";
import { useNavigate } from "react-router-dom";

function Reserve1(){

  const [plus, setPlus] = useState(3);
  const [revData, setRevData] = useState(Data);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="container p-4">
        <InputGroup className="container mb-3 w-50" style={{height:'50px'}}>
          <FormControl
            placeholder="예약할 장소를 입력해보세요"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-success" id="button-addon2">
            검색
          </Button>
        </InputGroup>
        <Row xs={1} md={3} className="g-4 p-5">

        {Array.from({ length: plus }).map((_, idx) => (
          <Col>
            <Card onClick={()=>{ navigate('/reserve2/' + revData[idx].id)}}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>{ revData[idx].name }</Card.Title>
                <Card.Text>
                  주소 : { revData[idx].address }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button variant="danger" className="justify-content-center" style={{marginLeft : '47%'}}>더보기</Button>
      </div>
      <Footer />
    </>
  )
}

export default Reserve1;