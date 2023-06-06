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



module.exports = {
    tumSiparisleriGetir
 }