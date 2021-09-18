import React from 'react';
import RatingsReviews from '../../../client/src/components/RatingsReviews/RatingsReviews.jsx';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('Ratings and Reviews widget rendering', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RatingsReviews />, { disableLifecycleMethods: true });
  });

  test('widget should have a Ratings & Reviews heading', () => {
    expect(wrapper.find('h2').text()).toContain('RATINGS & REVIEWS');
  });

});