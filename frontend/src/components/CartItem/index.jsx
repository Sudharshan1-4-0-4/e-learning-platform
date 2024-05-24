import React, { useContext } from 'react';

import { AiFillCloseCircle } from 'react-icons/ai';

import CartContext from '../../context/CartContext';
import './index.css';

const CartItem = ({ cartItemDetails, name }) => {
  const { course_id, course_name, amount } = cartItemDetails;
  const user_name = name;
  const {  deleteCartItem } = useContext(CartContext);

//   const handleIncrement = () => {
//     addCartItem({ ...cartItemDetails, quantity: quantity + 1 });
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       addCartItem({ ...cartItemDetails, quantity: quantity - 1 });
//     } else {
//       deleteCartItem(id);
//     }
//   };

  const handleRemove = () => {
    deleteCartItem(course_id);
  };

  return (
    <li className="cart-item">
      
      <div className="cart-item-details-container">
        <div className="cart-product-title-brand-container">
          <p className="cart-product-title">{course_name}</p>
          <p className="cart-product-brand">Course_Id: {course_id}</p>
          <p className="cart-product-brand">User_Name: {user_name}</p>
          <p className="cart-product-brand">Amount   : {amount}</p>
        </div>
        
       
      </div>
     
        
        <button className="remove-button" type="button" onClick={handleRemove}>
          Remove
        </button>
        
     
      <button className="delete-button" type="button" onClick={handleRemove}>
        <AiFillCloseCircle color="#616E7C" size={20} />
      </button>
      
    </li>
  );
};

export default CartItem;
