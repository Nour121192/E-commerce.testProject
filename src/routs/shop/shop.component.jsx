import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { useEffect } from "react";
import { getCollectionAndDocuments } from "../../utiles/firebase/firebase.utiles";
import { setcategoriesMap } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCollectionAndDocuments();
      console.log(categoriesMap);
      dispatch(setcategoriesMap(categoriesMap));
    };
    getCategoriesMap();
  }, []);

  return(
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category"  element={<Category/>}/>
    </Routes>
  )
};

export default Shop;

// import { Link, useParams } from "react-router-dom";


// const Shop = () => {
//   const { categories } = useContext(categoriesStorage);
//   const {id} = useParams()
 

//   return categories[id] ?(
//     <>
//     <h1>{id}</h1>
//        <div className="products-container" >
//         {categories[id].map((product) =>  <ProductsCard product={product} key={product.id} /> )}
//       </div>
      
//     </>
//   ):   <>
//   {Object.keys(categories).map((title) => (
//     <Fragment key={title}>
//       <h1><Link to={`/shop/${title}`}>{title}</Link></h1>
//       <div className="products-container" >
//         {categories[title].map((product, index) => index < 4 ? <ProductsCard product={product} key={product.id} /> : "")}
//       </div>
//     </Fragment>
//   ))}
// </>
// };
