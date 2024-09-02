import React, { useState } from 'react'
import {Button,Dialog,DialogTitle,DialogContent,DialogActions, TextField} from '@mui/material'
function Close() {
  const [open,setOpen]=useState(false);
  const handleOpen=()=>{
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
  }
  return (
    <div style={{padding:'30px'}}>
        <Button variant="contained" onClick={handleOpen}>Login</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        fullWidth

        >
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin='dense'
              label="Email"
              type='email'
              fullWidth
              variant='standard'
            ></TextField>
            <TextField
              required
              margin='dense'
              label="Password"
              type='password'
              fullWidth
              variant='standard'
            ></TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleClose} color='primary'>
              Login
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  )
}

export default Close;