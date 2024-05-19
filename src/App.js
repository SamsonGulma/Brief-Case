import './App.css';
import picture from './assets/ipic.jpg'
import linkedIn from './assets/icons8-linkedin.gif'
import github from './assets/icons8-github-48.png'


function App() {
  return (
    <div className="App">

      <div className="App-header">
        
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

      
      <div className='sam'><p>Sam</p></div>
      <img className='linkedin' src={linkedIn} alt=''
        onClick={() => {
          const pic = document.getSelection("pic")
          console.log(typeof(pic))
                }} />
      
      <div className='btn-about'>
        <button className='aboutme'>
          About me
        </button>
      </div>

      <button className='intouch'>
          <a href="mailto:sams0ngultek@gmail.com">Get in touch</a>
      </button>
      
      
      <button className='myWork'>
        <a className='myworkanchor' href="somewhere">
        See my work here!
        </a>
      </button>

      <hr className='horizontal'/>

      <div className='sidenavbar'>

        <a className='sideanchor' href='somewhere'>
          Work
        </a>
        <a className='sideanchor' href='somewhere'>
          About
        </a>
        <a className='sideanchor' href='somewhere'>
          Contact
        </a>
      </div>

      <div className='github'>
        <img src = {github} alt=''/>

        <p> <a href='somewhere'>GitHub</a> </p>
      </div>


    </div>
  );
}

export default App;
