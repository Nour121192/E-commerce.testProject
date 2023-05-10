import {categories_types} from './categories.type'

export const setcategoriesMap = (categoriesMap) => { return {type:categories_types.set_categories_type,payload:categoriesMap}}