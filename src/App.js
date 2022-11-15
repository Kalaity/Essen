import './App.css';
import React,{useState} from 'react'
import Profile from "./Profile"

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className='App'>   
      <button type="button" onClick={()=> setShow(!show)}>
        {show === true ? 'Hide' : 'Show'}
      </button>
{show?<Profile />:null}
      
    </div>
  );
}

export default App;