import React, { Suspense, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PageNum from '../../elements/PageNum';
import { Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardGame(){

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 10;

  useEffect(() => {
    async function axiosdata(){
      try {
        const response = await axios.get('/api/boardgame');
        for (let i=0; i<response.data.length; i++) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  axiosdata();
  },[setData]);
  console.log(data);

  return (
    <Suspense fallback={<h1>로딩중입니당</h1>}>
      <Header />
      <div className='container p-4'>
        <Row xs={1} md={5} className="p-5">
          {
            data?.slice(offset, offset + 10).map((data,i) => (
            <Col key={i} className='mb-5'>
              <Card onClick={()=>{ navigate('/boardgame/' + data?._id)}} style={{cursor : 'pointer',
            height : '400px'}}>
              <Card.Img variant="top" src={data?.images} height='250' />
              <Card.Body>
                <Card.Title className='cardname'>{ data?.titles.replace(/[^ㄱ-ㅎ가-힣\s]/g,"") }</Card.Title>
                <Card.Text className='cardaddress'>
                  게임인원 : { data?.people }<br/>
                  게임시간 : { data?.times }
                </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            ))
          }
          </Row>
          <PageNum page={page} setPage={setPage} data={data} />
      </div>
      <Footer />
    </Suspense>
  )
}

export default BoardGame;