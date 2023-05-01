import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import red from '@mui/material/colors/red';

function CheckboxCikarilacakMalzeme({name}) {
  return (
    <Box sx={{ width: 343 }}>
      <Box role="group" aria-labelledby="topping">
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '8px',
            '--ListItem-radius': '20px',
          }}
        >
            <ListItem>
              <Checkbox
                overlay
                disableIcon
                variant="soft"
                label={name}
                sx={{
                  color: 'grey',
                  '&.Mui-checked': {
                    color: red[500],
                  },
                }}
              />
            </ListItem>
         
        </List>
      </Box>
    </Box>
  );
}
export default CheckboxCikarilacakMalzeme