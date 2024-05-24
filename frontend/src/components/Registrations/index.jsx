import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CartContext from '../../context/CartContext';
import Cards from '../Cards';

import './index.css';

function Registrations() {
  const [orders, setOrders] = useState([]);
  const { name } = useContext(CartContext);

  useEffect(() => {
    const calling = async () => {
      const userDetails = { name };
      const url = "http://localhost:4001/registerd/";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      };

      const response = await fetch(url, options);

      if (response.ok) {
        const data = await response.json(); // Parse response body as JSON
        setOrders(data);
        console.log("Orders added:", data);
      } else {
        console.log("Error adding orders");
      }
    };

    calling();

  }, [name]);

  return (
    <div className='course-container'>
      <h1>Your Courses...</h1>
      <marquee>🏃‍♂️🏃‍♂️...E-learning-platform..,🏃‍♂️🏃‍♂️</marquee>
      <div className='cards'>
        {orders.length > 0 ? (
          orders.map(order => (
            <Cards key={order.course_id} order={order} />
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
}

export default Registrations;
