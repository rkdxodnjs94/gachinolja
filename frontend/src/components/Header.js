import { useNavigate } from "react-router-dom";
import Login from './Login';
import './Header.css';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from '../stores/LoginSlice';
import { setFade } from '../stores/FadeSlice';
import { setGoogleUser } from "../stores/GoogleSlice";
import jQuery from 'jquery';
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
      <div className='container-fluid d-flex header'>
        <div className='d-flex text-center ms-5'>
          <div role='button' onClick={()=>{navigate('/');}}>
            <img src='/images/logo.png' style={{width:'200px', height:'200px'}}/>
          </div>
          <div className="d-flex stroke align-items-center">
            <div className='d-flex menu'>
              <div role='button' className='p-4 menu1' onClick={()=>{
                islogin.userid || googleuser.email || facebookuser.email || naveruser.email
                ? navigate('/reserve1') : alert('로그인 하셔야 합니다')}}>
                예약하기
              </div>
              <div role='button' className='p-4 menu1' onClick={()=>{
                navigate('/party'); }}>
                모집하기
              </div>
              <div role='button' className='p-4 menu1' onClick={()=>{
                navigate('/boardgame');}}>
                보드게임
              </div>
              <div role='button' className='p-4 menu1' onClick={()=>{
                islogin.userid || googleuser.email || facebookuser.email || naveruser.email
                ? navigate('/notice') : alert('로그인 하셔야 합니다')}} 
              onMouseOver={(e)=>{ e.stopPropagation(); Slide(); }}>새소식
                <div className="submenu">
                  <div role='button' className="subsubmenu px-2" onClick={(e)=>{
                    e.stopPropagation(); navigate('/notice');}}>
                    공지사항</div>
                  <div role='button' className="subsubmenu px-2" onClick={(e)=>{
                    e.stopPropagation(); navigate('/event');}}>
                    이벤트</div>
                </div>
              </div>
              <div role='button' className="p-4 menu1" onClick={(e)=>{
                e.stopPropagation();
                {islogin.userid || googleuser.email || facebookuser.email || naveruser.email
                ? navigate('/inquiry') : alert('로그인 하셔야 합니다')}}}>
                문의하기</div>
            </div>
          { islogin.nickname || googleuser.email || facebookuser.email || naveruser.email
          ? <div className="col-2 user">
              <div className='btncss'>
                <span>{islogin.nickname || googleuser.name || facebookuser.name || naveruser.name}님 환영합니다!!</span>
                <div role='button' className="px-2 btncss" onClick={(e)=>{
                  e.stopPropagation(); logout();}}>
                <span>로그아웃</span></div>
              </div>
            </div>
            : <div className="user">
                <div role='button' className='btncss' onClick={() => {
                dispatch(setLogin(true));}}><span>로그인</span></div>
              </div>}
          </div>
        </div>
      </div>
    </>
  )
}

function Slide(){
  const jb = jQuery.noConflict();
  jb('.submenu').stop().slideDown(280);
  jb('.submenu').css('display','block');
  jb('.menu > .menu1').mouseout(function(){
    jb('.submenu').stop().slideUp(280);
  });
}

export default Header;