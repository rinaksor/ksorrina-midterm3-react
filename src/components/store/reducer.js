import { SET_KEY, SET_USERS, SET_MODE } from './constants';
const initialState = {
    users: [],
    text: "",
    mode: "light"
};

function reducer(state, action) {
    switch (action.type) {
        case SET_KEY:
            return {
                ...state,
                text: action.payload,
            };
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case SET_MODE:
            return {
                ...state,
                mode: action.payload,
            };
        default:
            return 'Invalid action';
    }
}

export { initialState };
export default reducer;