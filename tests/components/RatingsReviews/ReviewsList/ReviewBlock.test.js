import React from 'react';
import ReviewBlock from '../../../../client/src/components/RatingsReviews/ReviewsList/ReviewBlock.jsx';
import fixtures from '../fixtures.js';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


describe('component has class name', () => {
  let wrapper = shallow(<ReviewBlock />);

  let testProps = wrapper.props();

  console.log('REVIEW BLOCK TEST PROPS', testProps);

  test('component has class name', () => {
    expect(wrapper.find('div').hasClass('review-list')).toBe(true);
  });

})


describe('props are passed down', () => {
  let wrapper = shallow(<ReviewBlock reviews={fixtures.reviews}/>);

  let reviews = fixtures.reviews;

  test('props are pass down to component', () =>{
    expect(wrapper.prop('reviews')).toEqual(reviews);
  })
})
