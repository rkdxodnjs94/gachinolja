import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ArragePlace from '../components/Reserve/ArragePlace';
import ModalReserve from '../components/Reserve/ModalReserve';
import MapContainer from '../components/Reserve/MapContainer';
import { Stack } from 'react-bootstrap';
import { animations } from 'react-animation';

function Reserve(){
  // 두 컴포넌트 값 공유
  const [value, onChange] = useState(new Date());
  // 하위 컴포넌트 렌더링 공유
  const [render, setRender] = useState(false);

  // 렌더링 될때마다 하위 컴포넌트 적용할 수 있도록 하기
  useEffect(()=>{
    console.log(render)
  },[render]);

  return (
    <div style={{animation : animations.fadeIn}}>
      <Header />
      <Stack direction='horizontal' gap={2} className='px-5 py-2'>
        <ArragePlace value={value} onChange={onChange} render={render}/>
        <Stack direction='vertical' gap={2}>
          <ModalReserve value={value} onChange={onChange} render={render} setRender={setRender}/>
          <MapContainer />
        </Stack>
      </Stack>
      <Footer />
    </div>
  )
}

export default Reserve;