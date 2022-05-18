import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form, Col, Button } from 'react-bootstrap';


function SignUp(){
  return (
    <>
      <Header />
      <div style={{height: '100px'}} className='container-fluid border'>회원가입</div>
      <Form action='#' className="container p-5">
        <Form.Group className="mb-3" controlId="userid">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" className="w-25"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label column sm="2">
            비밀번호
          </Form.Label>
          <Col>
            <Form.Control type="password" placeholder="Password" className="w-25"/>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmpassword">
          <Form.Label column sm="2">
            비밀번호 확인
          </Form.Label>
          <Col>
            <Form.Control type="password" placeholder="Password" className="w-25"/>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="nickname">
          <Form.Label column sm="2">
            닉네임
          </Form.Label>
          <Form.Control type="text" placeholder="3~12자" className="w-25"/>
        </Form.Group>
        <Form.Group className="mb-1" controlId="gender">
          <Form.Label column sm='1'>
            성별
          </Form.Label>
          <Form.Check inline type='radio' name='gender' id='male' label='남자'/>
          <Form.Check inline type='radio' name='gender' id='female' label='여자'/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="nickname">
          <Form.Label column sm="2">
            전화번호
          </Form.Label>
          <Form.Control type="text" placeholder="전화번호" className="w-25"/>
        </Form.Group>
        <Button type='button' variant="outline-primary">가입하기</Button>
      </Form>
      <Footer />
    </>
  )
}

export default SignUp;