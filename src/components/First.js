import React from "react";

function Myfunc(props) {
  const { title, description } = props;
  return (
    <div className="bg">
      <h3 className="heading">This is Card Heading</h3>
      <h4>{title}</h4>
      <h2>{description}</h2>
      <p className="pera">
        This is simple paragrap just for practice i just love to do this this
        ,it gives me much pleasure to be honest!!!
      </p>
    </div>
  );
}
// console.log('jello');

export default Myfunc;
