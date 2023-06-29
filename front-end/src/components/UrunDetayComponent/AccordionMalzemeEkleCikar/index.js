import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import CheckboxEkstraMalzeme from './CheckboxEkstraMalzeme';
import ChipCikarilacakMalzeme from './ChipCikarilacakMalzeme';

function AccordionMalzemeEkleCikar({ header, urunFiyat, fiyatBelirle }) {
  const items = [
    { ekstraMalzemeAdi: "Beyaz Peynir ", ekstraMalzemeFiyati: 6.00 },
    { ekstraMalzemeAdi: "Domates ", ekstraMalzemeFiyati: 6.00 },
    { ekstraMalzemeAdi: "Jalapeno Biber ", ekstraMalzemeFiyati: 6.00 },
    { ekstraMalzemeAdi: "Kırmızı Köz Biber ", ekstraMalzemeFiyati: 6.00 },
    { ekstraMalzemeAdi: "Extra Mozarella ", ekstraMalzemeFiyati: 6.00 },
    { ekstraMalzemeAdi: "Siyah Zeytin ", ekstraMalzemeFiyati: 6.00 },
    { ekstraMalzemeAdi: "Kekik ", ekstraMalzemeFiyati: 0.25 },
    { ekstraMalzemeAdi: "Parmesan Peyniri ", ekstraMalzemeFiyati: 6.00 },
    { ekstraMalzemeAdi: "Tavuk Parçaları ", ekstraMalzemeFiyati: 6.00 },
    { ekstraMalzemeAdi: "Soğan ", ekstraMalzemeFiyati: 6.00 },
    { ekstraMalzemeAdi: "Pul Biber ", ekstraMalzemeFiyati: 0.25 },

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
            <CheckboxEkstraMalzeme ekstraMalzemeAdi={item.ekstraMalzemeAdi} ekstraMalzemeFiyati={item.ekstraMalzemeFiyati} urunFiyat={urunFiyat} fiyatBelirle={fiyatBelirle} />
          ))}
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Çıkarmak İstediğiniz Malzemeler </Typography>
          <ChipCikarilacakMalzeme chipData={chipData} setChipData={setChipData} />
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionMalzemeEkleCikar
