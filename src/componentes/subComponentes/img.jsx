import React from 'react'

const Img = ({enlace,alt}) => {
  return (
    <div >
        <img src={enlace}
             alt={alt} className='img'></img>
    </div>
  )
}

export default Img