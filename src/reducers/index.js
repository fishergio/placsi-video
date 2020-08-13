import {
    SET_FAVORITE,
    DELETE_FAVORITE,
    LOGIN_REQUEST,
    LOGOUT_REQUEST,
    REGISTER_REQUEST,
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
        case DELETE_FAVORITE:
            return {
                ...state,
                myList: state.myList.filter( item => item.id !== action.payload)
            }
        case LOGIN_REQUEST,
            REGISTER_REQUEST:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                user: {}
            }
        default:
            return state;
    }
}

export default reducer;