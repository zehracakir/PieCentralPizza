import React from 'react'
import { Typography } from '@mui/material'
import SelectSecim from './SelectSecim'
import SosSecimi from './SosSecimi'

function SelectHamurSecimi() {
  const hamurCesitleri = [
    { hamurAdi: "İnce Hamur", hamurOzellikler: "İnce ve çıtır lezzet" },
    { hamurAdi: "Normal Hamur", hamurOzellikler: "Hafif ve kabarık klasik lezzet" },
    { hamurAdi: "Pie Hamur", hamurOzellikler: "PieCentral yumuşacık lezzet" },
    { hamurAdi: "Susam Kenarlı", hamurOzellikler: "simit severlere özel" },
    { hamurAdi: "Kenarsız", hamurOzellikler: "Daha az kalori" },
    { hamurAdi: "Pie Kenarlı", hamurOzellikler: "PieCentral çıtır lezzet" }
  ]
  const sosCesitleri = [
    { sosAdi: "Cheddar Soslu" },
    { sosAdi: "BBQ Soslu" },
    { sosAdi: "Sweet Chili Soslu" },
    { sosAdi: "PieCentral Özel Sosu" },
    { sosAdi: "Sos İstemiyorum" }
  ]
  return (
    <div>
      <Typography sx={{ fontWeight: 'bold', mb: 3 }}>Hamur Seçimi</Typography>
      <SelectSecim hamurCesitleri={hamurCesitleri} />
      <div style={{ margin: '2rem 0' }}></div>
      <SosSecimi sosCesitleri={sosCesitleri} />
    </div>
  )
}

export default SelectHamurSecimi
