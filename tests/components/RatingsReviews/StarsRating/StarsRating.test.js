import React from 'react';
import StarsRating from '../../../../client/src/components/RatingsReviews/StarsRating/StarsRating.jsx';
import Characteristics from '../../../../client/src/components/RatingsReviews/StarsRating/Characteristics.jsx';
import fixtures from '../fixtures.js';

import Enzyme from 'enzyme';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('StarsRating component rendering', () => {

  let wrapper = shallow(<StarsRating />);

  test('component has class reviews-header', () => {
    expect(wrapper.find('.stars-svg').exists()).toBe(true);
    expect(wrapper.find('.star-svg').exists()).toBe(true);
  });

});


