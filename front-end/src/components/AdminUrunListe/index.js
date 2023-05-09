import React from 'react'
import {
    ListItem,
    Typography,
    ListItemText,
    IconButton,
    ListItemAvatar,
    Avatar
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Popconfirm } from 'antd';
import AdminUrunGuncelle from '../AdminUrunGuncelle';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const confirm = () => {
    console.log("silindi")
};
function AdminUrunListe({ urunAdi, urunOzellikler, urunFiyat, resimUrl,urunDetay,id }) {
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClose = () => {
        setOpen2(false)
    }
    const clickOpen = () => {
        setOpen2(true)
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
        <Avatar sx={{ marginRight: '8px', width: 70, height: 50}} src={resimUrl}></Avatar>
        </TableCell>
        <TableCell>
        {urunAdi}
        </TableCell>
        <TableCell >
        <AdminUrunGuncelle open={open2} handleClose={handleClose} />
            <IconButton edge="end" aria-label="comments" onClick={clickOpen}>
                <ModeEditIcon />
            </IconButton>
        
        </TableCell>
       <TableCell>
       <Popconfirm
                          placement="right"
                          title="Kullanıcı Sil"
                          description="Kullanıcıyı silmek istiyor musunuz ?"
                          onConfirm={confirm}
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
                  <TableCell sx={{fontWeight:'bold'}}>Ürün Fiyatı</TableCell>
                    <TableCell sx={{fontWeight:'bold'}}>Ürün Detay</TableCell>
                    <TableCell sx={{fontWeight:'bold'}}>Ürün Özellikleri</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={id}>
                    <TableCell >
                        {urunFiyat}
                      </TableCell>
                      <TableCell >
                        {urunDetay}
                      </TableCell>
                      <TableCell >
                        {urunOzellikler}
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