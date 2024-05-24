import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Thanks from "../Thanks";
import "./index.css";

const Registration = ({ details }) => {
  const [user_name, setName] = useState("");
  const course_id = details.course_id;
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const course_name = details.course_name;
  const amount = details.amount;
  const {nameAdd} = useContext(CartContext);

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

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        setIsPopupVisible(true);
        setName("");
        nameAdd(user_name);
      } else {
        navigate("/signIn");
      }
    } catch (error) {
      console.error('Error:', error);
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
          <label className="input-label" htmlFor="course_id">
            COURSE_ID
          </label>
          <input
            type="text"
            id="course_id"
            value={course_id}
            className="username-input-field"
            readOnly
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="course_name">
            COURSE_NAME
          </label>
          <input
            type="text"
            id="course_name"
            value={course_name}
            className="username-input-field"
            readOnly
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="user_name">
            USER_NAME
          </label>
          <input
            type="text"
            id="user_name"
            value={user_name}
            className="username-input-field"
            onChange={onChangeUsername}
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="amount">
            AMOUNT
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            className="password-input-field"
            readOnly
          />
        </div>
        <button type="submit" className="login-button">
          Submit
        </button>

        {isPopupVisible && <Thanks onClose={closePopup} />}
      </form>
    </div>
  );
};

export default Registration;
