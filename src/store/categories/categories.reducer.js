import { categories_types } from "./categories.type";
const categories_instial_state = {
  categoriesMap: [],
  isLoading: false,
  error: null,
};

export const CategoriesReducer = (
  state = categories_instial_state,
  action = {}
) => {
  switch (action.type) {
    case categories_types.set_categories_Loading_Start:
      return { ...state, isLoading: true };
    case categories_types.set_categories_Loading_Success:
      return { ...state, categoriesMap: action.payload, isLoading: false };
    case categories_types.set_categories_Loading_Error:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
