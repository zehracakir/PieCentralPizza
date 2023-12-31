import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Popconfirm } from 'antd';
import { adminKullaniciSil } from '../../api/KullaniciApi/api';
import { useQueryClient } from 'react-query';

function AdminKullaniciListe({ kullaniciAdi, userid, adres, email, telefonNo, kayitTarihi}) {
  const [open, setOpen] = React.useState(false);

  const firstLetter = kullaniciAdi[0].toUpperCase();
  const queryClient = useQueryClient();

  const kullaniciSil = async () => {
    const response = await adminKullaniciSil(userid);
    queryClient.invalidateQueries(['kullanicilar']);
}

  
  return (
    <React.Fragment >
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Avatar sx={{ marginRight: '8px', width: 70, height: 50, backgroundColor: open ? '#dc3545' : null }} >{firstLetter}</Avatar>
        </TableCell>
        <TableCell>
          {kullaniciAdi}
        </TableCell>
        <TableCell >
          {kayitTarihi}
        </TableCell>
        <TableCell>
          <Popconfirm
            placement="right"
            title="Kullanıcı Sil"
            description="Kullanıcıyı silmek istiyor musunuz ?"
            onConfirm={() => kullaniciSil()}
            okText="Evet"
            cancelText="Hayır"

          >
            <IconButton edge="end" aria-label="comments">
              <DeleteIcon />
            </IconButton>
          </Popconfirm>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Email Adresi</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Telefon Numarası</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Adres</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={userid}>
                    <TableCell sx={{width:'20%'}}>
                      {email}
                    </TableCell>
                    <TableCell sx={{width:'30%'}}>
                      {telefonNo}
                    </TableCell>
                    <TableCell sx={{width:'50%'}}>
                    {adres.map((adresItem) => (
        <div key={adresItem._id}>
          <p>{adresItem.adres}</p>
          
        </div>
      ))}
                    </TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default AdminKullaniciListe
