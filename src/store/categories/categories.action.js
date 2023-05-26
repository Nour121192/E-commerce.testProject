import {categories_types} from './categories.type'

export const setcategories = (categories) => { return {type:categories_types.set_categories_type,payload:categories}}