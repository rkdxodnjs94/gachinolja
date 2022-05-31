import { useDispatch, useSelector } from 'react-redux';
import { setReserve } from '../../stores/RevSlice';
import { setSaveReserve } from '../../stores/SaveRevSlice';
// import { setPlace } from '../../stores/PlaceSlice';
import './ArragePlace.css';
import axios from 'axios';
import { Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ArragePlace(){
  
  const dispatch = useDispatch();
  const revdata = useSelector((state) => { return state.revdata });
  const savereserve = useSelector((state) => { return state.savereserve });
  // const place = useSelector((state) => { return state.place });
  const { id } = useParams();

  useEffect(() => {
    async function axiosdata(){
      try {
        const response = await axios.get('/api/reserve');
        for (var i=0; i < response.data.length; i++) {
          dispatch(setSaveReserve(response.data[i].place));
          dispatch(setSaveReserve(response.data[i].arrage[0].arrage));
        };
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  axiosdata();
  },[dispatch])

  return (
    <Suspense fallback={<h1>로딩중입니당</h1>}>
      {console.log(savereserve.some((value) => console.log(value)))}
      {console.log(revdata[id-1].name)}

      <div className="container border rounded"
        style={{height:'700px', minWidth: '800px'}}>
        <div className='place1 row'>
          { 
            (savereserve.find((e) => e === revdata[id-1].name) === revdata[id-1].name)
            ? (savereserve.find((element) => (element === 1) ))
              ? <div role='button' className="minisize border one yellow">1번</div>
              : <div role='button' className="minisize border one" onClick={()=>{
                  dispatch(setReserve(1));
                }}>1번</div>
            : <div role='button' className="minisize border one" onClick={()=>{
                dispatch(setReserve(1));
              }}>1번</div>
          }
          {/* {
            (place.find((e) => e === revdata[id-1].name) === revdata[id-1].name)
            ? (savereserve.find((element) => (element === 2) ))
              ? <div role='button' className="minisize border two yellow">2번</div>
              : <div role='button' className="minisize border two" onClick={()=>{
                  dispatch(setReserve(2));
                }}>2번</div>
            : <div role='button' className="minisize border two" onClick={()=>{
                dispatch(setReserve(2));
              }}>2번</div>
          }
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 3) ))
              ? <div role='button' className="minisize border three yellow">3번</div>
              : <div role='button' className="minisize border three" onClick={()=>{
                  dispatch(setReserve(3));
                }}>3번</div>
            : <div role='button' className="minisize border three" onClick={()=>{
                dispatch(setReserve(3));
              }}>3번</div>
          }
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 4) ))
              ? <div role='button' className="minisize border four yellow">4번</div>
              : <div role='button' className="minisize border four" onClick={()=>{
                  dispatch(setReserve(4));
                }}>4번</div>
            : <div role='button' className="minisize border four" onClick={()=>{
                dispatch(setReserve(4));
              }}>4번</div>
          }
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 5) ))
              ? <div role='button' className="minisize border five yellow">5번</div>
              : <div role='button' className="minisize border five" onClick={()=>{
                  dispatch(setReserve(5));
                }}>5번</div>
            : <div role='button' className="minisize border five" onClick={()=>{
                dispatch(setReserve(5));
              }}>5번</div>
          }
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 6) ))
              ? <div role='button' className="minisize border six yellow">6번</div>
              : <div role='button' className="minisize border six" onClick={()=>{
                  dispatch(setReserve(6));
                }}>6번</div>
            : <div role='button' className="minisize border six" onClick={()=>{
                dispatch(setReserve(6));
              }}>6번</div>
          }
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 7) ))
              ? <div role='button' className="minisize border seven yellow">7번</div>
              : <div role='button' className="minisize border seven" onClick={()=>{
                  dispatch(setReserve(7));
                }}>7번</div>
            : <div role='button' className="minisize border seven" onClick={()=>{
                dispatch(setReserve(7));
              }}>7번</div>
          }
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 8) ))
              ? <div role='button' className="minisize border eight yellow">8번</div>
              : <div role='button' className="minisize border eight" onClick={()=>{
                  dispatch(setReserve(8));
                }}>8번</div>
            : <div role='button' className="minisize border eight" onClick={()=>{
                dispatch(setReserve(8));
              }}>8번</div>
          }
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 9) ))
              ? <div role='button' className="midsize border nine yellow">9번</div>
              : <div role='button' className="midsize border nine" onClick={()=>{
                  dispatch(setReserve(9));
                }}>9번</div>
            : <div role='button' className="midsize border nine" onClick={()=>{
                dispatch(setReserve(9));
              }}>9번</div>
          }
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 10) ))
              ? <div role='button' className="midsize border ten yellow">10번</div>
              : <div role='button' className="midsize border ten" onClick={()=>{
                  dispatch(setReserve(10));
                }}>10번</div>
            : <div role='button' className="midsize border ten" onClick={()=>{
                dispatch(setReserve(10));
              }}>10번</div>
            }
          </div>
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 11) ))
              ? <div role='button' className="midsize2 border eleven yellow">11번</div>
              : <div role='button' className="midsize2 border eleven" onClick={()=>{
                  dispatch(setReserve(11));
                }}>11번</div>
            : <div role='button' className="midsize2 border eleven" onClick={()=>{
                dispatch(setReserve(11));
              }}>11번</div>
          }
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 12) ))
              ? <div role='button' className="midsize2 border twelve yellow">12번</div>
              : <div role='button' className="midsize2 border twelve" onClick={()=>{
                  dispatch(setReserve(12));
                }}>12번</div>
            : <div role='button' className="midsize2 border twelve" onClick={()=>{
                dispatch(setReserve(12));
              }}>12번</div>
          }
        <div className='place2 row'>
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 17) ))
              ? <div role='button' className="minisize border seventeen yellow">17번</div>
              : <div role='button' className="minisize border seventeen" onClick={()=>{
                  dispatch(setReserve(17));
                }}>17번</div>
            : <div role='button' className="minisize border seventeen" onClick={()=>{
                dispatch(setReserve(17));
              }}>17번</div>
          }
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 16) ))
              ? <div role='button' className="minisize border sixteen yellow">16번</div>
              : <div role='button' className="minisize border sixteen" onClick={()=>{
                  dispatch(setReserve(16));
                }}>16번</div>
            : <div role='button' className="minisize border sixteen" onClick={()=>{
                dispatch(setReserve(16));
              }}>16번</div>
          }
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 15) ))
              ? <div role='button' className="minisize border fifteen yellow">15번</div>
              : <div role='button' className="minisize border fifteen" onClick={()=>{
                  dispatch(setReserve(15));
                }}>15번</div>
            : <div role='button' className="minisize border fifteen" onClick={()=>{
                dispatch(setReserve(15));
              }}>15번</div>
          }
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 14) ))
              ? <div role='button' className="minisize border fourteen yellow">14번</div>
              : <div role='button' className="minisize border fourteen" onClick={()=>{
                  dispatch(setReserve(14));
                }}>14번</div>
            : <div role='button' className="minisize border fourteen" onClick={()=>{
                dispatch(setReserve(14));
              }}>14번</div>
          }
          {
            (revdata[id-1].name === String(place))
            ? (savereserve.find((element) => (element === 13) ))
              ? <div role='button' className="midsize border thirteen yellow">13번</div>
              : <div role='button' className="midsize border thirteen" onClick={()=>{
                  dispatch(setReserve(13));
                }}>13번</div>
            : <div role='button' className="midsize border thirteen" onClick={()=>{
                dispatch(setReserve(13));
              }}>13번</div>
          } */}
        </div>
        <div className="door border py-1">출입구</div>
        <div className="counter border">카운터</div>
      </div>
    </Suspense>
  )
}

export default ArragePlace;