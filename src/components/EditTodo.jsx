import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { updateTodo } from '../util';

export const EditTodo=({open,setOpen,id,descr})=> {
  const [input,setInput] = useState(descr);

  const handleClose = () => {
    setOpen(false)
};
  const handleSave=()=>  {
    console.log(input);
    //backend fg.
    updateTodo(id,input)
        handleClose()

  }

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            multiline
            maxRows={6}
            type="text"
            value={input}
            fullWidth
            variant="standard"
            onChange={(e)=>setInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}