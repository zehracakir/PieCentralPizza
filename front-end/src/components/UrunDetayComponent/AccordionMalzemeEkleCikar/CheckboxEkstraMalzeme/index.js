import { Box, Checkbox, FormControlLabel } from "@mui/material";

function CheckboxEkstraMalzeme({ ekstraMalzemeAdi }) {
  return (
    <Box sx={{ display: 'inline-block', mx: 1, width: { xs: '100%', sm: '50%', md: '33.33%', lg: '25%' } }} >
      <FormControlLabel
        control={<Checkbox color="error" />}
        label={ekstraMalzemeAdi}
      />
    </Box>
  );
}

export default CheckboxEkstraMalzeme;
