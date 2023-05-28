import { createSelector } from "reselect";

const categoriesArray = (state) => state.categories;

export const select_categories = createSelector(
  [categoriesArray],
  (categories) => categories.categoriesMap
);

export const select_categoriesMap = createSelector(
  [select_categories],
  (categoriesMap) => {
    console.log("i'm the only render");
    return categoriesMap.reduce((acc, category) => {
      const { items, title } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const select_categoriesMap_Loading = createSelector(
  [categoriesArray],
  (categoriesSlice) => categoriesSlice.isLoading
);
