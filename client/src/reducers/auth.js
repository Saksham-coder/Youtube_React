const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case "REGISTER_FAIL":
        case "LOGIN_FAIL":
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: null,
                loading: true
            }
        default:
            return state;
    }
}