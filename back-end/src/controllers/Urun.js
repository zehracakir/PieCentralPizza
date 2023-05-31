const UrunSema=require('../models/UrunSema')

const cevapOlustur = function (res, status, content) {
    res
        .status(status)
        .json(content);
}


const urunEkle = async function(req,res){
    const urunAdi = req.body.urunAdi;
    const urunDetay = req.body.urunDetay;
    const urunOzellikler = req.body.urunOzellikler ? req.body.urunOzellikler.split(",").map(item => item.trim()) : [];
    const resimUrl=req.body.resimUrl;
    const urunFiyat=req.body.urunFiyat;
    const stok=req.body.stok;
    const kategori=req.body.kategori;

    const eksikBilgiler = [];
    if (!urunAdi) {
        eksikBilgiler.push("urunAdi");
    }
    if (!resimUrl) {
        eksikBilgiler.push("resimUrl");
    }
    if (!urunFiyat) {
        eksikBilgiler.push("urunFiyat");
    }
    if (!kategori) {
        eksikBilgiler.push("kategori");
    }
    if (!stok) {
        eksikBilgiler.push("stok");
    }

    if (eksikBilgiler.length > 0) {
        const mesaj = "Belirtilen alanın-alanların doldurulması zorunludur: " + eksikBilgiler.join(", ");
        return cevapOlustur(res, 400, mesaj);
    }
  try {
            const mevcutUrun = await UrunSema.findOne({ urunAdi: urunAdi });
    
            if (mevcutUrun) {
                cevapOlustur(res, 400, "Bu isimde bir ürün zaten bulunmakta!");
            } else {
                const urun = await UrunSema.create({
                    urunAdi: urunAdi,
                    urunDetay: urunDetay,
                    urunOzellikler: urunOzellikler,
                    resimUrl: resimUrl,
                    urunFiyat: urunFiyat,
                    stok: stok,
                    kategori:kategori
                });
                cevapOlustur(res, 201, urun);
            }
        } catch (error) {
            cevapOlustur(res, 400, error);
        }
    }
    
    const urunGetir = async function (req, res) {
        try {
            const tumUrunler = await UrunSema.find();
            if (tumUrunler.length > 0) {
                cevapOlustur(res, 200, tumUrunler);
            } else {
                cevapOlustur(res, 404, { "hata": "kayıtlı ürün bulunamadı" });
            }
        } catch (error) {
            cevapOlustur(res, 500, error);
        }
    }
    
    // const kategoriyeGoreUrunGetir = async (req, res) => {
    //     const kategori = req.params.kategori;
    //     try {
    //         const urunler = await UrunSema.find({ kategori: kategori });
    //         if (urunler.length > 0) {
    //             cevapOlustur(res, 200, urunler);
    //         } else {
    //             cevapOlustur(res, 404, { "hata": "kategoriye ait ürün bulunamadı" });
    //         }
    //     } catch (error) {
    //         cevapOlustur(res, 500, error);
    //     }
    // }
    
     
    const urunDetayGetir = async function (req, res) {
        const urunid = req.params.urunid;
        try {
            const urun = await UrunSema.findById(urunid)
            if (urun) {
                cevapOlustur(res, 200, urun)
            } else {
                cevapOlustur(res, 404, { "hata": "urun bulunamadi" })
            }
        } catch (error) {
            cevapOlustur(res, 404, error)
        }
    }

    const urunGuncelle = async function (req, res) {
        const urunid = req.params.urunid;
        const urunAdi = req.body.urunAdi;
        const urunDetay = req.body.urunDetay;
        const urunOzellikler = req.body.urunOzellikler ? req.body.urunOzellikler.split(",").map(item => item.trim()) : [];
        const resimUrl = req.body.resimUrl;
        const urunFiyat = req.body.urunFiyat;
        const stok = req.body.stok;
        const kategori = req.body.kategori;
      
        try {
          const urun = await UrunSema.findById(urunid).select("urunAdi urunDetay urunOzellikler resimUrl urunFiyat stok kategori");
          
          if (!urun) {
            return cevapOlustur(res, 404, { "durum": "urun bulunamadi" });
          }
          
          const guncellenecekAlan = {};
          if (urunAdi) {
            guncellenecekAlan.urunAdi = urunAdi;
          }
          if (urunDetay) {
            guncellenecekAlan.urunDetay = urunDetay;
          }
          if (urunOzellikler.length > 0) {
            guncellenecekAlan.urunOzellikler = urunOzellikler;
          }
          if (resimUrl) {
            guncellenecekAlan.resimUrl = resimUrl;
          }
          if (urunFiyat) {
            guncellenecekAlan.urunFiyat = urunFiyat;
          }
          if (stok) {
            guncellenecekAlan.stok = stok;
          }
          if (kategori) {
            guncellenecekAlan.kategori = kategori;
          }
          
          const guncellenenUrun = await UrunSema.findByIdAndUpdate(urunid, guncellenecekAlan, { new: true });
          cevapOlustur(res, 200, guncellenenUrun);
        } catch (error) {
          cevapOlustur(res, 400, error);
        }
      }
      
 
    const urunSil = async function (req, res) {
        const urunid = req.params.urunid;
       
    
        try {
            const urun = await UrunSema.findByIdAndRemove(urunid);
            if (!urun) {
                return cevapOlustur(res, 404, { "durum": "urun bulunamadi" });
            }
    
            return cevapOlustur(res, 200, { "durum": "urun basariyla silindi" });
        } catch (error) {
            return cevapOlustur(res, 500, { "durum": "bir hata olustu" });
        }
    }
    
    
    
    
module.exports = {
   urunEkle,
   urunGetir,
   urunDetayGetir,
//    kategoriyeGoreUrunGetir,
   urunGuncelle,
   urunSil
}