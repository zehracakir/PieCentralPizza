const UrunSema=require('../models/UrunSema')

const cevapOlustur = function (res, status, content) {
    res
        .status(status)
        .json(content);
}

const urunEkle = async function(req,res){
    const urunAdi = req.body.urunAdi;
    const urunDetay = req.body.urunDetay;
    const urunOzellikler = req.body.urunOzellikler.split(",").map(item => item.trim());
    const resimUrl=req.body.resimUrl;
    const urunFiyat=req.body.urunFiyat;
    const stok=req.body.stok;
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
                    stok: stok
                });
                cevapOlustur(res, 201, urun);
            }
        } catch (error) {
            cevapOlustur(res, 400, error);
        }
    }


module.exports = {
   urunEkle
}