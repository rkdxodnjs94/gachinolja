import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ArragePlace from '../components/Reserve/ArragePlace';
import ModalReserve from '../components/Reserve/ModalReserve';
import MapContainer from '../components/Reserve/MapContainer';
import { Stack } from 'react-bootstrap';

function Reserve(){
  // 두 컴포넌트 값 공유
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Header />
      <Stack direction='horizontal' gap={2} className='px-5 py-2'>
        <ArragePlace value={value} onChange={onChange} />
        <Stack direction='vertical' gap={2}>
          <ModalReserve value={value} onChange={onChange} />
          <MapContainer />
        </Stack>
      </Stack>
      <Footer />
    </>
  )
}

export default Reserve;