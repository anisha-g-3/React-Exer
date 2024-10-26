import React,{useState,createContext,useContext} from 'react'
import {Select} from '@mui/material'
function App() {
    const [category,setCategory] = useState("");
  return (
    <div>
        <Select
          label="Age"
        //   onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </div>
  )
}

export default App;