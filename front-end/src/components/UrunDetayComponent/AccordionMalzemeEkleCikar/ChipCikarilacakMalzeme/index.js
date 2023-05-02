import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';


const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipCikarilacakMalzeme({chipData,setChipData}) {

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.map((chip) =>
        chip.key === chipToDelete.key ? { ...chip, isDeleted: !chip.isDeleted } : chip
      )
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              sx={data.isDeleted ? { textDecoration: 'line-through' } : {}}
              onClick={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Box>
  );
}
