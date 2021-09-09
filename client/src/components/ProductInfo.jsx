import React from 'react';

const ProductInfo = function () {
  console.log('ProductInfo component invocked!');
  return (
    <div>
      <h2>Product Information: </h2>
      <div>Star Rating</div>
      <div>Read all Reviews link</div>
      <div>Product Category</div>
      <div>Product Title</div>
      <div>Price</div>
      <p>Product Overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}

export default ProductInfo;