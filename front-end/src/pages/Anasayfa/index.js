import * as React from 'react';
import Box from '@mui/material/Box';
import SlideComponent from '../../components/Anasayfa/SlideComponent';
import SipariseBasla from '../../components/Anasayfa/SipariseBasla';


const images = [
  {
    label: 'piecentral',
    imgPath:
      'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/slider/anasayfaSlider_1.png',
  },
  {
    label: 'ciftlik',
    imgPath:
      'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/slider/anaSayfaSlider_2.png',
  },
  {
    label: 'mozzarella',
    imgPath:
      'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/slider/anaSayfaSlider_3.png',
  },
  {
    label: 'sufle',
    imgPath:
      'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/slider/anaSayfaSlider_4.png',
  },
];

function Anasayfa() {
  return (
    <Box sx={{ mt: 15, mb: 10 }}  >
      <SlideComponent images={images} />
      <SipariseBasla />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', mt: 5 }}>
        <img src='https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/anasayfaEnAlt.png' alt='anasayfaEnAlt' style={{ display: 'block', margin: 'auto', maxWidth: '75%', width: '100%' }} />
      </Box>

    </Box>
  )
}

export default Anasayfa;
