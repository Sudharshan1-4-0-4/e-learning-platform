import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='main-container'>
      <Link to ={"/courses/"} ><h1 className='heading'>(❁´◡`❁)..Welcome to the E-Learning Platform..(❁´◡`❁)</h1></Link>
    
   
    </div>
  );
}

export default Home;
