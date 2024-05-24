// src/components/CourseCard.js
import React from 'react';

import './index.css';

function Cards({ order }) {
  return (
    <div className='main_container'>
      
      <div className='des'>
        <h2>Course_name : {order.course_name}</h2>
        
        <p>User_Name : {order.user_name}</p>
        <p>Amount : {order.amount}</p>
        
       
      
      </div>
      
    </div>
  );
}

export default Cards;
