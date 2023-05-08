import React from 'react'
import { Typography } from '@mui/material'
import SelectSecim from './SelectSecim'
import SosSecimi from './SosSecimi'

function SelectHamurSecimi() {
  const hamurCesitleri = [
    { name: "İnce Hamur", description: "İnce ve çıtır lezzet" },
    { name: "Normal Hamur", description: "Hafif ve kabarık klasik lezzet" },
    { name: "Pie Hamur", description: "PieCentral yumuşacık lezzet" },
    { name: "Susam Kenarlı", description: "simit severlere özel" },
    { name: "Kenarsız", description: "Daha az kalori" },
    { name: "Pie Kenarlı", description: "PieCentral çıtır lezzet" }
  ]
  const sosCesitleri = [
    { name: "Cheddar Soslu" },
    { name: "BBQ Soslu" },
    { name: "Sweet Chili Soslu" },
    { name: "PieCentral Özel Sosu" },
    { name: "Sos İstemiyorum" }
  ]
  return (
    <div>
      <Typography sx={{ fontWeight: 'bold', mb: 2 }}>Hamur Seçimi</Typography>
      <SelectSecim hamurCesitleri={hamurCesitleri} />
      <div style={{ margin: '2rem 0' }}></div>
      <SosSecimi sosCesitleri={sosCesitleri} />
    </div>
  )
}

export default SelectHamurSecimi
