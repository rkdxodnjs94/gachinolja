import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function NoticeDetail(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(()=>{
      async function axiosdata(){
      try {
        const response = await axios.get(`/api/notice/${id}`);
        setData(response);
      } catch (error) {
        console.log(error);
        }
      }
      axiosdata(); 
    },[setData]);

    useEffect(()=>{
      async function axiosdata(){
      try {
        const response = await axios.patch(`/api/notice/${id}`, {
          data : {
            views : (Number(data.data.views)+1)
          }
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      } 
    }
    axiosdata();
    },[data]);


    return (
    <>
        <Header />
        <Container>
        <h1 className='p-5'>공지사항</h1>
        <div className='px-5'>
            <div className="h4 pb-2 mb-4 text-warning border-bottom border-secondary border-opacity-25"
            style={{width: '50vw'}}>
            {data?.data?.title}
            </div>
            <div style={{width:'100vw', height:'50vh'}}>
              {data?.data?.content.split('\n').map((line)=>{
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
                <Button className='mb-5' variant="primary">작성하기</Button>
                </Col>
                <Col style={{marginRight : '25vw'}}>
                <Button className='mb-5 ms-3' variant="primary" 
                    onClick={()=>{navigate('/notice')}}>목록</Button>
                </Col>
            </Row>
            </Container>
        </div>
        </Container>
        <Footer />
    </>
    )
}

export default NoticeDetail;