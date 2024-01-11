import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import { deleteTodo, toggleDone } from '../util';
import CreateIcon from '@mui/icons-material/Create';
import { EditTodo } from './EditTodo';

export const Todo=({id,descr,done})=> {
  const [open, setOpen] = React.useState(false);

        return (
          <>
          <ListItem
            key={id}
            
            secondaryAction={
            <>
              <IconButton edge="end" aria-label="comments"
              onClick={()=>deleteTodo(id)}
              >
                <DeleteIcon sx={{color: 'red'}} />
              </IconButton>

              <IconButton edge="end" aria-label="comments"
              onClick={()=>setOpen(true)}
              >

                <CreateIcon sx={{color: 'green'}} />
              </IconButton>
            </>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense
              onClick={() => toggleDone(id,!done)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={done}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': id }}
                />
              </ListItemIcon>
              <ListItemText id={id} primary={descr} />
            </ListItemButton>
          </ListItem>
          {open && <EditTodo open={open} setOpen={setOpen} id={id} descr={descr}/>}
          </>
        );
      }