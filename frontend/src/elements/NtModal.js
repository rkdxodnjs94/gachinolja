import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NtModal(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const islogin = useSelector((state) => { return state.islogin })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  async function NoticeDB(e){
    e.stopPropagation();
    try {
      const response = await axios.post('/api/notice/',{
        title : props.title,
        content : props.content,
        publisher : islogin.nickname,
        publisherID : islogin.userid,
      });
      alert('완료되었습니다! :)');
      handleClose();
      navigate('/notice');
    } catch (error) {
      alert('실패했습니다 ㅠㅠ');
      console.log(error);
    }
  }

  return (
    <>
      <Button variant="danger" className='mb-4 mt-4 d-flex justify-content-evenly' 
      style={{marginLeft : '38vw'}} onClick={handleShow}>
        작성하기
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='border-none' closeButton>
          <Modal.Title>공지사항</Modal.Title>
        </Modal.Header>
        <Modal.Body>올리시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={NoticeDB}>
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

export default NtModal;