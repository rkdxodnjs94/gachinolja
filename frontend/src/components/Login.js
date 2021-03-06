import './Login.css';
import React, { useEffect, useState } from 'react';
import { Form, Button, CloseButton } from 'react-bootstrap'; 
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
// import { setNaverUser } from '../stores/NaverSlice';
import KakaoLogin from 'react-kakao-login';
import { setKakaoUser } from '../stores/KaKaoSlice';

function Login(props){

  const google = window.google;
  // const { naver } = window;
  const googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const facebookAPIKey = process.env.REACT_APP_FACEBOOK_API_KEY;
  const kakaoAPIKey = process.env.REACT_APP_KAKAO_API_KEY;
  // const naverAPIKey = process.env.REACT_APP_NAVER_API_KEY;
  const [cancel, setCancel] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const islogin = useSelector((state) => { return state.islogin });
  const kakaoUrl = process.env.REACT_APP_KAKAO_REDIRECT_URL;
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
    const userObject = jwt_decode(response.credential);
    dispatch(setGoogleUser(userObject));
    document.getElementById("signInDiv").hidden = true;
    navigate('/');
    setCancel(true);
    dispatch(setLogin(false));
  }
  useEffect(()=>{
    google?.accounts?.id.initialize({
      client_id : googleAPIKey,
      callback : handleCallbackResponse,
    });

    google?.accounts?.id.renderButton(
      document.getElementById("signInDiv"),
      { type: "icon", theme : "outline", shape : "circle", size : "large"}
    );

    google.accounts.id.prompt();
  },[]);

  // kakao 로그인
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoAPIKey}&redirect_uri=${kakaoUrl}&response_type=code`;
  const successKakaoProfile = (res) => {
    dispatch(setKakaoUser(res.profile.properties));
    setCancel(true);
    dispatch(setLogin(false));
  }
  
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
              onChange={onChangePw} onKeyDown={onlyAlphabet}/>
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
            <KakaoLogin
            // rest api 키가 아닌 js 키를 사용해야 합니다.
            jsKey={process.env.REACT_APP_KAKAO_API_KEY}
            onSuccess={(res) => successKakaoProfile(res)}
            onFailure={(res) => console.log(res)}
            // getPofile 속성을 주지 않으면 유저 정보를 받을 수 없습니다.
            getProfile={true}
            style={{display:'block', border:'none', background:'none'}}
            ><img src='/images/login/kakaobutton.png' height='40' />
            </KakaoLogin>
            {/* 페이스북 Oauth */}
            <FacebookLogin
              appId={facebookAPIKey}
              onFail={(error) => {
                console.log('Login Failed!');
                console.log('status: ', error.status);
              }}
              onProfileSuccess={(response) => {
                console.log('Get Profile Success!');
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