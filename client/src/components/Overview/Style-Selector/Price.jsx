import React from 'react';

const Price = function (props) {
  return (
    <div>
      {props.sale
        ? <div>
          <p className='sale-price'>${props.sale}</p> <strike>${props.original}</strike>
        </div>
        : <div>
          ${props.original}
        </div>
      }
    </div>
  )
}

export default Price;

// {props['sale_price']}
// {props['original_price']}