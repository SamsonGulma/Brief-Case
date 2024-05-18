import './App.css';
import picture from './assets/ipic.jpg'
import linkedIn from './assets/icons8-linkedin.gif'


function App() {
  return (
    <div className="App">
      
      <svg viewBox="0 0 200 200" >
        <path fill="#D0E2FF" d="M32.5,-46.5C45.3,-35.4,61.1,-30.2,69.3,-19.2C77.4,-8.2,77.9,8.6,72.8,23.4C67.7,38.2,57,50.9,43.9,60.2C30.8,69.5,15.4,75.4,-2,78.1C-19.4,80.9,-38.8,80.5,-48.7,70.2C-58.7,59.9,-59.2,39.6,-61.7,22.3C-64.3,5,-68.8,-9.4,-67,-23.9C-65.2,-38.4,-57.1,-52.9,-44.9,-64.2C-32.6,-75.5,-16.3,-83.5,-3.3,-79.1C9.8,-74.6,19.6,-57.6,32.5,-46.5Z" transform="translate(100 100)" />
      </svg>

      <div className="App-header">
          Software<br />Engineering <br /> Student <br /> at ASTU 
      </div>

      <div className='hey'>
        <p>
          Hey there, I'm Samson
        </p>
      </div>

      <img className='pic' src={picture} alt=''/>
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
          <a href="https://mail.google.com/mail/u/0/#inbox">Get in touch</a>
      </button>
      
      
      <div className='myWork'>
        <a href="somewhere">
        See my work here!
        </a>
      </div>

    </div>
  );
}

export default App;
