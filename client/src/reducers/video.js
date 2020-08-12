const initialState = {
    fetching: true,
    nextfetching: false,
    searchVideo: ""
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case "FETCH_VIDEOS":
            // console.log(payload)
            // console.log("DiD payload appear")
            console.log(payload)
            return {
                ...state,
                ...payload,
                fetching: false
            }
        case "FAILING_FETCH":
            return state
        default:
            return state
    }
}