import { Card,Col, Row } from 'react-bootstrap';

function IntroCompany() {
  return (
    <div className='container p-3'>
      <Card>
        <Row>
          <Col md={6} style={{objectFit : 'cover'}}>
            <Card.Img variant="top" className='w-100' style={{maxWidth : '600px'}}
            src="/images/card/portfolio-1.jpeg" />
            <Card.ImgOverlay className='p-5'>
              <Card.Title>02.회사소개</Card.Title>
            </Card.ImgOverlay>
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Text>
                어쩌구저쩌구
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>    
      </Card>
    </div>
  )
}

export default IntroCompany;