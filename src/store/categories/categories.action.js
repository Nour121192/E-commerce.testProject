import { categories_types } from "./categories.type";
import { getCollectionAndDocuments } from "../../utiles/firebase/firebase.utiles";


// export const setcategories = (categories) => {
//   return { type: categories_types.set_categories_type, payload: categories };
// };

export const FetchCategoriesAsync = () => async (dispatch)=>{
    dispatch({type:categories_types.set_categories_Loading_Start})
    try {
        const categoriesArray = await getCollectionAndDocuments();
        dispatch({type:categories_types.set_categories_Loading_Success,payload:categoriesArray})
    } catch (error) {
        dispatch({type:categories_types.set_categories_Loading_Error,payload:error})
    }
}