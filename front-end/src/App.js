import './Reset.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Profil from './pages/Profil';
import Hesabim from './pages/Hesabim';
import Favorilerim from './pages/Favorilerim';
import Siparislerim from './pages/Siparislerim';
import Sepetim from './pages/Sepetim';
import NoMatch from './pages/NoMatch';
import Adreslerim from './pages/Adreslerim';
import UrunArama from './components/UrunArama';
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
import { useAuth } from './contexts/AuthContext';
function App() {
  return (
    <div >
      <Navbar />
      <UrunArama />
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
        <Route path="/profil/sepetim" element={<Sepetim />} />

        <Route path='/' element={<ProtectedRoutes />}>
          <Route path='/profil' element={<Profil />}>
            <Route index element={<Hesabim />} />
            <Route path='hesabim' element={<Hesabim />} />
            <Route path='siparislerim' element={<Siparislerim />} />
            <Route path='favorilerim' element={<Favorilerim />} />
            <Route path='adreslerim' element={<Adreslerim />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Route>



        <Route path='/' element={<ProtectedAdminRoutes />}>
          <Route path='/admin' element={<Admin />}>
            <Route index element={<AdminYeniUrun />} />
            <Route path='admin-yeni-urun' element={<AdminYeniUrun />} />
            <Route path='admin-siparisler' element={<AdminSiparisler />} />
            <Route path='admin-urunler' element={<AdminUrunler />} />
            <Route path='admin-kullanicilar' element={<AdminKullanicilar />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Route>

        <Route path="*" element={<NoMatch />} />



      </Routes>
      <Footer />
    </div>
  );
}
const ProtectedRoutes = () => {
  const { loggedIn } = useAuth();
  return loggedIn ? <Outlet /> : <Navigate to="/" />
}
const ProtectedAdminRoutes = () => {
  const { loggedIn, user } = useAuth();
  return loggedIn && user.otorite === "admin" ? <Outlet /> : <Navigate to="/" />
}
export default App;
