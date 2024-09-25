import React from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";

const VideoPlayer = () =>
(
    <div>
        <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" controls />
    </div>
);

function Vid()
{
    return (
        <div className="Vid">
            <VideoPlayer />
        </div>
    )
}

export default Vid;