import React from 'react';
import ReviewsList from '../../../../client/src/components/RatingsReviews/ReviewsList/ReviewsList.jsx';
import ReviewBlock from '../../../../client/src/components/RatingsReviews/ReviewsList/ReviewBlock.jsx';
import fixtures from '../fixtures.js';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('component has state', () => {
  let wrapper = shallow(<ReviewsList id={ fixtures.id }/>, { disableLifecycleMethods: true });

  test('component has state', () => {
    expect(wrapper.state('id')).toBe(47421);
  });
})