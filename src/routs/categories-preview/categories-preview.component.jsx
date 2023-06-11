// import { categoriesStorage } from "../../contexts/categories.context";
// import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-Preview/category-Preview.component";

import { select_categoriesMap } from "../../store/categories/categories.selection";
import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";
import { isLoading } from "../../store/categories/categories.selection";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(categoriesStorage);
  const categoriesMap = useSelector(select_categoriesMap)
  const loading = useSelector(isLoading)

  return (
   <>
      {loading? <Spinner/>:Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview title={title} products={products} key={title} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
