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

// adding collection in firebase store the shop.data in firebase
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
 

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  });


  //fire off our batch
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      // javascript method encodeURI 
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  // reduce
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
