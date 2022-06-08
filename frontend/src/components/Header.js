import { useNavigate } from "react-router-dom";
import Login from './Login';
import './Header.css';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from '../stores/LoginSlice';
import { setFade } from '../stores/FadeSlice';
import $ from 'jquery';
import { useEffect } from "react";

function Header(){

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector(( state ) => { return state.login } )
  const islogin = useSelector(( state ) => { return state.islogin })
  const fade = useSelector(( state ) => { return state.fade })
  useEffect(()=>{
    setTimeout(()=>{ dispatch(setFade('end')) }, 100)
    return ()=>{
      dispatch(setFade(''));
    }
  },[login])
  const logout = () => {
    try {
      const response = axios.post('/api/user/logout');
      alert('로그아웃 성공!');
      console.log(response);
      window.location.replace('/');
    } catch (error) {
      alert('로그아웃 실패');
      console.log(error);
    }
  }

  return (
    <>
      { login === true 
      ? <Login fade={fade}/>
      : null }
      <div className='container-fluid p-5 border stroke'>
        <div className='d-flex text-center'>
          <div role='button' className='col col-lg-2 border' onClick={()=>{
            navigate('/');
          }}>
            로고
          </div>
          <div className="ms-auto d-flex menu">
            <div role='button' className='col col-md-auto border menu1' onClick={()=>{
              islogin.userid ? navigate('/reserve1') : alert('로그인 하셔야 합니다')}} 
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
              islogin.userid ? navigate('/inquiry') : alert('로그인 하셔야 합니다')}} 
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
                  {islogin.userid ? navigate('/inquiry') : alert('로그인 하셔야 합니다')}}}>
                  1:1문의</div>
              </div>
            </div>
          </div>
          { islogin.nickname
          ? <div role='button' className='col col-md-auto border ms-auto' 
          onMouseOver={(e)=>{ e.stopPropagation(); Slide(); }}>
              {islogin.nickname}님 환영합니다 ㅎㅎ
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