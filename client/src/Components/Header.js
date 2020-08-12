import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';

import "./Header.css"

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'

import { fetch } from './../actions/video'

const Header = ({ fetch }) => {
    const [formData, setFormData] = useState({
        searching: ""
    })

    const { searching } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const fetchingfromheader = (e) => {
        // e.prevetDefault();
        // alert(searching)
        fetch({ searching })
    }

    return (
        <div className='header'>
            <div className='header_left'>
                <MenuIcon />
                <Link to="/" >
                    <img className='header_logo' src='https://lh3.googleusercontent.com/proxy/Uz_qdKdkzjHthyTuCob64dwPh03J9oyVP4jO08H6HNFHNsePDrikXzmIjtQdGLnsI6U3LdOljX8ZwOl4Ynxu_EE-CVTqZ_9GLnjqECU_g4VLd_a8B2LN' alt='' />
                </Link>
            </div>
            <div className='header_input'>
                <input placeholder='Search' type='text' name='searching' value={searching} onChange={onChange} />
                <SearchIcon onClick={fetchingfromheader} className='header_inputButton' />
            </div>
            <div className='header_icons'>
                <VideoCallIcon className='header_ic' />
                <AppsIcon className='header_ic' />
                <NotificationsIcon className='header_ic' />
                <Avatar src='' alt='Saksham' />
                <Link to='/signup' >
                    SignUp
                </Link>
                <Link to='/login' >
                    Login
                </Link>
            </div>


        </div>
    )
}

export default connect(null, { fetch })(Header)
