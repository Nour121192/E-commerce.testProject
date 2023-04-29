import { categoriesStorage } from "../../contexts/categories.context";
import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-Preview/category-Preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(categoriesStorage);

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
