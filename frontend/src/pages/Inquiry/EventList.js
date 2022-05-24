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
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
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