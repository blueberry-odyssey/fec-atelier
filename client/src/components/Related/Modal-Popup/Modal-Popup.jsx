import React, { useState, useEffect } from 'react';
import './Modal-Popup.css'
import axios from 'axios';
import _, { reduce } from 'underscore';

export default function ModalPopup({ product, overviewCharacteristics, productData }) {
  // console.log('modals', JSON.stringify([product, overviewCharacteristics, productData]))
  const thumbnailID = product.id.toString();
  const [characteristicList, setCharacteristicList] = useState({});
  const [thumbnailChars, setThumbnailChars] = useState({});
  const getThumbnailChars = () => {
    axios.get('/reviews/meta/getMeta', { params: { product_id: thumbnailID } })
      .then(results => {
        console.log('received chars in Modal', results.data);
        setThumbnailChars(results.data.characteristics)
        for (let char in results.data.characteristics) {
          characteristicList[char] = char;
        }
      })
      .catch(err => { console.log(err) })
  }
  useEffect(() => {
    getThumbnailChars();
  }, [])

  for (let char in overviewCharacteristics) {
    characteristicList[char] = char;
  }
  // console.log('thumbsList', thumbnailChars,'overviewList', overviewCharacteristics)

  const reduceCompare = _.reduce(characteristicList, (memo, val, idx) => {
    if (thumbnailChars[val] && overviewCharacteristics[val]) {
      var overviewProd = overviewCharacteristics[val].value || 0;
      var thumbProd = thumbnailChars[val].value || 0;
      console.log('thumbs', thumbnailChars)
      overviewProd = overviewProd.toString().substring(0,4);
      thumbProd = thumbProd.toString().substring(0,4);
      return memo.concat(
        <div key={idx}>
          <p>{thumbProd}</p><p>{val}</p><p>{overviewProd}</p>
        </div>
      )
    } else if (thumbnailChars[val]) {
      return memo.concat(
        <div key={idx}>
          <p>{thumbProd}</p><p>{val}</p><p>X</p>
        </div>
      )
    } else {
      return memo.concat(
        <div key={idx}>
          <p>X</p><p>{val}</p><p>{overviewProd}</p>
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