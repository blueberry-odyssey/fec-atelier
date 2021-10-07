import React from 'react';
import Size from './Size.jsx';

const Characteristics = (props) => {
  //console.log('CHARACTERISTICS PROPS:', props);
  let charsArray = Object.entries(props.characteristics);
  charsArray.map(arr => {
    if (arr[1].value === null) {
      arr[1].value = 0;
    } else {
      let unrounded = Number(arr[1].value);
      let rounded = unrounded.toFixed(2);
      arr[1].value = rounded;
    }
  });

  return (
    <div className='characteristics-section'>
      <Size />
      {charsArray.map(factor => (
        <div key={factor[1].id}>
          <p className='characteristics-name'>{factor[0]}</p>
          <p className='characteristics-value'>Value: {factor[1].value}</p>
        </div>
      ))}
    </div>

  )
}

export default Characteristics;
