import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'

import './Videocard.css'


export const Videocard = ({ id, image, title, channel, views, timestamp, channelImage }) => {
    const oneDay = 24 * 60 * 60 * 1000;

    var d1 = new Date();
    var m = parseInt(d1.getMonth());
    var d = parseInt(d1.getDate());
    var y = parseInt(d1.getFullYear());

    let year = parseInt(timestamp.substring(0, 4));
    let month = parseInt(timestamp.substring(5, 7));
    let day = parseInt(timestamp.substring(8, 10));

    let firstDate = new Date(year, month, day);
    let secondDate = new Date(y, m, d);

    let diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));


    return (
        <Link to={`/video/${id}`} style={{ textDecoration: 'none' }}>
            <div className='videocard' >
                <img className='videocard_thumbnail' src={image} alt='' />
                <div className='video_info'>
                    <Avatar className='videocard_avatar' alt={channel} src={channelImage} />
                    <div className='video_text' >
                        <h4>{title}</h4>
                        <p>{channel}</p>
                        <p>
                            {/* {`${diffDays} days ago`} */}
                        </p>
                    </div>
                </div>
            </div >
        </Link>
    )
}

export default Videocard
