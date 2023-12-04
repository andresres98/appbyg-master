//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppBrownie from './pages/brownie';
import AppGalleta from './pages/galleta';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AppMnicake from './pages/minicake';
import AppUsuario from './pages/usuario';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/brownie" element={<AppBrownie/>}/> 
      <Route path="/galleta" element={<AppGalleta/>}/>
      <Route path="/minicakes" element={<AppMnicake/>}/>
      <Route path="/usuario" element={<AppUsuario/>}/>
    </Routes>
  );
}

export default App;
