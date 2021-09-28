import React from 'react';
import Characteristics from '../../../../client/src/components/RatingsReviews/StarsRating/Characteristics.jsx';
import fixtures from '../fixtures.js';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('component has ', () => {
  let wrapper = shallow(<Characteristics id={ fixtures.id }/>, { disableLifecycleMethods: true });

  test('component has state', () => {
    // expect(wrapper.state('id')).toBe(47421);
  });
})