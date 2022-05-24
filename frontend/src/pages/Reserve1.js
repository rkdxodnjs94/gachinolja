import Footer from "../components/Footer";
import Header from "../components/Header";
import { InputGroup, FormControl, Button, Card, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

function Reserve1(){

  const [plus, setPlus] = useState(3);
  const [num,setNum] = useState(1);
  const navigate = useNavigate();
  const revdata = useSelector((state) => { return state.revdata });
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  // useEffect(()=>{
  //   const newdata = revdata.filter((val) => {
  //     val.name === input
  //   })
  // }, [input])

  useEffect(() => {
    setPlus(num * 3);
  }, [num])

  return (
    <>
      <Header />
      <div className="container p-4">
        <InputGroup className="container mb-3 w-50" style={{height:'50px'}}>
          <FormControl
            placeholder="예약할 장소를 입력해보세요"
            aria-label="예약장소"
            aria-describedby="basic-addon2"
            onChange={ (e) => { setInput(e.target.value) } }
          />
          <Button variant="outline-success" id="button-addon2">
            검색
          </Button>
        </InputGroup>
        <Row xs={1} md={3} className="g-4 p-5">
        {Array.from({ length: plus }).map((_, idx) => (
          <Col>
            <Card onClick={()=>{ navigate('/reserve2/' + revdata[idx].id)}}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title className='cardname'>{ revdata[idx].name }</Card.Title>
              <Card.Text className='cardaddress'>
                주소 : { revdata[idx].address }
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
            ))}
        </Row>
        <Button variant="danger" className="justify-content-center" style={{marginLeft : '47%'}}
        onClick={()=>{ setNum(num+1) }}>더보기</Button>
      </div>
      <Footer />
    </>
  )
}

export default Reserve1;