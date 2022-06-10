import './SignUp.css';
import React, { useCallback, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp(){
  const navigate = useNavigate();
  // 아이디, 비밀번호, 닉네임, 성별, 전화번호
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userPwCheck, setUserPwCheck] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  // 오류메시지 상태저장
  const [idError, setIdError] = useState('');
  const [pwError, setPwError] = useState('');
  const [pwCheckError, setPwCheckError] = useState('');
  const [nickError, setNickError] = useState('');
  const [telError, setTelError] = useState('');
  // 유효성 검사
  const [idCheck, setIdCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [pwConfirmCheck, setPwConfirmCheck] = useState(false);
  const [nickCheck, setNickCheck] = useState(false);
  const [telCheck, setTelCheck] = useState(false);
  // ID
  const onChangeId = useCallback((e) => {
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const emailCurrent = e.target.value;
    setUserId(emailCurrent);
    if ( !emailRegex.test(emailCurrent) ){
      setIdError('이메일 형식이 틀렸어요!ㅠㅠ');
      setIdCheck(false);
    } else if ((e.target.value.length > 30) || (e.target.value.length < 10)) {
      setIdError('10자 이상 30자 이하로 입력해주세요.');
      setIdCheck(false);
    } else {
      setIdError('올바른 이메일 형식입니다!');
      setIdCheck(true);
    }
  },[])
  // PW
  const onChangePw = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,15}$/;
    const passwordCurrent = e.target.value;
    setUserPw(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)){
      setPwError('숫자+영문자+특수문자 조합으로 10~15자 입력해주세요');
      setPwCheck(false);
    } else {
      setPwError('안전한 비밀번호에요 :)');
      setPwCheck(true);
    }
  },[])
  // PwCheck
  const onChangePwConfirm = useCallback((e) => {
    const pwConfirmCurrent = e.target.value;
    setUserPwCheck(pwConfirmCurrent);
    if (userPw === pwConfirmCurrent){
      setPwCheckError('비밀번호가 일치합니다! XD');
      setPwConfirmCheck(true);
    } else {
      setPwCheckError('비밀번호가 일치하지 않아요 ㅠㅠ');
      setPwConfirmCheck(false);
    }
  },[userPw])
  // nickname
  const onChangeNick = useCallback((e) => {
    setNickname(e.target.value);
    if (e.target.value.length > 12 || e.target.value.length < 3) {
      setNickError('3글자 이상 12글자 이하로 입력해주세요.')
      setNickCheck(false)
    } else {
      setNickError('올바른 닉네임 형식입니다 :)')
      setNickCheck(true)
    }
  },[])
  // 성별
  const onChangeGen = (e) => {
    if (e.target.name === 'gender'){
      setGender(e.target.value);
    }
  }
  // 전화번호
  const onChangeTel = useCallback((e) => {
    const TelRegex = /(\d{3}).*(\d{3}).*(\d{4})/;
    const telCurrent = e.target.value;
    setPhone(telCurrent);

    if (!TelRegex.test(telCurrent)) {
      setTelError('전화번호 형식이 틀렸어요! 다시 확인해주세요!!');
      setTelCheck(false);
    } else {
      setTelError('올바른 전화번호 형식이에요 =)');
      setTelCheck(true);
    }
  }, [])

  async function onRegister(e){
    e.stopPropagation();
    if (userPw !== userPwCheck){
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }
    try { 
      const response = await axios.post('/api/user/register',{
        userid : userId,
        userpw : userPw,
        nickname : nickname,
        gender : gender,
        tel : phone
      });
      alert('가입이 완료되었습니다 X)');
      navigate('/');
      console.log(response);
    } catch (error) {
      alert('가입 실패');
      if (error.response.status === 400){
        alert('모든 항목이 필수 입력사항입니다.');
      }
      else if (error.response.status === 409){
        alert('형식에 맞게 잘 입력해주세요');
      }
    }
  }

  return (
    <>
      <Header />
      <div style={{height: '100px'}} className='container-fluid border'>회원가입</div>
      <Form className="container px-5 py-4" style={{minWidth:'1000px'}}>
        <Form.Group className="mb-3" controlId="userid">
          <Form.Label>아이디</Form.Label>
          <Form.Control name='userid' type="email" placeholder="name@example.com" className="w-25"
          onChange={onChangeId} required/>
          {userId.length > 0 && <span className={`${idCheck ? 'success' : 'error'}`}>{idError}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label column sm="2">
            비밀번호
          </Form.Label>
          <Col>
            <Form.Control name="userpw" type="password" placeholder="Password" className="w-25"
            onChange={onChangePw} required/>
            {userPw.length > 0 && <span className={`${pwCheck ? 'success' : 'error'}`}>{pwError}</span>}
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmpassword">
          <Form.Label column sm="2">
            비밀번호 확인
          </Form.Label>
          <Col>
            <Form.Control name="pwcheck" type="password" placeholder="Password" className="w-25"
            required onChange={onChangePwConfirm}/>
            {userPwCheck.length > 0 && <span className={`${pwConfirmCheck ? 'success' : 'error'}`}>{pwCheckError}</span>}
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="nickname">
          <Form.Label column sm="2">
            닉네임
          </Form.Label>
          <Form.Control name="nickname" type="text" placeholder="3~12자" className="w-25"
          onChange={onChangeNick} required/>
          {nickname.length > 0 && <span className={`${nickCheck ? 'success' : 'error'}`}>{nickError}</span>}
        </Form.Group>
        <Form.Group className="mb-1" controlId="gender">
          <Form.Label column sm='1'>
            성별
          </Form.Label>
          <Form.Check inline type='radio' name='gender' value='male' id='male' label='남자' onChange={onChangeGen} required/>
          <Form.Check inline type='radio' name='gender' value='female' id='female' label='여자' onChange={onChangeGen}/>
        </Form.Group>
        <Form.Group controlId="tel">
          <Form.Label column sm="2">
            전화번호
          </Form.Label>
          <Form.Control name='tel' type="text" placeholder="전화번호" className="w-25"
          onChange={onChangeTel} required/>
          {phone.length > 0 && (
            <span className={`${telCheck ? 'success' : 'error'}`}>{telError}</span>
          )}
        </Form.Group>
      </Form>
      <div style={{marginLeft:'20%', marginBottom: '3%'}}>
        <Button type='post' variant="outline-primary" onClick={onRegister}>가입하기</Button>
      </div>
      <Footer />
    </>
  )
}

export default SignUp;