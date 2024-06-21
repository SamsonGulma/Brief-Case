import React, { useEffect } from 'react'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import picture from './assets/ipic.jpg'
import linkedIn from './assets/icons8-linkedin.gif'
import github from './assets/icons8-github-48.png'


function App() {
    

  useEffect(() => {
    AOS.init(
      {
        duration: 3000
      }
    )
  }, []
  );
  return (
    <div className='App'>

    </div>
  );
}

export default App;
