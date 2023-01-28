import { useState, useRef} from 'react'
// import { initializeApp } from "firebase/app";
import reactLogo from './assets/react.svg'
import './App.css'
import '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

// const [updatedEmail, setUpdatedEmail] = useState('');
// const [updatedPassword, setUpdatedPassword] = useState('');

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

function LoginForm() {
	const [erroMessage, setError] = useState(null);
	const auth = getAuth();
	const email = useRef(null);
	const password = useRef(null);

  function logIn(){
	if(password.current && email.current){
		signInWithEmailAndPassword(auth, email.current.value, password.current.value)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log(user, auth.currentUser);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(errorMessage);
				console.log(errorMessage);
				
			});
	} 
}

  return (
    <div className="App">
      <input ref={email} placeholder='email'></input>
      <input ref={password} placeholder='password'></input>
      <button onClick={() => {logIn()}}>Log In</button>
	  <div>{erroMessage}</div>
	  <a>Forgot your password?</a>
    </div>
  )
}

export default LoginForm
