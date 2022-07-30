import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate= useNavigate()
  return (
    <div className="p-5 m-5">
      <h1>This is about Us section !</h1>
      <h3>Read something about us.......</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        provident sunt explicabo iste et repudiandae atque earum officia
        accusantium dicta doloremque quas esse in praesentium deleniti,
        voluptates quis enim suscipit cumque nostrum laborum facilis? Eaque, ab
        expedita vero facere ipsa magni aperiam culpa fuga tempora magnam!
        Perferendis delectus distinctio hic, reprehenderit et iure eveniet
        dolorum nobis sunt, libero facere, soluta facilis atque illo! Alias
        recusandae accusamus a ipsam earum, laborum, voluptatum delectus magnam
        facere dolorem tenetur adipisci excepturi debitis deleniti quam
        voluptatem sed doloribus quis sequi omnis similique saepe aut! Iure
        quaerat sed quis vitae molestiae nisi harum! Molestiae, repellat.
      </p>
      <button onClick={() => {
        navigate("/")
      }}>Go to home page</button>
    </div>
  );
};

export default About;
