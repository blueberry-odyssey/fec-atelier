import React from 'react';
import Body from '../../../../client/src/components/RatingsReviews/ReviewsList/Body.jsx';
import fixtures from '../fixtures.js';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


describe('component has class name', () => {
  let wrapper = shallow(<Body body={fixtures.body}/>);

  test('component has class name', () => {
    expect(wrapper.find('.review-body').exists()).toBe(true);
  });

})


