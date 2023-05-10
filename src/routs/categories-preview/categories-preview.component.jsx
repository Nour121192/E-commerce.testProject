// import { categoriesStorage } from "../../contexts/categories.context";
// import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-Preview/category-Preview.component";

import { select_categories } from "../../store/categories/categories.selection";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(categoriesStorage);
  const categoriesMap = useSelector(select_categories)

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview title={title} products={products} key={title} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
