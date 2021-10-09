import React from 'react';
import DetailBarScale from '../../../../client/src/components/RatingsReviews/StarsRating/DetailBarScale.jsx';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


describe('component has class name', () => {
  let wrapper = shallow(<DetailBarScale />);

  test('component has class name', () => {
    expect(wrapper.find('div').hasClass('detail-bar-gray')).toBe(true);
  });

})