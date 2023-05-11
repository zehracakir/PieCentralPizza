import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'

function index() {
    return (
        <Container sx={{ mt: 15 }} maxWidth='lg'>
            <Typography sx={{ fontWeight: 'bold', fontSize: "22px" }}>
                Hakkımızda
            </Typography>
            <Typography sx={{ mt: 2 }}>
                <div>
                    PieCentral Pizza, 2023 yılında Zehra Çakır ve Yusuf Dağdeviren tarafından kurulmuş bir pizzacıdır. İşletmemiz, en kaliteli malzemeler kullanarak ve müşterilerimize en lezzetli pizzaları sunarak hizmet vermektedir.
                </div>
                <br />
                <div>
                    Zehra Çakır ve Yusuf Dağdeviren, yemek sektöründe uzun yıllara dayanan tecrübeleri ile PieCentral Pizza'yı kurmuşlardır. Amacımız, müşterilerimize sadece lezzetli pizzalar sunmakla kalmayıp, aynı zamanda samimi bir atmosfer ve kaliteli bir hizmet sunmaktır.
                </div>
                <br />
                <div>
                    PieCentral Pizza olarak, müşterilerimizin taleplerini en üst düzeyde karşılamak için çalışıyoruz. Pizzalarımızda kullanılan hamurlarımız, malzemelerimiz ve soslarımız özenle seçilerek hazırlanmaktadır. Ayrıca, pizzalarımızda kullanılan tüm malzemeler taze ve doğal olarak sağlanmaktadır.

                    Müşteri memnuniyeti bizim için her zaman önceliklidir. PieCentral Pizza olarak, her müşterimize özel ilgi gösteriyor ve onların taleplerine en iyi şekilde cevap veriyoruz. Bu nedenle, müşterilerimiz bizim için sadece bir müşteri değil, aynı zamanda bir dost ve aile üyesidir.

                    Tüm müşterilerimizi, sıcak ve samimi bir ortamda, en lezzetli pizzalarımızı tatmaya davet ediyoruz.
                </div>
                <br />
                <Typography sx={{ fontWeight: 'bold', fontSize: "22px" }}>
                    Yasal Uyarı
                </Typography>
                <br />
                <div>
                    Bu Piecentral Pizza isimli site bir okul projesi olarak hazırlanmıştır ve hiçbir ticari amacı bulunmamaktadır. Site, Pizza Hut Türkiye'nin resmi web sitesi olan pizzahut.com.tr adresinden referans alınarak yapılmıştır. İlgili görseller de yine pizzahut.com.tr'den alınmıştır.

                    Sitedeki içerikler sadece bilgilendirme amaçlıdır ve herhangi bir satış veya ticari amaçla kullanılmamalıdır. Piecentral, herhangi bir şekilde Pizza Hut veya Pizza Hut'un yan kuruluşlarıyla ilişkili değildir. Sitenin kullanımı tamamen ziyaretçilerin kendi sorumluluğundadır.

                    Bu siteye erişerek, Piecentral'in bu yasal uyarı metnini okuduğunuzu ve kabul ettiğinizi beyan etmiş sayılırsınız.
                </div>
            </Typography>

            <img src="https://raw.githubusercontent.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza/zehra/photos/hakkimizda/pizza-seridi.png" alt="" width={"100%"} />

        </Container>
    )
}

export default index
