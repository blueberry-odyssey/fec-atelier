import React from 'react';

const ReviewBlock = (props) => {
  return (
    <div>Review block contains:
      <table>
        <tbody>
          <tr>
            <td>Stars</td>
            <td>Username, Date</td>
          </tr>
          <tr>
            <td>Summary Title</td>
          </tr>
          <tr>
            <td>Summary Review</td>
          </tr>
          <tr>
            <td>Helpful</td>
            <td>Report</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ReviewBlock;