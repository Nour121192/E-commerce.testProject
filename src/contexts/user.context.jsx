import {  createContext , useEffect, useReducer} from "react";
import { onAuthStateChangedListener,creatUserDocumentFromAuth } from "../utiles/firebase/firebase.utiles";

export const userContextStorage = createContext();

const userReducer = (state,action) => {
switch(action.type){
case "changeUserIfAuthChange" :
  return {...state, currentUser:action.payload}
  default:
    throw console.error(action.type);
}
}

export const UserContextBuiltComponent = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{currentUser},dispatch] = useReducer(userReducer,{currentUser:null})

  const setCurrentUser = (user)=> dispatch({type:"changeUserIfAuthChange" ,payload:user})

  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener( (user)=>{
      if(user){
         creatUserDocumentFromAuth()
      }
      setCurrentUser(user)
    })
    return unsubscribe
  },[]) 

  return (
    <userContextStorage.Provider value={{ currentUser }}>
      {children}
    </userContextStorage.Provider>
    
  );
};

