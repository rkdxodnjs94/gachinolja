import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Party(){
  const navigate = useNavigate();
  return (
    <>
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
            <tr>
              <td className='text-center'>1</td>
              <td className='text-center'>건대근처에서 같이 하실 분~</td>
              <td className='text-center'>2022-05-29</td>
              <td className='text-center'>test</td>
              <td className='text-center'>1/4</td>
            </tr>
          </tbody>
        </Table>
        <div className='mb-4 mt-4 me-4 d-flex justify-content-end'>
          <Button onClick={()=>{navigate('/party/recruit')}}>모집하기</Button>
        </div>
      </div>
    </Container>
      <Footer />
    </>
  )
}

export default Party;