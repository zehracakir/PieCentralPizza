import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SosSecimi({ sosCesitleri }) {
  const [hamurSecimi, setHamurSecimi] = React.useState('');

  const handleChange = (event) => {
    setHamurSecimi(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Seçimini Yap</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={hamurSecimi}
          label="Seçimini Yap"
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {sosCesitleri.map((hamur, index) => (
            <MenuItem key={index} value={hamur.name}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontWeight: 'bold' }}>{hamur.name}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SosSecimi;
