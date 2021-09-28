import React, { useState, useEffect } from 'react';
import './Modal-Popup.css'
import axios from 'axios';
import _, { reduce } from 'underscore';

export default function ModalPopup({ product, overviewCharacteristics, productData }) {
  const [characteristicList, setCharacteristicList] = useState({});
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
      .catch(err => { console.log(err) })
  }
  useEffect(() => {
    getThumbnailChars();
  }, [])
  const [thumbnailChars, setThumbnailChars] = useState({});

  for (let char in overviewCharacteristics) {
    characteristicList[char] = char;
    // overviewCharList.push(char);
  }
  // console.log('thumbsList', thumbnailChars,'overviewList', overviewCharacteristics)

  const reduceCompare = _.reduce(characteristicList, (memo, val, idx) => {
    if (thumbnailChars[val] && overviewCharacteristics[val]) {
      let overviewProd = overviewCharacteristics[val].value || 0;
      let thumbProd = thumbnailChars[val].value || 0;
      console.log('thumbs', typeof overviewProd)
      overviewProd = overviewProd.toString().substring(0,4);
      // thumbProd = thumbProd.toString().subString(0,4);
      return memo.concat(
        <div key={idx}>
          <p>{thumbProd}</p><p>{val}</p><p>{overviewProd}</p>
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

  return (
    <div className='modal-background'>
      <div className='modal-window'>Comparing
        <section>
          <h3>{product.name}</h3>
          <h3>{productData.name}</h3>
        </section>
        <div className='compare-list'>
          {reduceCompare}
        </div>
      </div>
    </div>
  )
};