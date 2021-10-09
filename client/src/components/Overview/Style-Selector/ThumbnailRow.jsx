import React from 'react';

const ThumbnailRow = function (props) {
  return (
    <ul className='row'>
      {props.row.map(function (item) {
        return <img
          src={item.photos[0]['thumbnail_url']}
          className={props.selectedStyle.name === item.name ? 'thumbnail-selected' : 'thumbnail'}
          key={item.name}
          onClick={() => {
            props.setSelectedStyle(item);
            props.setSelectedPhotos(item.photos);
          }}
        ></img>
      })}
    </ul>
  )
}

export default ThumbnailRow;