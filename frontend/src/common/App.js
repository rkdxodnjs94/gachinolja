import './App.css';
// 라우터세팅
import { Route, Routes } from 'react-router-dom';
// page경로
import Main from '../pages/Main';
import Reserve from '../pages/Reserve';
import Party from '../pages/Party';
import BoardGame from '../pages/BoardGame';
import Food from '../pages/Food';
import Inquiry from '../pages/Inquiry';
import SignUp from '../pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/reserve' element={<Reserve />} />
      <Route path='/party' element={<Party />} />
      <Route path='/boardgame' element={<BoardGame />} />
      <Route path='/food' element={<Food />} />
      <Route path='/inquiry' element={<Inquiry />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;
