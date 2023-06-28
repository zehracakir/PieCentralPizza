import React from 'react'
import {
  IconButton,
  Avatar
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Popconfirm } from 'antd';
import AdminUrunGuncelle from '../AdminUrunGuncelle';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { adminUrunSil } from '../../api/UrunApi/api';
import { useQueryClient } from 'react-query';
const confirm = () => {
  console.log("silindi")
};
function AdminUrunListe({ urunAdi, urunOzellikler, urunFiyat, resimUrl, urunDetay, urunid,kategori,stok }) {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const queryClient = useQueryClient();
  const handleClose = () => {
    setOpen2(false)
  }
  const clickOpen = () => {
    setOpen2(true)
  }
  const urunSil = async () => {
    const response = await adminUrunSil(urunid);
    queryClient.invalidateQueries(['urunler', urunid]);
}
  return (
    <React.Fragment >
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen1(!open1)}
          >
            {open1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Avatar sx={{ marginRight: '8px', width: 70, height: 50 }} src={resimUrl}></Avatar>
        </TableCell>
        <TableCell>
          {urunAdi}
        </TableCell>
        <TableCell >
          <AdminUrunGuncelle open={open2} handleClose={handleClose} urunid={urunid} urunAdi={urunAdi} urunDetay={urunDetay} urunFiyat={urunFiyat} urunOzellikler={urunOzellikler} resimUrl={resimUrl} stok={stok} kategori={kategori}/>
          <IconButton edge="end" aria-label="comments" onClick={clickOpen}>
            <ModeEditIcon />
          </IconButton>

        </TableCell>
        <TableCell>
          <Popconfirm
            placement="right"
            title="Ürünü Sil"
            description="Ürünü silmek istiyor musunuz ?"
            onConfirm={() => urunSil()}
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
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Ürün Fiyatı</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Ürün Detay</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Ürün Özellikleri</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={urunid}>
                    <TableCell sx={{width:'20%'}} >
                      {urunFiyat} TL
                    </TableCell>
                    <TableCell sx={{width:'35%'}}>
                      {urunDetay}
                    </TableCell>
                    <TableCell sx={{width:'45%'}}>
                     
                    {urunOzellikler.length > 0 ? urunOzellikler.map((ozellik, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            {ozellik}
                                            {index !== urunOzellikler.length - 1 && ','}
                                            &nbsp;
                                        </React.Fragment>
                                    );
                                }) : null}
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

export default AdminUrunListe