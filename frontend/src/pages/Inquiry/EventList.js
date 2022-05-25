import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Table, Card, Row, Col } from 'react-bootstrap';

function EventList(){
  return (
    <>
      <Header />
      <Container>
      <h1 className='p-5'>이벤트</h1>
        <div className='container'>
          <Table>
            <tr className='text-center'>
              <td className='container text-center border-bottom border-top border-dark'>
              <Card border='light' style={{ width: '55rem' }}>
                <Row>
                  <Col>
                    <Card.Img variant="top" src="/images/card/photo1.jpeg" />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title>이벤트 제목</Card.Title>
                      <Card.Text>
                        2022-05-23 ~ 2022-12-31<br/>
                        이벤트 내용은 이렇고, 어쩌구....
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
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