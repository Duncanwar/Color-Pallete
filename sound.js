import React from 'react';
import H5AudioPlayer from 'react-h5-audio-player'

const Player = () => {
<H5AudioPlayer autoPlay={false} src='https://res.cloudinary.com/semugeshi/video/upload/v1597229726/Tim_Storms_-_We_ll_Soon_Be_Done_rkrofm.mp3' onPlay={e=>console.log("onplay")}/>

}

export default Player