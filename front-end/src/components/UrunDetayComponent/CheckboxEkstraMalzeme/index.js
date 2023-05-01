import { useState } from "react";
import { Box, Checkbox, Container, FormControlLabel, FormGroup, Typography } from "@mui/material";

function CheckboxEkstraMalzeme({name}) {
 

  return (
    <FormGroup>      
        <Box sx={{ display: "flex" }}>
       
        <FormControlLabel
            control={
              <Checkbox
                color="error"
              />
            }
            label={name}
          />
        </Box>
   
    </FormGroup>
  );
}

export default CheckboxEkstraMalzeme;
