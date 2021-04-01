import React from 'react';
import YouTube from 'react-youtube';
import './Trailer.css';

function Trailer({ trailerId }) {

    const opts = {
        height: '320',
        width: '400',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
    };

    return (
        <div className='trailer'>
            <YouTube opts={opts} videoId={trailerId}/>
        </div>
    );
}

export default Trailer;
