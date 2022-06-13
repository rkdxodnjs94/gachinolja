import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

function RevModal(props) {
  const [show, setShow] = useState(false);
  const revdata = useSelector((state) => { return state.revdata })
  const reserve = useSelector((state) => { return state.reserve })
  const islogin = useSelector((state) => { return state.islogin })
  const googleuser = useSelector((state) => { return state.googleuser })
  const facebookuser = useSelector((state) => { return state.facebookuser })
  const savereserve = useSelector((state) => { return state.savereserve })
  const { id } = useParams();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 예약등록기능
  async function reserveDB(e) {
    e.stopPropagation();
    try {

      if ( savereserve?.map((a,i)=>
      ((a.includes(islogin.userid)) && ( moment(new Date()).format('YYYY년 MM월 DD일') ) ))
      .includes(true) ){
        alert('이미 예약하셨습니다 :) \n(차후 예약하실 분은 전화로 문의 바랍니다.)');
        handleClose();
        return false;
      }

      const response = await axios.post('/api/reserve',{
        publisher : islogin.nickname || googleuser.name || facebookuser.name,
        publisherID : islogin.userid || googleuser.email || facebookuser.email,
        place : revdata[id-1].name,
        arrage : reserve,
        people : props.person,
        date : props.datevalue,
        time : props.time
      });
      alert('예약이 완료되었습니다! :)');
      handleClose();
    } catch (error) {
      alert('예약이 실패됐습니다 ㅠㅠ');
      console.log(error);
      handleClose();
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
        <Modal.Body>등록시 예약변경이 불가합니다.<br/>
          예약하시겠습니까?(예약변경시 전화문의)</Modal.Body>
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