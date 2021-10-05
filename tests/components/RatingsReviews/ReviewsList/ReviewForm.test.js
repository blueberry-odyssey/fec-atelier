import React from 'react';
import ReviewForm from '../../../../client/src/components/RatingsReviews/ReviewsList/ReviewForm.jsx';
import fixtures from '../fixtures.js';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('component has state', () => {
  let wrapper = shallow(<ReviewForm id={ fixtures.id }/>);

  test('component has state', () => {
    expect(wrapper.state('id')).toBe(47421);
    expect(wrapper.state('ratings')).toBe(3.5);
    expect(wrapper.state('recommend')).toBe(67);
  });

})

describe('component did update', () => {
  let wrapper = shallow(<ReviewForm id={ fixtures.id }/>);

  test('component did update', () => {
    expect(wrapper.state('productData')).toBe(null);
    wrapper.update();
    expect(wrapper.state('productData')).toBe({name: 'Camo Onesie'});
  });

})

// , { disableLifecycleMethods: true }