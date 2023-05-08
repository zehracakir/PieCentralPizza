import './Reset.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Anasayfa from './pages/Anasayfa';
import Pizzalar from './pages/Urunler/Pizzalar';
import YanUrunler from './pages/Urunler/YanUrunler';
import Hakkimizda from './pages/Hakkimizda'
import PizzalarDetay from './pages/UrunDetay/PizzalarDetay';
import YanUrunlerDetay from './pages/UrunDetay/YanUrunlerDetay';
import Footer from './components/Footer';
import ScrollToTop from './components/Scroll';
function App() {

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Anasayfa />} />
        <Route path='/pizzalar' element={<Pizzalar />} />
        <Route path='/yan-urunler' element={<YanUrunler />} />
        <Route path='/hakkimizda' element={<Hakkimizda />} />
        <Route path='/pizzalar/urun-detay' element={<PizzalarDetay />} />
        <Route path='/yan-urunler/tatlilar/urun-detay' element={<YanUrunlerDetay />} />
        <Route path='/yan-urunler/soslar/urun-detay' element={<YanUrunlerDetay />} />
        <Route path='/yan-urunler/icecekler/urun-detay' element={<YanUrunlerDetay />} />
        <Route path='/yan-urunler/baslangiclar/urun-detay' element={<YanUrunlerDetay />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
