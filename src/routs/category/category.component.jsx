import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { categoriesStorage } from "../../contexts/categories.context";
import ProductsCard from "../../components/product-card/product-card.component";

import { useSelector } from "react-redux";
import { select_categoriesMap } from "../../store/categories/categories.selection";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(categoriesStorage);
  const categoriesMap = useSelector(select_categoriesMap)
  
  const [products, setProducts] = useState(categoriesMap[category]);
  
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>

      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {/* we use the condition below as a safe gaurd because categoriesMap return from async fn 
        so and this fn excute sync so to avoid the error undefinde we use this conditon */}
        {products &&
          products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
