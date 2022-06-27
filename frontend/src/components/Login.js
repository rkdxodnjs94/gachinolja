import './Login.css';
import React, { useEffect, useState } from 'react';
import { Form, Button, Alert, CloseButton } from 'react-bootstrap'; 
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../stores/LoginSlice';
import { loginID, loginPW, loginNICK } from '../stores/IsLoginSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
// google oauth
import { setGoogleUser } from '../stores/GoogleSlice';
import jwt_decode from 'jwt-decode';
// facebook oauth
import FacebookLogin from '@greatsumini/react-facebook-login';
import { setFacebookUser } from '../stores/FacebookSlice';
import { setNaverUser } from '../stores/NaverSlice';

function Login(props){
  
  const google = window.google;
  const { naver } = window;
  const googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const facebookAPIKey = process.env.REACT_APP_FACEBOOK_API_KEY;
  const naverAPIKey = process.env.REACT_APP_NAVER_API_KEY;
  const [cancel, setCancel] = useState(false);
  const location = useLocation();
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
  function onlyAlphabet(e){
    const alphabet = e.target.value.replace(/[^\\!-z]/gi,"");
    return alphabet;
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
      navigate('/');
      setCancel(true);
      dispatch(setLogin(false));
    } catch (error) {
      alert('로그인 실패');
      if (error?.response?.status === 401){
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        return;
      }
      dispatch(loginID(''));
      dispatch(loginPW(''));
      console.log(error);
    }
  };
  // 구글 oauth
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token : "+response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    dispatch(setGoogleUser(userObject));
    document.getElementById("signInDiv").hidden = true;
    navigate('/');
    setCancel(true);
  }
  useEffect(()=>{
    google.accounts.id.initialize({
      client_id : googleAPIKey,
      callback : handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { type: "icon", theme : "outline", shape : "circle", size : "large"}
    );

    google.accounts.id.prompt();
  },[]);
 
  // 네이버 oauth
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId : naverAPIKey,
      callbackUrl : "http://www.gachinolja.ml/",
      isPopup : false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: 'green', type : 1, height: '60' }, //버튼의 스타일, 타입, 크기를 지
    })
    naverLogin.init();
    // token 발급
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0];
    console.log(token);
    naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(naverLogin.user);
        dispatch(setNaverUser(naverLogin.user));
      }
      });
  };
  // 네이버 버튼 커스터마이징
  const handleNaverClick = () => {
    if (
      document &&
      document?.querySelector('#naverIdLogin')?.firstChild &&
      window !== undefined
    ) {
      const loginBtn = document.getElementById('naverIdLogin')?.firstChild;
      loginBtn.click();
    }
  };
  useEffect(()=>{
    initializeNaverLogin();
  },[]);


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
              onChange={onChangePw} onkeydown={onlyAlphabet}/>
            </Form.Group>
            <Form.Group className="px-5" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="날 기억해줘!" />
            </Form.Group>
          </Form>
          <div className='container mb-3' style={{marginLeft : '49%'}}>
            <Button className='px-5' variant="danger" type="submit" onClick={onLock}>
              로그인
            </Button>
          </div>
          <div className='line mb-3'>
            또는
          </div>
          <div className='d-flex justify-content-evenly mb-5'>
            {/* 네이버 Oauth */}
            <div id="naverIdLogin" style={{position: 'absolute', top:'-10000px'}} />
            <div onClick={handleNaverClick} style={{cursor : 'pointer'}}>
              <img src='/images/login/naverbutton.png' height='40' />
            </div>
            {/* 카카오톡 Oauth */}
            <div>
              <img src='/images/login/kakaobutton.png' height='40' />
            </div>
            {/* 페이스북 Oauth */}
            <FacebookLogin
              appId={facebookAPIKey}
              onFail={(error) => {
                console.log('Login Failed!');
                console.log('status: ', error.status);
              }}
              onProfileSuccess={(response) => {
                console.log('Get Profile Success!');
                console.log('response: ', response);
                dispatch(setFacebookUser(response));
                navigate('/');
                setCancel(true);
                dispatch(setLogin(false));
              }}
              render={renderProps => (
                <div onClick={renderProps.onClick} style={{cursor:'pointer'}}>
                  <img src='/images/login/facebookbutton.png' height='40' />
                </div>
              )}
            />
            {/* 구글 Oauth */}
            <div id='signInDiv' />
          </div>
            <div role='button' className='container text-center' onClick={(e)=>{
              e.stopPropagation();
              dispatch(setLogin(false));
              navigate('/signup');
            }}>
              회원이 아니십니까? <span style={{fontSize : '20px', color: 'blue'}}>회원가입</span>
            </div>
        </div>
      </div> 
      }
    </>
  )
}

export default Login;