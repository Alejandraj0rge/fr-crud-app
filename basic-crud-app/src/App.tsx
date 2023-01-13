import { useState } from 'react'
// import { initializeApp } from "firebase/app";
import reactLogo from './assets/react.svg'
import './App.css'
import './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

// const firebaseConfig = {
//   apiKey: "AIzaSyDQhH06JXcM0WwsIKXH4s-UwJZZCbyT7A8",
//   authDomain: "crud-base-project-2f598.firebaseapp.com",
//   projectId: "crud-base-project-2f598",
//   storageBucket: "crud-base-project-2f598.appspot.com",
//   messagingSenderId: "587729768113",
//   appId: "1:587729768113:web:a8da7d9b13036871c7dc90"
// };

// initializeApp(firebaseConfig);

// const auth = getAuth();

// createUserWithEmailAndPassword(auth, "acjc-1999@hotmail.com", "123Aa45**")
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(userCredential.user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
//   });

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <input placeholder=''></input>
      <input placeholder=''></input>
      <button></button>
    </div>
  )
}

export default App
