import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CoinPage from './pages/CoinPage';
import ComparePage from './pages/ComparePage';
import WatchlistPage from './pages/WatchlistPage';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {

 
    
  return (
    
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/coin/:id' element={<CoinPage />}/>
         <Route path='/compare' element={<ComparePage />}/>
         <Route path='/watchlist' element={<WatchlistPage />}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
