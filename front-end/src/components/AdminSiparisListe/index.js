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
import { Select } from 'antd';

const confirm = () => {
  console.log("silindi")
};
function AdminSiparisListe({ urunAdi, siparisTarihi, siparisDurum, resimUrl, siparisEden, id, siparisAdres }) {
  const [open, setOpen] = React.useState(false);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

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
          <Avatar sx={{ marginRight: '8px', width: 70, height: 50 }} alt="Remy Sharp" src={resimUrl} />
        </TableCell>
        <TableCell>
          {siparisEden}
        </TableCell>
        <TableCell >
          {/* {siparisDurum} */}
<Select
      defaultValue="Hazırlanıyor"
      style={{ width: 150, backgroundColor: '#efefef', borderRadius: '6px' }}
      onChange={handleChange}
      bordered={false}
      className="custom-select"
     
      options={[
        { value: 'hazirlaniyor', label: 'Hazırlanıyor' },
        { value: 'yolda', label: 'Yolda' },
        { value: 'teslim-edildi', label: 'Teslim Edildi' },
      ]}
    />
        </TableCell>
        <TableCell>
          <Popconfirm
            placement="right"
            title="Sipariş Sil"
            description="Siparişi silmek istiyor musunuz ?"
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
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Tarih</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Ürün adı</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Adres</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={id}>
                    <TableCell >
                      {siparisTarihi}
                    </TableCell>
                    <TableCell >
                      {urunAdi}
                    </TableCell>
                    <TableCell >
                      {siparisAdres}
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

export default AdminSiparisListe
