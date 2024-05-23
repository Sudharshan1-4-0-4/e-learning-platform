// src/components/CourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function CourseCard({ course }) {
  return (
    <div className='course-card'>
      <img className="image" src={course.course_img}/>
      <div className='content'>
      <h2>{course.course_name}</h2>
      <p>{course.course_brief_description}</p>
      
        <Link to={`/courses/${course.course_id}`}><button>View Details</button></Link>
      
      </div>
      
    </div>
  );
}

export default CourseCard;
