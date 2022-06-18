import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../elements/Search";
import RevPageNum from "../elements/RevPageNum";
import { Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { clear } from '../stores/InputSlice';

function Reserve1(){

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const revdata = useSelector((state) => { return state.revdata });
  const input = useSelector((state) => { return state.input });
  const [page, setPage] = useState(1);
  const limit = 12;
  const offset = (page - 1) * limit;
  // 페이지 끝날 때
  useEffect(() => {
    return () => {
      dispatch(clear());
    }
  },[]);

  return (
    <>
      <Header />
      <div className="container p-4">
        <Search />
        <Row xs={1} md={3} className="g-4 p-5">
        { input !== '' ? null
          : revdata.slice(offset, offset + limit).map(( { id, name, address } ) => (
          <Col key={id}>
            <Card onClick={()=>{ navigate('/reserve2/' + revdata[id-1].id)}} style={{cursor : 'pointer'}}>
            <Card.Img variant="top" src={revdata[id-1].image} height='250' />
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
        <RevPageNum page={page} setPage={setPage} limit={limit} revdata={revdata} />
      
      </div>
      <Footer />
    </>
  )
}

export default Reserve1;