const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();


<<<<<<< HEAD

//clientSecret
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken: ', accessToken);
      console.log('refreshToken: ', refreshToken);
      console.log('profile: ', profile);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'] //what to give access for -google's list for
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google')
);


const PORT = process.env.PORT || 5000;

app.listen(PORT);
=======
app.listen(5000);
//
>>>>>>> c8964e6740fc3fbf0c3f6436a7db72c67ab2defa
