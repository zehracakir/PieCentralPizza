import * as React from 'react';
import Box from '@mui/material/Box';
import SlideComponent from '../../components/Anasayfa/SlideComponent';
import SipariseBasla from '../../components/Anasayfa/SipariseBasla';


const resimler = [
  {
    label: 'piecentral',
    resimUrl:
      'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/slider/anasayfaSlider_1.png',
  },
  {
    label: 'ciftlik',
    resimUrl:
      'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/slider/anaSayfaSlider_2.png',
  },
  {
    label: 'mozzarella',
    resimUrl:
      'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/slider/anaSayfaSlider_3.png',
  },
  {
    label: 'sufle',
    resimUrl:
      'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/slider/anaSayfaSlider_4.png',
  },
];

function Anasayfa() {
  return (
    <Box sx={{ mt: 10, mb: 10 }}  >
      <SlideComponent resimler={resimler} />
      <SipariseBasla />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', mt: 5 }}>
        <img src='https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/anasayfaEnAlt.png' alt='anasayfaEnAlt' style={{ display: 'block', margin: 'auto', maxWidth: '75%', width: '100%' }} />
      </Box>

    </Box>
  )
}

export default Anasayfa;
