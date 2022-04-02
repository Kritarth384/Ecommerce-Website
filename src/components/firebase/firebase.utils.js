import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const config = {
  apiKey: "AIzaSyAKRXkFrvpbb2SGDcIYgfMMxmEn0RS-m48",
  authDomain: "disproject-345416.firebaseapp.com",
  projectId: "disproject-345416",
  storageBucket: "disproject-345416.appspot.com",
  messagingSenderId: "584856487774",
  appId: "1:584856487774:web:25a7d4bb8652c4cae1b1cf",
  measurementId: "G-6CD9SG3R48",
};

// asynchronous as we are using api
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if (!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user" , error.message)
    }
  }

  return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
