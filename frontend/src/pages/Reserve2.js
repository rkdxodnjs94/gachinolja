import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ArragePlace from '../components/Reserve/ArragePlace';
import ModalReserve from '../components/Reserve/ModalReserve';
import { Stack } from 'react-bootstrap';

function Reserve(){
  return (
    <>
      <Header />
      <Stack direction='horizontal' gap={2} className='px-5 py-2'>
        <ArragePlace />
        <ModalReserve />
      </Stack>
      <Footer />
    </>
  )
}

export default Reserve;