import React ,{useContext}from 'react';
import { AppContext } from '../context/AppContext';

const Contact = () =>{
    const data = useContext(AppContext);

  return (
    <div>
        <h2>Contact</h2>
        <h3>Phone : {data[0]}</h3>
        <h3> Name : {data[1]}</h3>
    </div>
  );
};

export default Contact;