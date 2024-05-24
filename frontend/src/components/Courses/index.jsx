// src/pages/Courses.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import CourseCard from '../CourseCard';
import './course.css';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4001/courses/')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className='course-container11'>
      <h1>Courses</h1>
      <marquee>🏃‍♂️🏃‍♂️...E-learing-platform..,🏃‍♂️🏃‍♂️</marquee>
      <div className='cards'>
        {courses.map(course => (
          <CourseCard key={course.course_id} course={course} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Courses;
