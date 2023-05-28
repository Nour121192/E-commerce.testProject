// import { categoriesStorage } from "../../contexts/categories.context";
// import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-Preview/category-Preview.component";

import { select_categoriesMap,select_categoriesMap_Loading } from "../../store/categories/categories.selection";
import { useSelector } from "react-redux";
import Spinner from '../../components/spinner/spinner.component'

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(categoriesStorage);
  const categoriesMap = useSelector(select_categoriesMap)
  const isLoading =  useSelector(select_categoriesMap_Loading)
  return (
    <>
      {isLoading?<Spinner/>:(Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview title={title} products={products} key={title} />
        );
      }))}
    </>
  );
};

export default CategoriesPreview;
