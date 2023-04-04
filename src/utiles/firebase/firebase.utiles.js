import { initializeApp } from "firebase/app";
import {
  signOut,
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHdNkFGh-e9zxGFAnbbqx6QvgrRfot17E",
  authDomain: "crwn-clothing-db-778ba.firebaseapp.com",
  projectId: "crwn-clothing-db-778ba",
  storageBucket: "crwn-clothing-db-778ba.appspot.com",
  messagingSenderId: "260350886041",
  appId: "1:260350886041:web:05554bd24ae388e30ef808",
};

// Initialize Firebase

const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creatUserDocumentFromAuth = async (userAuth,aditionalInfo) => {
  if (!userAuth)return

  const userDocRef = doc(db, "Users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...aditionalInfo
      });
    } catch (error) {
      console.log("error", error.message);
    }
    return userDocRef;
  }
};

// ....sign up with email and password
export const signUpWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// ...... sign in with email and password
export const signsInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth,email, password);
};

// ......sign out
export const SignOut = async () => {
  return await signOut(auth)
}

// ......observe any log or sighnout by onAuthStateChanged bu puting a listener on the auth state
export const onAuthStateChangedListener = (callBack) => {
  return onAuthStateChanged(auth,callBack)
}

// creat user profile in db
// export const creatUserDocumentFromAuthSignUp = async (user, displayName) => {
//   const userDocRef = doc(db, "Users", user.uid);

//   const userSnapShot = await getDoc(userDocRef);

//   if (!userSnapShot.exists()) {
//     const { email } = user;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//       });
//     } catch (error) {
//       console.log("error", error.message);
//     }
//     return userDocRef;
//   }
// };
// ....... sign in with redirect.....
// export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth,provider)
