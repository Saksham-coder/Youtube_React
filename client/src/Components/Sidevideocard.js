import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'

import './Sidevideocard.css'


export const Sidevideocard = ({ id, image, title, channel, views, timestamp, channelImage }) => {
    title = title.substring(0, 30)
    return (
        <Link to={`/video/${id}`} style={{ textDecoration: 'none' }}>
            <div className='sidevideocard' >
                <img className='sidevideocard_thumbnail' src={image} alt='' />
                <div className='sidevideo_info'>
                    {/* <Avatar className='sidevideocard_avatar' alt={channel} src={channelImage} /> */}
                    <div className='sidevideo_text' >
                        <p>{title}</p>
                        <p className="sidevideo_channel">{channel}</p>
                    </div>
                </div>
            </div >
        </Link>
    )
}

export default Sidevideocard
