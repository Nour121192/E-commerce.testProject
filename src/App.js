import Home from "./routs/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routs/navigation/navigation.component";
import Auth from "./routs/authentication/authentication.component";
import Shop from "./routs/shop/shop.component";
import CheckoutPage from "./routs/checkout/checkout.component";

const App = () => {
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
