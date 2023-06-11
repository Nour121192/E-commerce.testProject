// import {categories_types} from './categories.type'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { getCollectionAndDocuments } from '../../utiles/firebase/firebase.utiles'

const categories_instial_state = {categoriesMap:[],isLoading:false,error:null}

export const FetchCategoriesFromdbAsync = createAsyncThunk(
    "categories/set_categories_type",
    async()=> await getCollectionAndDocuments() )



const CategoriesSlice = createSlice({
    name:"categories",
    initialState:categories_instial_state,
    reducers:{
        setcategories:(state,action) => state.categoriesMap = action.payload
    },
    extraReducers:(builder)=>{
        builder.addCase(FetchCategoriesFromdbAsync.pending,(state)=> {state.isLoading = true})
        builder.addCase(FetchCategoriesFromdbAsync.fulfilled,(state,action)=> {
            state.isLoading = false
            state.categoriesMap = action.payload
        })
        builder.addCase(FetchCategoriesFromdbAsync.rejected,(state,action)=>{
            state.isLoading=false
            state.error = action.payload
        })
    }
})
export const CategoriesReducer = CategoriesSlice.reducer

// .... we gonna use the Fech fn to dispatch the categories in the shope instead of the below fn to use the thunk difault middleware to handel the async flow
// export const {setcategories}= CategoriesSlice.actions


// export const CategoriesReducer = (state = categories_instial_state , action = {}) => {
//     switch(action.type){
//         case categories_types.set_categories_type:
//             return {...state, categoriesMap:action.payload}
//         default:
//             return state;
//     }

// } 