import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Table, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { animations } from 'react-animation';

function NoticeList(){

  const islogin = useSelector((state) => { return state.islogin });
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(()=>{
    document.getElementById('fade').style.animation = `${animations.fadeIn}`;
  },[]);

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
      <Container id='fade'>
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
          {
            islogin.nickname === '관리자'
          ? <div className='mb-4 mt-4 me-4 d-flex justify-content-end'>
            <Button variant="danger" onClick={()=>{navigate('/notice/post')}}>작성하기</Button>
          </div>
          : null
          }
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default NoticeList;