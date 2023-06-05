const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const KullaniciSema = require("../models/KullaniciSema");

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "sifre"
        },
        (email, sifre, done) => {
            KullaniciSema.findOne({email: email}, (hata, kullanici) => {
                if(hata) {
                    return done(hata);
                }
                if(!kullanici) {
                    return done(null, false, {
                        mesaj: "Yanlis kullanici adi."
                    });
                }
                if(!kullanici.sifreDogrumu(sifre)) {
                    return done(null, false, {
                        mesaj: "Yanlis Sifre"
                    });
                }
                return done(null, kullanici);
            });
        }
    )
);