import React from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
} from '@mui/material'
import { useState } from 'react';
import UpdateIcon from '@mui/icons-material/Update';
import LockResetIcon from '@mui/icons-material/LockReset';
import validations from './Validation';
import { Formik } from 'formik'
import SifreDegistir from '../../components/SifreDegistir';
import { useQuery, useQueryClient } from 'react-query'
import { useAuth } from '../../contexts/AuthContext';
import { kullaniciGetir } from '../../api/KullaniciApi/api';
import { kullaniciGuncelle } from '../../api/KullaniciApi/api';
import Uyari from '../../components/Uyari';
import Basarili from '../../components/Basarili';
function Hesabim() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [guncelleme,setGuncelleme] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(['kullanici', user._id], () => kullaniciGetir(user._id));
  if (isLoading) {
    return <div> Loading...
    </div>
  }

  if (error) {
    return <div>{error.message}</div>
  }
  return (
    <>
      <Formik
        initialValues={{
          kullaniciAdi: data.data.kullaniciAdi,
          email: data.data.email,
          telefonNo: data.data.telefonNo,
        }}
        onSubmit={async (values, bag) => {
          try {
            const kullaniciGuncelleResponse = await kullaniciGuncelle(user._id, values);
            queryClient.invalidateQueries('kullanici');
            setGuncelleme(true);
          } catch (error) {
            bag.setErrors({ general: error});
            setGuncelleme(false);
          }

        }}
        validationSchema={validations}
      >
        {({ handleSubmit, handleBlur, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
            {guncelleme && <Basarili mesaj={"Güncelleme başarılı"} />}
            {errors.general && <Uyari mesaj={"Bu kullanıcı adı alınmış"} />}
              <Typography variant='h5' mb={2} sx={{ fontWeight: 'bold' }}>Hesabım</Typography>
              <TextField
                id="isim"
                label="İsim"
                name='isim'
                variant="outlined"
                fullWidth margin='normal'
                InputProps={{ readOnly: true }}
                defaultValue={data.data.isim}
              />
              <TextField
                id="kullaniciAdi"
                label="Kullanıcı Adı"
                name='kullaniciAdi'
                variant="outlined"
                fullWidth margin='normal'
                error={Boolean(errors.kullaniciAdi && touched.kullaniciAdi)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.kullaniciAdi}
                helperText={errors.kullaniciAdi && touched.kullaniciAdi && `${errors.kullaniciAdi}`}
              />

              <TextField
                id="email"
                label="E-Posta"
                name='email'
                variant="outlined"
                fullWidth margin='normal'
                error={Boolean(errors.email && touched.email)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                helperText={errors.email && touched.email && `${errors.email}`}
              />
              <TextField
                id="telefonNo"
                label="Telefon Numarası"
                name='telefonNo'
                variant="outlined"
                fullWidth margin='normal'
                error={Boolean(errors.telefonNo && touched.telefonNo)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telefonNo}
                helperText={errors.telefonNo && touched.telefonNo && `${errors.telefonNo}`}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" color='success' endIcon={<LockResetIcon />} sx={{ textTransform: "none" }} onClick={handleOpen}>
                  <Typography variant='p'>Şifre Değiştir</Typography>
                </Button>
                <br />
                <Button variant="contained" color='success' endIcon={<UpdateIcon />} type='submit'>
                  Güncelle
                </Button>
              </Box>


            </Box>
          </form>
        )}
      </Formik>
      <SifreDegistir open={open} handleClose={handleClose} />
    </>

  )
}

export default Hesabim