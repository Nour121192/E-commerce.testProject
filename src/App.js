import Home from "./routs/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routs/navigation/navigation.component";
import Auth from "./routs/authentication/authentication.component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="Auth" element={<Auth />} />
        </Route>
        
      </Routes>
    </div>
  );
};

export default App;

const Shop = () => {
  return <h1> shoping here </h1>;
};
