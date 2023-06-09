import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {

 

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
