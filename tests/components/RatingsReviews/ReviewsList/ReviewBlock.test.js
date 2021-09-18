import React from 'react';
import ReviewBlock from '../../../../client/src/components/RatingsReviews/ReviewsList/ReviewBlock.jsx';
import fixtures from '../fixtures.js';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('', () => {
  let wrapper = shallow(<ReviewBlock />);

  console.log(wrapper);

  test('props are passed down to review block', () => {
    //expect(wrapper.find('review-helpful').text()).toContain('This product was ok!');
    //expect(wrapper.find('review-report')).toContain('mymainstreammother');
    //expect(wrapper.props.markHelpful).toBe(true);
    // expect(wrapper.find('review-rating').text()).toBe(4);
    // expect(wrapper.find('review').text()).toBe(781037);
  });

  // test('it should have report method passed down as prop', () => {
  //   expect(wrapper.prop('markHelpful')).toBe();
  // });

  // test('it should have helpful method passed down as prop', () => {
  //   expect(wrapper).toBe();
  // });

  // test('it should have reportReview method', () => {
  //   expect(child).instance().reportReview;
  // });
})