import './Login.css';
import React, { useState } from 'react';
import { Form, Button, Alert, CloseButton } from 'react-bootstrap'; 
import { useDispatch } from 'react-redux';
import { setLogin } from '../stores/LoginSlice';
import { useNavigate } from 'react-router-dom';

function Login(){
  
  const [cancel, setCancel] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {
        cancel === true ? null
        : <div className='container-fluid position-fixed p-5 login'>
        <div className='container mt-5 bg-white w-50 rounded bgwhite'>
          <CloseButton className='float-end' onClick={(e)=>{
            e.stopPropagation();
            setCancel(!cancel);
            dispatch(setLogin());
          }}/>
          <Form className='p-5'>
            <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
              <Form.Label>이메일</Form.Label>
              <Form.Control className='w-75' type="email" placeholder="example@abc.co.kr" />
              <Form.Text className="text-muted">
                이메일을 정확하게 기재해주세요!
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 px-5" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control className='w-75' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3 px-5" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="날 기억해줘!" />
            </Form.Group>
            <div className='float-end'>
              <Button className='px-5' variant="primary" type="submit">
                로그인
              </Button>
            </div>
          </Form>
          <div className='line'>
            또는
          </div>
          <Alert variant='success' className='text-center'>
            <Alert.Link href="#">네이버</Alert.Link>
          </Alert>
          <Alert variant='warning' className='text-center'>
            <Alert.Link href="#">카카오톡</Alert.Link>
          </Alert>
          <Alert variant='primary' className='text-center'>
            <Alert.Link href="#">페이스북</Alert.Link>
          </Alert>
          <Alert variant='info' className='text-center'>
            <Alert.Link href="#">구글</Alert.Link>
          </Alert>
          <div className='container text-center' onClick={(e)=>{
            e.stopPropagation();
            dispatch(setLogin());
            navigate('/signup');
          }}>
            회원이 아니십니까? 회원가입
          </div>
        </div>
      </div> 
      }
    </>
  )
}

export default Login;