import React from 'react'
import VideoCard from './VideoCard'
function ViewVideo() {
  return (
    <>
      <div>ViewVideo</div>
      <div class="container text-center">
      <div className='row row-cols-3 d-flex'>
        <div className="col my-5 "><VideoCard  /></div>
        <div className="col my-5 "><VideoCard  /></div>
        <div className="col my-5 "><VideoCard  /></div>

      </div>
      </div>
      

    </>

  )
}

export default ViewVideo