import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { setSaveReserve } from '../stores/SaveRevSlice';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RevModal(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const revdata = useSelector((state) => { return state.revdata })
  const reserve = useSelector((state) => { return state.reserve })
  const savereserve = useSelector((state) => { return state.savereserve })
  const islogin = useSelector((state) => { return state.islogin })
  const { id } = useParams();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const reserveDB = (e) => {
    e.stopPropagation();
    try {
      const response = axios.post('/api/reserve',{
        publisher : islogin.nickname,
        publisherID : islogin.userid,
        place : revdata[id-1].name,
        arrage : reserve[0],
        people : props.person,
        date : props.datevalue,
        time : props.time
      });
      alert('예약이 완료되었습니다! :)');
      response.then((data) => {dispatch( setSaveReserve(data.data.arrage) )});
      console.log(savereserve);
      console.log(response);
      handleShow();
    } catch (error) {
      alert('예약이 실패됐습니다 ㅠㅠ');
      console.log(error);
    }
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        예약하기
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='border-none' closeButton>
          <Modal.Title>예약하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>예약하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={reserveDB}>
            예
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            아니오
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RevModal;