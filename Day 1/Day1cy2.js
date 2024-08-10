import React,{useState} from 'react';
const NEWS=()=>{
  return(
    <div>
    <ul class="dir">
    <li>North</li>
    <li>East</li>
    <li>West</li>
    <li>South</li>
  </ul>
  </div>
  )
}
const DIRECTION=()=>{
  return (
    <div>
      <p>North news,East News,West News,South News</p>
  </div>
  )
}
 const App=()=>{
  const [ Component, setComponent ]=useState(null);
  return(
    <div>
      <div>{Component}</div>
      <button onClick={()=>setComponent(<DIRECTION />)}>Array</button>
      <br/>
      <br/>
      <button onClick={()=>setComponent(<NEWS />)}>Refresh Array</button>
    </div>
  )
 }


export default App;