import { useNavigate } from "react-router-dom";
import Login from './Login';
import './Header.css';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from '../stores/LoginSlice';
import { setFade } from '../stores/FadeSlice';
import { setGoogleUser } from "../stores/GoogleSlice";
import $ from 'jquery';
import { useEffect } from "react";
import { setFacebookUser } from "../stores/FacebookSlice";
import { setNaverUser } from "../stores/NaverSlice";

function Header(){

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector(( state ) => { return state.login } );
  const islogin = useSelector(( state ) => { return state.islogin });
  const googleuser = useSelector((state) => { return state.googleuser });
  const facebookuser = useSelector((state) => { return state.facebookuser });
  const naveruser = useSelector((state) => { return state.naveruser });
  const fade = useSelector(( state ) => { return state.fade });
  useEffect(()=>{
    setTimeout(()=>{ dispatch(setFade('end')) }, 100)
    return ()=>{
      dispatch(setFade(''));
    }
  },[login]);
  const logout = () => {
    try {
      const response = axios.post('/api/user/logout');
      alert('로그아웃 성공!');
      dispatch(setGoogleUser(''));
      dispatch(setFacebookUser(''));
      dispatch(setNaverUser(''));
      window.location.replace('/');
    } catch (error) {
      alert('로그아웃 실패');
      console.log(error);
    }
  };
  return (
    <>
      { login === true 
      ? <Login fade={fade}/>
      : null }
      <div className='container-fluid p-5 border'>
        <div className='d-flex text-center'>
          <div role='button' className='col col-lg-2 border' onClick={()=>{
            navigate('/');
          }}>
            <img src='/images/logo_test.png' style={{width:'100px', height:'100px'}}/>
          </div>
          <div className="stroke">
            <div className="ms-auto d-flex menu">
              <div role='button' className='col col-md-auto border menu1' onClick={()=>{
                islogin.userid || googleuser.email || facebookuser.email || naveruser.email
                ? navigate('/reserve1') : alert('로그인 하셔야 합니다')}} 
                onMouseOver={(e)=>{ e.stopPropagation(); Slide(); }}>
                예약하기
              </div>
              <div role='button' className='col col-md-auto border menu1' onClick={()=>{
                navigate('/party'); }} onMouseOver={(e)=>{ e.stopPropagation(); Slide(); }}>
                모집하기
              </div>
              <div role='button' className='col col-md-auto border menu1' onClick={()=>{
                navigate('/boardgame');}} onMouseOver={(e)=>{ e.stopPropagation(); Slide(); }}>
                보드게임
              </div>
              <div role='button' className='col col-md-auto border menu1' onClick={()=>{
                islogin.userid || googleuser.email || facebookuser.email || naveruser.email
                ? navigate('/inquiry') : alert('로그인 하셔야 합니다')}} 
              onMouseOver={(e)=>{ e.stopPropagation(); Slide(); }}>문의하기
                <div className="submenu">
                  <div role='button' className="subsubmenu" onClick={(e)=>{
                    e.stopPropagation(); navigate('/notice');}}>
                    공지사항</div>
                  <div role='button' className="subsubmenu" onClick={(e)=>{
                    e.stopPropagation(); navigate('/event');}}>
                    이벤트</div>
                  <div role='button' className="subsubmenu" onClick={(e)=>{
                    e.stopPropagation();
                    {islogin.userid || googleuser.email || facebookuser.email || naveruser.email
                    ? navigate('/inquiry') : alert('로그인 하셔야 합니다')}}}>
                    1:1문의</div>
                </div>
              </div>
            </div>
          </div>
          { islogin.nickname || googleuser.email || facebookuser.email || naveruser.email
          ? <div className='col col-md-auto border ms-auto' 
          onMouseOver={(e)=>{ e.stopPropagation(); Slide(); }}>
              {islogin.nickname || googleuser.name || facebookuser.name || naveruser.name}님 환영합니다!!
            <div className="submenu">
              <div role='button' className="subsubmenu" onClick={(e)=>{
                e.stopPropagation(); logout();}}>
                로그아웃</div>
            </div>
          </div>
            : <div role='button' className='col col-lg-2 border ms-auto' onClick={() => {
            dispatch(setLogin(true));
          }}>로그인
            </div>}
          </div>
        </div>
    </>
  )
}

function Slide(){
  $('.submenu').stop().slideDown(300);
  $('.submenu').css('display','block');
  $('.menu > .menu1').mouseout(function(){
    $('.submenu').stop().slideUp(300);
  });
}

export default Header;