import React from 'react'


const OnscrollEvents = () => {
    const section1 = document.getElementsByClassName('onFirst');

    window.addEventListener('scroll', () => {
        const scrollOnY = window.scrollY;  
        console.log(scrollOnY);

        if (scrollOnY === 20) {
            section1.style.backgroundColor = 'black';
        }
    })

  return (
    <div></div>
  )
}

export default OnscrollEvents;
