import { useDispatch, useSelector } from 'react-redux';
import { setReserve } from '../../stores/RevSlice';
import { clear, setSaveArg, setSavePbID, setSaveDate, setArray } from '../../stores/SaveRevSlice';
import './ArragePlace.css';
import axios from 'axios';
import { Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

function ArragePlace(props){
  
  const dispatch = useDispatch();
  const revdata = useSelector((state) => { return state.revdata });
  const savereserve = useSelector((state) => { return state.savereserve });
  const { id } = useParams();
  // 페이지 시작 시
  useEffect(() => {
    async function axiosdata(){
      try {
        const response = await axios.get('/api/reserve/place',{
          params : {place : revdata[id-1].name}
        });
        for ( let i=0; i<response?.data.length; i++) {
          dispatch(setSaveArg(response?.data[i].arrage));
          dispatch(setSavePbID(response?.data[i].publisherID));
          dispatch(setSaveDate(moment(response?.data[i].date).format('YYYY년 MM월 DD일')));
        }
        dispatch(setArray());
      } catch (error) {
        console.log(error);
      }
    }
    axiosdata();
    return () => {
      dispatch(clear());
    }
  },[dispatch, props.render]);


  return (
    <Suspense fallback={<h1>로딩중입니당</h1>}>
      <div className="container border rounded"
        style={{height:'900px', minWidth: '800px',marginBottom:'21vh'}}>
        <div className='place1 row'>
          <h2>{revdata[id-1].name}</h2>
          {
            savereserve?.map((a,i) => (
              a.includes(1) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="minisize border one yellow">1번</div>
            : <div role='button' className="minisize border one" onClick={()=>{
              dispatch(setReserve(1));
              }}>1번</div>
          }
          {
            savereserve?.map((a,i) => (
              a.includes(2) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="minisize border two yellow">2번</div>
            : <div role='button' className="minisize border two" onClick={()=>{
              dispatch(setReserve(2));
              }}>2번</div>
          }
          {
            savereserve?.map((a,i) => (
              a.includes(3) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="minisize border three yellow">3번</div>
            : <div role='button' className="minisize border three" onClick={()=>{
                dispatch(setReserve(3));
              }}>3번</div>
          }
          {
            savereserve?.map((a,i) => (
              a.includes(4) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="minisize border four yellow">4번</div>
            : <div role='button' className="minisize border four" onClick={()=>{
                dispatch(setReserve(4));
              }}>4번</div>
          }
          {
            savereserve?.map((a,i) => (
              a.includes(5) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="minisize border five yellow">5번</div>
            : <div role='button' className="minisize border five" onClick={()=>{
                dispatch(setReserve(5));
              }}>5번</div>
          }
          {
            savereserve?.map((a,i) => (
              a.includes(6) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="minisize border six yellow">6번</div>
            : <div role='button' className="minisize border six" onClick={()=>{
                dispatch(setReserve(6));
              }}>6번</div>
          }
          {
            savereserve?.map((a,i) => (
              a.includes(7) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="minisize border seven yellow">7번</div>
            : <div role='button' className="minisize border seven" onClick={()=>{
                dispatch(setReserve(7));
              }}>7번</div> 
          }
          {
            savereserve?.map((a,i) => (
              a.includes(8) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="minisize border eight yellow">8번</div>
            : <div role='button' className="minisize border eight" onClick={()=>{
                dispatch(setReserve(8));
              }}>8번</div>
          }
          {
            savereserve?.map((a,i) => (
              a.includes(9) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="midsize border nine yellow">9번</div>
            : <div role='button' className="midsize border nine" onClick={()=>{
                dispatch(setReserve(9));
              }}>9번</div>
        }
          {
            savereserve?.map((a,i) => (
              a.includes(10) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="midsize border ten yellow">10번</div>
            : <div role='button' className="midsize border ten" onClick={()=>{
                dispatch(setReserve(10));
              }}>10번</div> 
          }
          </div>
          {
            savereserve?.map((a,i) => (
              a.includes(11) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
              ? <div role='button' className="midsize2 border eleven yellow">11번</div>
              : <div role='button' className="midsize2 border eleven" onClick={()=>{
                  dispatch(setReserve(11));
                }}>11번</div>
          }
          {
            savereserve?.map((a,i) => (
              a.includes(12) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="midsize2 border twelve yellow">12번</div>
            : <div role='button' className="midsize2 border twelve" onClick={()=>{
                dispatch(setReserve(12));
              }}>12번</div>
          }
        <div className='place2 row'>
          {
            savereserve?.map((a,i) => (
              a.includes(17) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="minisize border seventeen yellow">17번</div>
            : <div role='button' className="minisize border seventeen" onClick={()=>{
                dispatch(setReserve(17));
              }}>17번</div>
          }
          {
            savereserve?.map((a,i) => (
              a.includes(16) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="minisize border sixteen yellow">16번</div>
            : <div role='button' className="minisize border sixteen" onClick={()=>{
                dispatch(setReserve(16));
              }}>16번</div>
          }
          {
            savereserve?.map((a,i) => (
              a.includes(15) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="minisize border fifteen yellow">15번</div>
            : <div role='button' className="minisize border fifteen" onClick={()=>{
                dispatch(setReserve(15));
              }}>15번</div>
          }
          {
            savereserve?.map((a,i) => (
              a.includes(14) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="minisize border fourteen yellow">14번</div>
            : <div role='button' className="minisize border fourteen" onClick={()=>{
                dispatch(setReserve(14));
              }}>14번</div>
            }
          {
            savereserve?.map((a,i) => (
              a.includes(13) && a.includes(moment(props.value).format('YYYY년 MM월 DD일'))
            )).includes(true)
            ? <div role='button' className="midsize border thirteen yellow">13번</div>
            : <div role='button' className="midsize border thirteen" onClick={()=>{
                dispatch(setReserve(13));
              }}>13번</div>
          }
        </div>
        <div className="door border py-1">출입구</div>
        <div className="counter border">카운터</div>
      </div>
    </Suspense>
  )
}

export default ArragePlace;