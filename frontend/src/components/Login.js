import './Login.css';
import React, { useState } from 'react';
import { Form, Button, Alert, CloseButton } from 'react-bootstrap'; 
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../stores/LoginSlice';
import { loginID, loginPW, loginNICK } from '../stores/IsLoginSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(props){
  
  const [cancel, setCancel] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const islogin = useSelector((state) => { return state.islogin});
  const onChangeId = (e) => {
    if ( e.target.name === 'userid'){
      dispatch(loginID((e.target.value)));
    }
  }
  const onChangePw = (e) => {
    if ( e.target.name === 'userpw'){
      dispatch(loginPW((e.target.value)));
    }
  }
  async function onLock(e){
    //입력 값 정합성 체크 후 login API 요청
    if (islogin.userid === "" || islogin.userpw === "") {
      window.alert("아이디 또는 비밀번호를 입력해주세요.");
      return;
    }
    e.stopPropagation();
    try {
      const response = await axios.post('/api/user/login',{
        userid : islogin.userid,
        userpw : islogin.userpw
      });
      // async await 구문 안쓸시 : response.then((data) => { dispatch(loginNICK(data.data.nickname)) });
      dispatch(loginNICK(response.data.nickname));
      alert('로그인 성공!');
      navigate('/');
      setCancel(true);
      dispatch(setLogin(false));
    } catch (error) {
      alert('로그인 실패');
      if (error?.response?.status === 401){
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        document.getElementsByName('userid').
        dispatch(loginID(''));
        dispatch(loginPW(''));
      }
      dispatch(loginID(''));
      dispatch(loginPW(''));
      console.log(error);
    }
  };

  return (
    <>
      {
        cancel === true 
        ? null
        : <div className={'container-fluid position-fixed p-5 login start '+props.fade} id="example-fade-text">
        <div className='container mt-5 bg-white w-50 rounded bgwhite'>
          <CloseButton className='float-end' onClick={(e)=>{
            e.stopPropagation();
            setCancel(false);
            dispatch(setLogin(false));
          }}/>
          <Form className='p-5'>
            <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
              <Form.Label>아이디</Form.Label>
              <Form.Control className='w-75' type="email" name='userid' placeholder="example@abc.co.kr"
              onChange={onChangeId}/>
              <Form.Text className="text-muted">
                이메일을 정확하게 기재해주세요!
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 px-5" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control className='w-75' type="password" name='userpw' placeholder="Password" 
              onChange={onChangePw}/>
            </Form.Group>
            <Form.Group className="px-5" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="날 기억해줘!" />
            </Form.Group>
          </Form>
          <div className='container mb-3' style={{marginLeft : '49%'}}>
            <Button className='px-5' variant="primary" type="submit" onClick={onLock}>
              로그인
            </Button>
          </div>
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
          <div role='button' className='container text-center' onClick={(e)=>{
            e.stopPropagation();
            dispatch(setLogin(false));
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