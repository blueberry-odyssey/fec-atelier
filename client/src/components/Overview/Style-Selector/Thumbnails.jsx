import React from 'react';

//displays 4 thumbnails in a row
//displays checkmark on style selected
//first style is default


const Thumbnails = function (props) {
  let rows = [];
  const createRowsOf4 = function (array) {
    const copy = array.slice();
    while (copy.length) {
      rows.push(copy.splice(0, 4));
    }
  }
  createRowsOf4(props.styles);

  console.log('ROWS: ', rows);
  return (
    <div className='styles' >
      {props.styles.map(function (style) {
        return <img key={style.name} src={style.photos[0]['thumbnail_url']}></img>
      })}
    </div>
  )
}

export default Thumbnails;