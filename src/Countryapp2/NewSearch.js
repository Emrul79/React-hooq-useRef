import React, { useEffect, useState } from 'react'

const NewSearch = (props) => {
    const {onFilter}= props
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value)
       
    }
    useEffect(() => {
        onFilter(text)
    },[text])
  return (
      <div>
          <input type="text" name="text" value={text} onChange={handleChange} placeholder="search country" />
    </div>
  )
}

export default NewSearch