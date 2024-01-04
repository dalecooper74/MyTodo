import React,{ useEffect } from 'react'
import { collection,onSnapshot } from 'firebase/firestore'

import './App.css'
import { db } from './firebaseApp';
import { useState } from 'react';
import { Todos } from './components/Todos';

function App() {
  const [user,setUser]=useState(null)

  useEffect(()=>{
    
  },[])


  return (
      <div>
        <h1>My Todo</h1>
        <Todos/>
      </div>
      
  )
}

export default App
