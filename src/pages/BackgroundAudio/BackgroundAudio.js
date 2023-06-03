import React, { useEffect } from 'react';
import audioFile from '../../audio.mp3';

function BackgroundMusic() {
 return (
    <>
  {/* <iframe src={audioFile} type="audio/mp3" allow="autoplay" id="audio" style="display:none"></iframe> */}
  <audio src={audioFile} autoPlay loop></audio> 
  
    </>
 )
}

export default BackgroundMusic;
