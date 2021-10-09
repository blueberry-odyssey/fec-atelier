import React from 'react';
import RatingsBreakdown from '../../../../client/src/components/RatingsReviews/StarsRating/RatingsBreakdown.jsx';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


describe('component has class name', () => {
  let wrapper = shallow(<RatingsBreakdown />);

  test('component has class name', () => {
    expect(wrapper.find('div').hasClass('stars-column')).toBe(true);
  });

})