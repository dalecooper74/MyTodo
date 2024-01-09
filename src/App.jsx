import React,{ useEffect } from 'react'
import { collection,onSnapshot } from 'firebase/firestore'

import './App.css'

import { useState } from 'react';
import { Todos } from './components/Todos';
import { Login } from './components/login';
import { getCurrentUser, signOutUser } from './util';
import LogoutIcon from '@mui/icons-material/Logout';

function App() {
  const [user,setUser]=useState(null)
  getCurrentUser(setUser);

  console.log(user);

  useEffect(()=>{
    
  },[])


  return (
      <div className='app'>
        <h1>My Todo</h1>
        {user && <LogoutIcon 
        sx={{width:"100%",cursor:"pointer",color: "blue"}}
        onClick={() =>signOutUser()}
        />}
        {user==null ? <Login/> : <Todos/>}
      </div>
      
  )
}

export default App
