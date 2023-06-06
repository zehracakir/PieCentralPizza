const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const KullaniciSema = require("../models/KullaniciSema");

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "sifre",
        },
        async (email, sifre, done) => {
            try {
                const kullanici = await KullaniciSema.findOne({ email: email });
                if (!kullanici) {
                    return done(null, false, { mesaj: "Yanlış E-mail" });
                }
                if (!kullanici.sifreDogrumu(sifre)) {
                    return done(null, false, { mesaj: "Yanlış Şifre" });
                }
                return done(null, kullanici);
            } catch (error) {
                return done(error);
            }
        }
    )
);