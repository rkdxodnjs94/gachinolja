import React, { Suspense, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import GamePageNum from '../../elements/GamePageNum';
import { Row, Col, Card, Form, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { animations } from 'react-animation';

function BoardGame(){

  const navigate = useNavigate();
  // boardgame 데이터용
  const [data, setData] = useState([]);
  // 가나다순 정렬 state용
  const [hangeulFilter, setHangeulFilter] = useState('');
  // 시간 정렬 state용
  const [minFilter, setMinFilter] = useState('');
  // pagination state용
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;

  // fade 효과
  useEffect(()=>{
    document.getElementById('fade').style.animation = `${animations.fadeIn}`;
  },[]);

  useEffect(() => {
    async function axiosdata(){
      try {
        const response = await axios.get('/api/boardgame');
        for (let i=0; i<response.data.length; i++) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  axiosdata();
  },[setData]);

  // 가나다정렬
  function ganadaFilter(){
    const ganadaSort = [...data];
    const sorts = ganadaSort.sort((a,b)=>{ // 게임 이름으로 가나다 정렬
      return a.titles < b.titles ? -1 : a.titles > b.titles ? 1 : 0;
    });
    setHangeulFilter(sorts);
  }

  // 시간정렬
  function timeFilter(){
    const timevalue = document.getElementById('time');
    if ( Number(timevalue.options[timevalue.selectedIndex].value) === 20 ){
      const filter = data.filter((data)=>{
        return Number(data.times.replace("분","")) <= 20
      });
      setMinFilter(filter);
    } else if ( Number(timevalue.options[timevalue.selectedIndex].value) === 30 ) {
      const filter = data.filter((data)=>{
        return (Number(data.times.slice(0,2).replace("분","")) > 20) && (Number(data.times.slice(0,2).replace("분","")) <= 30)
      });
      setMinFilter(filter);
    } else if ( Number(timevalue.options[timevalue.selectedIndex].value) === 40 ) {
      const filter = data.filter((data)=>{
        return (Number(data.times.slice(0,2).replace("분","")) > 30) && (Number(data.times.slice(0,2).replace("분","")) <= 40)
      });
      setMinFilter(filter);
    }
  }
  // 원래대로
  function reset(){
    setMinFilter('');
    setHangeulFilter('');
  }

  return (
    <Suspense fallback={<h1>로딩중입니당</h1>}>
    <Header />
    <div className='container p-4' id='fade'>
      <Stack direction="horizontal" gap={3}>
        <button className="btn btn-danger ms-5" onClick={ganadaFilter}>
          가나다순
        </button>
        <button className="btn btn-danger" onClick={reset}>
          원래대로
        </button>
        <Form.Select id='time' style={{width: '180px'}} onChange={timeFilter}>
          <option>게임 플레이 시간</option>
          <option value='20'>20분 이하</option>
          <option value='30'>30분 이상</option>
        </Form.Select>
      </Stack> 
      <Row xs={1} md={5} className="p-5">
        {
          hangeulFilter 
          ? hangeulFilter?.slice(offset, offset + limit).map((data,i) => (
            <GameList data={data} navigate={navigate} />
            ))
          : minFilter  
          ? minFilter?.slice(offset, offset + limit).map((data,i) => (
            <GameList data={data} navigate={navigate} />
            ))
          : data?.slice(offset, offset + limit).map((data,i) => (
            <GameList data={data} navigate={navigate} />
          ))
        }
        </Row>
        <GamePageNum page={page} setPage={setPage} limit={limit} data={data} />
    </div>
    <Footer />
    </Suspense>
  )
}

function GameList(props){
  return (
    <Col className='mb-5'>
      <Card style={{ height : '500px'}}>
      <Card.Img variant="top" src={props.data?.images} height='250' 
      onClick={()=>{ props.navigate('/boardgame/' + props.data?._id)}} style={{ cursor : 'pointer'}} />
      <Card.Body>
        <Card.Title className='cardname' onClick={(e)=>{ e.stopPropagation(); 
        props.navigate('/boardgame/' + props.data?._id)}} style={{cursor : 'pointer'}}>
          { props.data?.titles }
        </Card.Title>
        <Card.Text className='cardaddress' onClick={(e)=>{ e.stopPropagation();
        props.navigate('/boardgame/' + props.data?._id)}} style={{cursor : 'pointer'}}>
          게임인원 : { props.data?.people }<br/>
          게임시간 : { props.data?.times }<br/>
          게임장르 : { props.data?.game_genre }<br/>
        </Card.Text>
      </Card.Body>
      </Card>
    </Col>
  )
}

export default BoardGame;