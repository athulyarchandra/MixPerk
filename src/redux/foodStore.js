import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from './slices/recipeSlice'

const foodStore = configureStore({
    reducer:{
        recipeReducer:recipeSlice
    }
})
export default foodStore