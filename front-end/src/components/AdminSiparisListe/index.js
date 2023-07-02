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
import { useQueryClient } from 'react-query';
import { kullaniciSiparisSil, adminSiparisDurumuGuncelle} from '../../api/SiparisApi/api';

function AdminSiparisListe({ siparis, siparisTarihi, siparisDurum, siparisEden, id, siparisAdres,siparisEdenId }) {
  let userid=siparisEdenId;
  let siparisid=id;
  const [open, setOpen] = React.useState(false);
  const queryClient = useQueryClient();
  const handleChange = async (value) => {
    try {
      const response = await adminSiparisDurumuGuncelle(userid, siparisid, { siparisDurum: value });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  const siparisSil= async () => {
    const response = await kullaniciSiparisSil(userid,siparisid);
    queryClient.invalidateQueries(['siparisler']);
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
          <Avatar sx={{ marginRight: '8px', width: 70, height: 50 }} alt="Remy Sharp" src={siparis[0].resimUrl} />
        </TableCell>
        <TableCell>
          {siparisEden}
        </TableCell>
        <TableCell>
          <Select
            key={siparisDurum} 
            defaultValue={siparisDurum}
            style={{ width: 150, backgroundColor: '#efefef', borderRadius: '6px' }}
            onChange={handleChange}
            bordered={false}
            className="custom-select"
            options={[
              { value: 'Hazirlaniyor', label: 'Hazırlanıyor' },
              { value: 'Yolda', label: 'Yolda' },
              { value: 'Teslim edildi', label: 'Teslim Edildi' },
            ]}
          />
        </TableCell>
        <TableCell>
          <Popconfirm
            placement="right"
            title="Sipariş Sil"
            description="Siparişi silmek istiyor musunuz ?"
            onConfirm={siparisSil}
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
                    <TableCell>
  {siparis.map((item) => (
    <React.Fragment key={item.id}>
      {item.urunAdi}
    </React.Fragment>
  ))}
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
