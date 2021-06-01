import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBR_8o0o1XIE6gNzhkEkSZQBm-7t1jcEH8",
  authDomain: "school-attendance-a1958.firebaseapp.com",
  databaseURL: "https://school-attendance-a1958-default-rtdb.firebaseio.com",
  projectId: "school-attendance-a1958",
  storageBucket: "school-attendance-a1958.appspot.com",
  messagingSenderId: "272818386238",
  appId: "1:272818386238:web:83634876a6732e7c36686f"
};

let app = firebase.initializeApp(firebaseConfig)
export default app.database()