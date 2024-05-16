import './App.css';
import picture from './assets/ipic.jpg'
import linkedIn from './assets/icons8-linkedin.gif'
import { useNavigate } from "react-router-dom";

function App() {
  const navigator = useNavigate();
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

      <img className='pic' src={picture} alt=''/>
      <div className='sam'><p>Sam</p></div>
      <img className='linkedin' src={linkedIn} alt='' onClick={() => {
       navigator('https://www.linkedin.com/')
      }} />
      

    </div>
  );
}

export default App;
