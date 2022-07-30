import React from 'react'
import PropsTypes from "prop-types";

const User = (props) => {
    const { username } = props;
    console.log(username.name);
  return (
      <div>
          <h1>{username.name}</h1>
          <h2>{username.id }</h2>
      {/* <h1>{props.userid}</h1> */}
          {/* <h2>{props.username}</h2> */
          }
          hello wolrd
    </div>
  );
}
// console.log(PropTypes);
// User.Proptypes = {};
User.propTypes = {
    username: PropsTypes.shape({
        id: PropsTypes.number,
        name: PropsTypes.string
  })
}; 
User.defaultProps = {
    username: "Default Name",
    userid:"deafult id 0000:"
}


export default User