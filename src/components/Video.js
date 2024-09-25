import React from 'react';
import ReactPlayer from 'react-player';

function Video()
{
    return (
        <div >
            <ReactPlayer
                url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                controls
                width='100%'
                height='100%'
            />
        </div>)
}
export default Video;