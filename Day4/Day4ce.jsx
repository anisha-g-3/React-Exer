import React, { useState } from 'react'
import {TextField,Autocomplete,Button} from '@mui/material'
function Fruit() {
  const [name,setName]=useState('');
  const [fruit, setFruit]=useState('');
  const [submit, setSubmit]=useState(false);
  const handleSubmit=()=>{
    setSubmit(true);
  }
  return (
    <div style={{padding:'30px'}}>
        <h1>Enter your Name and Fruit</h1>
        <TextField
          label="Name"
          variant='outlined'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          sx={{width:'40vh'}}
          />
        <br />
        <br />
        <Autocomplete
        options={['Apple','Banana','Cherry','Durian','Elderberry']}
        onChange={(e,val)=>setFruit(val)}
        renderInput={(param)=> 
        <TextField {...param} label="Choose Fruit" sx={{width:'50vh'}}/>}  
        />
        <br />
        <Button
        onClick={handleSubmit}
        variant='contained'
        >Submit</Button>

        {submit && 
        <div>
          <p>Hi {name} !!!</p>
          <p>Your Favourite Fruit is {fruit} !!!</p>
        </div>
        }
    </div>
  )
}

export default Fruit;