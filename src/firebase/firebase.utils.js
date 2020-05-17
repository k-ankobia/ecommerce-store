import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCivjM0NSpC1gG0m-TG2YI82nntBJSEt1c",
  authDomain: "ecommerestoredb.firebaseapp.com",
  databaseURL: "https://ecommerestoredb.firebaseio.com",
  projectId: "ecommerestoredb",
  storageBucket: "ecommerestoredb.appspot.com",
  messagingSenderId: "24835648472",
  appId: "1:24835648472:web:3d160b6060155b54c120ad",
  measurementId: "G-R5YF3VLQXJ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
