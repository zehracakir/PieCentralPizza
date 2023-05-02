import { Box, Checkbox, FormControlLabel, FormGroup} from "@mui/material";

function CheckboxEkstraMalzeme({name}) {
  return (
    <Box sx={{ display: 'inline-block', mx: 1, width: {xs: '100%', sm: '50%', md: '33.33%', lg: '25%'}}} >
      <FormControlLabel
        control={<Checkbox color="error" />}
        label={name}
      />
    </Box>
  );
}

export default CheckboxEkstraMalzeme;
