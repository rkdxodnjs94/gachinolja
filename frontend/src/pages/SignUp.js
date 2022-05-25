import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';


function SignUp(){
  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();
  const [pwCheck, setPwCheck] = useState();
  const [pwError, setPwError] = useState(false);
  const [nickname, setNickname] = useState();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();

  const onChange = (e) => {
    if (e.target.name === 'userid'){
      setUserId(e.target.value);
    } else if (e.target.name === 'userpw'){
      setUserPw(e.target.value);
    } else if (e.target.name === 'pwcheck') {
      setPwError(e.target.value !== userPw);
      setPwCheck(e.target.value);
    }else if (e.target.name === 'nickname'){
      setNickname(e.target.value);
    } else if (e.target.name === 'gender'){
      setGender(e.target.value);
    } else if (e.target.name === 'tel'){
      setPhone(e.target.value);
    }
  }

  const onRegister = (e) => {
    e.stopPropagation();
    if (userPw !== pwCheck) {
      return setPwError(true);
    }
    try { 
      const response = axios.post('/api/user/register',{
        userid : userId,
        userpw : userPw,
        nickname : nickname,
        gender : gender,
        tel : phone
      });
      console.log(response);
    } catch (error) {
      console.log(error);
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
          onChange={onChange} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label column sm="2">
            비밀번호
          </Form.Label>
          <Col>
            <Form.Control name="userpw" type="password" placeholder="Password" className="w-25"
            onChange={onChange} required/>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmpassword">
          <Form.Label column sm="2">
            비밀번호 확인
          </Form.Label>
          <Col>
            <Form.Control name="pwcheck" type="password" placeholder="Password" className="w-25" required/>
            {pwError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="nickname">
          <Form.Label column sm="2">
            닉네임
          </Form.Label>
          <Form.Control name="nickname" type="text" placeholder="3~12자" className="w-25"
          onChange={onChange} required/>
        </Form.Group>
        <Form.Group className="mb-1" controlId="gender">
          <Form.Label column sm='1'>
            성별
          </Form.Label>
          <Form.Check inline type='radio' name='gender' value='male' id='male' label='남자' onChange={onChange} required/>
          <Form.Check inline type='radio' name='gender' value='female' id='female' label='여자' onChange={onChange}/>
        </Form.Group>
        <Form.Group controlId="tel">
          <Form.Label column sm="2">
            전화번호
          </Form.Label>
          <Form.Control name='tel' type="text" placeholder="전화번호" className="w-25"
          onChange={onChange} required/>
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