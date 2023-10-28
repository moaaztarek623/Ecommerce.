import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subcategoryReducer from './subcategoryReducer';
import productsReducer from './productsReducer'
import authReducer from './authReducer'
import reviewReducer from './reviewReducer';

export default combineReducers ({
    allCategory: categoryReducer,
    allBrand: brandReducer,
    createSubcategory: subcategoryReducer,
    allProducts: productsReducer,
    auth: authReducer,
    createReview: reviewReducer,
})