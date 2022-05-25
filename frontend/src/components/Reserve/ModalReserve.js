import './ModalReserve.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function ModalReserve(){
  
  const [value, onChange] = useState(new Date());
  const revdata = useSelector((state) => { return state.revdata })
  const reserve = useSelector((state) => { return state.reserve })
  const { id } = useParams();

  return (
    <div className="border rounded modals p-4">
      <Container>
      <h3>예약하기</h3>
        <Row>
          <Col>
            <Calendar onChange={onChange} value={value} defaultView='year' minDate={new Date()}/>
          </Col>
          <Col>
            <Form.Label>예약장소</Form.Label>
            <Form.Control type="text" placeholder={revdata[id-1].name}
            aria-label="Disabled input example" disabled readOnly className='w-75'/>
            <br/>
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
            <Row style={{marginLeft : '1px'}}>
              <Form.Control type="text" placeholder={moment(value).format('YYYY년 MM월 DD일')}
              aria-label="Disabled input example" disabled readOnly style={{width:'42%'}}/>
              <Form.Select aria-label="Default select example" style={{width:'32%'}}>
              <option value="10">오전 10시</option>
              <option value="11">오전 11시</option>
              <option value="12">오후 12시</option>
              <option value="13">오후 1시</option>
              <option value="14">오후 2시</option>
              <option value="15">오후 3시</option>
              <option value="16">오후 4시</option>
              <option value="17">오후 5시</option>
              <option value="18">오후 6시</option>
              <option value="19">오후 7시</option>
              <option value="20">오후 8시</option>
              <option value="21">오후 9시</option>
              <option value="22">오후 10시</option>
              </Form.Select>
            </Row>
            <br/>
            <Button variant="danger">예약하기</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ModalReserve;