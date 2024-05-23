// src/pages/CourseDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.css';
import Registration from '../Registration';



function CourseDetails({ match }) {
  const [course, setCourse] = useState(null);
  const [details, setDetails] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4001/courses/${id}/`)
      .then(response => {
        setCourse(response.data);
        console.log("api called");
        console.log(response.data.course_video);
      }
    )
      .catch(error => console.error('Error fetching course:', error));
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  const extractVideoId = (url) => {
    const videoIdRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(course.course_video);

  // Function to extract video ID from URL
  

  if (!videoId) {
    return <div>Error: Invalid YouTube video URL</div>;
  }

  const registrationForm = () =>{
    // setPlaced(true);
  //  console.log(course.amount);
  //  console.log(course.course_id);
  //  console.log(course.course_name);
  console.log("clicked..");
    setIsVisible(true);
    setDetails(course);

    
    // return <File product_id= {product_id}/>
    
    
};

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const handleParentClick = (event) => {
    console.log("handle..")
    console.log(event.target.className);
    if (event.target.className === 'orders-container') {
      setIsVisible(false);
    }
  };

  return (
    <div className='back' onClick={handleParentClick}>
      <div className='content'>
        <h1 className='heading'>{course.course_name}</h1>
        <p className='heading'>{course.course_description}</p>

        <button onClick = {registrationForm}>Register</button>

      </div>
      
      
      <div className="youtube-container">
              
          <iframe
            width="560"
            height="315"
            src={embedUrl}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="YouTube video player"
          ></iframe>
      </div>
      {isVisible && <Registration details = {details}/>}
    </div>
  );
}

export default CourseDetails;
