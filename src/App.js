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
    <div className="App">

      <div className='shape'><h3>Hello There, <br />Welcome to<br /> my website.</h3></div>
      

      <section className='onFirst'> 
        <div className="App-header" data-aos="zoom-in-down">
          
          Software<br />Engineering <br /> Student <br /> at ASTU 
        </div>

        <div className='hey'>
          <p>
            Hey there, I'm Samson
          </p>
        </div>

        <div className='pic'>
        <img className='ipic' src={picture} alt=''/>
        </div>

        
        <div className='sam'> <div className='dot'></div> <p>Sam</p></div>
        <img className='linkedin' src={linkedIn} alt=''/>        
        <div className='btn-about'>
          <button className='aboutme'>
            About me
          </button>
        </div>

        <button className='intouch'>
            <a href="mailto:sams0ngultek@gmail.com">Get in touch</a>
        </button>
        
        
        <button className='myWork'>
          <a className='myworkanchor' href=".hey">
          See my work here!
          </a>
        </button>

   </section>
      <div className='github'>
        <img src = {github} alt=''/>

        <p> <a href='https://github.com/SamsonGulma'>GitHub</a> </p>
      </div>

      

        <div className='pocket'> </div>
      <section className='onSecond'>

        <p className='workandexp'> <br />
          Work and <br />Experiences
        </p>

           <div className='samside'> <div className='dotside'></div> <p>Sam</p></div>

        <div className='sidenavbar'>

          <button className='sidebtn'>
          
            Tools
          </button>

          <button className='sidebtn'>
            About  
          </button>

          <button className='sidebtn'>  
      
            Contact
          </button>

        </div>

        <div className='card1'>
          <p>
            LinkedIn Clone
          </p>
          </div>
        <div className='card2'>
          <p>
            Web-app for Cargo Shipping Company
          </p>
          </div>
        <div className='card3'>    
          <p>
            Customer Service Mobile App
          </p>
          </div>
        <div className='card4'> 
          <p>
            Much more facinating...
          </p>
          </div>
                     
              
              
              


      </section>

      <section className='onThird'>
        <h1>
          on Third
        </h1>
      </section>


    </div>
  );
}

export default App;
