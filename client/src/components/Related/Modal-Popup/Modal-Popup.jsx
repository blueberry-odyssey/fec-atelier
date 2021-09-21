import React, { useState, useEffect } from 'react';
import './Modal-Popup.css'
import axios from 'axios';
import _, { reduce } from 'underscore';

export default function ModalPopup({ product, overviewCharacteristics, show }) {
  if (show) {
    console.log('inmodal', product)
    const [characteristicList, setCharacteristicList] = useState({});
    // const [thumbnailCharList, setThumbnailCharList] = useState([]);
    // const [overviewCharList, setOverviewCharList] = useState([]);
    const thumbnailID = product.id.toString();
    const getThumbnailChars = () => {
      axios.get('/reviews/meta/getMeta', { params: { product_id: thumbnailID } })
        .then(results => {
          console.log('received chars in Modal', results.data);
          setThumbnailChars(results.data.characteristics)
          for (let char in results.data.characteristics) {
            // thumbnailCharList.push(char);
            characteristicList[char] = char;
          }
        })
        .catch(err => { throw err })
    }
    useEffect(() => {
      getThumbnailChars();
    }, [])
    const [thumbnailChars, setThumbnailChars] = useState({});

    for (let char in overviewCharacteristics) {
      characteristicList[char] = char;
      // overviewCharList.push(char);
    }
    console.log('characteristicList', characteristicList, thumbnailChars, overviewCharacteristics)

    const reduceCompare = _.reduce(characteristicList, (memo, val, idx) => {
      console.log('memo', memo)
      if (thumbnailChars[val] && overviewCharacteristics[val]) {
        return memo.concat(
          <div key={idx}>
            <p>v</p><p>{val}</p><p>v</p>
          </div>
        )
      } else if (thumbnailChars[val]) {
        return memo.concat(
          <div key={idx}>
            <p>v</p><p>{val}</p><p></p>
          </div>
        )
      } else {
        return memo.concat(
          <div key={idx}>
            <p></p><p>{val}</p><p>v</p>
          </div>
        )
      }
    }, [])

    console.log(reduceCompare)

    return (
      <div className='modal-window'>Comparing
        <section>
          <h3>{product.name}</h3>
          <h3>product2</h3>
        </section>
        <div>
          {reduceCompare}
        </div>
      </div>
    )
  } else {
    return null;
  }
};