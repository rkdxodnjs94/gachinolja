import { useNavigate } from "react-router-dom";
import './Header.css';

function Header(){

  const navigate = useNavigate();

  return (
    <div className='container-fluid p-5 border stroke'>
      <div className='row justify-content-md-center text-center'>
        <div role='button' className='col col-lg-2 border' onClick={()=>{
          navigate('/');
        }}>
          로고
        </div>
        <div role='button' className='col-md-auto border ms-auto' onClick={()=>{
          navigate('/reserve');
        }}>
          예약하기
        </div>
        <div role='button' className='col-md-auto border' onClick={()=>{
          navigate('/party');
        }}>
          모집하기
        </div>
        <div role='button' className='col-md-auto border' onClick={()=>{
          navigate('/boardgame');
        }}>
          보드게임
        </div>
        <div role='button' className='col-md-auto border' onClick={()=>{
          navigate('/food');
        }}>
          음식메뉴
        </div>
        <div role='button' className='col-md-auto border' onClick={()=>{
          navigate('/inquiry');
        }}>
          문의하기
        </div>
        <div role='button' className='col col-lg-2 border ms-auto' onClick={() => {
          navigate('/login');
        }}>
          로그인
        </div>
      </div>
    </div>
  )
}

export default Header;