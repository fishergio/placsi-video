import {
    SET_FAVORITE,
    DELETE_FAVORITE,
    LOGIN_REQUEST,
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
        case LOGIN_REQUEST:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default reducer;