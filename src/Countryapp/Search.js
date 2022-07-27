import React,{useEffect, useState} from 'react'
import Useeffect from '../Useeffect/Useeffect';

const Search = (props) => {
    const { onsearch } = props;
    const [searchtext, setsearchtext] = useState('');
    const handlechange = (e) => {
        setsearchtext(e.target.value);

    }
    useEffect(() => {
       onsearch(searchtext)
    },[searchtext])
    return (
      <div style={{textAlign: "center"}}>
          <input type="text" value={searchtext} onChange={handlechange} placeholder='search-country' />
    </div>
  )
}

export default Search