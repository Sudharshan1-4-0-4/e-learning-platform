import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CartContext from '../../context/CartContext';
import Registration from '../Registration';
import './index.css';

function CourseDetails() {
  const [course, setCourse] = useState(null);
  const [details, setDetails] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { id } = useParams(); // Extract course ID from URL parameters
  
  const { addCartItem } = useContext(CartContext); // Correct useContext
  useEffect(() => {
    axios.get(`http://localhost:4001/courses/${id}/`)
      .then(response => {
        setCourse(response.data);
        console.log("API called");
        console.log(response.data.course_video);
      })
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

  if (!videoId) {
    return <div>Error: Invalid YouTube video URL</div>;
  }

  const registrationForm = () => {
    console.log("clicked..");
    console.log(course);
    setIsVisible(true);
    setDetails(course);
  };

  const addCart = () => {
    console.log("adding...")
    console.log(course);
    addCartItem(course); 
   
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const handleParentClick = (event) => {
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

        <button onClick={registrationForm}>Register</button>
        <button onClick={addCart}>Add to Cart</button>
      </div>

      <div className="youtube-container">
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
      </div>
      {isVisible && <Registration details={details} />}
    </div>
  );
}

export default CourseDetails;
