import React from 'react';
import ReviewsList from '../../../../client/src/components/RatingsReviews/ReviewsList/ReviewsList.jsx';
import ReviewBlock from '../../../../client/src/components/RatingsReviews/ReviewsList/ReviewBlock.jsx';
import ReviewForm from '../../../../client/src/components/RatingsReviews/ReviewsList/ReviewForm.jsx';
import fixtures from '../fixtures.js';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('component rendering', () => {
  let wrapper = shallow(<ReviewsList/>);

  test('component has ReviewBlock and ReviewForm', () => {
    test('should render Characteristics component', () => {
      expect(wrapper.containsAllMatchingElements([<ReviewBlock/>, <ReviewForm/>])).toBe(true);
    });
  })

})

describe('component has class name', () => {
  let wrapper = shallow(<ReviewsList />);

  test('component has class name', () => {
    expect (wrapper.find('div').hasClass('reviews-column')).toBe(true);
  })
})


describe('component has state', () => {
  let wrapper = shallow(<ReviewsList id={ fixtures.id }/>);

  test('component has state', () => {
    expect(wrapper.state('id')).toBe(47421);

  });
})

// , { disableLifecycleMethods: true }