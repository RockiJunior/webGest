const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.use(
	'local-signup',
	new localStrategy(
		{
			usernameField: 'Nombre',
			passwordField: 'Clave',
			passReqToCallback: true
		},
		(req, Nombre, Clave, done) => {
            
        }
	)
);
