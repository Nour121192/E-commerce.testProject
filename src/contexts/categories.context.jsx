import { createContext, useState, useEffect } from "react";
// import Shop_Data from "../shop-data.js";
import {
  // addCollectionAndDocuments,
  getCollectionAndDocuments,
} from "../utiles/firebase/firebase.utiles.js";

export const categoriesStorage = createContext();

export const CategoriesProvider = ({ children }) => {
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCollectionAndDocuments();
      console.log(categoriesMap);
      setcategoriesMap(categoriesMap);
    };
    getCategoriesMap();
    // setcategories(data())
  }, []);
  const [categoriesMap, setcategoriesMap] = useState({});
  const value = { categoriesMap, setcategoriesMap };

  return (
    <categoriesStorage.Provider value={value}>
      {children}
    </categoriesStorage.Provider>
  );
};
