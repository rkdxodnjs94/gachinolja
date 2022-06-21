import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';

function DetailGame(){

  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function axiosdata(){
      try {
        const response = await axios.get('/api/boardgame/'+id);
        setData(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
  axiosdata();
  },[setData]);

  return (
    <>
      <Header />
      <Suspense fallback={<h1>로딩중입니당</h1>}>
        <div className='container px-5'>
          <img src={data?.images_detail} style={{width : '100%'}}/>
        </div>
      </Suspense>
      <Footer />
    </>
  )
}

export default DetailGame;