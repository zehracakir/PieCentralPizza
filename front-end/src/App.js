import './Reset.css'
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizzalar from './pages/Urunler/Pizzalar';
import YanUrunler from './pages/Urunler/YanUrunler';
import UrunDetay from './pages/UrunDetay'
import Hakkimizda from './pages/Hakkimizda'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/pizzalar' element={<Pizzalar/>}/>
        <Route path='/yan-urunler' element={<YanUrunler/>}/>
        <Route path='/urun-detay' element={<UrunDetay/>}/>
        <Route path='/hakkimizda' element={<Hakkimizda/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
