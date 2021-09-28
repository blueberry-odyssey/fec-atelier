import React from 'react';
import RatingsReviews from '../../../client/src/components/RatingsReviews/RatingsReviews.jsx';
import StarsRating from '../../../client/src/components/RatingsReviews/StarsRating/StarsRating.jsx';
import ReviewsList from '../../../client/src/components/RatingsReviews/ReviewsList/ReviewsList.jsx';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('Ratings and Reviews widget rendering', () => {

  let wrapper = shallow(<RatingsReviews />);

  test('widget should have a Ratings & Reviews heading', () => {
    expect(wrapper.find('h2').text()).toContain('RATINGS & REVIEWS');
  });

  test('component has class reviews-header', () => {
    expect(wrapper.find('h2').hasClass('reviews-header')).toBe(true);
  });

  test('should render StarsRating and ReviewsList', () => {
    expect(wrapper.containsAllMatchingElements([<StarsRating/>, <ReviewsList/>])).toBe(true);
  })

});


// , { disableLifecycleMethods: true }