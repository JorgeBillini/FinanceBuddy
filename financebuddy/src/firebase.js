import app from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyD_Y1CNG_0QXtrv_wst7hYjA4tcmlT0LJE",
    authDomain: "financebuddy-13c77.firebaseapp.com",
    databaseURL: "https://financebuddy-13c77.firebaseio.com",
    projectId: "financebuddy-13c77",
    storageBucket: "financebuddy-13c77.appspot.com",
    messagingSenderId: "1051906483365"
  };
  app.initializeApp(config);
export default app;