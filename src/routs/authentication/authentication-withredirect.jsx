// import { useEffect, useState } from "react";
import {
    signInWithGooglePopup,
    creatUserDocumentFromAuth,
  //   signInWithGoogleRedirect,
  //   auth,
  } from "../../utiles/firebase/firebase.utiles";
  // import { getRedirectResult } from "firebase/auth";
  import SignUpForm from '../../components/sign-up/sign-up.component'
  
  
  const SignIn = () => {
    // const [user,setuser]=useState()
  //   const logGoogleUserWithRedirecter = async () => {
  //     const { user } = await signInWithGoogleRedirect(); 
  //   };
  
  //   const getData = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if (response.user) {
  //       const userDocRef = await creatUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   getData();
  
    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await creatUserDocumentFromAuth(user);
      // setuser(user.photoURL)
    };
    return (
      <div>
        <h1>SIGN IN container will be here soon </h1>
        {/* <div>{user && <img src={user} alt='pic'/> }</div> */}
        <button onClick={logGoogleUser}> do not touch me </button>
        {/* <button onClick={logGoogleUserWithRedirecter}> i'm the redirect </button> */}
        <SignUpForm/>
      </div>
    );
  };
  
  export default SignIn;
  