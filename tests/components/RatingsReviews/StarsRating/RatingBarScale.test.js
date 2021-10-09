import React from 'react';
import RatingBarScale from '../../../../client/src/components/RatingsReviews/StarsRating/RatingBarScale.jsx';
import fixtures from '../fixtures.js';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


describe('component has class name', () => {
  let wrapper = shallow(<RatingBarScale total={fixtures.ratings}/>);

  test('component has class name', () => {
    expect(wrapper.find('.rating-bar-gray').exists()).toBe(true);
    expect(wrapper.find('.rating-bar-green').exists()).toBe(true);
  });

})