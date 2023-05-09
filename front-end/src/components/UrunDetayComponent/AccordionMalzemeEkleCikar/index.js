import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import CheckboxEkstraMalzeme from './CheckboxEkstraMalzeme';
import ChipCikarilacakMalzeme from './ChipCikarilacakMalzeme';

function AccordionMalzemeEkleCikar({ header }) {
  const items = [
    { ekstraMalzemeAdi: "Beyaz Peynir + 6,00 TL" },
    { ekstraMalzemeAdi: "Domates + 6,00 TL" },
    { ekstraMalzemeAdi: "Jalapeno Biber + 6,00 TL" },
    { ekstraMalzemeAdi: "Kırmızı Köz Biber + 6,00 TL" },
    { ekstraMalzemeAdi: "Extra Mozarella + 6,00 TL" },
    { ekstraMalzemeAdi: "Siyah Zeytin + 6,00 TL" },
    { ekstraMalzemeAdi: "Kekik + 0,25 TL" },
    { ekstraMalzemeAdi: "Parmesan Peyniri + 6,00 TL" },
    { ekstraMalzemeAdi: "Tavuk Parçaları + 6,00 TL" },
    { ekstraMalzemeAdi: "Soğan + 6,00 TL" },
    { ekstraMalzemeAdi: "Pul Biber + 0,25 TL" },

  ];

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Sucuk', isDeleted: false },
    { key: 1, label: 'Sosis', isDeleted: false },
    { key: 2, label: 'Mısır', isDeleted: false },
    { key: 3, label: 'Mantar', isDeleted: false },
    { key: 4, label: 'Zeytin', isDeleted: false },
  ]);

  return (
    <Accordion elevation={0} sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}>
      <AccordionSummary sx={{ padding: 0 }}>
        <Typography sx={{ color: "green" }}>{header}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ display: 'block', padding: 0 }}>
        <Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Ekstra Malzemeler </Typography>
          {items.map((item) => (
            <CheckboxEkstraMalzeme ekstraMalzemeAdi={item.ekstraMalzemeAdi} />
          ))}
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Çıkarmak İstediğiniz Malzemeler </Typography>
          <ChipCikarilacakMalzeme chipData={chipData} setChipData={setChipData} />
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionMalzemeEkleCikar
