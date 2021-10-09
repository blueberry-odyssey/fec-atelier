import React from 'react';
import SortDropdown from '../../../../client/src/components/RatingsReviews/ReviewsList/SortDropdown.jsx';

import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


describe('component has class name', () => {
  let wrapper = shallow(<SortDropdown />);

  test('component has class name', () => {
    expect(wrapper.find('select').hasClass('sort-dropdown')).toBe(true);
  });

})