import './App.css';
// 라우터세팅
import { Route, Routes } from 'react-router-dom';
// page경로(메인페이지)
import Main from '../pages/Main';
// page경로(예약페이지)
import Reserve1 from '../pages/Reserve1';
import Reserve2 from '../pages/Reserve2';
// page경로(모집페이지)
import Party from '../pages/Party/Party';
import RecruitParty from '../pages/Party/RecruitParty';
import ReadParty from '../pages/Party/ReadParty';
// page경로(보드게임페이지)
import BoardGame from '../pages/BoardGame';
// page경로(문의페이지)
import Inquiry from '../pages/Inquiry/Inquiry';
import EventList from '../pages/Inquiry/EventList';
import NoticeList from '../pages/Inquiry/NoticeList';
// page경로(회원가입)
import SignUp from '../pages/SignUp';
// page경로(Oauth)
import Oauth from '../pages/Oauth';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/reserve1' element={<Reserve1 />} />
      <Route path='/reserve2/:id' element={<Reserve2 />} />
      <Route path='/party' element={<Party />} />
      <Route path='/party/:id' element={<ReadParty />} />
      <Route path='/party/recruit' element={<RecruitParty />} />
      <Route path='/boardgame' element={<BoardGame />} />
      <Route path='/inquiry' element={<Inquiry />} />
      <Route path='/event' element={<EventList />} />
      <Route path='/notice' element={<NoticeList />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/oauth' element={<Oauth />} />
    </Routes>
  );
}

export default App;
