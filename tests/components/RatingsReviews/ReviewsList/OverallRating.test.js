import React from 'react';
import OverallRating from '../../../../client/src/components/RatingsReviews/ReviewsList/OverallRating.jsx';
import fixtures from '../fixtures.js';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


describe('component has class name', () => {
  let wrapper = shallow(<OverallRating />);

  test('component has class name', () => {
    expect(wrapper.find('.form-rating-header').exists()).toBe(true);
    expect(wrapper.find('.form-mandatory').exists()).toBe(true);
    expect(wrapper.find('.form-rating').exists()).toBe(true);
  });

})