import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Party(){

  const navigate = useNavigate();
  const islogin = useSelector(( state ) => { return state.islogin });
  const [data, setData] = useState([]);

  useEffect(() => {
    async function axiosdata(){
      try {
        const response = await axios.get('/api/party');
        for (let i=0; i<response.data.length; i++) {
          setData(response.data);
        }
        console.log(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
  axiosdata();
  },[setData]);

  return (
    <>
      {console.log(data)}
      <Header />
      <Container>
      <h1 className='p-5'>모집하기</h1>
        <div className='px-5'>
        <Table responsive="sm">
          <thead>
            <tr className='text-center'>
              <th>No</th>
              <th>제목</th>
              <th>작성일</th>
              <th>작성자</th>
              <th>신청현황</th>
            </tr>
          </thead>
          <tbody>
            {
              (Object.values(data)).map((data)=>{
                return <tr key={data._id}>
                  <td className='text-center'>{data.no}</td>
                  <td className='text-center'>{data.title}</td>
                  <td className='text-center'>{data.date}</td>
                  <td className='text-center'>{data.publisher}</td>
                  <td className='text-center'>{data.people}</td>
                </tr>
              })
            }
          </tbody>
        </Table>
        <div className='mb-4 mt-4 me-4 d-flex justify-content-end'>
          <Button onClick={()=>{islogin.userid 
          ? navigate('/party/recruit')
          : alert('로그인 하셔야 합니다')}}>모집하기</Button>
        </div>
      </div>
    </Container>
      <Footer />
    </>
  )
}

export default Party;