import './App.css';
import picture from './assets/picturei.jpg'

function App() {
  return (
    <div className="App">
      <div className="App-header">
          Software<br />Engineering <br /> Student <br /> at ASTU 
      </div>

      <div className='hey'>
        Hey there, I'm Samson
      </div>

      <div className='sam'>Sam</div>

      <img className='pic' src={picture} alt=''/>

    </div>
  );
}

export default App;
