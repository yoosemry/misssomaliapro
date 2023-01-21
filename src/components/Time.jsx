import React from 'react'

const Time = ({ days, hours, minutes, seconds }) => {
  return (

    <div className='timer'>

    <h1 className='timer__h1'>votting ends in</h1>

    <div className='timer__time'>

    <div className='timer__digit-text'>
    <span className='timer__digit'>{days} :</span>
    <span className='timer__text'>days</span>
    </div>

    <div className='timer__digit-text'>
    <span className='timer__digit'>{hours} :</span>
    <span className='timer__text'>hours</span>
    </div>

    <div className='timer__digit-text'>
    <span className='timer__digit'>{minutes} :</span>
    <span className='timer__text'>minitus</span>
    </div>

    <div className='timer__digit-text'>
    <span className='timer__digit'>{seconds}</span>
    <span className='timer__text'>seconds</span>
    </div>

    </div>

</div>
  )
}

export default Time