import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Table, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function EventList(){

  const islogin = useSelector((state) => { return state.islogin });
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function axiosdata(){
      try {
        const response = await axios.get('/api/event');
        for (let i=0; i<response.data?.length; i++) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  axiosdata();
  },[setData]);


  return (
    <>
      {console.log(data)}
      <Header />
      <Container>
      <h1 className='p-5'>이벤트</h1>
        <div className='container'>
          <Table>
            <tr className='text-center'>
              <td className='container text-center border-bottom border-top border-dark'>
              { data.map((data, i) => {
                return <Card border='light' style={{ width: '55rem' }} key={i}>
                <Row onClick={()=>navigate(`/event/${data._id}`)} style={{cursor:'pointer'}}>
                  <Col>
                    <Card.Img variant="top" src={data?.image} width='500' height='200' />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Text>
                        2022-05-23 ~ 2022-12-31<br/>
                        {data.content}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              })
              }
              </td>
            </tr>
        </Table>
      </div>
    </Container>
    <Footer />
    </>
  )
}

export default EventList;