import React from 'react'

const Header = (props) => {
    console.log("Header rendered");

  return (
    <div>
       <h1>{props.name}</h1> 
       <h2>header</h2>
        </div>
  );
};

export default React.memo(Header);