import './Reset.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Anasayfa from './pages/Anasayfa';
import Pizzalar from './pages/Urunler/Pizzalar';
import YanUrunler from './pages/Urunler/YanUrunler';
import Hakkimizda from './pages/Hakkimizda'
import PizzalarDetay from './pages/UrunDetay/PizzalarDetay';
import YanUrunlerDetay from './pages/UrunDetay/YanUrunlerDetay';
import ScrollToTop from './components/Scroll';
import Admin from './pages/Admin';
import AdminSiparisler from './pages/AdminSiparisler';
import AdminUrunler from './pages/AdminUrunler';
import AdminYeniUrun from './pages/AdminYeniUrun';
import AdminKullanicilar from './pages/AdminKullanicilar';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';

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

        <Route path='/admin' element={<Admin/>}>
          <Route index element={<AdminYeniUrun />} />
          <Route path='admin-yeni-urun' element={<AdminYeniUrun/>}/>
          <Route path='admin-siparisler' element={<AdminSiparisler/>}/>
          <Route path='admin-urunler' element={<AdminUrunler/>}/>
          <Route path='admin-kullanicilar' element={<AdminKullanicilar/>}/>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
