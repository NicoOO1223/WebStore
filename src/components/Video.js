import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css';
import videoFile from '../Videos/vidproj.mp4'

function Video()
{
    return (<>
        <div className='video-player'>
            <div className='player-wrapper'>
                <ReactPlayer
                    url={ videoFile }
                    playing={ true }
                    muted={ true }
                    loop={ true }
                    controls
                    className='react-player'
                    onError={ (e) => console.error('Error loading video:', e) }
                /></div>
        </div></>)
}

export default Video;