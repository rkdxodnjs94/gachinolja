import {Container, Row, Col, Form} from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ReadParty(){
    const { id } = useParams();
    const [data, setData] = useState();
    
    useEffect(()=>{
      async function axiosdata(){
      try {
        const response = await axios.get('/api/party/read',{
          params : { no : id }
        });
        setData(response);
      } catch (error) {
        console.log(error);
      } 
    }
    axiosdata();
    },[setData]);

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
            <div className="h4 pb-2 mb-4 text-warning border-bottom border-secondary border-opacity-25">
            {data?.data[0]?.title}
            </div>
            <div>
            {data?.data[0]?.content}
            </div>
        </div>
        </Container>
        <Footer />
    </>  
  )
}
    
export default ReadParty;
