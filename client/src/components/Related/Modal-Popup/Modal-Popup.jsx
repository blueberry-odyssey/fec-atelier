import React, { useState } from 'react';
import './Modal-Popup.css'
import axios from 'axios';

export default function ModalPopup({ thumbnailID, overviewCharacteristics, show }) {
  if (show) {
    console.log('inmodal', overviewCharacteristics)
    thumbnailID = thumbnailID.toString();
    const getThumbnailChars = () => {
      axios.get('/reviews/meta/getMeta', { params: { product_id: thumbnailID } })
      .then(results => {
        console.log('received chars in Modal', results.data);
        setThumbnailChars(results.data)
        for (let char in thumbnailChars.characteristics) {
          if (characteristicList.indexOf(char) < 0) {
            characteristicList.push(char);
          }
        }
      })
      .catch(err => { throw err })
    }
    const [thumbnailChars, setThumbnailChars] = useState(() => {
      getThumbnailChars();
    });
    const characteristicList = [];
    const overviewCharList = [];
    for (let char in overviewCharacteristics.characteristics) {
      characteristicList.push(char);
    }

    //maybe make a new set

    const thumbnailCharList = characteristicList.map(item => {
      if (thumbnailChars[item]) {
        characteristicList.push(thumbnailChars[item])
      }
      return thumbnailChars[item].value;
    })

    return (
      <div className='modal-window'>Comparison
        <h3>Product1</h3>
        <h3>Product2</h3>
        <div>
          {thumbnailCharList.map(val => {
            return <p>{val}</p>
          })}
        </div>
        <div>
          {overviewCharList.map(char => {
            return <p>{char}</p>
          })}
        </div>
      </div>
    )
  } else {
    return null;
  }
};