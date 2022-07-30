import React from 'react'
import { useState } from 'react'
import User from './User'

const Users = () => {
  const [username, setusername] = useState({
    id: 7719,
    name:"emrul biplob"
  });
  

  return (
    <div>
      {/* <input type="text" name="text" value={username} onChange={(e) => { */}
        {/* // setusername(e.target.value) */}
      {/* // }} id="" /> */}

      <User username={ username}  />
    </div>
  )
}

export default Users