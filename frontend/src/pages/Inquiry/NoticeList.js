import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Table, Container } from 'react-bootstrap';

function NoticeList(){
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
            <tr>
              <td className='text-center'>1</td>
              <td className='text-center'>첫번째 공지사항</td>
              <td className='text-center'>2022-05-24</td>
              <td className='text-center'>1</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
    <Footer />
    </>
  )
}

export default NoticeList;