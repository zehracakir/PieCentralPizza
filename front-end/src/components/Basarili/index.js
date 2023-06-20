import { Box, TextField, Typography, Alert, IconButton, Collapse } from '@mui/material'
import {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Basarili({mesaj}) {
    const [open,setOpen] = useState(true);
  return (
    <Box sx={{ mb: 2, width:"100%"}}>
    <Collapse in={open}>
      <Alert
        severity='success'
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => setOpen(false)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {mesaj}
      </Alert>
    </Collapse>
  </Box>
  )
}

export default Basarili