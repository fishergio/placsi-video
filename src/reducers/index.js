import {
    SET_FAVORITE,
    DELETE_FAVORITE,
    LOGIN_REQUEST,
    LOGOUT_REQUEST,
    REGISTER_REQUEST,
    GET_VIDEO_SOURCE,
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
        case LOGIN_REQUEST:
            return {
                ...state,
                user: action.payload
            }
        case REGISTER_REQUEST:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                user: {}
            }
        case GET_VIDEO_SOURCE:
            return {
                ...state,
                playing: state.trends.concat(state.originals).find( item => item.id === Number(action.payload)) || []
            }
        default:
            return state;
    }
}

export default reducer;