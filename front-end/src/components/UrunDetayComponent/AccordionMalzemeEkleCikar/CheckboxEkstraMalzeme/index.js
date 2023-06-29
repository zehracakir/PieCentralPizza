import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
function CheckboxEkstraMalzeme({ ekstraMalzemeAdi, ekstraMalzemeFiyati, urunFiyat, fiyatBelirle }) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    if (checked) {
      fiyatBelirle(urunFiyat - ekstraMalzemeFiyati);
    } else {
      fiyatBelirle(urunFiyat + ekstraMalzemeFiyati);
    }
  }
  return (
    <Box sx={{ display: 'inline-block', mx: 1, width: { xs: '100%', sm: '50%', md: '33.33%', lg: '25%' } }} >
      <FormControlLabel
        control={<Checkbox color="error" />}
        label={`${ekstraMalzemeAdi}+ ${ekstraMalzemeFiyati}TL`}
        checked={checked}
        onClick={handleChange}
      />
    </Box>
  );
}

export default CheckboxEkstraMalzeme;
