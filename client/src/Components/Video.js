import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetch } from './../actions/video'

import "./Video.css"
import Videocard from './Videocard'


const Video = ({ video, fetch }) => {

    useEffect(() => {
        fetch();
    }, [])

    // static propTypes = {

    // }
    console.log("props ---->", video)
    var d1 = new Date();
    var m = d1.getMonth();
    var d = d1.getDate();
    var y = d1.getFullYear();

    return (
        <div>
            {video.fetching ? <h2>VIDEO Loading</h2> :
                <div className='recommendedVideos'>
                    <h2>Video Component</h2>
                    <div className='recommendedVideos_videos'>
                        {
                            video.data.items.map(item => {
                                return (<div>
                                    <Videocard id={item.id.videoId} image={item.snippet.thumbnails.medium.url} title={item.snippet.title} channel={item.snippet.channelTitle} views={0} timestamp={
                                        item.snippet.publishedAt
                                    } />
                                </div>)
                            })
                        }
                    </div>
                </div>
            }

        </div>
    )
}

Video.propTypes = {
    video: PropTypes.object.isRequired,
    fetch: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    // console.log("state is", state)
    video: state.video
})

export default connect(mapStateToProps, { fetch })(Video)
