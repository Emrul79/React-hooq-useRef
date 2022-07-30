import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Blogdata } from '../Data';
const Myblog = () => {
    const [bodydeta, setbodydeta] = useState('');
    const { title } = useParams();

    useEffect(() => {
        const newblogDeta = Blogdata.filter((blog) => {
            return blog.title === title
        })
        setbodydeta(newblogDeta[0].description);
    },[])

  return (
      <div>
          <h1>{title} new data</h1>
          <p>{bodydeta }</p>
    </div>
  )
}

export default Myblog