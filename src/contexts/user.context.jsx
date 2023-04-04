import { useState, createContext , useEffect} from "react";
import { onAuthStateChangedListener,creatUserDocumentFromAuth } from "../utiles/firebase/firebase.utiles";

export const userContextStorage = createContext();
// export const displayNameContexStorage = createContext()



export const UserContextBuiltComponent = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener(async (user)=>{
      if(user){
        await creatUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unsubscribe
  },[]) 

  return (
    <userContextStorage.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </userContextStorage.Provider>
  );
};

