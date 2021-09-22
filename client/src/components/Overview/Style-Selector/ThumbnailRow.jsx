import React from 'react';

const ThumbnailRow = function (props) {
  return (
    <ul className='row'>
      {props.row.map(function (item) {
        return <img src={item.photos[0]['thumbnail_url']} className='thumbnail' key={item.name}></img>
      })}
    </ul>
  )
}

export default ThumbnailRow;