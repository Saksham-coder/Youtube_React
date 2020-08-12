import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import PropTypes from 'prop-types';

const Login = ({ login }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password)
        login({ email, password })
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange} />

                </div>
                <input type="submit" value="Login" />
            </form>

        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired
};


export default connect(null, { login })(Login)
