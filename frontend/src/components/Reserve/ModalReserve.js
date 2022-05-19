import './ModalReserve.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function ModalReserve(){
  
  const [value, onChange] = useState(new Date());
  const reserve = useSelector((state) => (state.reserve))

  return (
    <div className="border rounded modals p-5">
      <Container>
      <h3>예약하기</h3>
        <Row>
          <Col>
            <Calendar onChange={onChange} value={value} defaultView='year' minDate={new Date()}/>
          </Col>
          <Col>
            <Form.Label>좌석</Form.Label>
            <Form.Control type="text" placeholder={`${reserve}번 자리`}
            aria-label="Disabled input example" disabled readOnly className='w-50'/>
            <br/>
            <Form.Label>인원</Form.Label>
            <Form.Select aria-label="Default select example" className='w-50'>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            </Form.Select>
            <br/>
            <Form.Label>예약할 날짜</Form.Label>
            <Form.Control type="text" placeholder={moment(value).format('YYYY년 MM월 DD일')}
            aria-label="Disabled input example" disabled readOnly className='w-50'/>
            <br/>
            <Button variant="danger">예약하기</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ModalReserve;