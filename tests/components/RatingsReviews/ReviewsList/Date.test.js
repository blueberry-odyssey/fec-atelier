import React from 'react';
import Date from '../../../../client/src/components/RatingsReviews/ReviewsList/Date.jsx';
import fixtures from '../fixtures.js';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


describe('component has class name', () => {
  let wrapper = shallow(<Date />);

  test('component has class name', () => {
    expect(wrapper.find('p').hasClass('review-date')).toBe(true);

  });

})