import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CoinPage from './pages/CoinPage';
import ComparePage from './pages/ComparePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/coin/:id' element={<CoinPage />}/>
         <Route path='/compare' element={<ComparePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
