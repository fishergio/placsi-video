import {
    SET_FAVORITE,
    DELETE_FAVORITE,
} from '../types';

const reducer = (state, action) => {

    switch (action.type) {
        case SET_FAVORITE:
            return {
                ...state,
                myList: state.myList.some(item => item.id === action.payload.id)
                ? [...state.myList]
                : [...state.myList, action.payload ]
            }
            break;
        case DELETE_FAVORITE:
            return {
                ...state,
                myList: state.myList.filter( item => item.id !== action.payload)
            }
            break;
        default:
            return state;
    }
}

export default reducer;