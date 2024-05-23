import React from "react";
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
// import Cookies from 'js-cookie';
 import "./index.css";
 import Thanks from "../Thanks";

const Registration = ({details}) => {
  const [user_name, setName] = useState("");
  const course_id = details.course_id;
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const course_name = details.course_name;
  const amount = details.amount;
  
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

 

  const submitForm = async (event) => {
    event.preventDefault();


    

    const userDetails = { course_id, course_name, user_name, amount };
    const url = "http://localhost:4001/registrations/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    // console.log(response);
    if (response.ok) {
      console.log("navigated");
      setIsPopupVisible(true);
      setName("");
      
    } else {
      navigate("/signIn");
      
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="orders-container">
      <form className="form1-container" onSubmit={submitForm}>
        <h1 className="heading">👉...E-Learning-Platform...👈</h1>
        <div className="input-container">
          <label className="input-label" htmlFor="username">
            COURSE_ID
          </label>
          <input
            type="text"
            id="username"
            value={course_id}
            className="username-input-field"
           
            
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="phone">
            COURSE_NAME
          </label>
          <input
            type="text"
            id="phone"
            value={course_name}
            className="username-input-field"
           
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="email">
            USER_NAME
          </label>
          <input
            type="text"
            id="email"
            value={user_name}
            className="username-input-field"
            onChange={onChangeUsername}
           
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            AMOUNT
          </label>
          <input
            type="text"
            id="password"
            value={amount}
            className="password-input-field"
           
          />
        </div>
        <button type="submit" className="login-button">
          submit
        </button>

        {isPopupVisible && <Thanks onClose={closePopup} />}
        
      </form>
     
    </div>
  );
};

export default Registration;
