import React from 'react'

export const OnscrollEvents = () => {
    window.addEventListener('scroll', () => {
        const scrollOnY = window.scrollY;  
        console.log(scrollOnY);
    })

  return (
    <div></div>
  )
}
