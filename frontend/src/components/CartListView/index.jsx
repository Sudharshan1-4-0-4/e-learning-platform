import React, { useContext } from 'react';
import CartItem from '../CartItem';
import cartContext from '../../context/CartContext';

import './index.css';

const CartListView = () => {
  const { cartList , name } = useContext(cartContext);

  return (
    <ul className="cart-list">
      {cartList.length > 0 ? cartList.map(eachCartItem => (
        <CartItem key={eachCartItem.course_id} name = {name} cartItemDetails={eachCartItem} />
      )) : <p>..No added Items Into a Cart..</p>}
    </ul>
  );
};

export default CartListView;
