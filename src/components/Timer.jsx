import React from 'react'
import Countdown from 'react-countdown';
import Time from './Time';


const Timer = () => {

 
  const renderer = ({ days, hours, minutes, seconds }) => <Time days={days} hours={hours} minutes= {minutes} seconds={seconds}/>;
    

  return (
  <Countdown
    date={Date.now() + 777600000}
    renderer={renderer}
  />
  )
}

export default Timer