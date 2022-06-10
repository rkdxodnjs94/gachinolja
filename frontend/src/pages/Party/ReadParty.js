import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function ReadParty(){

    const navigate = useNavigate();
    const islogin = useSelector((state) => { return state.islogin });
    const { id } = useParams();
    const [data, setData] = useState();
    
    useEffect(()=>{
      async function axiosdata(){
      try {
        const response = await axios.get('/api/party/read', {
          params : { no : id }
        });
        setData(response);
      } catch (error) {
        console.log(error);
      } 
    }
    axiosdata();
    },[setData]);
    async function applyDB(){
      if (islogin.userid === ''){
        alert('로그인 하셔야 합니다');
        return false;
      }
      try {
        const response = await axios.patch('/api/party/apply',{
          data : {
            apply : data?.data[0]?.apply + 1,
            applypeople : islogin.userid
          }
        },
        {params : { no : id }});
        console.log(response);
        alert('신청 완료되었습니다! XD');
      } catch (error) {
        alert('신청 실패 ㅠㅠ');
        console.log(error)
      }
    }

    return (
      <>
        <Header />
        <Container>
        <h1 className='p-5'>모집하기</h1>
        <div className='px-5'>
            <Container>
              <Row>
                <Col md={2}>
                <Form.Label htmlFor="cruit" className='align-bottom'>모집인원</Form.Label>
                </Col>
                <Col md={6}>
                <Form.Control
                  className='mb-3 w-25'
                  type="text"
                  placeholder={data?.data[0]?.people}
                  aria-label="모집인원"
                  disabled
                  readOnly
                />
                </Col>
              </Row>
            </Container>
            <div className="h4 pb-2 mb-4 text-warning border-bottom border-secondary border-opacity-25"
            style={{width: '50vw'}}>
            {data?.data[0]?.title}
            </div>
            <div style={{width:'100vw', height:'50vh'}}>
            {data?.data[0]?.content.split('\n').map((line)=>{
              return (
              <>
                {line}
                <br/>
              </>
              )
            })
            }
            </div>
            <div className="h4 pb-2 mb-4 text-warning border-bottom border-secondary border-opacity-25"
            style={{width: '50vw'}}></div>
            <Container>
              <Row>
                <Col style={{marginLeft : '32vw'}}>
                  { 
                  islogin.userid !== data?.data[0]?.publisherID
                  ? data?.data[0]?.apply !== data?.data[0]?.people
                    ? <Button className='mb-5' variant="primary"
                      onClick={applyDB}>신청하기</Button>
                    : null
                  : null
                  }
                </Col>
                <Col style={{marginRight : '25vw'}}>
                  <Button className='mb-5 ms-3' variant="primary" 
                    onClick={()=>{navigate('/party')}}>목록</Button>
                </Col>
              </Row>
            </Container>
        </div>
        </Container>
        <Footer />
    </>  
  )
}
    
export default ReadParty;
