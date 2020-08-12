import axios from "axios"

export const fetch = (props) => async dispatch => {
    try {
        console.log(props)
        let url
        const KEY = "AIzaSyCfYX7ZN558APglYU5NhpaLkvlPhbJ3yCU"
        var maxResults = 10;


        if (props != null) {
            url = `https://www.googleapis.com/youtube/v3/search?q=${props.searching}&type=video&maxResults=${maxResults}&part=snippet&key=${KEY}`
        } else {
            url = `https://www.googleapis.com/youtube/v3/search?type=video&maxResults=${maxResults}&part=snippet&key=${KEY}`
        }

        const res = await axios.get(url)

        dispatch({
            type: "FETCH_VIDEOS",
            payload: res
        })

    } catch (err) {
        console.log(err.response.data.errors)
        dispatch({
            type: "FAILING_FETCH"
        })
    }
}