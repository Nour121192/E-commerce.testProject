import { useEffect} from "react";
import { onAuthStateChangedListener,creatUserDocumentFromAuth } from "./utiles/firebase/firebase.utiles";
import { setCurrentUser } from "./store/user/user.reducer";
import { useDispatch } from "react-redux";
// import { UseCurUser } from "./store/user/user.actions";

import Home from "./routs/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routs/navigation/navigation.component";
import Auth from "./routs/authentication/authentication.component";
import Shop from "./routs/shop/shop.component";
import CheckoutPage from "./routs/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch()
  // const {Dispatch} = UseCurUser()
  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener( (user)=>{
      if(user){
         creatUserDocumentFromAuth()
      }

      // to avoid edit in serializable in config we can reback an object instead of constructor obj,
      // .. as serializable means a valuse that can not be stingified.
      // this is the way
      // const serializableObj = ({accessToken,email}) => ({accessToken,email})(user)
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  },[]) 


  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          {/* <Route path="shop/:id" element={<Shop />} /> */}
          <Route path="checkout" element={<CheckoutPage/>}/>
          <Route path="Auth" element={<Auth />} />
          
        </Route>
        
      </Routes>
    </div>
  );
};

export default App;
