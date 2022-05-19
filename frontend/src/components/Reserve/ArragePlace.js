import './ArragePlace.css';

function ArragePlace(){
  return (
    <div className="container border rounded"
     style={{height:'700px', minWidth: '800px'}}>
      <div className='place1 row'>
        <div className="minisize border one">1번</div>
        <div className="minisize border two">2번</div>
        <div className="minisize border three">3번</div>
        <div className="minisize border four">4번</div>
        <div className="minisize border five">5번</div>
        <div className="minisize border six">6번</div>
        <div className="minisize border seven">7번</div>
        <div className="minisize border eight">8번</div>
        <div className="midsize border nine">9번</div>
        <div className="midsize border ten">10번</div>
      </div>
      <div className="midsize2 border eleven">11번</div>
      <div className="midsize2 border twelve">12번</div>
      <div className='place2 row'>
        <div className="minisize border seventeen">17번</div>
        <div className="minisize border sixteen">16번</div>
        <div className="minisize border fifteen">15번</div>
        <div className="minisize border fourteen">14번</div>
        <div className="midsize border thirteen">13번</div>
      </div>
      <div className="door border py-1">출입구</div>
      <div className="counter border">카운터</div>
    </div>
  )
}

export default ArragePlace;