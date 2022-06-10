import './ModalReserve.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { useState } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RevModal from '../../elements/RevModal';

function ModalReserve(props){
  
  const revdata = useSelector((state) => { return state.revdata })
  const reserve = useSelector((state) => { return state.reserve })
  const people = new Array(3).fill(2);
  const BigPeople = new Array(4).fill(5);
  const { id } = useParams();
  const [person, setPerson] = useState('2');
  const [time, setTime] = useState('오전 10시');
  const handleSelect = (e) => {
    setPerson(e.target.value);
  }
  const handleTime = (e) => {
    setTime(e.target.value);
  }

  return (
    <div className="border rounded modals p-4">
      <Container>
      <h3>예약하기</h3>
        <Row>
          <Col>
            <Calendar onChange={props.onChange} value={props.value} defaultView='year' minDate={new Date()}/>
          </Col>
          <Col>
            <Form.Label>예약장소</Form.Label>
            <Form.Control type="text" placeholder={revdata[id-1].name}
            aria-label="Disabled input example" disabled readOnly className='w-75'/>
            <br/>
            <Form.Label>좌석</Form.Label>
            <Form.Control type="text" placeholder={`${reserve}번 자리`}
            aria-label="Disabled input example" disabled readOnly className='w-50' required/>
            <br/>
            <Form.Label>인원</Form.Label>
            <Form.Select aria-label="revpeople" className='w-50' required onChange={handleSelect} value={person}>
            {
              (reserve >= 9 && reserve <= 13)
              ? BigPeople.map((a,i) => {
                return <option key={i} value={i+5}>{i+5}</option>
              })
              : people.map((a,i) => {
                return <option key={i} value={i+2}>{i+2}</option>
              })
            }
            </Form.Select>
            <br/>
            <Form.Label>예약할 날짜</Form.Label>
            <Row style={{marginLeft : '1px'}}>
              <Form.Control type="text" placeholder={moment(props.value).format('YYYY년 MM월 DD일')}
              aria-label="Disabled input example" disabled readOnly style={{width:'42%'}} required/>
              <Form.Select aria-label="revtime" style={{width:'32%'}} onChange={handleTime}
              value={time}>
              <option value="오전 10시">오전 10시</option>
              <option value="오전 11시">오전 11시</option>
              <option value="오후 12시">오후 12시</option>
              <option value="오후 1시">오후 1시</option>
              <option value="오후 2시">오후 2시</option>
              <option value="오후 3시">오후 3시</option>
              <option value="오후 4시">오후 4시</option>
              <option value="오후 5시">오후 5시</option>
              <option value="오후 6시">오후 6시</option>
              <option value="오후 7시">오후 7시</option>
              <option value="오후 8시">오후 8시</option>
              <option value="오후 9시">오후 9시</option>
              <option value="오후 10시">오후 10시</option>
              </Form.Select>
            </Row>
            <br/>
            <RevModal datevalue={props.value} person={person} time={time}/> 
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ModalReserve;