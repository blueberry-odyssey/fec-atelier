import React from 'react';
import RatingsReviews from '../../../client/src/components/RatingsReviews/RatingsReviews.jsx';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('Ratings and Reviews widget rendering', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RatingsReviews />);
  });

  test('widget should have a Ratings & Reviews heading', () => {
    expect(wrapper.find('h2').text()).toContain('RATINGS & REVIEWS');
  });

  test('component has class reviews-header', () => {
    expect(wrapper.find('h2').hasClass('reviews-header')).to.equal(true);
  });

});

describe('Props are passed down', () => {

  let wrapper = mount(<RatingsReviews id={47421} ratings={3.5} recommend={true} />);

  test('props are passed down', () => {
    expect(wrapper.props().id).toEqual(47421);
    expect(wrapper.props().ratings).toEqual(3.5);
    expect(wrapper.props().recommend).toEqual(true);
  })

});

// , { disableLifecycleMethods: true }