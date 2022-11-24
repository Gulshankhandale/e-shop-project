import React from 'react'
import PosterImage from '../assets/Images/poster-image.png';

function PosterSection() {
  return <>
  <div className='container text-center'>
    <img className='poster-image' src={PosterImage}/>
  </div>
  </>
}

export default PosterSection