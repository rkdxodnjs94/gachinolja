import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';

function DetailGame(props){

  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function axiosdata(){
      try {
        const response = await axios.get('/api/boardgame/'+id);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  axiosdata();
  },[setData]);

  return (
    <>
      <Header />
      <div className='container p-4'>
        <img src={data.image_detail} />
      </div>
      <Footer />
    </>
  )
}

export default DetailGame;