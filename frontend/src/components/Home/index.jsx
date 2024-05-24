import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='main-container'>
      <Link to ={"/courses/"} ><h1 className='heading'>(❁´◡`❁)..Welcome to the E-Learning Platform..(❁´◡`❁)</h1></Link>
    
      <p className='para'>E-learning platforms have transformed the landscape of education, offering flexible, accessible, and diverse learning opportunities to students around the globe. These platforms leverage technology to provide a wide range of educational content, 
      from academic courses to professional development, all accessible from the comfort of one’s home.</p>
    <div className='features'>
      <div className='feature1 fea'>
        <p className='head'>Accessibility and Flexibility:</p><p className='p1'>

        Anytime, Anywhere Learning: E-learning platforms allow learners to access courses at their convenience, breaking down geographical and time barriers. This flexibility is especially beneficial for working professionals and those with other commitments.
        Multidevice Access: Most platforms are accessible via smartphones, tablets, and computers, making it easy for users to learn on the go.</p>
      </div>

      <div className='feature2 fea'>
        <p className='head'>Diverse Course Offerings:</p><p className='p1'>

              Variety of Subjects: From coding and data science to arts and humanities, e-learning platforms offer courses across a vast array of disciplines.
              Different Levels: Courses range from beginner to advanced levels, catering to learners with different expertise and learning goals.</p>
      </div>

      <div className='feature3 fea'>
        <p className='head'>Interactive Learning Experiences:</p><p className='p1'>

            Multimedia Content: Incorporation of videos, interactive quizzes, and simulations makes learning engaging and effective.
            Live Sessions and Webinars: Many platforms offer live classes and Q&A sessions with instructors, providing a more interactive learning experience.</p>
      </div>
      </div>
    </div>
  );
}

export default Home;
