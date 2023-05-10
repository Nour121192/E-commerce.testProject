import {categories_types} from './categories.type'
const categories_instial_state = {categoriesMap:{}}

export const CategoriesReducer = (state = categories_instial_state , action = {}) => {
    switch(action.type){
        case categories_types.set_categories_type:
            return {...state, categoriesMap:action.payload}
        default:
            return state;
    }

} 