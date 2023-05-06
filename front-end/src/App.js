import './Reset.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import { Routes, Route } from 'react-router-dom';
import Profil from './pages/Profil';
import Hesabim from './pages/Hesabim';
import Favorilerim from './pages/Favorilerim';
import Siparislerim from './pages/Siparislerim';
import NoMatch from './pages/NoMatch';
import Adreslerim from './pages/Adreslerim';
import UrunArama from './components/UrunArama';
function App() {
  return (
    <div >
      <Navbar/>
      <UrunArama/>
      <Routes>
        <Route path='/profil' element={<Profil/>}>
          <Route index element={<Hesabim />} />
          <Route path='hesabim' element={<Hesabim/>}/>
          <Route path='siparislerim' element={<Siparislerim/>}/>
          <Route path='favorilerim' element={<Favorilerim/>}/>
          <Route path='adreslerim' element={<Adreslerim/>}/>
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
