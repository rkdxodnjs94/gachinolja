import { useNavigate } from "react-router-dom";
import Login from './Login';
import './Header.css';
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from '../stores/LoginSlice';
import $ from 'jquery';

function Header(){

  const navigate = useNavigate();
  const login = useSelector(( state ) => { return state.login } )
  const dispatch = useDispatch();

  return (
    <>
      { login === true ? <Login /> : null }
      <div className='container-fluid p-5 border stroke'>
        <ul className='row justify-content-md-center text-center menu'>
          <div role='button' className='col col-lg-2 border' onClick={()=>{
            navigate('/');
          }}>
            로고
          </div>
          <li role='button' className='col-md-auto border ms-auto' onClick={()=>{
            navigate('/reserve');}} onMouseOver={(e)=>{ e.stopPropagation(); Slide(); }}>
            예약하기
          </li>
          <li role='button' className='col-md-auto border' onClick={()=>{
            navigate('/party'); }} onMouseOver={(e)=>{ e.stopPropagation(); Slide(); }}>
            모집하기
          </li>
          <li role='button' className='col-md-auto border' onClick={()=>{
            navigate('/boardgame');}} onMouseOver={(e)=>{ e.stopPropagation(); Slide(); }}>
            보드게임
          </li>
          <li role='button' className='col-md-auto border' onClick={()=>{
            navigate('/food');}} onMouseOver={(e)=>{ e.stopPropagation(); Slide(); }}>
            음식메뉴
          </li>
          <li role='button' className='col-md-auto border' onClick={()=>{
            navigate('/inquiry');}} onMouseOver={(e)=>{ e.stopPropagation(); Slide(); }}>문의하기
            <div className="submenu">
              <div className="subsubmenu">공지사항</div>
              <div className="subsubmenu">이벤트</div>
              <div className="subsubmenu">1:1문의</div>
            </div>
          </li>
          <div role='button' className='col col-lg-2 border ms-auto' onClick={() => {
            dispatch(setLogin());
          }}>
            로그인
          </div>
        </ul>
      </div>
    </>
  )
}

function Slide(){
  $('.submenu').stop().slideDown(400);
  $('.submenu').css('display','block');
  $('.menu > li').hover(function(){
    $('.submenu').stop().slideDown(400);
  },
  function(){
    $('.submenu').stop().slideUp(400);
  });
}

export default Header;