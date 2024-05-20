import React from 'react'

const OnscrollEvents = () => {
    window.addEventListener('scroll', () => {
        const scrollOnY = window.scrollY;  
        console.log(scrollOnY);
    })

  return (
    <div></div>
  )
}

export default OnscrollEvents;
