//Dependencias
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from'firebase/auth';

console.log(process.env.API_KEY);
const firebaseConfig = 
{
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};;

initializeApp(firebaseConfig);

function createUser() {
  console.log(process.env.API_KEY);
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('Nuevo usuario creado:', user.email);
        location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
}

document.getElementById("registrarse").addEventListener("click", createUser);