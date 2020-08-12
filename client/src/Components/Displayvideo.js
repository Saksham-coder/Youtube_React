import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidevideocard from './Sidevideocard'
import { fetch } from './../actions/video'

import './Displayvideo.css'

const Displayvideo = (props) => {
    console.log(props)
    console.log("params--->", props.match.params.id)
    console.log("fetch props ---> ", props.fetch)

    useEffect(() => {
        props.fetch();
    }, [])

    return (
        <div className='displayvideo_main'>
            <div className='displayvideo_mainleft'>
                <iframe className='videoframe'
                    src={`https://www.youtube.com/embed/${props.match.params.id}`}>
                </iframe>
            </div>
            <div className='displayvideo_mainright'>
                {props.video.fetching ? <h2>VIDEO Loading</h2> :
                    <div >
                        <h4 className='displayvideo_mainright_h'>Up next</h4>
                        <div>
                            {
                                props.video.data.items.map(item => {
                                    return (<div>
                                        <Sidevideocard id={item.id.videoId} image={item.snippet.thumbnails.medium.url} title={item.snippet.title} channel={item.snippet.channelTitle} views={0} timestamp={item.snippet.publishedAt} />
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    video: state.video
})


export default connect(mapStateToProps, { fetch })(Displayvideo);