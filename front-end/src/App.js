import './Reset.css'
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizzalar from './pages/Urunler/Pizzalar';
import YanUrunler from './pages/Urunler/YanUrunler';
import Hakkimizda from './pages/Hakkimizda'
import UrunDetay from './pages/UrunDetay';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/pizzalar' element={<Pizzalar/>}/>
        <Route path='/yan-urunler' element={<YanUrunler/>}/>
        <Route path='/hakkimizda' element={<Hakkimizda/>}/>
        <Route path='/pizzalar/urun-detay' element={<UrunDetay/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
