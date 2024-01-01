import logo from './logo.svg';
import './App.css';
import ProgressBar from './components/ProgressBar';
import { useEffect, useState } from 'react';

function App() {
  let[valc,setValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((val) => val + 1);
    }, 70);

    // Clear the previous interval before setting a new one
    return () => clearInterval(intervalId);
  }, []);
  console.log(valc);
  return (
    <div className="App">
      <h1 className='text-center my-4'>Progress Bar</h1>
      <ProgressBar value={valc}></ProgressBar>
      <p className='my-2'><span style={{display: valc>99?"none":"block"}}>Loading...</span><span style={{display: valc>99?"block":"none"}}>Completed</span></p>
      
    </div>
  );
}

export default App;
