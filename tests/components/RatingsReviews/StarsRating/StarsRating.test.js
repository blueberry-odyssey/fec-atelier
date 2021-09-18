import React from 'react';
import StarsRating from '../../../../client/src/components/RatingsReviews/StarsRating/StarsRating.jsx';
import fixtures from '../fixtures.js';

import Enzyme from 'enzyme';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('component has state', () => {
  let wrapper = shallow(<StarsRating id={ fixtures.id }ratings={ fixtures.ratings } recommended={ fixtures.recommended }/>);

  test('component has state', () => {
    expect(wrapper.state('id')).toBe(47421);
    expect(wrapper.state('ratings')).toBe(3.5);
    expect(wrapper.state('recommended')).toBe(67);
  });
})