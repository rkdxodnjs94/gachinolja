import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';


function SignUp(){

  const onChange = (e) => {
    return e.target.value;
    // const { name, value } = e.target;
    // console.log(name, value);
  }
  async function Axios(e){
    try { 
      const response = axios.post('/api/user/register',{
        userid : onChange(),
        userpw : onChange(),
        nickname : onChange(),
        gender : onChange(),
        tel : onChange()
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
      <Form action='/api/user/register' className="container p-5">
        <Form.Group className="mb-3" controlId="userid">
          <Form.Label>아이디</Form.Label>
          <Form.Control name='userid' type="email" placeholder="name@example.com" className="w-25"
          onChange={onChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label column sm="2">
            비밀번호
          </Form.Label>
          <Col>
            <Form.Control name="userpw" type="password" placeholder="Password" className="w-25"
            onChange={onChange}/>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmpassword">
          <Form.Label column sm="2">
            비밀번호 확인
          </Form.Label>
          <Col>
            <Form.Control name="userpw" type="password" placeholder="Password" className="w-25"/>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="nickname">
          <Form.Label column sm="2">
            닉네임
          </Form.Label>
          <Form.Control name="nickname" type="text" placeholder="3~12자" className="w-25"
          onChange={onChange}/>
        </Form.Group>
        <Form.Group className="mb-1" controlId="gender">
          <Form.Label column sm='1'>
            성별
          </Form.Label>
          <Form.Check inline type='radio' name='gender' value='male' id='male' label='남자' onChange={onChange}/>
          <Form.Check inline type='radio' name='gender' value='female' id='female' label='여자' onChange={onChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="tel">
          <Form.Label column sm="2">
            전화번호
          </Form.Label>
          <Form.Control name='tel' type="text" placeholder="전화번호" className="w-25"
          onChange={onChange}/>
        </Form.Group>
        <Button type='post' variant="outline-primary" onClick={Axios}>가입하기</Button>
      </Form>
      <Footer />
    </>
  )
}

export default SignUp;