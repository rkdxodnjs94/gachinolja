import Footer from "../components/Footer";
import Header from "../components/Header";
import { InputGroup, FormControl, Button, Card, Row, Col, Pagination } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

function Reserve1(){

  const navigate = useNavigate();
  const revdata = useSelector((state) => { return state.revdata });
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const offset = (page - 1) * limit;
  const numPages = Math.ceil( (revdata.length) / limit );

  return (
    <>
      <Header />
      <div className="container p-4">
        <InputGroup className="container mb-3 w-50" style={{height:'50px'}}>
          <FormControl
            placeholder="예약할 장소를 입력해보세요"
            aria-label="예약장소"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-success" id="button-addon2">
            검색
          </Button>
        </InputGroup>
        <Row xs={1} md={3} className="g-4 p-5">
        {revdata.slice(offset, offset + limit).map(( { id, name, address } ) => (
          <Col key={id}>
            <Card onClick={()=>{ navigate('/reserve2/' + revdata[id-1].id)}}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title className='cardname'>{ revdata[id-1].name }</Card.Title>
              <Card.Text className='cardaddress'>
                주소 : { revdata[id-1].address }
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>))}
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 3 }}>
            <Pagination>
              <Pagination.Prev onClick={()=>{setPage(page-1)}} disabled={page === 1}/>
              {Array(numPages).fill().map((_, i) => {
              return <Pagination.Item
                key={i+1} 
                onClick={()=>{setPage(i+1)}}
                aria-current={ page === (i+1) ? "page" : null}
              >
                {i+1}
              </Pagination.Item>
              })}
              <Pagination.Next onClick={()=>setPage(page+1)} disabled={page === numPages}/>
            </Pagination>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

export default Reserve1;