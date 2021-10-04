import React from 'react';

const SortDropdown = (props) => {
  return (
    <select className='sort-dropdown' onChange={(e)=>props.sortReviews(e)}>
      <option value='relevant'>Relevance</option>
      <option value='helpful'>Helpfulness</option>
      <option value='newest'>Newest</option>
    </select>
  )
}

export default SortDropdown;