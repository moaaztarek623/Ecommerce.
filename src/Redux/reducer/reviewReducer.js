import { CREATE_REVIEW, DELETE_REVIEW, GIT_ALL_REVIEW_PRODUCT } from '../types/type';

const initial = {
    createReview: [],
    allReview: [],
    deleteReview: [],
    load: true
};

const reviewReducer = (state = initial, action) => {
    switch (action.type) {
        case CREATE_REVIEW:
            return {
                ...state,
                createReview: action.payload,
                load: false
            }      
        case GIT_ALL_REVIEW_PRODUCT:
            return {
                ...state,
                allReview: action.payload,
                load: false
            }      
        case DELETE_REVIEW:
            return {
                ...state,
                deleteReview: action.payload,
                load: false
            }      
        default:
            return state;
    }
};

export default reviewReducer;