import './App.css';
import picture from './assets/picturei.jpg'

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

      <img className='pic' src={picture} alt=''/>

      

      <div className='sam'><p>Sam</p></div>


    </div>
  );
}

export default App;
