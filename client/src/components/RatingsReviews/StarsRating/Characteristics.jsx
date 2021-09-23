import React from 'react';

const Characteristics = (props) => {
  //console.log('CHARACTERISTICS PROPS:', props);
  let charsArray = Object.entries(props.characteristics);
  charsArray.map(arr => {
    if (arr[1].value === null) {
      arr[1].value = 0;
    }
  });

  //console.log('CHARS ARRAY:', charsArray);

  return (
    <div className='characteristics-section'>
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

// <div className='characteristics-block'>
//   <p>Size</p>
//   <p>Comfort</p>
//   <p>Width</p>
//   <p>Length</p>
//   <p>Quality</p>
// </div>