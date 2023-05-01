import React from "react";
import UrunDetayComponent from "../../components/UrunDetayComponent";
import CheckboxEkstraMalzeme from "../../components/UrunDetayComponent/CheckboxEkstraMalzeme"
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import CheckboxCikarilacakMalzeme from "../../components/UrunDetayComponent/CheckboxCikarilacakMalzeme";

const UrunDetay = () => {
  let urunDetay = {
    imageUrl: "https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/urunler/pizzalar/ciftlik-evi.jpg",
    name: "Çiftlik Evi (Büyük)",
    description: "Pizza sosu, mozzarella peyniri, salam, mantar",
    price: "149.90 TL"
  };
  const items = [
    {name:"Beyaz Peynir + 6,00 TL"},
    {name:"Domates + 6,00 TL"},
    {name:"Jalapeno Biber + 6,00 TL"},
    {name:"Kırmızı Köz Biber + 6,00 TL"},
    {name:"Extra Mozarella + 6,00 TL"},
    {name:"Siyah Zeytin + 6,00 TL"},
    {name:"Kekik + 0,25 TL"},
    {name:"Parmesan Peyniri + 6,00 TL"},
    {name:"Tavuk Parçaları + 6,00 TL"},
    {name:"Soğan + 6,00 TL"},
    {name:"Pul Biber + 0,25 TL"},
    
  ];
  const removedItem = [
    {name:"Beyaz Peynir + 6,00 TL"},
    {name:"Domates + 6,00 TL"},
    {name:"Jalapeno Biber + 6,00 TL"},
    {name:"Kırmızı Köz Biber + 6,00 TL"},
    {name:"Extra Mozarella + 6,00 TL"},
    {name:"Siyah Zeytin + 6,00 TL"},
    {name:"Kekik + 0,25 TL"},
    {name:"Parmesan Peyniri + 6,00 TL"},
    {name:"Tavuk Parçaları + 6,00 TL"},
    {name:"Soğan + 6,00 TL"},
    {name:"Pul Biber + 0,25 TL"},
    
  ];

  return (
    <Container maxWidth="lg" sx={{mt:15,mb:10}}>
      {/* <UrunDetayComponent
        imageUrl={urunDetay.imageUrl}
        name={urunDetay.name}
        description={urunDetay.description}
        price={urunDetay.price}
      /> */}
      <Typography variant="body2"  sx={{fontWeight:'bold'}}>Ekstra Malzemeler </Typography>
       {items.map((item) => (
        <CheckboxEkstraMalzeme name={item.name} />
      ))}
      {removedItem.map((item) => (
        <CheckboxCikarilacakMalzeme name={[item.name]}/>
      ))}
      
    </Container>
  );
};

export default UrunDetay