import * as React from 'react';
import Box from '@mui/material/Box';
import SlideComponent from '../../components/SlideComponent';
import { Container } from '@mui/material';



const images = [
  {
    label: 'piecentral',
    imgPath:
      'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/anasayfaSlider_1.png',
  },
  {
    label: 'ciftlik',
    imgPath:
      'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/anaSayfaSlider_2.png',
  },
  {
    label: 'mozzarella',
    imgPath:
      'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/anaSayfaSlider_3.png',
  },
  {
    label: 'sufle',
    imgPath:
      'https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/anasayfa/anaSayfaSlider_4.png',
  },
];

function Anasayfa() {
  return(
    <Container sx={{mt:15,mb:10}}>
        <SlideComponent images={images} sx={{mb:3}}/>
        
    </Container>
  )
}

export default Anasayfa;
