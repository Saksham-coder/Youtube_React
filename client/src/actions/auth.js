import axios from "axios"
import api from '../utils/api';


export const register = ({ name, email, password }) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({ name, email, password })

        const res = await axios.post("/api/users/",
            body,
            config

        )
        // const res = await api.get('/auth');
        console.log(res)
        dispatch({
            type: "REGISTER_SUCCESS",
            payload: res.data
        });
        // dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors)
        dispatch({
            type: "REGISTER_FAIL"
        })

        // if (errors) {
        //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        // }

        // dispatch({
        //     type: REGISTER_FAIL
        // });
    }
};

export const login = ({ email, password }) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({ email, password })

        const res = await axios.get('/api/users/',
            body,
            config)
        console.log(res)

        dispatch({
            type: "LOGIN_SUCCESS",
            payload: res
        })

    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors)
        dispatch({
            type: "LOGIN_FAIL"
        })
    }
}