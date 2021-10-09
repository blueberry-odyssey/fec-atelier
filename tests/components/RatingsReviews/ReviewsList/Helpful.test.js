import React from 'react';
import Helpful from '../../../../client/src/components/RatingsReviews/ReviewsList/Helpful.jsx';
import fixtures from '../fixtures.js';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


describe('component has class name', () => {
  let wrapper = shallow(<Helpful helpfulness={fixtures.helpfulness}/>);

  test('component has class name', () => {
    expect(wrapper.find('button').hasClass('review-helpful-btn')).toBe(true);
  });

})