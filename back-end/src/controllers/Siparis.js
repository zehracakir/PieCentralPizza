const SiparisSema=require('../models/SiparisSema')

const cevapOlustur = function (res, status, content) {
    res
        .status(status)
        .json(content);
}

const tumSiparisleriGetir = async function (req, res) {
    try {
    const siparisListesi = await SiparisSema.find().select("siparis.resimUrl siparisEden siparisDurum siparisTarihi siparis.urunAdi siparisAdres");  //adres array, duzenleme yapilabilir
    cevapOlustur(res, 200, siparisListesi);
    } catch (err) {
    cevapOlustur(res, 500, { error: 'Bir hata oluştu' });
    }
    };
    
    const durumaGoreSiparisGetir = async (req, res) => {
        const siparisDurum = req.params.siparisDurum;
      
        try {
          let siparisler,durum;
          
          if (siparisDurum === "teslim-edildi") {
            durum = "Teslim edildi"
          } else if (siparisDurum === "hazirlaniyor") {
            durum ="Hazirlaniyor"
          } else if (siparisDurum === "yolda") {
            durum ="Yolda"
          } else {
            return cevapOlustur(res, 400, { "hata": "Böyle bir durum parametresi yok" });
          }
          siparisler = await SiparisSema.find({ siparisDurum: durum}).select("siparis.resimUrl siparisEden siparisDurum siparisTarihi siparis.urunAdi siparisAdres");
          if (siparisler.length > 0) {
            cevapOlustur(res, 200, siparisler);
          } else {
            cevapOlustur(res, 404, { "hata": "Duruma göre sipariş bulunamadı" });
          }
        } catch (error) {
          cevapOlustur(res, 500, error);
        }
      };


      const tariheGoreSiparisGetir = async (req, res) => {
        const siparisTarihi = req.params.siparisTarihi;
      
        try {
          let siparisler;
          const gecerliTarih = new Date();
          const tarih = new Date();
      
          if (siparisTarihi === "son-bir-gun") {
            tarih.setDate(gecerliTarih.getDate() - 1);
          } else if (siparisTarihi === "son-bir-hafta") {
            tarih.setDate(gecerliTarih.getDate() - 7);
          } else if (siparisTarihi === "son-bir-ay") {
            tarih.setMonth(gecerliTarih.getMonth() - 1);
          } else {
            return cevapOlustur(res, 400, { "hata": "Böyle bir tarih parametresi yok" });
          }
      
          siparisler = await SiparisSema.find({ siparisTarihi: { $gte: tarih } }).select("siparis.resimUrl siparisEden siparisDurum siparisTarihi siparis.urunAdi siparisAdres");
      
          if (siparisler.length > 0) {
            cevapOlustur(res, 200, siparisler);
          } else {
            cevapOlustur(res, 404, { "hata": "Duruma göre sipariş bulunamadı" });
          }
        } catch (error) {
          cevapOlustur(res, 500, error);
        }
      };
    

module.exports = {
    tumSiparisleriGetir,
    durumaGoreSiparisGetir,
    tariheGoreSiparisGetir
 }