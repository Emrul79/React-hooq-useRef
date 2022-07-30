import React from 'react'
import { useState } from 'react'
import Baba from './Baba';
import Nati from './Nati';
import { Usercontext } from './useContext'
const Dada = () => {

    const [user, setuser] = useState({
        id: 1,
        name:"Emrul Biplob"
    });
    const [text,settext] = useState("hello i am a text")

  return (
      <div>
          <Usercontext.Provider value={{user, text}}>
             hebllo <Nati/>
          </Usercontext.Provider>
    </div>
  )
}

export default Dada