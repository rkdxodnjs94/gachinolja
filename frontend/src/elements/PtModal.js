import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PtModal(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const islogin = useSelector((state) => { return state.islogin })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  async function partyDB(e){
    e.stopPropagation();
    try {
      const response = await axios.post('/api/party',{
        title : props.title,
        content : props.content,
        publisher : islogin.nickname,
        publisherID : islogin.userid,
        people : props.person
      });
      alert('모집되었습니다! :)');
      handleClose();
      navigate('/party');
    } catch (error) {
      alert('모집이 안됐습니다 ㅠㅠ');
      console.log(error);
    }
  }

  return (
    <>
      <Button variant="danger" className='mb-4 mt-4 d-flex justify-content-evenly' 
      style={{marginLeft : '38vw'}} onClick={handleShow}>
        모집완료
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='border-none' closeButton>
          <Modal.Title>모집하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>모집하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={partyDB}>
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

export default PtModal;