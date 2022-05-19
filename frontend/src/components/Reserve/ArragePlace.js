import { useDispatch } from 'react-redux';
import { setReserve } from '../../stores/RevSlice';
import './ArragePlace.css';

function ArragePlace(){
  
  const dispatch = useDispatch();

  return (
    <div className="container border rounded"
     style={{height:'700px', minWidth: '800px'}}>
      <div className='place1 row'>
        <div role='button' className="minisize border one" onClick={()=>{
          dispatch(setReserve(1));
        }}>1번</div>
        <div role='button' className="minisize border two" onClick={()=>{
          dispatch(setReserve(2));
        }}>2번</div>
        <div role='button' className="minisize border three" onClick={()=>{
          dispatch(setReserve(3));
        }}>3번</div>
        <div role='button' className="minisize border four" onClick={()=>{
          dispatch(setReserve(4));
        }}>4번</div>
        <div role='button' className="minisize border five" onClick={()=>{
          dispatch(setReserve(5));
        }}>5번</div>
        <div role='button' className="minisize border six" onClick={()=>{
          dispatch(setReserve(6));
        }}>6번</div>
        <div role='button' className="minisize border seven" onClick={()=>{
          dispatch(setReserve(7));
        }}>7번</div>
        <div role='button' className="minisize border eight" onClick={()=>{
          dispatch(setReserve(8));
        }}>8번</div>
        <div role='button' className="midsize border nine" onClick={()=>{
          dispatch(setReserve(9));
        }}>9번</div>
        <div role='button' className="midsize border ten" onClick={()=>{
          dispatch(setReserve(10));
        }}>10번</div>
      </div>
      <div role='button' className="midsize2 border eleven" onClick={()=>{
          dispatch(setReserve(11));
        }}>11번</div>
      <div role='button' className="midsize2 border twelve" onClick={()=>{
          dispatch(setReserve(12));
        }}>12번</div>
      <div className='place2 row'>
        <div role='button' className="minisize border seventeen" onClick={()=>{
          dispatch(setReserve(17));
        }}>17번</div>
        <div role='button' className="minisize border sixteen" onClick={()=>{
          dispatch(setReserve(16));
        }}>16번</div>
        <div role='button' className="minisize border fifteen" onClick={()=>{
          dispatch(setReserve(15));
        }}>15번</div>
        <div role='button' className="minisize border fourteen" onClick={()=>{
          dispatch(setReserve(14));
        }}>14번</div>
        <div role='button' className="midsize border thirteen" onClick={()=>{
          dispatch(setReserve(13));
        }}>13번</div>
      </div>
      <div className="door border py-1">출입구</div>
      <div className="counter border">카운터</div>
    </div>
  )
}

export default ArragePlace;