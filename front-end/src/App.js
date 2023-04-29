import './Reset.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizzalar from './pages/Urunler/Pizzalar';
import YanUrunler from './pages/Urunler/YanUrunler';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/pizzalar" element={<Pizzalar/>}/>
        <Route path='/yan-urunler' element={<YanUrunler/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
