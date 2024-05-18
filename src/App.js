import './App.css';
import picture from './assets/ipic.jpg'
import linkedIn from './assets/icons8-linkedin.gif'


function App() {
  return (
    <div className="App">

      <div className="App-header">
          Software<br />Engineering <br /> Student <br /> at ASTU 
      </div>

      <div className='myWork'>
        <p>
        See my work here!
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
          <a href="www.gmail.com">Get In Touch</a>
      </button>
      
      <div className='hey'>
        <p>
          Hey there, I'm Samson
        </p>
      </div>

    </div>
  );
}

export default App;
