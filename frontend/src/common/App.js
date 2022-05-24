import './App.css';
// 라우터세팅
import { Route, Routes } from 'react-router-dom';
// page경로
import Main from '../pages/Main';
import Reserve1 from '../pages/Reserve1';
import Reserve2 from '../pages/Reserve2';
import Party from '../pages/Party';
import BoardGame from '../pages/BoardGame';
import Food from '../pages/Food';
import Inquiry from '../pages/Inquiry/Inquiry';
import EventList from '../pages/Inquiry/EventList';
import NoticeList from '../pages/Inquiry/NoticeList';
import SignUp from '../pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/reserve1' element={<Reserve1 />} />
      <Route path='/reserve2/:id' element={<Reserve2 />} />
      <Route path='/party' element={<Party />} />
      <Route path='/boardgame' element={<BoardGame />} />
      <Route path='/food' element={<Food />} />
      <Route path='/inquiry' element={<Inquiry />} />
      <Route path='/event' element={<EventList />} />
      <Route path='/notice' element={<NoticeList />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;
