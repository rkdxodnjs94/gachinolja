import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../elements/Search";
import { Card, Row, Col, Pagination } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Reserve1(){

  const navigate = useNavigate();
  const revdata = useSelector((state) => { return state.revdata });
  const input = useSelector((state) => { return state.input });
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const offset = (page - 1) * limit;
  const numPages = Math.ceil( (revdata.length) / limit );

  return (
    <>
      <Header />
      <div className="container p-4">
        <Search />
        <Row xs={1} md={3} className="g-4 p-5">
        { input ? null
          : revdata.slice(offset, offset + limit).map(( { id, name, address } ) => (
          <Col key={id}>
            <Card onClick={()=>{ navigate('/reserve2/' + revdata[id-1].id)}} style={{cursor : 'pointer'}}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title className='cardname'>{ revdata[id-1].name }</Card.Title>
              <Card.Text className='cardaddress'>
                주소 : { revdata[id-1].address }
              </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          ))
        }
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