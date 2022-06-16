import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Table, Container } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

function NoticeList(){

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function axiosdata(){
      try {
        const response = await axios.get('/api/notice');
        for (let i=0; i<response.data?.length; i++) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  axiosdata();
  },[setData]);
  
  return (
    <>
      <Header />
      <Container>
      <h1 className='p-5'>공지사항</h1>
        <div className='px-5'>
          <Table responsive="sm">
          <thead>
            <tr className='text-center'>
              <th>No</th>
              <th>제목</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {
              (Object.values(data)).map((data)=>{
                return <tr className='border-dark border-bottom' key={data.no}>
                  <td className='text-center py-2'>{data.no}</td>
                  <td className='text-center' style={{cursor : 'pointer'}}
                  onClick={()=>{ navigate('/notice/'+data._id);}}>{data.title}</td>
                  <td className='text-center'>{moment(data.date).format('YYYY-MM-DD')}</td>
                  <td className='text-center'>{data?.views}</td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </div>
    </Container>
    <Footer />
    </>
  )
}

export default NoticeList;