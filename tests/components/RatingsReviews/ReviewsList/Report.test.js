import React from 'react';
import Report from '../../../../client/src/components/RatingsReviews/ReviewsList/Report.jsx';
import fixtures from '../fixtures.js';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


describe('component has class name', () => {
  let wrapper = shallow(<Report />);

  test('component has class name', () => {
    expect(wrapper.find('button').hasClass('review-report-btn')).toBe(true);
  });

})