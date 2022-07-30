import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Blogdata } from '../Data'

const Blog = () => {
  const [blogs, setblogs] = useState(Blogdata)
  const trunckedString = (str, num) => {
    if (str.length > num) {
      return str.slice(0,num)+ "..."
    } else {
      return str;
    }
  }
  return (
      <div className='p-5 m-5'>
          <h1>This is a Blog Page</h1>
          <h2>See our latest BLOG</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium modi deserunt ullam iste itaque optio, voluptatem, illum quae autem consectetur dolore officiis, obcaecati neque eligendi accusamus fugiat sit a qui maxime beatae ipsam est. Repellendus sint impedit, praesentium quisquam deleniti cum, enim maiores asperiores recusandae, iusto assumenda aliquam dicta. Enim earum esse libero, nobis iste quod est consequuntur vero hic repudiandae consectetur, aperiam quam laudantium. Enim, incidunt molestias reiciendis iure esse eaque minus sunt voluptas quo officiis beatae itaque!</p>

      
      {
        blogs.map((blog) => {
          const { id, title, description } = blog;

          return (
            <article key={id} className="d-grid gap-1" >
              <h2 className="p-3 m-3">{title}</h2>
              <p className="p-3 m-3 bg-gradient">{trunckedString(description, 99)}</p>
              <Link to={title}>Read More</Link>
            </article>
          );
        })
          }
      </div>
  )
}

export default Blog