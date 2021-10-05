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
    expect(wrapper.find('h2').hasClass('stars-rating')).toBe(true);
  });

  test('should render Characteristics component', () => {
    expect(wrapper.containsAllMatchingElements([<Characteristics/>])).toBe(true);
  });

});

describe('component has state', () => {
  let wrapper = shallow(<StarsRating id={ fixtures.id }ratings={ fixtures.ratings } recommended={ fixtures.recommended }/>);

  test('component has state', () => {
    expect(wrapper.state('id')).toBe(47421);
    expect(wrapper.state('ratings')).toBe(3.5);
    expect(wrapper.state('recommended')).toBe(67);
  });
})

