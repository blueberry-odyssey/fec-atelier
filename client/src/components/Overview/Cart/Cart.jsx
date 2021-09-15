import React from 'react';

const Cart = function (props) {
  return (
    <div>
      <h2>Cart: </h2>
      <div>
        <select>
          <option>Size</option>
        </select>
        <select>
          <option>Quantity</option>
        </select>
      </div>
      <div>
        <button>Add To Cart</button>
        <button>Add to Favorites</button>
      </div>

    </div>
  )
}

export default Cart;